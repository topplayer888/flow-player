// === History Module ===
// Load history on page load
(function(){
  try {
    var saved = localStorage.getItem("fp_history");
    if (saved) {
      var loaded = JSON.parse(saved);
      if (Array.isArray(loaded)) {
        window.historyStack = loaded;
        if (typeof renderHistory === 'function') renderHistory();
      }
    }
  } catch(e) {}

  // Override closeChat to save messages
  var origCloseChat = window.closeChat;
  window.closeChat = function() {
    try {
      var msgs = window.chatMessages;
      var key = window.chatKey;
      if (msgs && msgs.length > 0 && key) {
        var stack = window.historyStack || [];
        var entry = stack.find(function(h) { return h.key === key; });
        if (!entry) {
          entry = { key: key, section: window.currentSection, mode: window.currentMode, name: '', icon: '' };
          stack.unshift(entry);
          if (stack.length > 5) stack.pop();
        }
        entry.msgs = msgs.slice(0);
        try { localStorage.setItem('fp_history', JSON.stringify(stack)); } catch(e) {}
        window.historyStack = stack;
        if (typeof renderHistory === 'function') renderHistory();
      }
    } catch(e) {}
    if (origCloseChat) origCloseChat();
  };

  // Override openChat to accept saved messages
  var origOpenChat = window.openChat;
  window.openChat = function(section, mode, savedMsgs) {
    origOpenChat(section, mode);
    if (savedMsgs && savedMsgs.length > 0) {
      window.chatMessages = savedMsgs;
      var el = document.getElementById("chat-messages");
      if (el) {
        el.innerHTML = "";
        savedMsgs.forEach(function(m) {
          var d = document.createElement("div");
          d.className = "chat-msg " + m.role;
          d.innerHTML = '<div class="chat-avatar">' + (m.role === "user" ? "U" : "A") + '</div><div class="chat-bubble">' + m.content + '</div>';
          el.appendChild(d);
        });
      }
    }
  };

  // Override goHistory to pass saved messages
  var origGoHistory = window.goHistory;
  window.goHistory = function(section, mode) {
    var key = section + "-" + mode;
    var stack = window.historyStack || [];
    var entry = stack.find(function(h) { return h.key === key; });
    if (entry && entry.msgs && entry.msgs.length > 0) {
      origGoHistory(section, mode);  // opens via original
      // Wait a tick then restore
      setTimeout(function() {
        window.chatMessages = entry.msgs;
        var el = document.getElementById("chat-messages");
        if (el) {
          el.innerHTML = "";
          entry.msgs.forEach(function(m) {
            var d = document.createElement("div");
            d.className = "chat-msg " + m.role;
            d.innerHTML = '<div class="chat-avatar">' + (m.role === "user" ? "U" : "A") + '</div><div class="chat-bubble">' + m.content + '</div>';
            el.appendChild(d);
          });
        }
      }, 100);
    } else {
      origGoHistory(section, mode);
    }
  };
})();