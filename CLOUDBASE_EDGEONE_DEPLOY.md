# 国内部署：EdgeOne + CloudBase

本项目已移除 Firebase 依赖，改为使用 `flow-player-api` CloudBase 云函数提供账号、邀请码、云端历史记录和模型代理。

## 1. 创建 CloudBase 环境

1. 登录腾讯云 CloudBase 控制台，创建一个环境。
2. 在数据库中创建以下集合：`fp_users`、`fp_invite_codes`、`fp_histories`、`fp_usage`。
3. 将 `cloudbase/functions/flow-player-api` 作为名为 `flow-player-api` 的云函数部署，安装其 `package.json` 中的依赖。
4. 开启该函数的 HTTP 访问服务，并复制它的 HTTPS 公网地址。

不要给数据库开放匿名读写权限；所有浏览器请求都只能进入云函数。

## 2. 配置云函数环境变量

在 CloudBase 云函数配置中填写：

| 变量 | 说明 |
| --- | --- |
| `JWT_SECRET` | 至少 32 个随机字符，用于签发登录令牌。 |
| `MODEL_API_KEY` | 管理员的 DeepSeek 等模型 API Key。不要写入前端。 |
| `MODEL_ENDPOINT` | OpenAI 兼容接口地址，默认 DeepSeek。 |
| `MODEL_NAME` | 要使用的模型名，例如 `deepseek-chat`。 |
| `BOOTSTRAP_ADMIN_PHONE` | 第一个管理员的 11 位手机号。 |
| `BOOTSTRAP_INVITE_CODE` | 仅用于创建第一个管理员的一次性邀请码。 |
| `MAX_DAILY_REQUESTS` | 单用户每日最大生成次数，建议先设为 `200`。 |

第一个管理员使用“手机号 + BOOTSTRAP_INVITE_CODE + 密码”注册。之后可在网站的“账号设置”中生成普通邀请码。

## 3. 配置前端

编辑根目录的 `flowplayer.config.js`，把 `apiUrl` 改成第 1 步获取的 CloudBase 云函数 HTTPS 地址。该地址不是密钥，可以提交到 GitHub。

## 4. 部署 EdgeOne

1. 在 EdgeOne Makers/Pages 中连接本 GitHub 仓库。
2. Framework 选择 `Other`，无需构建命令，输出目录使用仓库根目录。
3. 部署完成后，在 EdgeOne 提供的域名上测试：管理员注册、普通邀请码注册、登录、生成内容、历史记录同步。
4. 确认无误后再绑定自定义域名。使用中国大陆节点和自有域名时，按平台要求完成备案。

## 安全说明

- 前端不再保存模型 API Key，所有模型调用都由云函数代理。
- 密码使用 `scrypt` + 随机盐值哈希保存。
- JWT 有效期为 7 天；退出登录会清除浏览器令牌。
- 云函数对每个用户实施每日调用上限。生产环境应根据成本继续调整上限和监控告警。
