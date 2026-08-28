(function () {
  "use strict";

  var config = window.FLOW_PLAYER_CONFIG || {};
  var localOnlyMode = config.localOnlyMode === true;
  var tokenKey = "flow_player_session_token";
  var userKey = "flow_player_session_user";
  var originalApiFetch = window.apiFetch;
  var authMode = "login";
  var currentAppUser = null;

  window.__useCloudBaseAuth = true;
  window.currentAppUser = currentAppUser;

  function apiUrl() {
    return String(config.apiUrl || "").trim().replace(/\/$/, "");
  }

  function setMessage(text, isError) {
    var message = document.getElementById("auth-msg");
    if (!message) return;
    message.textContent = text || "";
    message.classList.toggle("error", !!isError);
  }

  function request(action, payload) {
    var url = apiUrl();
    if (!url) return Promise.reject(new Error("管理员尚未完成 CloudBase API 地址配置。"));
    var token = localStorage.getItem(tokenKey) || "";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? "Bearer " + token : ""
      },
      body: JSON.stringify({ action: action, payload: payload || {} })
    }).then(function (response) {
      return response.text().then(function (text) {
        var data;
        try { data = text ? JSON.parse(text) : {}; } catch (err) { data = { error: "服务返回格式异常" }; }
        if (!response.ok || data.error) {
          var error = new Error(data.error || data.message || "请求失败");
          error.status = response.status;
          throw error;
        }
        return data;
      });
    });
  }

  function managedApiConfig() {
    if (typeof apiConfig === "undefined") return;
    apiConfig.endpoint = apiUrl();
    apiConfig.apikey = "cloudbase-managed-session";
    apiConfig.model = config.managedModelName || "deepseek-chat";
    apiConfig.useCloudProxy = true;
    localStorage.removeItem("fp_endpoint");
    localStorage.removeItem("fp_apikey");
    localStorage.removeItem("fp_model");
    if (typeof updateApiStatus === "function") updateApiStatus();
    if (typeof updateFormApiStatus === "function") updateFormApiStatus();
  }

  function updateAccountUi() {
    var label = document.getElementById("auth-user-label");
    if (label) label.textContent = currentAppUser ? "账号：" + currentAppUser.phone : "未登录";
    var panel = document.getElementById("admin-invite-panel");
    if (panel) panel.style.display = currentAppUser && currentAppUser.role === "admin" ? "block" : "none";
  }

  function applyUser(user, token) {
    currentAppUser = user || null;
    window.currentAppUser = currentAppUser;
    if (token) localStorage.setItem(tokenKey, token);
    if (currentAppUser) localStorage.setItem(userKey, JSON.stringify(currentAppUser));
    else {
      localStorage.removeItem(tokenKey);
      localStorage.removeItem(userKey);
    }
    document.body.classList.remove("auth-checking");
    document.body.classList.toggle("auth-locked", !currentAppUser);
    document.body.classList.toggle("auth-ready", !!currentAppUser);
    updateAccountUi();
    if (currentAppUser) {
      managedApiConfig();
      if (typeof refreshAfterAuthReady === "function") setTimeout(refreshAfterAuthReady, 0);
      if (typeof syncHistoryFromCloud === "function") setTimeout(syncHistoryFromCloud, 0);
      if (typeof renderHistory === "function") setTimeout(renderHistory, 0);
    }
  }

  function applyLocalGuestMode() {
    currentAppUser = null;
    window.currentAppUser = null;
    document.body.classList.remove("auth-checking", "auth-locked");
    document.body.classList.add("auth-ready");
    var overlay = document.getElementById("auth-overlay");
    if (overlay) overlay.style.display = "none";
    var label = document.getElementById("auth-user-label");
    if (label) label.textContent = "本地模式（未登录）";
    var accountTab = document.querySelector('.settings-tab[onclick*="account"]');
    var accountPanel = document.getElementById("settings-tab-account");
    if (accountTab) accountTab.style.display = "none";
    if (accountPanel) accountPanel.style.display = "none";
  }

  function bootstrap() {
    if (localOnlyMode) {
      applyLocalGuestMode();
      return;
    }
    if (window.__authBootstrapTimer) clearTimeout(window.__authBootstrapTimer);
    var token = localStorage.getItem(tokenKey);
    if (!token) {
      applyUser(null);
      setMessage("请输入手机号和密码登录。首次使用请先注册。", false);
      return;
    }
    request("auth.me").then(function (data) {
      applyUser(data.user);
    }).catch(function () {
      applyUser(null);
      setMessage("登录已过期，请重新登录。", true);
    });
  }

  window.setAuthMode = function (mode) {
    authMode = mode === "register" ? "register" : "login";
    var loginTab = document.getElementById("auth-login-tab");
    var registerTab = document.getElementById("auth-register-tab");
    var submit = document.getElementById("auth-submit");
    var confirm = document.getElementById("auth-password-confirm");
    var invite = document.getElementById("auth-invite-code");
    if (loginTab) loginTab.classList.toggle("active", authMode === "login");
    if (registerTab) registerTab.classList.toggle("active", authMode === "register");
    if (submit) submit.textContent = authMode === "register" ? "注册并进入" : "登录";
    if (confirm) {
      confirm.classList.toggle("show", authMode === "register");
      confirm.value = "";
    }
    if (invite) {
      invite.classList.toggle("show", authMode === "register");
      invite.value = "";
    }
    setMessage(authMode === "register" ? "注册需要管理员发放的邀请码。" : "输入手机号和密码登录。首次使用请先注册。", false);
  };

  window.handleAuthKey = function (event) {
    if (event && event.key === "Enter") window.submitAuth();
  };

  window.submitAuth = function () {
    var phone = String((document.getElementById("auth-phone") || {}).value || "").replace(/\D/g, "");
    var password = String((document.getElementById("auth-password") || {}).value || "");
    var confirm = String((document.getElementById("auth-password-confirm") || {}).value || "");
    var inviteCode = String((document.getElementById("auth-invite-code") || {}).value || "").trim();
    var submit = document.getElementById("auth-submit");
    if (!/^1\d{10}$/.test(phone)) { setMessage("请输入正确的 11 位手机号码。", true); return; }
    if (password.length < 8) { setMessage("密码至少需要 8 位。", true); return; }
    if (authMode === "register" && password !== confirm) { setMessage("两次输入的密码不一致。", true); return; }
    if (authMode === "register" && !inviteCode) { setMessage("注册需要邀请码。", true); return; }
    if (submit) { submit.disabled = true; submit.textContent = authMode === "register" ? "注册中..." : "登录中..."; }
    request(authMode === "register" ? "auth.register" : "auth.login", {
      phone: phone,
      password: password,
      inviteCode: inviteCode
    }).then(function (data) {
      applyUser(data.user, data.token);
      setMessage("登录成功。", false);
    }).catch(function (error) {
      setMessage(error.message || "操作失败，请稍后重试。", true);
    }).finally(function () {
      if (submit) submit.textContent = authMode === "register" ? "注册并进入" : "登录";
      if (submit) submit.disabled = false;
    });
  };

  window.logoutAuth = function () {
    applyUser(null);
    window.setAuthMode("login");
    var password = document.getElementById("auth-password");
    if (password) password.value = "";
  };

  window.switchAuthAccount = function () {
    if (typeof closeSettings === "function") closeSettings();
    window.logoutAuth();
    var phone = document.getElementById("auth-phone");
    if (phone) phone.focus();
  };

  window.getHistoryUserId = function () {
    if (currentAppUser && currentAppUser.id) return currentAppUser.id;
    if (!localOnlyMode) return null;
    // Keep the pre-existing local history namespace when an API key is set.
    var key = (typeof apiConfig !== "undefined" && apiConfig.apikey) || localStorage.getItem("fp_apikey") || "";
    if (!key || key.length < 10 || key === "cloudbase-managed-session") return null;
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return "user_" + Math.abs(hash).toString(36);
  };

  window.getHistoryMergeId = function (history) {
    if (history && history.id) return history.id;
    var parts = [history && history.key];
    if (history && history.workflowType) parts.push(history.workflowType);
    if (history && history.moduleId) parts.push(history.moduleId);
    if (history && typeof history.taskIndex === "number" && history.taskIndex >= 0) parts.push(String(history.taskIndex));
    if (history && history.time) parts.push(String(history.time));
    return parts.join("|");
  };

  window.mergeHistories = function (local, remote) {
    var map = {};
    (local || []).forEach(function (item) { map[window.getHistoryMergeId(item)] = item; });
    (remote || []).forEach(function (item) {
      var id = window.getHistoryMergeId(item);
      if (!map[id] || (item.time || 0) > (map[id].time || 0)) map[id] = item;
    });
    return Object.keys(map).map(function (id) { return map[id]; }).sort(function (a, b) {
      return (b.time || 0) - (a.time || 0);
    }).slice(0, 20);
  };

  window.syncHistoryToCloud = function (items) {
    if (localOnlyMode || !currentAppUser) return;
    request("history.save", { items: (items || []).slice(0, 20) }).catch(function (error) {
      console.warn("历史记录云同步失败：", error.message);
    });
  };

  window.syncHistoryFromCloud = function () {
    if (localOnlyMode || !currentAppUser) return;
    request("history.get").then(function (data) {
      var remote = Array.isArray(data.items) ? data.items : [];
      var storageKey = "fp_chat_history_" + currentAppUser.id;
      var local = [];
      try { local = JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch (error) { local = []; }
      var merged = window.mergeHistories(local, remote);
      if (JSON.stringify(merged) !== JSON.stringify(local)) {
        localStorage.setItem(storageKey, JSON.stringify(merged));
        if (typeof renderHistory === "function") renderHistory();
      }
    }).catch(function (error) {
      console.warn("历史记录加载失败：", error.message);
    });
  };

  window.createInviteCode = function () {
    if (localOnlyMode) return;
    var maxUses = Number((document.getElementById("admin-invite-max-uses") || {}).value || 1);
    if (!Number.isInteger(maxUses) || maxUses < 1 || maxUses > 1000) {
      alert("请输入 1 到 1000 之间的可使用次数。");
      return;
    }
    request("invite.create", { maxUses: maxUses }).then(function (data) {
      var result = document.getElementById("admin-invite-result");
      if (result) result.textContent = "邀请码：" + data.code + "（可使用 " + data.maxUses + " 次）";
    }).catch(function (error) { alert(error.message || "邀请码生成失败。"); });
  };

  if (!localOnlyMode) {
    window.saveSettingsApi = function () { alert("模型 API 已由管理员安全托管，无需在浏览器填写密钥。"); };
    window.clearSettingsApi = function () { alert("模型 API 已由管理员安全托管。\n"); };
  }

  if (typeof originalApiFetch === "function") {
    window.apiFetch = function (url, options) {
      if (!currentAppUser || !apiUrl() || !apiConfig || !apiConfig.useCloudProxy) return originalApiFetch(url, options);
      var payload = {};
      try { payload = JSON.parse((options || {}).body || "{}"); } catch (error) { return Promise.reject(new Error("模型请求格式异常。")); }
      return originalApiFetch(apiUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + (localStorage.getItem(tokenKey) || "")
        },
        body: JSON.stringify({ action: "chat", payload: payload })
      });
    };
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!localOnlyMode) {
      var apiTab = document.querySelector(".settings-tabs .settings-tab");
      var apiPanel = document.getElementById("settings-tab-api");
      if (apiTab) apiTab.style.display = "none";
      if (apiPanel) apiPanel.style.display = "none";
    }
    bootstrap();
  });
})();
