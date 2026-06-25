"use strict";

const admin = require("firebase-admin");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");

admin.initializeApp();

const MODEL_API_KEY = defineSecret("MODEL_API_KEY");
const MODEL_ENDPOINT = defineString("MODEL_ENDPOINT", {
  default: "https://api.deepseek.com/v1/chat/completions"
});
const MODEL_NAME = defineString("MODEL_NAME", {
  default: "deepseek-chat"
});

const ALLOWED_ORIGINS = new Set([
  "https://topplayer888.github.io",
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://127.0.0.1:5500"
]);

function setCors(req, res) {
  const origin = req.get("origin") || "";
  res.set("Access-Control-Allow-Origin", ALLOWED_ORIGINS.has(origin) ? origin : "https://topplayer888.github.io");
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
}

function cleanPayload(body) {
  const input = body && typeof body === "object" ? body : {};
  return {
    model: MODEL_NAME.value(),
    messages: Array.isArray(input.messages) ? input.messages : [],
    temperature: Number.isFinite(Number(input.temperature)) ? Number(input.temperature) : 0.7,
    max_tokens: Number.isFinite(Number(input.max_tokens)) ? Math.min(Number(input.max_tokens), 16000) : 4000,
    response_format: input.response_format || undefined
  };
}

async function verifyUser(req) {
  const auth = req.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  if (!match) throw new Error("未登录或登录状态已失效");
  return admin.auth().verifyIdToken(match[1]);
}

function hasActiveRedeem(user) {
  if (!user || user.deleted) return false;
  if (!user.redeemCode) return false;
  return Number(user.redeemExpiresAt || 0) > Date.now();
}

exports.chatProxy = onRequest({
  region: "us-central1",
  secrets: [MODEL_API_KEY],
  timeoutSeconds: 180,
  memory: "512MiB"
}, async (req, res) => {
  setCors(req, res);
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: { message: "只支持 POST 请求" } });
    return;
  }

  try {
    const decoded = await verifyUser(req);
    const userDoc = await admin.firestore().collection("users").doc(decoded.uid).get();
    const user = userDoc.exists ? userDoc.data() : {};
    const phone = decoded.email ? decoded.email.split("@")[0] : "";
    const isAdmin = phone === "13576198135";
    if (!isAdmin && !hasActiveRedeem(user)) {
      res.status(403).json({ error: { message: "兑换码未生效或已过期，请在账号设置中输入新的兑换码。" } });
      return;
    }

    const payload = cleanPayload(req.body);
    if (!payload.messages.length) {
      res.status(400).json({ error: { message: "请求内容为空" } });
      return;
    }

    const upstream = await fetch(MODEL_ENDPOINT.value(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MODEL_API_KEY.value()}`
      },
      body: JSON.stringify(payload)
    });
    const text = await upstream.text();
    res.status(upstream.status).type(upstream.headers.get("content-type") || "application/json").send(text);
  } catch (err) {
    res.status(500).json({ error: { message: err && err.message ? err.message : "后端代理请求失败" } });
  }
});
