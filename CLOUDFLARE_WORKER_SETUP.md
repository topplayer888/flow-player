# Cloudflare Worker 代理部署说明

这个 Worker 用来让普通用户在兑换码有效期内消耗管理员配置的模型 API。API Key 只放在 Cloudflare Worker Secret 里，不写入网页代码。

## 1. 创建 Worker

在 Cloudflare 后台创建一个 Worker，把 `cloudflare-worker.js` 的内容粘贴进去并部署。

## 2. 设置 Secret / 变量

必须设置：

- `MODEL_API_KEY`：你的模型 API Key

可选设置：

- `MODEL_ENDPOINT`：默认 `https://api.deepseek.com/v1/chat/completions`
- `MODEL_NAME`：默认 `deepseek-chat`

如果以后要换 API，只需要在 Cloudflare Worker 里改这些变量，不需要重新改网页。

## 3. 填入前端代理地址

部署后 Cloudflare 会给一个 `https://xxx.workers.dev` 地址。

把 `index.html` 里的：

```html
window.FLOW_PLAYER_CHAT_PROXY_URL = "";
```

改成：

```html
window.FLOW_PLAYER_CHAT_PROXY_URL = "https://你的-worker地址.workers.dev";
```

然后提交并推送到 GitHub Pages。

## 4. 验证

1. 普通用户登录。
2. 输入有效兑换码。
3. 打开任意生成文案功能。
4. 能正常生成，且设置里不需要用户填写 API。

如果提示“管理员还没有完成后端代理地址配置”，说明第 3 步还没填 Worker 地址。
