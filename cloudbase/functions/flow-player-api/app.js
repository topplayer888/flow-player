"use strict";

// Adapter for CloudBase HTTP cloud functions.  The business handler remains
// in index.js so the same request logic can also be unit-tested directly.
const http = require("http");
const handler = require("./index").main;

function collectBody(request) {
  return new Promise(function (resolve, reject) {
    const chunks = [];
    request.on("data", function (chunk) { chunks.push(chunk); });
    request.on("end", function () { resolve(Buffer.concat(chunks).toString("utf8")); });
    request.on("error", reject);
  });
}

http.createServer(async function (request, response) {
  try {
    const result = await handler({
      httpMethod: request.method,
      headers: request.headers,
      body: await collectBody(request)
    });
    response.writeHead(result.statusCode || 200, result.headers || {});
    response.end(result.body || "");
  } catch (err) {
    console.error(err);
    response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: "服务器处理失败" }));
  }
}).listen(Number(process.env.PORT || 9000), "0.0.0.0");
