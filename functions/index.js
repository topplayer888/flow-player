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
  if (!match) throw new Error("\u672a\u767b\u5f55\u6216\u767b\u5f55\u72b6\u6001\u5df2\u5931\u6548");
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
    res.status(405).json({ error: { message: "\u53ea\u652f\u6301 POST \u8bf7\u6c42" } });
    return;
  }

  try {
    const decoded = await verifyUser(req);
    const userDoc = await admin.firestore().collection("users").doc(decoded.uid).get();
    const user = userDoc.exists ? userDoc.data() : {};
    const phone = decoded.email ? decoded.email.split("@")[0] : "";
    const isAdmin = phone === "13576198135";
    if (!isAdmin && !hasActiveRedeem(user)) {
      res.status(403).json({ error: { message: "\u5151\u6362\u7801\u672a\u751f\u6548\u6216\u5df2\u8fc7\u671f\uff0c\u8bf7\u5728\u8d26\u53f7\u8bbe\u7f6e\u4e2d\u8f93\u5165\u65b0\u7684\u5151\u6362\u7801\u3002" } });
      return;
    }

    const payload = cleanPayload(req.body);
    if (!payload.messages.length) {
      res.status(400).json({ error: { message: "\u8bf7\u6c42\u5185\u5bb9\u4e3a\u7a7a" } });
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
    res.status(500).json({ error: { message: err && err.message ? err.message : "\u540e\u7aef\u4ee3\u7406\u8bf7\u6c42\u5931\u8d25" } });
  }
});
