"use strict";

const crypto = require("crypto");
const cloudbase = require("@cloudbase/node-sdk");

const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
const db = app.database();
const USERS = "fp_users";
const INVITES = "fp_invite_codes";
const HISTORIES = "fp_histories";
const USAGE = "fp_usage";
const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60;

function json(statusCode, data) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(data)
  };
}

function error(statusCode, message) {
  return json(statusCode, { error: message });
}

function parseRequest(event) {
  if (event && event.httpMethod === "OPTIONS") return { options: true };
  var source = event && event.body !== undefined ? event.body : event;
  if (typeof source === "string") source = JSON.parse(source || "{}");
  return source && typeof source === "object" ? source : {};
}

function headersOf(event) {
  return (event && (event.headers || event.header)) || {};
}

function bearerToken(event) {
  var headers = headersOf(event);
  var value = headers.authorization || headers.Authorization || "";
  var match = String(value).match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

function base64Url(value) {
  return Buffer.from(value).toString("base64url");
}

function fromBase64Url(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function jwtSecret() {
  var secret = process.env.JWT_SECRET || "";
  if (secret.length < 32) throw new Error("服务端 JWT_SECRET 未配置或长度不足。");
  return secret;
}

function signToken(user) {
  var now = Math.floor(Date.now() / 1000);
  var header = base64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  var payload = base64Url(JSON.stringify({
    sub: user.id,
    phone: user.phone,
    role: user.role,
    iat: now,
    exp: now + TOKEN_TTL_SECONDS
  }));
  var signed = header + "." + payload;
  var signature = crypto.createHmac("sha256", jwtSecret()).update(signed).digest("base64url");
  return signed + "." + signature;
}

function verifyToken(token) {
  var parts = String(token || "").split(".");
  if (parts.length !== 3) throw new Error("登录状态无效。");
  var signed = parts[0] + "." + parts[1];
  var expected = crypto.createHmac("sha256", jwtSecret()).update(signed).digest("base64url");
  var actualBuffer = Buffer.from(parts[2]);
  var expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(actualBuffer, expectedBuffer)) {
    throw new Error("登录状态校验失败。");
  }
  var payload = JSON.parse(fromBase64Url(parts[1]));
  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) throw new Error("登录已过期。");
  return payload;
}

function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function validatePassword(password) {
  if (typeof password !== "string" || password.length < 8 || password.length > 128) {
    throw new Error("密码长度必须为 8 到 128 位。");
  }
}

function derivePassword(password, salt) {
  return new Promise(function (resolve, reject) {
    crypto.scrypt(password, salt, 64, function (err, derivedKey) {
      if (err) reject(err);
      else resolve(derivedKey.toString("base64"));
    });
  });
}

function publicUser(user) {
  return { id: user.id || user._id, phone: user.phone, role: user.role || "user" };
}

async function getUserByPhone(phone) {
  var result = await db.collection(USERS).where({ phone: phone }).limit(1).get();
  return result.data && result.data[0] ? result.data[0] : null;
}

async function getCurrentUser(event) {
  var claims = verifyToken(bearerToken(event));
  var result = await db.collection(USERS).doc(claims.sub).get();
  var user = result.data && result.data[0];
  if (!user || user.status === "disabled") throw new Error("账号不存在或已被停用。");
  return user;
}

function isBootstrapAdmin(phone, inviteCode) {
  return phone === process.env.BOOTSTRAP_ADMIN_PHONE && inviteCode === process.env.BOOTSTRAP_INVITE_CODE && !!inviteCode;
}

async function validateInviteCode(inviteCode) {
  var code = String(inviteCode || "").trim().toUpperCase();
  var result = await db.collection(INVITES).doc(code).get();
  var invite = result.data && result.data[0];
  if (!invite || invite.active === false) throw new Error("邀请码无效或已停用。");
  if (invite.expiresAt && Number(invite.expiresAt) < Date.now()) throw new Error("邀请码已过期。");
  if (Number(invite.maxUses || 0) > 0 && Number(invite.uses || 0) >= Number(invite.maxUses)) {
    throw new Error("邀请码已达到使用上限。");
  }
  return { code: code, invite: invite };
}

async function register(payload) {
  var phone = normalizePhone(payload.phone);
  var password = payload.password;
  var inviteCode = String(payload.inviteCode || "").trim().toUpperCase();
  if (!/^1\d{10}$/.test(phone)) throw new Error("请输入正确的 11 位手机号码。");
  validatePassword(password);
  if (await getUserByPhone(phone)) throw new Error("该手机号已经注册，请直接登录。");

  var role = "user";
  var invite = null;
  if (isBootstrapAdmin(phone, inviteCode)) role = "admin";
  else invite = await validateInviteCode(inviteCode);

  var id = crypto.randomUUID();
  var salt = crypto.randomBytes(16).toString("base64");
  var passwordHash = await derivePassword(password, salt);
  var user = {
    _id: id,
    id: id,
    phone: phone,
    passwordHash: passwordHash,
    passwordSalt: salt,
    role: role,
    status: "active",
    createdAt: Date.now(),
    lastLoginAt: Date.now(),
    inviteCode: invite ? invite.code : "bootstrap"
  };
  await db.collection(USERS).add({ data: user });
  if (invite) {
    await db.collection(INVITES).doc(invite.code).update({
      data: { uses: Number(invite.invite.uses || 0) + 1, updatedAt: Date.now() }
    });
  }
  return { user: publicUser(user), token: signToken(publicUser(user)) };
}

async function login(payload) {
  var phone = normalizePhone(payload.phone);
  var password = payload.password;
  if (!/^1\d{10}$/.test(phone) || typeof password !== "string") throw new Error("手机号或密码不正确。");
  var user = await getUserByPhone(phone);
  if (!user || user.status === "disabled") throw new Error("手机号或密码不正确。");
  var actual = await derivePassword(password, user.passwordSalt);
  var left = Buffer.from(actual);
  var right = Buffer.from(user.passwordHash || "");
  if (left.length !== right.length || !crypto.timingSafeEqual(left, right)) throw new Error("手机号或密码不正确。");
  await db.collection(USERS).doc(user._id).update({ data: { lastLoginAt: Date.now() } });
  return { user: publicUser(user), token: signToken(publicUser(user)) };
}

async function readHistory(user) {
  var result = await db.collection(HISTORIES).doc(user._id).get();
  var history = result.data && result.data[0];
  return { items: history && Array.isArray(history.items) ? history.items : [] };
}

async function saveHistory(user, payload) {
  var items = Array.isArray(payload.items) ? payload.items.slice(0, 20) : [];
  var data = { _id: user._id, userId: user._id, items: items, updatedAt: Date.now() };
  var existing = await db.collection(HISTORIES).doc(user._id).get();
  if (existing.data && existing.data[0]) await db.collection(HISTORIES).doc(user._id).update({ data: data });
  else await db.collection(HISTORIES).add({ data: data });
  return { ok: true };
}

async function assertDailyQuota(user) {
  var max = Number(process.env.MAX_DAILY_REQUESTS || 200);
  var day = new Date().toISOString().slice(0, 10);
  var id = user._id + "_" + day;
  var result = await db.collection(USAGE).doc(id).get();
  var usage = result.data && result.data[0];
  var count = Number(usage && usage.count || 0);
  if (count >= max) throw new Error("今日生成次数已达到上限，请明天再试。");
  var data = { _id: id, userId: user._id, day: day, count: count + 1, updatedAt: Date.now() };
  if (usage) await db.collection(USAGE).doc(id).update({ data: data });
  else await db.collection(USAGE).add({ data: data });
}

function clamp(value, fallback, min, max) {
  var number = Number(value);
  if (!Number.isFinite(number)) number = fallback;
  return Math.max(min, Math.min(max, number));
}

async function chat(user, payload) {
  var messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (!messages.length || messages.length > 60) throw new Error("模型请求消息数量异常。");
  var characters = messages.reduce(function (total, message) { return total + String(message && message.content || "").length; }, 0);
  if (characters > 120000) throw new Error("本次请求内容过长。");
  var endpoint = process.env.MODEL_ENDPOINT || "https://api.deepseek.com/v1/chat/completions";
  var apiKey = process.env.MODEL_API_KEY || "";
  var model = process.env.MODEL_NAME || "deepseek-chat";
  if (!apiKey) throw new Error("管理员尚未配置模型 API Key。");
  await assertDailyQuota(user);
  var upstream = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + apiKey },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: clamp(payload.temperature, 0.7, 0, 1.2),
      max_tokens: Math.floor(clamp(payload.max_tokens, 4000, 128, 16000)),
      response_format: payload.response_format || undefined
    })
  });
  var text = await upstream.text();
  var data;
  try { data = JSON.parse(text); } catch (err) { data = { error: { message: "模型服务返回格式异常。" } }; }
  if (!upstream.ok) return { upstreamError: true, statusCode: upstream.status, data: data };
  return { data: data };
}

function inviteCode() {
  return "PLAYER-" + crypto.randomBytes(5).toString("hex").toUpperCase();
}

async function createInvite(user, payload) {
  if (user.role !== "admin") throw new Error("没有管理员权限。");
  var maxUses = Math.floor(Number(payload.maxUses || 1));
  if (!Number.isInteger(maxUses) || maxUses < 1 || maxUses > 1000) throw new Error("邀请码可使用次数必须在 1 到 1000 之间。");
  var code = inviteCode();
  await db.collection(INVITES).add({ data: {
    _id: code,
    code: code,
    active: true,
    maxUses: maxUses,
    uses: 0,
    createdAt: Date.now(),
    createdBy: user._id
  } });
  return { code: code, maxUses: maxUses };
}

exports.main = async function (event) {
  try {
    var request = parseRequest(event);
    if (request.options) return json(204, {});
    var action = request.action;
    var payload = request.payload || {};
    if (action === "auth.register") return json(200, await register(payload));
    if (action === "auth.login") return json(200, await login(payload));
    var user = await getCurrentUser(event);
    if (action === "auth.me") return json(200, { user: publicUser(user) });
    if (action === "history.get") return json(200, await readHistory(user));
    if (action === "history.save") return json(200, await saveHistory(user, payload));
    if (action === "invite.create") return json(200, await createInvite(user, payload));
    if (action === "chat") {
      var result = await chat(user, payload);
      if (result.upstreamError) return json(result.statusCode, result.data);
      return json(200, result.data);
    }
    return error(404, "未知请求。");
  } catch (err) {
    console.error(err);
    return error(/登录|账号|权限|JWT/.test(String(err.message || "")) ? 401 : 400, err.message || "服务处理失败。");
  }
};
