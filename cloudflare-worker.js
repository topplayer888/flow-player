// Cloudflare Worker + D1 backend for Flow Player.
// MODEL_API_KEY is stored as a Cloudflare secret, never in frontend code.

const ADMIN_PHONE = "13576198135";
const DEFAULT_MODEL_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";
const DEFAULT_MODEL_NAME = "deepseek-chat";
const SESSION_MS = 30 * 24 * 60 * 60 * 1000;
const REDEEM_NORMAL_MS = 24 * 60 * 60 * 1000;
const REDEEM_PRIMARY_MS = 30 * 24 * 60 * 60 * 1000;
const ALLOWED_ORIGINS = new Set([
  "https://topplayer888.github.io",
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://127.0.0.1:5500"
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : "https://topplayer888.github.io",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin"
  };
}

function jsonResponse(request, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json; charset=utf-8" }
  });
}

function errorResponse(request, status, message) {
  return jsonResponse(request, status, { error: { message } });
}

function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function normalizeRedeemCode(code) {
  return String(code || "").trim().toLowerCase().replace(/\s+/g, "");
}

function toBase64Url(bytes) {
  let binary = "";
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomToken(bytes = 32) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return toBase64Url(arr);
}

function randomDigits() {
  return String(Math.floor(Math.random() * 10000)).padStart(4, "0");
}

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(String(password)), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt: enc.encode(salt),
    iterations: 100000,
    hash: "SHA-256"
  }, key, 256);
  return toBase64Url(new Uint8Array(bits));
}

function publicUser(row) {
  if (!row) return null;
  return {
    uid: row.uid,
    phone: row.phone,
    email: row.phone + "@phone.flowplayer.app",
    isAdmin: row.phone === ADMIN_PHONE,
    createdAt: Number(row.created_at || 0),
    lastLoginAt: Number(row.last_login_at || 0),
    loginCount: Number(row.login_count || 0),
    lastDeviceId: row.last_device_id || "",
    devices: safeJson(row.devices_json, {}),
    usageCounts: safeJson(row.usage_json, {}),
    redeemCode: row.redeem_code || "",
    redeemType: row.redeem_type || "",
    redeemActivatedAt: Number(row.redeem_activated_at || 0),
    redeemExpiresAt: Number(row.redeem_expires_at || 0),
    deleted: !!row.deleted
  };
}

function safeJson(text, fallback) {
  try {
    return text ? JSON.parse(text) : fallback;
  } catch (err) {
    return fallback;
  }
}

function isRedeemActive(user) {
  if (!user || user.deleted) return false;
  return !!user.redeemCode && Number(user.redeemExpiresAt || 0) > Date.now();
}

function getBearerToken(request) {
  const auth = request.headers.get("Authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

async function readJson(request) {
  try {
    return await request.json();
  } catch (err) {
    return {};
  }
}

async function getSessionUser(env, request) {
  const token = getBearerToken(request);
  if (!token) return null;
  const now = Date.now();
  const row = await env.flow_player_db.prepare(
    "SELECT u.* FROM sessions s JOIN users u ON u.uid = s.uid WHERE s.token = ? AND s.expires_at > ?"
  ).bind(token, now).first();
  if (!row || row.deleted) return null;
  return publicUser(row);
}

async function requireUser(env, request) {
  const user = await getSessionUser(env, request);
  if (!user) throw new Error("__UNAUTHORIZED__");
  return user;
}

async function requireAdmin(env, request) {
  const user = await requireUser(env, request);
  if (!user.isAdmin) throw new Error("__FORBIDDEN__");
  return user;
}

async function createSession(env, uid) {
  const token = randomToken(36);
  const now = Date.now();
  await env.flow_player_db.prepare(
    "INSERT INTO sessions (token, uid, created_at, expires_at) VALUES (?, ?, ?, ?)"
  ).bind(token, uid, now, now + SESSION_MS).run();
  return token;
}

async function updateLoginInfo(env, user, input) {
  const deviceId = String(input.deviceId || "").replace(/[^a-zA-Z0-9_]/g, "_") || ("d_" + randomToken(8));
  const now = Date.now();
  const devices = user ? user.devices || {} : {};
  devices[deviceId] = Object.assign({}, devices[deviceId] || {}, {
    firstSeenAt: devices[deviceId] && devices[deviceId].firstSeenAt ? devices[deviceId].firstSeenAt : now,
    lastSeenAt: now,
    userAgent: String(input.userAgent || "").slice(0, 300)
  });
  await env.flow_player_db.prepare(
    "UPDATE users SET last_login_at = ?, login_count = COALESCE(login_count,0) + 1, last_device_id = ?, devices_json = ? WHERE uid = ?"
  ).bind(now, deviceId, JSON.stringify(devices), user.uid).run();
}

function redeemStateFromUser(user) {
  return {
    code: user.redeemCode || "",
    type: user.redeemType || "",
    activatedAt: user.redeemActivatedAt || 0,
    expiresAt: user.redeemExpiresAt || 0
  };
}

function cleanPayload(body, env) {
  const input = body && typeof body === "object" ? body : {};
  const payload = {
    model: env.MODEL_NAME || DEFAULT_MODEL_NAME,
    messages: Array.isArray(input.messages) ? input.messages : [],
    temperature: Number.isFinite(Number(input.temperature)) ? Number(input.temperature) : 0.7,
    max_tokens: Number.isFinite(Number(input.max_tokens)) ? Math.min(Number(input.max_tokens), 16000) : 4000
  };
  if (input.response_format) payload.response_format = input.response_format;
  return payload;
}

async function handleRegister(request, env) {
  const input = await readJson(request);
  const phone = normalizePhone(input.phone);
  const password = String(input.password || "");
  if (phone.length < 11) return errorResponse(request, 400, "请输入正确的手机号码。");
  if (password.length < 6) return errorResponse(request, 400, "密码至少需要 6 位。");
  const exists = await env.flow_player_db.prepare("SELECT uid FROM users WHERE phone = ?").bind(phone).first();
  if (exists) return errorResponse(request, 409, "这个手机号已经注册，请直接登录。");
  const uid = crypto.randomUUID();
  const salt = randomToken(16);
  const passwordHash = await hashPassword(password, salt);
  const now = Date.now();
  await env.flow_player_db.prepare(
    "INSERT INTO users (uid, phone, password_hash, salt, created_at, last_login_at, login_count, devices_json, usage_json, deleted) VALUES (?, ?, ?, ?, ?, ?, 0, '{}', '{}', 0)"
  ).bind(uid, phone, passwordHash, salt, now, now).run();
  const row = await env.flow_player_db.prepare("SELECT * FROM users WHERE uid = ?").bind(uid).first();
  const user = publicUser(row);
  await updateLoginInfo(env, user, input);
  const refreshed = publicUser(await env.flow_player_db.prepare("SELECT * FROM users WHERE uid = ?").bind(uid).first());
  const token = await createSession(env, uid);
  return jsonResponse(request, 200, { token, user: refreshed, redeem: redeemStateFromUser(refreshed) });
}

async function handleLogin(request, env) {
  const input = await readJson(request);
  const phone = normalizePhone(input.phone);
  const password = String(input.password || "");
  const row = await env.flow_player_db.prepare("SELECT * FROM users WHERE phone = ?").bind(phone).first();
  if (!row || row.deleted) return errorResponse(request, 401, "手机号或密码不正确。");
  const passwordHash = await hashPassword(password, row.salt);
  if (passwordHash !== row.password_hash) return errorResponse(request, 401, "手机号或密码不正确。");
  const user = publicUser(row);
  await updateLoginInfo(env, user, input);
  const refreshed = publicUser(await env.flow_player_db.prepare("SELECT * FROM users WHERE uid = ?").bind(user.uid).first());
  const token = await createSession(env, user.uid);
  return jsonResponse(request, 200, { token, user: refreshed, redeem: redeemStateFromUser(refreshed) });
}

async function handleMe(request, env) {
  const user = await requireUser(env, request);
  return jsonResponse(request, 200, { user, redeem: redeemStateFromUser(user) });
}

async function handleLogout(request, env) {
  const token = getBearerToken(request);
  if (token) await env.flow_player_db.prepare("DELETE FROM sessions WHERE token = ?").bind(token).run();
  return jsonResponse(request, 200, { ok: true });
}

async function handleRedeem(request, env) {
  const user = await requireUser(env, request);
  const input = await readJson(request);
  const code = normalizeRedeemCode(input.code);
  if (!/^(player|topplayer)\d{4}$/.test(code)) return errorResponse(request, 400, "兑换码格式不正确，请检查后重新输入。");
  const item = await env.flow_player_db.prepare("SELECT * FROM redeem_codes WHERE code = ?").bind(code).first();
  if (!item) return errorResponse(request, 404, "兑换码不存在，请检查后重新输入。");
  if (item.bound_phone && item.bound_phone !== user.phone) return errorResponse(request, 409, "兑换码已绑定其他手机号。");
  if (item.active === 0 && item.bound_phone !== user.phone) return errorResponse(request, 409, "兑换码已失效。");
  const now = Date.now();
  const type = item.type || (code.indexOf("topplayer") === 0 ? "primary" : "normal");
  const expiresAt = now + (type === "primary" ? REDEEM_PRIMARY_MS : REDEEM_NORMAL_MS);
  await env.flow_player_db.batch([
    env.flow_player_db.prepare("UPDATE redeem_codes SET active = 1, bound_uid = ?, bound_phone = ?, used_at = COALESCE(used_at, ?), last_redeemed_at = ? WHERE code = ?").bind(user.uid, user.phone, now, now, code),
    env.flow_player_db.prepare("UPDATE users SET redeem_code = ?, redeem_type = ?, redeem_activated_at = ?, redeem_expires_at = ? WHERE uid = ?").bind(code, type, now, expiresAt, user.uid)
  ]);
  return jsonResponse(request, 200, { code, type, activatedAt: now, expiresAt });
}

async function handleGenerateRedeem(request, env) {
  const admin = await requireAdmin(env, request);
  const input = await readJson(request);
  const type = input.type === "primary" ? "primary" : "normal";
  const prefix = type === "primary" ? "topplayer" : "player";
  let code = "";
  for (let i = 0; i < 50; i++) {
    code = prefix + randomDigits();
    const exists = await env.flow_player_db.prepare("SELECT code FROM redeem_codes WHERE code = ?").bind(code).first();
    if (!exists) break;
    code = "";
  }
  if (!code) return errorResponse(request, 500, "兑换码生成失败，请重试。");
  await env.flow_player_db.prepare(
    "INSERT INTO redeem_codes (code, type, created_at, created_by, active) VALUES (?, ?, ?, ?, 1)"
  ).bind(code, type, Date.now(), admin.phone).run();
  return jsonResponse(request, 200, { code, type });
}

async function handleListRedeem(request, env) {
  await requireAdmin(env, request);
  const rows = await env.flow_player_db.prepare("SELECT * FROM redeem_codes ORDER BY created_at DESC LIMIT 500").all();
  return jsonResponse(request, 200, { redeemCodes: rows.results || [] });
}

async function handleAdminUsers(request, env) {
  await requireAdmin(env, request);
  const rows = await env.flow_player_db.prepare("SELECT * FROM users ORDER BY created_at DESC LIMIT 500").all();
  return jsonResponse(request, 200, { users: (rows.results || []).map(publicUser) });
}

async function handleDeleteUser(request, env) {
  const admin = await requireAdmin(env, request);
  const input = await readJson(request);
  const uid = String(input.uid || "");
  if (!uid || uid === admin.uid) return errorResponse(request, 400, "不能删除当前管理员账号。");
  await env.flow_player_db.prepare("UPDATE users SET deleted = 1 WHERE uid = ?").bind(uid).run();
  await env.flow_player_db.prepare("DELETE FROM sessions WHERE uid = ?").bind(uid).run();
  return jsonResponse(request, 200, { ok: true });
}

async function handleUsage(request, env) {
  const user = await requireUser(env, request);
  const input = await readJson(request);
  const key = String(input.key || "unknown").replace(/[.$#[\]/]/g, "_").slice(0, 80);
  const usage = user.usageCounts || {};
  usage[key] = Number(usage[key] || 0) + 1;
  await env.flow_player_db.prepare("UPDATE users SET usage_json = ? WHERE uid = ?").bind(JSON.stringify(usage), user.uid).run();
  return jsonResponse(request, 200, { ok: true });
}

async function handleHistoryGet(request, env) {
  const user = await requireUser(env, request);
  const rows = await env.flow_player_db.prepare("SELECT payload_json FROM chat_history_records WHERE uid = ? ORDER BY updated_at DESC LIMIT 80").bind(user.uid).all();
  return jsonResponse(request, 200, { records: (rows.results || []).map((r) => safeJson(r.payload_json, null)).filter(Boolean) });
}

async function handleHistorySync(request, env) {
  const user = await requireUser(env, request);
  const input = await readJson(request);
  const records = Array.isArray(input.records) ? input.records.slice(0, 80) : [];
  const now = Date.now();
  const stmts = records.filter((item) => item && item.id).map((item) => {
    return env.flow_player_db.prepare(
      "INSERT OR REPLACE INTO chat_history_records (uid, record_id, payload_json, updated_at) VALUES (?, ?, ?, ?)"
    ).bind(user.uid, String(item.id), JSON.stringify(item), now);
  });
  if (stmts.length) await env.flow_player_db.batch(stmts);
  return jsonResponse(request, 200, { ok: true });
}

async function handleHistoryDelete(request, env) {
  const user = await requireUser(env, request);
  const input = await readJson(request);
  const ids = Array.isArray(input.ids) ? input.ids : [];
  const stmts = ids.map((id) => env.flow_player_db.prepare("DELETE FROM chat_history_records WHERE uid = ? AND record_id = ?").bind(user.uid, String(id)));
  if (stmts.length) await env.flow_player_db.batch(stmts);
  return jsonResponse(request, 200, { ok: true });
}

async function handleChat(request, env) {
  if (!env.MODEL_API_KEY) return errorResponse(request, 500, "管理员还没有配置模型 API Key。");
  const user = await requireUser(env, request);
  if (!user.isAdmin && !isRedeemActive(user)) {
    return errorResponse(request, 403, "兑换码未生效或已过期，请在账号设置中输入新的兑换码。");
  }
  const body = await readJson(request);
  const upstreamPayload = cleanPayload(body, env);
  if (!upstreamPayload.messages.length) return errorResponse(request, 400, "请求内容为空。");
  const upstream = await fetch(env.MODEL_ENDPOINT || DEFAULT_MODEL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.MODEL_API_KEY}`
    },
    body: JSON.stringify(upstreamPayload)
  });
  const text = await upstream.text();
  return new Response(text, {
    status: upstream.status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": upstream.headers.get("Content-Type") || "application/json; charset=utf-8"
    }
  });
}

async function route(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  if (path === "/auth/register") return handleRegister(request, env);
  if (path === "/auth/login") return handleLogin(request, env);
  if (path === "/auth/me") return handleMe(request, env);
  if (path === "/auth/logout") return handleLogout(request, env);
  if (path === "/redeem") return handleRedeem(request, env);
  if (path === "/admin/redeem/generate") return handleGenerateRedeem(request, env);
  if (path === "/admin/redeem/list") return handleListRedeem(request, env);
  if (path === "/admin/users") return handleAdminUsers(request, env);
  if (path === "/admin/user/delete") return handleDeleteUser(request, env);
  if (path === "/usage") return handleUsage(request, env);
  if (path === "/history") return handleHistoryGet(request, env);
  if (path === "/history/sync") return handleHistorySync(request, env);
  if (path === "/history/delete") return handleHistoryDelete(request, env);
  return handleChat(request, env);
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response("", { status: 204, headers: corsHeaders(request) });
    if (!env.flow_player_db) return errorResponse(request, 500, "数据库尚未绑定，请联系管理员。");
    try {
      return await route(request, env);
    } catch (err) {
      if (err && err.message === "__UNAUTHORIZED__") return errorResponse(request, 401, "请先登录后再使用。");
      if (err && err.message === "__FORBIDDEN__") return errorResponse(request, 403, "没有管理员权限。");
      return errorResponse(request, 500, err && err.message ? err.message : "后端请求失败。");
    }
  }
};
