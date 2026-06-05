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
  selectedIndex: -1,
  topicKey: "",
  topicTimer: null,
  topicLoading: false,
  structureKey: "",
  structureTimer: null,
  structureLoading: false
};

function kjEscapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, function(ch) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
  });
}

function kjTodayText() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return y + "年" + m + "月" + day + "日";
}

function kjGetVal(id) {
  var el = document.getElementById(id);
  var c = el.querySelector(".select-chip.selected");
  return c ? c.dataset.val : "";
}

function kjGetInput(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function kjDurationGuide(duration) {
  if (duration === "15-30秒") return "80-140字，6-10行，每行一句短口语。";
  if (duration === "30-60秒") return "160-260字，10-16行，每行一句短口语。";
  if (duration === "60-90秒") return "260-420字，16-26行，每行一句短口语。";
  if (duration === "90-120秒") return "420-620字，26-38行，每行一句短口语。";
  if (duration === "120秒以上") return "620字以上，结构完整，允许分成2-3个自然段，但每行仍是可朗读正文。";
  return "根据所选时长控制篇幅，每行一句短口语。";
}

function kjFormatResult(text) {
  var safe = kjEscapeHtml(text);
  safe = safe.replace(/【(推荐结构|爆款评分|标题建议|封面文案|完整口播稿|评论区互动文案|优化建议)】/g, '<div style="margin:14px 0 6px;color:var(--purple);font-weight:700">【$1】</div>');
  return safe;
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
  kjMaybeAutoRecommendStructures();
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

function kjMaybeAutoRecommendTopics() {
  clearTimeout(kjState.topicTimer);
  kjState.topicTimer = setTimeout(function() {
    kjRecommendTopics(false);
  }, 800);
}

function kjPickTopic(topic) {
  var input = document.getElementById("kj-topic");
  if (input) input.value = topic;
  var chips = document.querySelectorAll("#kj-topic-recs-content .kj-topic-chip");
  chips.forEach(function(chip) {
    chip.classList.toggle("selected", chip.dataset.topic === topic);
  });
  kjMaybeAutoRecommendStructures();
}

function kjMaybeAutoRecommendStructures() {
  clearTimeout(kjState.structureTimer);
  kjState.structureTimer = setTimeout(function() {
    kjRecommendStructures(false);
  }, 600);
}

function kjRenderTopicRecs(items, note) {
  var wrap = document.getElementById("kj-topic-recs");
  var content = document.getElementById("kj-topic-recs-content");
  if (!wrap || !content) return;
  wrap.style.display = "";
  if (!Array.isArray(items) || items.length === 0) {
    content.innerHTML = '<div style="color:var(--text-muted);line-height:1.6">' + kjEscapeHtml(note || "暂时没有推荐结果，你也可以直接手动输入主题。") + '</div>';
    return;
  }
  var html = "";
  if (note) {
    html += '<div style="font-size:11px;line-height:1.6;color:var(--text-muted)">' + kjEscapeHtml(note) + '</div>';
  }
  html += '<div class="select-chips" style="display:flex;flex-wrap:wrap;gap:8px">';
  items.slice(0, 8).forEach(function(item) {
    var topic = typeof item === "string" ? item : (item.topic || item.title || "");
    var reason = typeof item === "string" ? "" : (item.reason || item.hotReason || item.why || "");
    if (!topic) return;
    html += '<span class="select-chip kj-topic-chip" data-topic="' + kjEscapeHtml(topic) + '" onclick="kjPickTopic(this.dataset.topic)" title="' + kjEscapeHtml(reason) + '">' + kjEscapeHtml(topic) + '</span>';
  });
  html += '</div>';
  var reasonList = items.slice(0, 5).map(function(item) {
    if (typeof item === "string") return "";
    var topic = item.topic || item.title || "";
    var reason = item.reason || item.hotReason || item.why || "";
    return topic && reason ? '<div><span style="color:var(--cyan)">' + kjEscapeHtml(topic) + '</span>：' + kjEscapeHtml(reason) + '</div>' : "";
  }).join("");
  if (reasonList) {
    html += '<div style="margin-top:8px;padding:8px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-glow);font-size:11px;line-height:1.7">' + reasonList + '</div>';
  }
  content.innerHTML = html;
}

function kjRecommendTopics(force) {
  var ip = kjGetInput("kj-ip");
  var industry = kjGetInput("kj-industry");
  var audience = kjGetInput("kj-audience");
  if (!ip || !industry || !audience) return;
  var key = ip + "|" + industry + "|" + audience;
  if (!force && (kjState.topicKey === key || kjState.topicLoading)) return;
  kjState.topicKey = key;
  kjState.topicLoading = true;
  var today = kjTodayText();
  kjRenderTopicRecs([], "正在按" + today + "附近的最新热度联网检索/分析主题...");
  if (!apiConfig.apikey || apiConfig.apikey.length < 10) {
    kjState.topicLoading = false;
    kjRenderTopicRecs([], "请先配置 API Key。配置后会自动推荐热门主题，你也可以先手动输入主题。");
    return;
  }
  var prompt = "当前日期：" + today + "。\n\n请根据以下基础信息，联网检索或参考当前最新公开互联网热度，推荐适合短视频创作的热门内容主题。\n\nIP定位：" + ip + "\n行业：" + industry + "\n目标用户：" + audience + "\n\n硬性要求：\n1. 必须以当前日期附近的最新热度为准，优先最近30天，其次最近90天。\n2. 不要把2025年或更早的旧热点、旧梗、旧事件当作最新热点推荐；除非它在当前日期附近重新爆火，并在reason里说明“近期重新被讨论”。\n3. 优先参考抖音、快手、小红书、视频号、B站等平台当前更容易被讨论、搜索、转发的主题方向。\n4. 不要替用户最终选择，只做推荐。\n5. 输出6-8个主题，每个主题要短、具体、可直接作为视频主题。\n6. 如果当前模型没有真实联网能力，请不要伪装成联网结果；请基于当前日期和公开趋势做保守推断，并在reason里标注“趋势推断”。\n7. 严格输出JSON数组，不要markdown，不要解释。格式：[{\"topic\":\"主题\",\"reason\":\"最新热度/适配理由\"}]";
  xuehuiCallAPI("你是短视频热点选题研究员，擅长结合当前互联网热度、平台内容趋势和用户画像推荐选题。必须优先当前日期附近的新热点，避免把旧年份热点当最新。只输出JSON数组。", prompt, function(json) {
    kjState.topicLoading = false;
    var items = Array.isArray(json) ? json : [];
    if (!items.length && json && json.raw) {
      try { items = JSON.parse(json.raw.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "")); } catch (e) {}
    }
    if (!Array.isArray(items) || !items.length) {
      items = [
        { topic: industry + "新手最容易踩的3个坑", reason: "避坑类内容通用热度高，适合目标用户快速代入" },
        { topic: audience + "最近都在关心的一个问题", reason: "用人群痛点切入，便于评论区互动" },
        { topic: "普通人做" + industry + "怎么少走弯路", reason: "普通人视角更容易形成共鸣和转发" }
      ];
    }
    kjRenderTopicRecs(items, "以下按" + today + "附近最新热度推荐，点击后才会填入内容主题，也可以自己输入。");
  }, { temperature: 0.4, max_tokens: 1800 });
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
  kjRecommendTopics(false);
}

function kjStep2() {
  kjRecommendStructures(true);
}

function kjRecommendStructures(force) {
  var topic = kjGetInput("kj-topic");
  var duration = kjGetVal("kj-duration");
  var platform = kjGetVal("kj-platform");
  var scene = kjGetVal("kj-scene");
  var style = kjGetVal("kj-style");
  if (!topic || !duration || !platform || !scene || !style) {
    if (force) alert("请完成所有选项");
    return;
  }
  
  // Collect all inputs
  var ip = kjGetInput("kj-ip");
  var industry = kjGetInput("kj-industry");
  var audience = kjGetInput("kj-audience");
  if (!ip || !industry || !audience) {
    if (force) alert("请先填写基础信息");
    return;
  }
  var structureKey = ip + "|" + industry + "|" + audience + "|" + topic + "|" + duration + "|" + platform + "|" + scene + "|" + style;
  if (!force && (kjState.structureKey === structureKey || kjState.structureLoading)) return;
  kjState.structureKey = structureKey;
  kjState.structureLoading = true;
  kjState.selectedIndex = -1;
  var structuresArea = document.getElementById("kj-structures-area");
  if (structuresArea) structuresArea.innerHTML = "正在根据前两步信息自动推荐内容结构...";
  if (!apiConfig.apikey || apiConfig.apikey.length < 10) {
    kjState.structureLoading = false;
    if (structuresArea) structuresArea.innerHTML = "请先配置 API Key。配置后，前两步信息完整时会自动推荐内容结构；你也可以继续完善信息。";
    return;
  }
  
  // Build prompt for structure recommendation
  var prompt = "IP定位：" + ip + "\n行业：" + industry + "\n目标用户：" + audience + "\n内容主题：" + topic + "\n视频时长：" + duration + "\n平台：" + platform + "\n应用场景：" + scene + "\n风格：" + style + "\n\n从以下12种结构中推荐最合适的3种结构（按推荐优先级排列），只输出JSON数组，每项包含 index（0-11）和 reason：\n";
  kjState.structures.forEach(function(s, i) {
    prompt += (i + 1) + ". " + s.name + "：" + s.formula + "\n";
  });
  prompt += "\n输出格式：[{\"index\":0,\"reason\":\"推荐理由\"}]";
  
  document.getElementById("kj-loading").style.display = "";
  
  xuehuiCallAPI("你是短视频爆款文案策略专家，精通《爆款菜谱》方法论。只输出JSON数组。", prompt, function(json) {
    document.getElementById("kj-loading").style.display = "none";
    kjState.structureLoading = false;
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
    var html = '<div style="margin-bottom:16px;padding:10px;border-radius:8px;background:rgba(168,85,247,.06);border:1px solid var(--border-glow);font-size:11px;color:var(--text-muted)">💡 AI 已自动推荐以下3种结构。推荐只打标签，不会自动选中；你可以自己选择任意结构。</div>';
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
    var structuresArea = document.getElementById("kj-structures-area") || document.getElementById("kj-step3");
    structuresArea.innerHTML = html;
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
  var durationGuide = kjDurationGuide(duration);
  
  document.getElementById("kj-loading").style.display = "";
  
  var systemPrompt = "你是顶级短视频口播逐字稿策划专家，掌握《爆款菜谱》全部方法论。\n\n你的目标是生成高完播率、高点赞率、高转发率、高涨粉率的短视频脚本。\n\n## 核心要求\n- 开头3秒必须有强钩子\n- 每句话不超过25字\n- 适合字幕展示\n- 具备情绪起伏\n- 包含传播点\n- 包含至少1个金句\n\n## 重要格式要求\n- 必须严格按用户给出的板块顺序输出\n- 【完整口播稿】这一板块只能输出真人可直接照读的逐字稿正文\n- 【完整口播稿】里不要标题、不要分镜、不要画面描述、不要旁白标签、不要时间轴、不要项目符号、不要解释说明\n- 【完整口播稿】每行一句自然口语，句子短，方便主播直接朗读\n\n禁止输出JSON，禁止输出Markdown表格，禁止输出额外解释。";
  
  var userPrompt = "IP定位：" + ip + "\n行业：" + industry + "\n目标用户：" + audience + "\n内容主题：" + topic + "\n视频时长：" + duration + "\n口播篇幅要求：" + durationGuide + "\n平台：" + platform + "\n应用场景：" + scene + "\n风格：" + style + "\n使用结构：" + structure.name + "（" + structure.formula + "）\n\n请严格按以下格式输出，不要增删板块：\n\n【推荐结构】\n结构名称：" + structure.name + "\n使用逻辑：用1-2句话说明为什么适合。\n\n【爆款评分】\n总分：__分\n钩子：__分；情绪：__分；共鸣：__分；反差：__分；价值：__分；传播性：__分\n优化判断：如果低于90分，必须先自我优化后再输出最终稿。\n\n【标题建议】\n1. \n2. \n3. \n4. \n5. \n6. \n7. \n8. \n9. \n10. \n\n【封面文案】\n1. \n2. \n3. \n4. \n5. \n\n【完整口播稿】\n从这里开始，只写可直接朗读的口播逐字稿正文。\n不要出现“开头/中段/结尾/镜头/画面/旁白/主播/说明/标题”等标签。\n不要用项目符号或编号。\n每行一句自然口语。\n必须完整覆盖：开头钩子、用户痛点、反差或冲突、观点/方法、具体价值、金句、自然收尾。\n篇幅必须符合：" + durationGuide + "\n\n【评论区互动文案】\n1. \n2. \n3. \n4. \n5. \n\n【优化建议】\n1. \n2. \n3. ";
  
  xuehuiCallAPI(systemPrompt, userPrompt, function(json) {
    document.getElementById("kj-loading").style.display = "none";
    var result = typeof json === "string" ? json : (json.raw || json.content || json.text || JSON.stringify(json));
    
    var html = '<div id="kj-result" style="padding:14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-glow);font-size:13px;line-height:1.9;color:var(--text-primary);white-space:pre-wrap;max-height:500px;overflow-y:auto">' + kjFormatResult(result) + '</div>';
    html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">';
    html += '<button onclick="kjCopyResult()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);cursor:pointer;font-size:12px">📋 复制全文</button>';
    html += '<button onclick="kjStepBack()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);cursor:pointer;font-size:12px">🔄 调整参数重新生成</button>';
    html += '</div>';
    
    document.getElementById("kj-step4").style.display = "";
    var resultArea = document.getElementById("kj-result-area") || document.getElementById("kj-step4");
    resultArea.innerHTML = html;
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
  var structuresArea = document.getElementById("kj-structures-area");
  var resultArea = document.getElementById("kj-result-area");
  var topicWrap = document.getElementById("kj-topic-recs");
  var topicContent = document.getElementById("kj-topic-recs-content");
  if (structuresArea) structuresArea.innerHTML = "完成前两步信息后，这里会自动推荐 12 种内容结构并打上推荐标签；结构由你自己选择。";
  if (resultArea) resultArea.innerHTML = "选择内容结构后，点击生成，完整文案会显示在这里。";
  if (topicWrap) topicWrap.style.display = "none";
  if (topicContent) topicContent.innerHTML = "基础信息填写完整后，将自动推荐热门主题。";
  kjState.selectedIndex = -1;
  kjState.recommendedIndices = [];
  kjState.topicKey = "";
  kjState.topicLoading = false;
  kjState.structureKey = "";
  kjState.structureLoading = false;
}
