// Cloudflare Worker proxy for Flow Player.
// Put MODEL_API_KEY in Worker secrets. Do not paste API keys into frontend code.

const PROJECT_ID = "flow-player-a04be";
const ADMIN_PHONE = "13576198135";
const DEFAULT_MODEL_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";
const DEFAULT_MODEL_NAME = "deepseek-chat";
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
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin"
  };
}

function jsonResponse(request, status, message) {
  return new Response(JSON.stringify({ error: { message } }), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json; charset=utf-8" }
  });
}

function base64UrlDecode(value) {
  const normalized = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  return atob(padded);
}

function getTokenPayload(token) {
  try {
    const parts = String(token || "").split(".");
    if (parts.length < 2) return null;
    return JSON.parse(base64UrlDecode(parts[1]));
  } catch (err) {
    return null;
  }
}

function firestoreValueToJs(value) {
  if (!value || typeof value !== "object") return null;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return !!value.booleanValue;
  if ("timestampValue" in value) return Date.parse(value.timestampValue) || 0;
  if ("nullValue" in value) return null;
  if ("mapValue" in value) return firestoreFieldsToJs(value.mapValue.fields || {});
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(firestoreValueToJs);
  return null;
}

function firestoreFieldsToJs(fields) {
  const out = {};
  Object.keys(fields || {}).forEach((key) => {
    out[key] = firestoreValueToJs(fields[key]);
  });
  return out;
}

async function getUserDoc(uid, idToken) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/users/${encodeURIComponent(uid)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${idToken}` }
  });
  if (!res.ok) {
    throw new Error("\u767b\u5f55\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u540e\u518d\u8bd5\u3002");
  }
  const doc = await res.json();
  return firestoreFieldsToJs(doc.fields || {});
}

function hasActiveRedeem(user) {
  if (!user || user.deleted) return false;
  if (!user.redeemCode) return false;
  return Number(user.redeemExpiresAt || 0) > Date.now();
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

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response("", { status: 204, headers: corsHeaders(request) });
    }
    if (request.method !== "POST") {
      return jsonResponse(request, 405, "\u53ea\u652f\u6301 POST \u8bf7\u6c42\u3002");
    }
    if (!env.MODEL_API_KEY) {
      return jsonResponse(request, 500, "\u7ba1\u7406\u5458\u8fd8\u6ca1\u6709\u914d\u7f6e\u6a21\u578b API Key\u3002");
    }

    try {
      const auth = request.headers.get("Authorization") || "";
      const match = auth.match(/^Bearer\s+(.+)$/i);
      if (!match) return jsonResponse(request, 401, "\u8bf7\u5148\u767b\u5f55\u540e\u518d\u4f7f\u7528\u3002");

      const idToken = match[1];
      const payload = getTokenPayload(idToken);
      const uid = payload && (payload.user_id || payload.sub);
      const email = payload && payload.email;
      if (!uid) return jsonResponse(request, 401, "\u767b\u5f55\u72b6\u6001\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u3002");

      const user = await getUserDoc(uid, idToken);
      const phone = email ? String(email).split("@")[0] : "";
      const isAdmin = phone === ADMIN_PHONE;
      if (!isAdmin && !hasActiveRedeem(user)) {
        return jsonResponse(request, 403, "\u5151\u6362\u7801\u672a\u751f\u6548\u6216\u5df2\u8fc7\u671f\uff0c\u8bf7\u5728\u8d26\u53f7\u8bbe\u7f6e\u4e2d\u8f93\u5165\u65b0\u7684\u5151\u6362\u7801\u3002");
      }

      const body = await request.json();
      const upstreamPayload = cleanPayload(body, env);
      if (!upstreamPayload.messages.length) {
        return jsonResponse(request, 400, "\u8bf7\u6c42\u5185\u5bb9\u4e3a\u7a7a\u3002");
      }

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
    } catch (err) {
      return jsonResponse(request, 500, err && err.message ? err.message : "\u540e\u7aef\u4ee3\u7406\u8bf7\u6c42\u5931\u8d25\u3002");
    }
  }
};
