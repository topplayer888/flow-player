var xhOpenTypes = [
  { name: "圈定人群", desc: "先喊出精准人群，再抛出痛点或机会。" },
  { name: "直接提问", desc: "用问题制造停留，让用户下意识想回答。" },
  { name: "自我否定", desc: "先推翻常识或旧经验，再给新判断。" },
  { name: "反认知", desc: "用反常识观点制造认知冲突。" },
  { name: "高价值展示", desc: "先给结果、清单、经验或收益感。" },
  { name: "直击痛点", desc: "直接说出用户正在经历的问题。" },
  { name: "损失厌恶", desc: "强调不看、不改、不做会错过什么。" },
  { name: "对比对立", desc: "用两类人、两种选择或新旧方法对比。" },
  { name: "头牌借势", desc: "借大人物、大事件、大品牌建立兴趣。" },
  { name: "警告避坑", desc: "用避坑提醒制造紧迫感。" },
  { name: "引起焦虑", desc: "点出隐性风险，但要给解决路径。" },
  { name: "制造错过", desc: "强调窗口期、机会差、时间差。" },
  { name: "场景代入", desc: "从用户熟悉的具体场景切进去。" },
  { name: "身份标签", desc: "用身份、阶段、状态精准圈人。" },
  { name: "数字清单", desc: "用数字承诺降低理解成本。" },
  { name: "故事开头", desc: "用一件具体事制造悬念。" },
  { name: "数据震撼", desc: "用具体数字打破模糊认知。" },
  { name: "权威背书", desc: "用真实身份、经验或证据增加可信度。" },
  { name: "争议话题", desc: "抛出对立观点，带动评论区表达。" },
  { name: "灵魂拷问", desc: "用价值观问题逼用户停下来思考。" },
  { name: "干货合集", desc: "强调收藏价值和立即可用。" },
  { name: "跨界组合", desc: "把两个领域组合出新角度。" },
  { name: "送惊喜", desc: "用反差、礼物、结果反应制造情绪。" },
  { name: "荷尔蒙", desc: "用吸引力、关系感、情绪张力开头。" },
  { name: "盲盒", desc: "用未知结果和低成本期待制造追看。" },
  { name: "奇葩相关", desc: "用行业怪现象或离奇细节制造好奇。" },
  { name: "负面的", desc: "从阴暗面、失败面、反面案例切入。" },
  { name: "具体的事", desc: "用真实生活切片代替抽象观点。" },
  { name: "高情绪", desc: "用委屈、愤怒、惊喜、释然等强情绪。" },
  { name: "强节奏", desc: "用短句和连续信息点快速推进。" },
  { name: "凑热闹", desc: "借大众正在讨论的话题进入。" },
  { name: "沉浸感", desc: "用感官细节和过程感吸引停留。" },
  { name: "反差感", desc: "用身份、场景、结果的反差吸引用户。" },
  { name: "特殊视角", desc: "换一个不常见的观察角度。" },
  { name: "故事感", desc: "用画面、人物、悬念组织表达。" },
  { name: "复古怀旧", desc: "用年代记忆、旧物和回忆触发共鸣。" }
];

var xhElementDetails = {
  "头牌选题": {
    rules: "借最贵、最强、最牛、最顶级的人或物制造好奇，再回到用户行业。",
    example: "美妆：世界上最贵的面霜到底贵在哪？教育：最会学习的人都有一个共同习惯。"
  },
  "怀旧选题": {
    rules: "用小时候、当年、老一辈、过去和现在的对比唤醒记忆。",
    example: "餐饮：小时候路边摊为什么比现在的网红店更香？"
  },
  "对立选题": {
    rules: "制造两类人、两种选择、两个阶段、两个阵营的对比。",
    example: "健身：普通人减脂和健身教练减脂，差的不是自律。"
  },
  "最差选题": {
    rules: "从最坑、最难用、最容易后悔、最没必要切入，适合避坑。",
    example: "装修：最容易后悔的5个装修决定。"
  },
  "荷尔蒙选题": {
    rules: "围绕吸引力、关系、审美、被看见、被喜欢等欲望设计。",
    example: "穿搭：让别人多看你两眼的不是贵衣服，而是这3个细节。"
  },
  "猎奇选题": {
    rules: "从外行不知道、行业怪现象、反常操作、隐藏内幕切入。",
    example: "咖啡：咖啡店老板最怕你点的不是美式。"
  },
  "圈人群选题": {
    rules: "直接喊出精准人群或状态，让用户觉得这条内容和自己有关。",
    example: "新手宝妈、25岁转行的人、刚做账号的新手，都可以被圈定。"
  },
  "成本选题": {
    rules: "围绕金钱、时间、精力、面子、机会成本，让用户看到投入产出。",
    example: "摄影：不花大钱也能拍出高级感的3个场景。"
  }
};

var xhLocalTemplateDetails = {
  "讲故事类": "按“具体场景 -> 冲突 -> 转折 -> 观点 -> 行动”的方式写，有人物、有细节、有变化。",
  "共鸣型段子类": "按“熟悉场景 -> 情绪吐槽 -> 反差笑点 -> 真实痛点 -> 轻转化”的方式写。",
  "教知识类": "按“错误认知 -> 原因解释 -> 方法步骤 -> 案例演示 -> 总结金句”的方式写。",
  "晒过程类": "按“开始状态 -> 过程细节 -> 关键变化 -> 结果展示 -> 经验总结”的方式写。"
};

var xhLocalOpeningDetails = {};
xhOpenTypes.forEach(function(item) {
  xhLocalOpeningDetails[item.name] = item.desc;
});

var xhState = { industry: "", audience: "", elements: [], topics: [], selectedTopic: null, templates: [], openings: [], selectedOpenings: [], results: [] };
var xhAutoRecTimer = null;

function xhEscapeHtml(text) {
  return String(text == null ? "" : text).replace(/[&<>"']/g, function(ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function xhParseJsonArray(json) {
  var recs = Array.isArray(json) ? json : [];
  if (!recs.length && json && json.raw) {
    try { recs = JSON.parse(json.raw.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "")); } catch (e) { recs = []; }
  }
  if ((!Array.isArray(recs) || !recs.length) && json) {
    for (var k in json) { if (Array.isArray(json[k])) { recs = json[k]; break; } }
  }
  return Array.isArray(recs) ? recs : [];
}

function xhTodayText() {
  var d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function xuehuiUpdateStatus() {
  var s = document.getElementById("form-xh-status");
  var m = document.getElementById("form-xh-msg");
  if (!s) return;
  if (apiConfig.apikey && apiConfig.apikey.length > 9) {
    s.className = "form-api-status ok";
    m.textContent = "API 已配置 - " + apiConfig.model;
  } else {
    s.className = "form-api-status missing";
    m.textContent = "未配置 API Key";
  }
}

function xhSetButton(btn, text, disabled) {
  if (!btn) return;
  if (disabled && !btn.dataset.normalText) btn.dataset.normalText = btn.textContent;
  btn.textContent = text;
  btn.disabled = !!disabled;
  btn.style.opacity = disabled ? ".72" : "";
  btn.style.cursor = disabled ? "wait" : "";
  if (!disabled) delete btn.dataset.normalText;
}

function xhRenderTopics(topics) {
  xhState.topics = topics;
  xhState.selectedTopic = null;
  var list = document.getElementById("xh-topics-list");
  if (!list) return;
  list.innerHTML = topics.map(function(t, i) {
    var hot = t.hotTopic ? '<span style="font-size:11px;padding:2px 8px;border-radius:10px;background:rgba(245,158,11,.14);color:#f59e0b">热点：' + xhEscapeHtml(t.hotTopic) + "</span>" : "";
    return '<div class="xh-topic-card" onclick="xuehuiSelectTopic(' + i + ',this)" style="padding:12px 14px;border-radius:10px;border:2px solid var(--border-glow);background:var(--bg-card);cursor:pointer;transition:all .2s">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap"><span style="font-size:12px;color:var(--purple);font-weight:700">#' + (i + 1) + '</span><span style="font-size:11px;padding:2px 8px;border-radius:10px;background:var(--purple-dim);color:var(--purple)">' + xhEscapeHtml(t.element || "爆款选题") + "</span>" + hot + "</div>" +
      '<div style="font-size:13px;font-weight:600;color:var(--text-primary)">' + xhEscapeHtml(t.title) + "</div>" +
      '<div style="font-size:11px;color:var(--text-muted);margin-top:4px">' + xhEscapeHtml(t.idea || t.reason || "") + "</div></div>";
  }).join("");
  document.getElementById("xh-step2").style.display = "";
  document.getElementById("xh-results").style.display = "none";
}

function xhGetSelectedElements() {
  return Array.from(document.getElementById("xh-elements").querySelectorAll(".select-chip.selected")).map(function(c) { return c.dataset.val; });
}

function xhValidateStep1(els) {
  xhState.industry = document.getElementById("xh-industry").value.trim();
  xhState.audience = document.getElementById("xh-audience").value.trim();
  if (!xhState.industry || !xhState.audience) { alert("请填写行业和目标人群"); return false; }
  if (!els.length) { alert("请至少选择一个爆款元素"); return false; }
  xhState.elements = els;
  return true;
}

function xuehuiStep1() {
  if (!apiConfig || !apiConfig.apikey || apiConfig.apikey.length < 10) { showApiConfigPrompt(); return; }
  var els = xhGetSelectedElements();
  if (!xhValidateStep1(els)) return;
  var perEl = els.length === 1 ? 10 : 5;
  var elementRules = els.map(function(n) {
    var d = xhElementDetails[n];
    return "【" + n + "】" + (d ? "规则：" + d.rules + " 示例：" + d.example : "按该元素生成选题");
  }).join("\n\n");
  var sysPrompt = "你是短视频爆款选题生成专家，基于薛辉内容体系工作。请严格根据用户选择的爆款元素生成选题，只输出JSON对象。";
  var userPrompt = "行业：" + xhState.industry + "\n目标人群：" + xhState.audience + "\n爆款元素：" + els.join("、") + "\n每个元素生成数量：" + perEl + "\n\n元素规则：\n" + elementRules + "\n\n要求：标题口语化、有冲突、有点击欲，能直接进入短视频文案生成流程。\n输出格式：{\"topics\":[{\"id\":1,\"title\":\"选题标题\",\"element\":\"元素名\",\"idea\":\"选题思路\"}]}";
  var btn = document.getElementById("xh-topic-btn") || document.querySelector("#xh-step1 .chat-form-submit");
  xhSetButton(btn, "生成中...", true);
  xuehuiCallAPI(sysPrompt, userPrompt, function(json) {
    xhSetButton(btn, "🚀 生成爆款选题", false);
    var topics = json.topics || [];
    if (!Array.isArray(topics) || !topics.length) { alert("生成失败，请重试"); return; }
    xhRenderTopics(topics);
  }, { response_format: { type: "json_object" }, temperature: 0.55, max_tokens: 3500 });
}

function xuehuiStep1Hot() {
  if (!apiConfig || !apiConfig.apikey || apiConfig.apikey.length < 10) { showApiConfigPrompt(); return; }
  var els = xhGetSelectedElements();
  if (!xhValidateStep1(els)) return;
  var today = xhTodayText();
  var perEl = els.length === 1 ? 8 : 4;
  var elementRules = els.map(function(n) {
    var d = xhElementDetails[n];
    return "【" + n + "】" + (d ? "规则：" + d.rules + " 示例：" + d.example : "按该元素生成选题");
  }).join("\n\n");
  var sysPrompt = "你是短视频热点爆款选题研究员，精通薛辉内容体系。你需要结合用户行业、目标人群、已选爆款元素，以及当前日期附近的热点事件、平台话题、社会情绪和内容趋势，生成可直接进入后续文案流程的爆款选题。只输出JSON对象。";
  var userPrompt = "当前日期：" + today + "\n行业：" + xhState.industry + "\n目标人群：" + xhState.audience + "\n爆款元素：" + els.join("、") + "\n每个元素生成数量：" + perEl + "\n\n元素规则：\n" + elementRules + "\n\n硬性要求：\n1. 优先最近30天，其次最近90天的热点。\n2. 不要把旧热点伪装成最新热点；如果是近期重新被讨论，请说明。\n3. 如果模型不能真实联网，不要编造具体新闻事实，可基于公开趋势保守推断，并在idea里标注“趋势推断”。\n4. 每个选题必须同时符合爆款元素逻辑和热点传播情绪。\n\n输出格式：{\"topics\":[{\"id\":1,\"title\":\"选题标题\",\"element\":\"爆款元素名\",\"hotTopic\":\"关联热点/话题/趋势\",\"idea\":\"适配理由\"}]}";
  var btn = document.getElementById("xh-hot-topic-btn");
  xhSetButton(btn, "结合热点生成中...", true);
  xuehuiCallAPI(sysPrompt, userPrompt, function(json) {
    xhSetButton(btn, "🔥 结合热点生成爆款选题", false);
    var topics = json.topics || [];
    if (!Array.isArray(topics) || !topics.length) { alert("热点选题生成失败，请重试"); return; }
    xhRenderTopics(topics);
  }, { response_format: { type: "json_object" }, temperature: 0.45, max_tokens: 3500 });
}

function xuehuiSelectTopic_orig(idx, el) {
  document.querySelectorAll(".xh-topic-card").forEach(function(c) {
    c.style.borderColor = "var(--border-glow)";
    c.style.background = "var(--bg-card)";
  });
  el.style.borderColor = "var(--purple)";
  el.style.background = "rgba(168,85,247,0.08)";
  xhState.selectedTopic = xhState.topics[idx];
  document.getElementById("xh-step3").style.display = "";
  setTimeout(function() { if (xhState.selectedTopic) xuehuiRecommendTemplates(); }, 500);
}

function xuehuiSelectTopic(idx, el) {
  if (apiConfig && (!apiConfig.apikey || apiConfig.apikey.length < 10)) { showApiConfigPrompt(); return; }
  xuehuiSelectTopic_orig(idx, el);
}

function xuehuiStep2Next() {
  if (!xhState.selectedTopic) { alert("请先选择一个选题"); return; }
  document.getElementById("xh-step3").style.display = "";
}

function xuehuiStep3Next() {
  var tmpls = Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c) { return c.dataset.val; });
  if (!tmpls.length) { alert("请至少选择一个文案模板"); return; }
  xhState.templates = tmpls;
  document.getElementById("xh-step4").style.display = "";
  xuehuiRenderOpenings();
}

function xuehuiRenderOpenings() {
  var container = document.getElementById("xh-openings");
  if (!container) return;
  container.innerHTML = xhOpenTypes.map(function(o) {
    return '<span class="select-chip" data-val="' + xhEscapeHtml(o.name) + '" onclick="xuehuiToggleOpening(this)" title="' + xhEscapeHtml(o.desc) + '">' + xhEscapeHtml(o.name) + "</span>";
  }).join("");
  xuehuiUpdateCount();
}

function xuehuiToggleOpening(el) {
  if (apiConfig && (!apiConfig.apikey || apiConfig.apikey.length < 10)) { showApiConfigPrompt(); return; }
  if (!el.classList.contains("selected")) {
    var selected = document.querySelectorAll("#xh-openings .select-chip.selected");
    if (selected.length >= 3) { alert("开头类型一次最多选择3个"); return; }
  }
  el.classList.toggle("selected");
  xuehuiUpdateCount();
}

function xuehuiUpdateCount() {
  var sel = document.querySelectorAll("#xh-openings .select-chip.selected").length;
  var tmpl = xhState.templates.length;
  var el = document.getElementById("xh-count-info");
  if (el) el.textContent = "已选 " + sel + " 个开头 x " + tmpl + " 个模板 = " + (sel * tmpl * 2) + " 条文案（90秒标准 + 2分钟深度）";
}

function xhAutoRecElements() {
  clearTimeout(xhAutoRecTimer);
  xhAutoRecTimer = setTimeout(function() {
    var industry = document.getElementById("xh-industry").value.trim();
    var audience = document.getElementById("xh-audience").value.trim();
    if (industry.length >= 2 && audience.length >= 2) xuehuiRecommendElements();
  }, 800);
}

function copyVoiceover(btn) {
  var el = btn.parentElement.parentElement.querySelector(".xh-voiceover-text");
  var t = el ? el.textContent.trim() : "";
  if (!t) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(t).then(function() {
      btn.textContent = "✅ 已复制";
      setTimeout(function() { btn.textContent = "📋 一键复制"; }, 2000);
    }).catch(function() { fallbackCopy(t); });
  } else { fallbackCopy(t); }
}

function copyXhResult(btn) {
  var card = btn.closest("[data-xh-card]") || btn.closest("div");
  var el = card ? card.querySelector(".xh-copy-content") : null;
  var text = el ? el.textContent.trim() : "";
  if (!text) {
    var fallback = btn.parentElement && btn.parentElement.nextElementSibling;
    text = fallback ? fallback.textContent.trim() : "";
  }
  if (!text) { alert("没有找到可复制的文案"); return; }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      var original = btn.textContent;
      btn.textContent = "✅ 已复制";
      btn.style.color = "#10b981";
      setTimeout(function() { btn.textContent = original; btn.style.color = "var(--text-secondary)"; }, 2000);
    }).catch(function() { fallbackCopyXh(btn, text); });
  } else { fallbackCopyXh(btn, text); }
}

function fallbackCopyXh(btn, text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    var original = btn.textContent;
    btn.textContent = "✅ 已复制";
    btn.style.color = "#10b981";
    setTimeout(function() { btn.textContent = original; btn.style.color = "var(--text-secondary)"; }, 2000);
  } catch (e) { alert("复制失败，请手动选择复制"); }
  document.body.removeChild(ta);
}

function xhRegenerate() {
  if (!apiConfig || !apiConfig.apikey || apiConfig.apikey.length < 10) { showApiConfigPrompt(); return; }
  var feedback = document.getElementById("xh-regen-input").value.trim();
  if (!feedback) { alert("请输入优化意见"); return; }
  if (!xhState.results || !xhState.results.length) { alert("没有可优化的内容"); return; }
  var sysPrompt = "你是短视频文案优化专家。根据用户的优化意见，对原文案进行修改。只输出优化后的文案，不要解释。";
  var userPrompt = "优化意见：" + feedback + "\n\n" + xhNarrativeLogicRule() + "\n\n原文案：\n" + xhState.results.map(function(r, i) {
    return "【文案" + (i + 1) + "】" + r.duration + " - " + r.copyType + " - " + r.openingType + "\n" + r.content;
  }).join("\n\n---\n\n");
  sysPrompt = "你是短视频口播文案优化专家。根据用户的优化意见，对原文案进行修改。只输出优化后的口播文案正文，不要解释，不要标题，不要分析，不要模板说明。";
  userPrompt += "\n\n必须只输出优化后的口播文案正文。不要输出选题、开头类型、模板类型、分析、优化建议、标题、说明或编号清单。每行一句自然口语，方便直接复制拍摄。";
  var btn = document.getElementById("xh-regen-btn") || document.querySelector("#xh-results-content .sidebar-api-save");
  xhSetButton(btn, "重新生成中...", true);
  var regenLoading = document.getElementById("xh-regen-loading");
  if (regenLoading) regenLoading.style.display = "none";
  document.getElementById("xh-regen-result").style.display = "none";
  xuehuiCallAPI(sysPrompt, userPrompt, function(json) {
    xhSetButton(btn, "✨ 重新生成", false);
    var regenLoadingDone = document.getElementById("xh-regen-loading");
    if (regenLoadingDone) regenLoadingDone.style.display = "none";
    var result = typeof json === "string" ? json : (json.raw || json.content || json.text || JSON.stringify(json));
    var div = document.getElementById("xh-regen-result");
    div.innerHTML = '<div data-xh-card="regen" style="padding:12px;border-radius:8px;border:1px solid var(--cyan);background:rgba(0,229,255,.04)"><div style="font-size:11px;font-weight:600;color:var(--cyan);margin-bottom:6px">✅ 优化结果</div><div class="xh-copy-content" style="font-size:12px;line-height:1.6;color:var(--text-primary);white-space:pre-wrap">' + xhEscapeHtml(typeof compactResultText==="function"?compactResultText(result):result) + '</div><button onclick="copyXhResult(this)" style="margin-top:8px;background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 复制</button></div>';
    div.style.display = "";
  }, { temperature: 0.3, max_tokens: 8000 });
}

function xuehuiRecommendElements() {
  var industry = document.getElementById("xh-industry").value.trim();
  var audience = document.getElementById("xh-audience").value.trim();
  if (!industry || !audience) return;
  var prompt = "行业：" + industry + "\n人群：" + audience + "\n\n从以下8种爆款元素中推荐1-2个最适合的，只输出JSON数组：\n" + JSON.stringify(Object.keys(xhElementDetails));
  xuehuiCallAPI("你是爆款选题推荐专家。只输出JSON数组，不要markdown。", prompt, function(json) {
    var recs = xhParseJsonArray(json);
    if (!recs.length) return;
    var container = document.getElementById("xh-elements");
    if (!container) return;
    container.querySelectorAll(".select-chip .rec-badge").forEach(function(b) { b.remove(); });
    recs.forEach(function(key) {
      var chip = container.querySelector('.select-chip[data-val="' + key + '"]');
      if (chip && !chip.querySelector(".rec-badge")) {
        var badge = document.createElement("span");
        badge.className = "rec-badge";
        badge.textContent = "推荐";
        chip.appendChild(badge);
        chip.classList.add("recommended");
      }
    });
  }, { temperature: 0.3, max_tokens: 800 });
}

function xuehuiRecommendTemplates() {
  var industry = document.getElementById("xh-industry").value.trim();
  var audience = document.getElementById("xh-audience").value.trim();
  var container = document.getElementById("xh-templates");
  if (!container) return;
  var element = xhState.selectedTopic ? xhState.selectedTopic.element : "";
  var title = xhState.selectedTopic ? xhState.selectedTopic.title : "";
  var fallback = xhPickTemplateRecommendations(element, title);
  xhApplyTemplateRecommendations(fallback);
  if (!industry || !audience) return;
  var prompt = "行业：" + industry + "\n人群：" + audience + "\n选题：" + title + "\n选题元素：" + element + "\n\n从以下4种模板中推荐1-2个最适合的文案模板：讲故事类、共鸣型段子类、教知识类、晒过程类。\n要求：只输出JSON数组，例如：[\"讲故事类\",\"教知识类\"]。不要输出解释。";
  xuehuiCallAPI("你是文案模板推荐专家。只输出JSON数组，不要markdown。", prompt, function(json) {
    var recs = xhParseJsonArray(json);
    xhApplyTemplateRecommendations(recs.length ? recs : fallback);
  }, { temperature: 0.3, max_tokens: 800 });
}

function xhPickTemplateRecommendations(element, title) {
  var text = (element || "") + " " + (title || "");
  if (/怀旧|故事|头牌|具体|场景|经历|过程/.test(text)) return ["讲故事类", "晒过程类"];
  if (/荷尔蒙|对立|共鸣|情绪|吐槽|差别|反差|痛点/.test(text)) return ["共鸣型段子类", "讲故事类"];
  if (/成本|避坑|最差|猎奇|知识|方法|清单|教程/.test(text)) return ["教知识类", "共鸣型段子类"];
  return ["讲故事类", "教知识类"];
}

function xhNormalizeTemplateName(item) {
  var text = typeof item === "string" ? item : (item && (item.name || item.template || item.type || item.title)) || "";
  if (text.indexOf("故事") >= 0) return "讲故事类";
  if (text.indexOf("共鸣") >= 0 || text.indexOf("段子") >= 0) return "共鸣型段子类";
  if (text.indexOf("知识") >= 0 || text.indexOf("干货") >= 0 || text.indexOf("教程") >= 0) return "教知识类";
  if (text.indexOf("过程") >= 0 || text.indexOf("记录") >= 0) return "晒过程类";
  return text;
}

function xhApplyTemplateRecommendations(recs) {
  var container = document.getElementById("xh-templates");
  if (!container) return;
  container.querySelectorAll(".select-chip .rec-badge").forEach(function(b) { b.remove(); });
  container.querySelectorAll(".select-chip.recommended").forEach(function(c) { c.classList.remove("recommended"); });
  var seen = {};
  (recs || []).map(xhNormalizeTemplateName).forEach(function(key) {
    if (seen[key]) return;
    seen[key] = true;
    var chip = container.querySelector('.select-chip[data-val="' + key + '"]');
    if (chip && !chip.querySelector(".rec-badge")) {
      var badge = document.createElement("span");
      badge.className = "rec-badge";
      badge.textContent = "推荐";
      chip.appendChild(badge);
      chip.classList.add("recommended");
    }
  });
}

function xuehuiRecommendOpenings() {
  var industry = document.getElementById("xh-industry").value.trim();
  var audience = document.getElementById("xh-audience").value.trim();
  var tmpls = xhState.templates || [];
  if (!industry || !audience || !tmpls.length) return;
  var prompt = "行业：" + industry + "\n人群：" + audience + "\n选题：" + (xhState.selectedTopic ? xhState.selectedTopic.title : "") + "\n已选模板：" + tmpls.join("、") + "\n\n从以下开头类型推荐1-3个，只输出JSON数组：\n" + JSON.stringify(xhOpenTypes.map(function(o) { return o.name; }));
  xuehuiCallAPI("你是短视频开头推荐专家。只输出JSON数组，不要markdown。", prompt, function(json) {
    var recs = xhParseJsonArray(json);
    var container = document.getElementById("xh-openings");
    if (!container || !recs.length) return;
    container.querySelectorAll(".select-chip .rec-badge").forEach(function(b) { b.remove(); });
    recs.forEach(function(key) {
      var chip = container.querySelector('.select-chip[data-val="' + key + '"]');
      if (chip && !chip.querySelector(".rec-badge")) {
        var badge = document.createElement("span");
        badge.className = "rec-badge";
        badge.textContent = "推荐";
        chip.appendChild(badge);
        chip.classList.add("recommended");
      }
    });
  }, { temperature: 0.3, max_tokens: 800 });
}

function xuehuiBackTo(step) {
  ["xh-step1", "xh-step2", "xh-step3", "xh-step4"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = "";
  });
  var results = document.getElementById("xh-results");
  if (results && step !== "xh-results") results.style.display = "none";
}

function xuehuiReset() {
  document.querySelectorAll("#xh-elements .rec-badge,#xh-templates .rec-badge,#xh-openings .rec-badge").forEach(function(b) { b.remove(); });
  document.getElementById("xh-topics-list").innerHTML = "";
  document.getElementById("xh-results-content").innerHTML = "";
  document.getElementById("xh-industry").value = "";
  document.getElementById("xh-audience").value = "";
  document.querySelectorAll("#xh-elements .select-chip.selected,#xh-templates .select-chip.selected,#xh-openings .select-chip.selected").forEach(function(c) { c.classList.remove("selected"); });
  xhState = { industry: "", audience: "", elements: [], topics: [], selectedTopic: null, templates: [], openings: [], selectedOpenings: [], results: [] };
  ["xh-step2", "xh-step3", "xh-step4"].forEach(function(id) { var el = document.getElementById(id); if (el) el.style.display = ""; });
  var results = document.getElementById("xh-results");
  if (results) results.style.display = "none";
  xuehuiRenderOpenings();
}

function xhNarrativeLogicRule() {
  return "逻辑连贯硬性要求：content 必须是一条连续口播链路，不能把开头、观点、段子、金句机械拼接。推荐链路：开头钩子 -> 具体场景 -> 冲突/痛点 -> 原因/误区 -> 观点/方法 -> 具体价值 -> 情绪或金句收束 -> 自然行动。每一段必须承接上一段：要么解释上一段，要么推进下一步，要么形成转折。不要突然换话题，不要每句都像标题，不要只罗列观点或价值点。输出前自检：如果句子顺序可以随意调换，说明逻辑不强，必须先重写。";
}

function xhBuildGenerationPrompt(topic, openingRules, tmplRules) {
  return "你是短视频爆款文案生成专家，基于薛辉内容体系。请根据用户选择的文案模板和开头类型，为指定选题生成可直接口播的完整文案。\n\n" +
    "选题：" + topic.title + "\n选题元素：" + topic.element + "\n\n" +
    "文案模板规则：\n" + tmplRules + "\n\n" +
    "开头类型规则：\n" + openingRules + "\n\n" +
    "生成要求：\n" +
    "1. 每种“模板类型 + 开头类型”组合，输出90秒标准版和2分钟深度版各1条。\n" +
    "2. 必须严格执行字数范围：90秒标准版控制在250-350字；2分钟深度版控制在500-650字。少于下限或超过上限都不合格，输出前必须自检并自行重写。\n" +
    "3. 口语化，适合真人口播，每句话都有信息量，不要写成论文或产品说明书。\n" +
    "4. 开头必须符合所选开头类型，前3秒有钩子。\n" +
    "5. 有自然转化引导，但不要生硬叫卖。\n" +
    "6. content字段只能放可直接朗读的口播正文，不要放分析、标题、分镜、说明或字数统计。\n" +
    "7. 严格输出JSON对象：{\"results\":[{\"copyType\":\"讲故事类\",\"openingType\":\"圈定人群\",\"duration\":\"90秒标准\",\"content\":\"文案正文\"}]}";
}

function xuehuiGenerate() {
  if (!apiConfig || !apiConfig.apikey || apiConfig.apikey.length < 10) { showApiConfigPrompt(); return; }
  if (!xhState.templates || !xhState.templates.length) {
    xhState.templates = Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c) { return c.dataset.val; });
  }
  if (!xhState.selectedTopic) { alert("请先选择一个选题"); return; }
  if (!xhState.templates || !xhState.templates.length) { alert("请至少选择一个文案模板"); return; }
  xhState.selectedOpenings = Array.from(document.getElementById("xh-openings").querySelectorAll(".select-chip.selected")).map(function(c) { return c.dataset.val; });
  if (!xhState.selectedOpenings.length) { alert("请至少选择一个开头类型"); return; }
  var topic = xhState.selectedTopic;
  var openingRules = xhState.selectedOpenings.map(function(n) { return "【" + n + "】" + (xhLocalOpeningDetails[n] || "按该开头类型生成"); }).join("\n");
  var tmplRules = xhState.templates.map(function(n) { return "【" + n + "】" + (xhLocalTemplateDetails[n] || "按该模板类型生成"); }).join("\n");
  var sysPrompt = xhBuildGenerationPrompt(topic, openingRules, tmplRules) + "\n\n" + xhNarrativeLogicRule();
  var userPrompt = "行业：" + xhState.industry + "\n目标人群：" + xhState.audience + "\n选题：" + topic.title + "\n元素：" + topic.element + "\n模板：" + xhState.templates.join("、") + "\n开头：" + xhState.selectedOpenings.join("、");
  var btn = document.querySelector("#xh-step4 .chat-form-submit");
  xhSetButton(btn, "生成中...", true);
  xuehuiCallAPI(sysPrompt, userPrompt, function(json) {
    xhSetButton(btn, "✍️ 生成爆款文案", false);
    var results = json.results || [];
    if (!Array.isArray(results) || !results.length) { alert("生成失败，请重试"); return; }
    xhState.results = results;
    xhRenderResults(results);
  }, { response_format: { type: "json_object" }, temperature: 0.35, max_tokens: 12000 });
}

function xhRenderResults(results) {
  var container = document.getElementById("xh-results-content");
  var grouped = {};
  results.forEach(function(r) {
    var key = r.copyType || "其他文案";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(r);
  });
  var html = "";
  for (var g in grouped) {
    html += '<div style="margin-bottom:12px"><div style="font-size:13px;font-weight:700;color:var(--purple);margin-bottom:8px;padding:6px 12px;background:rgba(168,85,247,.08);border-radius:8px">' + xhEscapeHtml(g) + "</div>";
    grouped[g].forEach(function(r) {
      var charCount = r.content ? r.content.length : 0;
      var isShort = String(r.duration || "").indexOf("90") >= 0;
      var minCount = isShort ? 250 : 500;
      var maxCount = isShort ? 350 : 650;
      var countColor = (charCount < minCount || charCount > maxCount) ? "#ef4444" : "#10b981";
      html += '<div data-xh-card="result" style="padding:12px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-card);margin-bottom:8px">' +
        '<div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;flex-wrap:wrap"><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(0,229,255,.1);color:var(--cyan)">' + xhEscapeHtml(r.duration || "") + ' <span style="font-size:9px;color:' + countColor + '">(' + charCount + '字)</span></span><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(168,85,247,.1);color:var(--purple)">' + xhEscapeHtml(r.openingType || "") + '</span><span style="flex:1"></span><button onclick="copyXhResult(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="复制全文">📋 复制</button><button onclick="expandCopy(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="扩写">📝 扩写</button></div>' +
        '<div class="xh-copy-content" style="font-size:12px;line-height:1.6;color:var(--text-primary);white-space:pre-wrap">' + xhEscapeHtml(typeof compactResultText==="function"?compactResultText(r.content || ""):(r.content || "")) + '</div><div class="xh-expand-area" style="display:none;margin-top:8px;padding:8px;border-radius:8px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><input type="number" class="xh-expand-input" placeholder="请输入你想要扩写的字数..." style="flex:1;padding:4px 8px;border-radius:6px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px" min="100"><button onclick="doExpandCopy(this)" style="background:var(--purple);color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;font-size:11px;white-space:nowrap">确认扩写</button></div><div class="xh-expand-result" style="font-size:12px;line-height:1.6;color:var(--text-primary);white-space:pre-wrap;margin-top:6px;display:none"></div><div class="xh-expand-loading" style="display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:8px">扩写中...</div></div></div>';
    });
    html += "</div>";
  }
  html += '<div style="margin-top:16px;padding:12px;border-radius:10px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:8px">🔄 优化意见后重新生成</div><textarea id="xh-regen-input" placeholder="输入优化意见，例如：语气更活泼、增加产品功效描述、缩短到200字..." style="width:100%;min-height:60px;padding:8px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px;resize:vertical;margin-bottom:8px;font-family:inherit"></textarea><button id="xh-regen-btn" onclick="xhRegenerate()" class="sidebar-api-save" style="width:100%">✨ 重新生成</button><div id="xh-regen-result" style="margin-top:10px;display:none"></div><div id="xh-regen-loading" style="display:none"></div></div>';
  container.innerHTML = html;
  document.getElementById("xh-results").style.display = "";
}

document.addEventListener("DOMContentLoaded", function() {
  xuehuiRenderOpenings();
});
