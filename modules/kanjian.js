// kanjian module - 看见内容体系 / 爆款菜谱AI

function kanjianUpdateStatus() {
  return;
  var s = document.getElementById("form-kj-status");
  var m = document.getElementById("form-kj-msg");
  if (!s) return;
  if (apiConfig.apikey && apiConfig.apikey.length > 9) {
    s.className = "form-api-status ok";
    m.textContent = "API 已配置 · " + apiConfig.model;
  } else {
    s.className = "form-api-status missing";
    m.textContent = "未配置 API Key";
  }
}

var kjState = {
  structures: [
    { name: "钩子故事型", formula: "钩子 + 故事 + 人设 + 总结 + 金句" },
    { name: "问题解决型", formula: "问题 + 原因 + 人设 + 解决办法 + 总结" },
    { name: "金句拆解型", formula: "金句 + 拆解 + 举例 + 倡导" },
    { name: "热点观点型", formula: "热点 + 描述 + 观点 + 金句" },
    { name: "利益引导型", formula: "利益 + 强化期待 + 方案 + 互动" },
    { name: "揭秘故事型", formula: "揭秘 + 人设 + 故事 + 总结" },
    { name: "金句轰炸型", formula: "金句 + 金句 + 金句 + 金句" },
    { name: "功效展示型", formula: "功效 + 动作 + 效果 + 关注" },
    { name: "简洁解决型", formula: "问题 + 解决办法 + 总结" },
    { name: "现象分析型", formula: "现象 + 原因 + 解决办法 + 总结" },
    { name: "钩子剖析型", formula: "钩子 + 剖析 + 总结 + 金句" },
    { name: "价值堆叠型", formula: "价值 + 价值 + 价值 + 价值" }
  ],
  recommendedIndices: [],
  selectedIndex: -1
};

function kjGetVal(id) {
  var el = document.getElementById(id);
  var c = el.querySelector(".select-chip.selected");
  return c ? c.dataset.val : "";
}

function kjGetInput(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function kjPick(el, groupId, max) {
  var chips = document.getElementById(groupId).querySelectorAll(".select-chip");
  var selected = document.getElementById(groupId).querySelectorAll(".select-chip.selected");
  if (el.classList.contains("selected")) {
    el.classList.remove("selected");
    return;
  }
  if (selected.length >= max) {
    selected[0].classList.remove("selected");
  }
  el.classList.add("selected");
}

function kjSelectStructure(idx) {
  kjState.selectedIndex = idx;
  var chips = document.querySelectorAll("#kj-structures .kj-struct-chip");
  chips.forEach(function(c, i) {
    if (i === idx) {
      c.classList.add("selected");
    } else {
      c.classList.remove("selected");
    }
  });
}

function kjStep1() {
  var ip = kjGetInput("kj-ip");
  var industry = kjGetInput("kj-industry");
  var audience = kjGetInput("kj-audience");
  if (!ip || !industry || !audience) {
    alert("请填写 IP定位、行业 和目标用户");
    return;
  }
  document.getElementById("kj-step2").style.display = "";
}

function kjStep2() {
  var topic = kjGetInput("kj-topic");
  var duration = kjGetVal("kj-duration");
  var platform = kjGetVal("kj-platform");
  var scene = kjGetVal("kj-scene");
  var style = kjGetVal("kj-style");
  if (!topic || !duration || !platform || !scene || !style) {
    alert("请完成所有选项");
    return;
  }
  
  // Collect all inputs
  var ip = kjGetInput("kj-ip");
  var industry = kjGetInput("kj-industry");
  var audience = kjGetInput("kj-audience");
  
  // Build prompt for structure recommendation
  var prompt = "IP定位：" + ip + "\n行业：" + industry + "\n目标用户：" + audience + "\n内容主题：" + topic + "\n视频时长：" + duration + "\n平台：" + platform + "\n应用场景：" + scene + "\n风格：" + style + "\n\n从以下12种结构中推荐最合适的3种结构（按推荐优先级排列），只输出JSON数组，每项包含 index（0-11）和 reason：\n";
  kjState.structures.forEach(function(s, i) {
    prompt += (i + 1) + ". " + s.name + "：" + s.formula + "\n";
  });
  prompt += "\n输出格式：[{\"index\":0,\"reason\":\"推荐理由\"}]";
  
  document.getElementById("kj-loading").style.display = "";
  
  xuehuiCallAPI("你是短视频爆款文案策略专家，精通《爆款菜谱》方法论。只输出JSON数组。", prompt, function(json) {
    document.getElementById("kj-loading").style.display = "none";
    var recs = Array.isArray(json) ? json : (json.raw ? JSON.parse(json.raw) : []);
    if (!Array.isArray(recs) || recs.length === 0) {
      for (var k in json) { if (Array.isArray(json[k])) { recs = json[k]; break; } }
    }
    if (!Array.isArray(recs) || recs.length === 0) {
      // Fallback: recommend first 3
      recs = [{ index: 0, reason: "通用百搭结构，适合大多数内容类型" }, { index: 1, reason: "适合解决问题型内容" }, { index: 4, reason: "适合引导转化场景" }];
    }
    kjState.recommendedIndices = recs.slice(0, 3).map(function(r) { return r.index; });
    
    // Build structure HTML
    var html = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span style="font-size:12px;color:var(--purple);font-weight:600">📐 步骤 3/4 · 选择内容结构</span></div>';
    html += '<div style="margin-bottom:16px;padding:10px;border-radius:8px;background:rgba(168,85,247,.06);border:1px solid var(--border-glow);font-size:11px;color:var(--text-muted)">💡 AI 推荐以下3种结构，点击即可选中。也可手动选择其他结构。</div>';
    html += '<div class="select-chips" id="kj-structures" style="display:flex;flex-wrap:wrap;gap:8px">';
    
    kjState.structures.forEach(function(s, i) {
      var isRec = kjState.recommendedIndices.indexOf(i) >= 0;
      var recInfo = isRec ? recs.find(function(r) { return r.index === i; }) : null;
      var badge = isRec ? '<span class="kj-badge" style="display:inline-block;margin-left:4px;padding:1px 6px;border-radius:10px;font-size:10px;background:var(--purple);color:#fff;font-weight:600">推荐</span>' : '';
      html += '<span class="select-chip kj-struct-chip' + (kjState.selectedIndex === i ? ' selected' : '') + '" onclick="kjSelectStructure(' + i + ')" data-idx="' + i + '" title="' + s.formula + '">' + (i + 1) + '. ' + s.name + badge + '</span>';
    });
    html += '</div>';
    
    // Show recommend reasons
    if (recs.length > 0 && recs[0].reason) {
      html += '<div style="margin-top:12px;padding:10px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-glow);font-size:11px;line-height:1.6">';
      html += '<div style="font-weight:600;color:var(--purple);margin-bottom:4px">📊 推荐理由</div>';
      recs.slice(0, 3).forEach(function(r) {
        html += '<div style="margin-bottom:4px"><span style="color:var(--cyan)">' + (r.index + 1) + '. ' + kjState.structures[r.index].name + '</span>：' + r.reason + '</div>';
      });
      html += '</div>';
    }
    
    html += '<button class="chat-form-submit" onclick="kjGenerate()" style="margin-top:12px">✍️ 生成爆款文案</button>';
    
    document.getElementById("kj-step3").style.display = "";
    document.getElementById("kj-step3").innerHTML = html;
  }, { temperature: 0.3, max_tokens: 2000 });
}

function kjGenerate() {
  if (kjState.selectedIndex < 0) {
    alert("请选择一个内容结构");
    return;
  }
  
  var ip = kjGetInput("kj-ip");
  var industry = kjGetInput("kj-industry");
  var audience = kjGetInput("kj-audience");
  var topic = kjGetInput("kj-topic");
  var duration = kjGetVal("kj-duration");
  var platform = kjGetVal("kj-platform");
  var scene = kjGetVal("kj-scene");
  var style = kjGetVal("kj-style");
  var structure = kjState.structures[kjState.selectedIndex];
  
  document.getElementById("kj-loading").style.display = "";
  
  var systemPrompt = "你是顶级短视频文案策划专家，掌握《爆款菜谱》全部方法论。\n\n你的目标是生成高完播率、高点赞率、高转发率、高涨粉率的短视频脚本。\n\n## 核心要求\n- 开头3秒必须有钩子\n- 每句话不超过25字\n- 适合字幕展示\n- 具备情绪起伏\n- 包含传播点\n- 包含至少1个金句\n\n## 评分标准\n钩子20分 / 情绪20分 / 共鸣15分 / 反差15分 / 价值15分 / 传播性15分\n总分100。低于90分自动优化重写。\n\n禁止输出解释，直接输出结果。";
  
  var userPrompt = "IP定位：" + ip + "\n行业：" + industry + "\n目标用户：" + audience + "\n内容主题：" + topic + "\n视频时长：" + duration + "\n平台：" + platform + "\n应用场景：" + scene + "\n风格：" + style + "\n使用结构：" + structure.name + "（" + structure.formula + "）\n\n请生成：\n【推荐结构】\n【爆款评分】\n【10条标题】\n【5条封面文案】\n【完整口播稿】\n【5条评论区互动文案】\n【优化建议】";
  
  xuehuiCallAPI(systemPrompt, userPrompt, function(json) {
    document.getElementById("kj-loading").style.display = "none";
    var result = typeof json === "string" ? json : (json.raw || json.content || json.text || JSON.stringify(json));
    
    var html = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span style="font-size:12px;color:var(--purple);font-weight:600">📝 步骤 4/4 · 生成结果</span></div>';
    html += '<div id="kj-result" style="padding:14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-glow);font-size:13px;line-height:1.9;color:var(--text-primary);white-space:pre-wrap;max-height:500px;overflow-y:auto">' + result + '</div>';
    html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">';
    html += '<button onclick="kjCopyResult()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);cursor:pointer;font-size:12px">📋 复制全文</button>';
    html += '<button onclick="kjStepBack()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);cursor:pointer;font-size:12px">🔄 调整参数重新生成</button>';
    html += '</div>';
    
    document.getElementById("kj-step4").style.display = "";
    document.getElementById("kj-step4").innerHTML = html;
  }, { temperature: 0.8, max_tokens: 8000 });
}

function kjCopyResult() {
  var text = document.getElementById("kj-result").textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      alert("已复制");
    }).catch(function() {
      kjFallbackCopy(text);
    });
  } else {
    kjFallbackCopy(text);
  }
}

function kjFallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    alert("已复制");
  } catch (e) {
    alert("复制失败，请手动复制");
  }
  document.body.removeChild(ta);
}

function kjStepBack() {
  document.getElementById("kj-step1").style.display = "";
  document.getElementById("kj-step2").style.display = "";
  document.getElementById("kj-step3").style.display = "";
  document.getElementById("kj-step4").style.display = "";
  document.getElementById("kj-step3").innerHTML = "";
  document.getElementById("kj-step4").innerHTML = "";
  kjState.selectedIndex = -1;
  kjState.recommendedIndices = [];
}
