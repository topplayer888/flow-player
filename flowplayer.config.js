/*
 * localOnlyMode=true 时不需要 CloudBase apiUrl，页面使用本地历史和浏览器中的 API 配置。
 * 切换回 CloudBase 托管模式时，再填写云函数的公网 apiUrl。
 * 此文件不包含任何密钥，可以安全提交到 GitHub。
 */
window.FLOW_PLAYER_CONFIG = {
  apiUrl: "",
  managedModelName: "deepseek-chat",
  // 国内本地模式：不启用账号、云端历史和 CloudBase 模型代理。
  localOnlyMode: true
};
