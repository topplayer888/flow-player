var sectionModes=[-1,-1,-1];var sectionSavedKey=["","",""];var historyStack=[];try{var saved=localStorage.getItem("fp_history");if(saved){historyStack=JSON.parse(saved)}}catch(e){}
var sections=[{title:"爆款脚本创作",subtitle:"Viral Script Creator",accent:"爆款",desc:"四大内容体系，精准产出爆款短视频脚本",modes:[{name:"薛辉内容体系",desc:"薛辉方法论 · 短视频爆款脚本的创作框架",icon:"🔥"},{name:"看见内容体系",desc:"看见方法论 · 内容触达与转化的核心逻辑",icon:"👁️"},{name:"对话式（采访）",desc:"对话式创作 · 采访体脚本的流量密码",icon:"🎤"},{name:"爆款仿写",desc:"爆款仿写 · 对标爆款文案的结构化仿写生成",icon:"✍️"}]},{title:"广告创意",subtitle:"Ad Creative Studio",accent:"创意",desc:"三大创意体系，打造高转化广告素材",modes:[{name:"马源内容体系",desc:"马源方法论 · 广告创意的结构化表达",icon:"🚀"},{name:"大川内容体系",desc:"大川方法论 · 用户心智与创意触点",icon:"🌊"},{name:"铁甲内容体系",desc:"铁甲方法论 · 硬核卖点的创意包装",icon:"🛡️"}]},{title:"直播策略",subtitle:"Live Stream Strategy",accent:"策略",desc:"两大直播方法论，掌控直播间流量引擎",modes:[{name:"江导直播方法论",desc:"江导体系 · 直播间人货场全链路策略",icon:"🎯"},{name:"kyrie直播方法论",desc:"kyrie体系 · 数据驱动的直播增长模型",icon:"📈"}]}],currentSection=0,currentMode=0;

var agents={
"1-0":{
name:"马源内容·引流脚本生成专家",
section:"广告创意 / 马源内容体系",
icon:"🚀",
features:"分类·聚焦·突破\n6种脚本手法 × 6种视觉手法\n生成可直接拍摄的引流脚本",
systemPrompt:"# 角色定义\n\n你是一位顶尖的短视频电商内容策略专家，深度掌握「马源内容培训」完整科学体系。\n\n你的核心能力是：根据用户提供的产品信息和营销目标，运用「分类·聚焦·突破」的方法论，为用户生成可直接用于拍摄的高质量引流脚本。\n\n# 核心方法论\n\n## 顶层四要素\n策略 = 白话需求 + 核心表达\n人群：内容人群 ≠ 工具人群\n类型：混剪/真人口播/机制/剧情/VLOG等\n框架 = 结构 + 显性特征\n\n## 6种脚本手法\nUSP：找到用户在意但未被满足的差异化价值\n痛点解决：显性痛点+隐性痛点\n品类PK：AABB结构，A有问题→B设计不同\n场景：45度仰角，时节/使用/代入感场景\n权威：明星/IP/专家/特定场所背书\n细节：用数词/名词而非形容词\n\n## 6种视觉手法\n同框：属性传递效应\n超级效果：不是99分是101分\n蒙太奇：暗示/叙事/微剧情\n符号动作：转化+停留\n重复：信任叠加\n共情：好洞察=少被谈及的集体潜意识\n\n## 工作流程\n第一步：收集产品信息\n第二步：确定策略\n第三步：选择脚本手法（1-2种）\n第四步：匹配视觉手法（1-2种）\n第五步：输出完整脚本（根据视频时长范围调整脚本节奏：30秒以内紧凑聚焦、30-60秒标准结构、60秒以上深度展开）\n第六步：给出专项建议\n\n## 金句\n- 分类、聚焦、突破\n- 好的痛点都是大白话\n- 外壳1-2秒抓眼球，内核留住用户\n- GMV = 产品分 × 内容分",
opening:"你好！我是基于马源内容体系的引流脚本生成专家 🎯\n\n我可以帮你根据产品和需求，生成可直接拍摄的短视频引流脚本。\n\n这套体系包含：\n• 6种脚本手法（USP / 痛点解决 / 品类PK / 场景 / 权威 / 细节）\n• 6种视觉手法（同框 / 超级效果 / 蒙太奇 / 符号动作 / 重复 / 共情）\n• 4大顶层要素（策略 / 人群 / 类型 / 框架）\n\n为了给你最精准的脚本，我需要了解3个关键信息：\n\n1. 你的产品是什么？（品类+核心卖点）\n2. 目标人群是谁？（用他们的话说他们的痛点）\n3. 本次主要目标？（种草 / 转化 / 测新 / 品牌）\n\n你可以直接告诉我，我会一步步引导你，直到产出可执行的脚本 ✨",
questions:["我的产品是XXX，帮我生成引流脚本","我想做品类PK风格的脚本，帮我分析竞品","我的产品没有差异化卖点怎么办？","什么是超级效果？有哪些案例？","什么是符号动作？","帮我分析一下我的目标人群","什么是场景45度仰角？","帮我做痛点挖掘"]
}
,
"1-2":{
name:"铁甲内容·广告创意生成专家",
section:"广告创意 / 铁甲内容体系",
icon:"🛡️",
features:"12种钩子×5种人设×5种风格\n智能推荐→分镜脚本→迭代优化",
formOnly:true,
systemPrompt:"你是短视频营销文案生成专家，基于铁甲内容体系。你熟悉12种开头钩子设计方法、可视化呈现原则。",
opening:"",
questions:[]
},
"0-0":{
name:"薛辉内容·爆款选题生成专家",
section:"爆款脚本创作 / 薛辉内容体系",
icon:"🔥",
features:"8大爆款元素 × 4种文案模板 × 36种开头类型|选题→开头钩子→爆款文案 三步生成",
formOnly:true,
systemPrompt:"你是短视频爆款内容策略专家，基于薛辉内容培训体系为用户生成爆款选题、开头钩子和完整文案。",
opening:"",
questions:[]
},
"0-3":{
name:"爆款仿写·短视频爆款复刻专家",
section:"爆款脚本创作 / 爆款仿写",
icon:"✍️",
features:"文案拆解·爆款分析\n两种仿写模式：原汁原味 & 自定义定位\n结构保真·人设对齐·行业平移",

systemPrompt:"# 角色定义\n\n你是一个专业的短视频爆款仿写专家。你的核心任务是将用户提供的短视频（链接或文件）转化为逐字稿，并基于逐字稿进行两种模式的仿写创作。\n\n## 前置能力\n1. **视频解析与转写**：能够从短视频链接或上传的视频文件中提取音频，并准确转写为带时间戳的逐字稿。若无法直接解析链接，请明确告知用户，并引导其上传视频文件或直接粘贴文案。\n2. **爆款要素分析**：自动分析原视频的行业属性、IP人设定位、内容结构、情绪节奏、开场钩子、金句、互动引导等关键要素。\n\n## 工作流程\n### 第一步：获取与转写\n- 如果用户提供的是链接，先尝试获取视频内容，转写为逐字稿。\n- 如果用户上传视频文件，直接进行转写。\n- 如果因技术限制无法处理，请礼貌说明，并请用户直接粘贴文案进行仿写。\n- 输出完整的逐字稿（格式：[时间戳] 文案内容），并附上对原视频的简要分析，包括：\n  - 行业/赛道\n  - IP人设定位（如：严厉的创业导师、邻家美妆达人、专业且幽默的律师等）\n  - 内容结构（如：痛点引入+错误示范+正确方法+号召行动）\n  - 情绪曲线与节奏变化\n  - 关键钩子/金句\n\n### 第二步：确认仿写模式\n在完成逐字稿和分析后，询问用户选择哪种仿写模式：\n- **模式A：原汁原味仿写**。完全保留原视频的行业赛道和IP人设定位，用相同风格和结构写一条同主题或相近主题的爆款文案。\n- **模式B：自定义定位仿写**。请用户提供新的行业赛道和/或IP人设定位（例如：我想做一个面向新手宝妈的家庭理财科普号，人设是温柔耐心的邻家姐姐）。你基于原视频的爆款结构，套用到用户指定的新定位上进行仿写。\n\n### 第三步：执行仿写并输出\n根据用户选择的模式，生成仿写文案。文案必须：\n- 完整对应原视频的结构和节奏。\n- 语气、用词与人设定位完全一致。\n- 保留原作的钩子逻辑和高转化结尾方式。\n- 在文案后用简短的话说明仿写逻辑（例如：如何将原视频的痛点平移到新赛道，如何保留了3秒抓人钩子等）。\n\n## 仿写原则（极其重要）\n1. **结构保真**：开场方式、转折点、情绪高潮、行动号召的次序和功能必须一一复刻。\n2. **人设对齐**：每个句子都要符合目标人设的口吻，不能跑人设。\n3. **行业平移**（模式B）：将原视频的专业概念、场景、案例，全部精准替换为新行业的等效物。例如，把流量换成客户，把转化率换成到店率。\n4. **法律与道德**：不仿写任何涉及医疗承诺、金融保本收益、虚假宣传等违规内容，碰到此类请求直接拒绝并提示风险。\n\n## 输出格式范例\n收到逐字稿后，你应先输出：\n`\n📝 **逐字稿**\n[00:00] ...\n[00:03] ...\n...\n🔍 **原视频分析**\n· 行业：...\n· IP人设：...\n· 结构：...\n· 钩子：...\n· 情绪节奏：...\n`\n然后询问模式，并按以下格式输出仿写结果：\n`\n✍️ **仿写文案（模式A/B）**\n[仿写完整文案，可注明建议的画面或情绪标注]\n\n💡 **仿写逻辑说明**\n...\n`",
opening:"嗨！我是你的爆款仿写助手 👋\n\n请直接把你要仿写的短视频逐字文案发给我，我会：\n\n1️⃣ 拆解分析——行业、人设、结构、钩子、情绪节奏\n2️⃣ 让你选择仿写模式——原汁原味 or 自定义定位\n3️⃣ 生成仿写文案\n\n直接粘贴文案，我们开始吧！",
questions:["我有一条爆款文案，帮我拆解和仿写","我想用模式A原汁原味仿写","我想自定义定位仿写（模式B）","什么是结构保真和行业平移？","帮我分析这篇文案的爆款逻辑"]
},
"2-0":{
name:"江导直播·增长教练",
section:"直播策略 / 江导直播方法论",
icon:"🎯",
features:"四根支柱公式|诊断5问𘎧信念挖掘𘎧话术生成𘎧定位设计|诊断报告自动输出",
systemPrompt:"# 角色定义\n\n你是直播增长教练，不是知识库、不是客服、不是顾问。\n\n你以江导直播方法论为核心方法论，帮助直播操盘手和IP解决四类问题：\n- 定位问题：直播间打谁、讲什么、卖什么\n- 流量问题：状态打不开、进人留不住、在线上不去\n- 转化问题：不敢卖、卖不好、信念不笃定\n- 运营问题：新IP如何起手、直播间如何调\n\n## 说话风格\n语气：直接、不绕弯子、先说结论再说原因\n专业：随时引用江导方法论的框架和术语\n温度：有同理心，先理解用户处境再说问题\n\n## 核心方法论\n### 四根支柱公式\n直播成功 = 定位 x 状态 x 场外重心 x 信念\n\n| 支柱 | 核心概念 | 优先级判断 |\n|------|---------|-----------|\n| 定位 | 主题（痛点）+ 话题（弱点）+ 产品（答案） | 直播间打不开人/成交低时必查 |\n| 状态 | 情绪开关 -> 四档状态 | 在线<60人时优先解决 |\n| 场外 | 重心永远在场外新粉 | 留人线水平/越播越窄时必查 |\n| 信念 | 我有/我能/我信/我想 四维度 | 不敢卖/推不动时必查 |\n\n### 四个核心原理\n1. 痛点决定成交效率，弱点决定流量上限\n2. 在线<60人时，数据分析无意义\n3. 直播重心永远在场外新粉\n4. 卖不好的根因是信念不足\n\n### 诊断优先级\nStep 1：问在线人数（<60先解决状态）\nStep 2：问留人线趋势（水平不动->老粉陷阱）\nStep 3：问推产品时的状态（不敢推->信念问题）\nStep 4：问直播内容框架\n\n## 诊断工具箱\n### 快速诊断5问\nQ1：现在直播一般在线多少人？\nQ2：进来的人留得住吗？\nQ3：推产品的时候状态怎么样？\nQ4：这个状态持续多久了？\nQ5：你觉得主要卡在哪？\n\n### 问题分类\n- 状态型：在线<60 -> 表达心法\n- 流量型：进人慢 -> 定位阵法\n- 老粉陷阱：增长停 -> 场外重心\n- 不敢卖型：推产品弱 -> 转化刀法\n- 卖不好型：没人买 -> 定位+信念\n- 框架型：不知道讲什么 -> 碎片思考\n\n## 输出格式\n诊断报告：【基本情况】【问题定位】【核心建议】【注意事项】【下一步建议】\n定位设计：3层结构（主题/话题/产品）+ 5次为什么\n话术生成：全文/使用时机/注意事项/变体\n信念挖掘：卡点->递进问题->信念档案\n\n## 禁止\n- 不说\"这个问题很常见\"\n- 不说\"按我说的做一定有效\"\n- 不一次给超过3个改动建议",
opening:"你好！我是江导直播增长教练。\n\n我能帮你解决：\n定位问题-直播间打谁讲什么卖什么\n流量问题-状态打不开进人留不住\n转化问题-不敢卖卖不好\n运营问题-新IP如何起手\n\n你现在有遇到什么直播上的问题吗？告诉我，我帮你解决。",
questions:["我的直播间一直在线二三十个人，怎么都上不去","直播间在线还行但就是卖不动","直播半年了成交越来越少","一到带货环节就卡住","帮我设计一个直播定位","帮我生成一段带货话术","我感觉不敢卖，帮我挖一下信念"]
}
};
function goHome(){if(chatOpen){closeChat()}currentSection=0;currentMode=-1;document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active")});var nav=document.querySelector('.nav-item[data-section="0"]');if(nav)nav.classList.add("active");renderContent();renderRightModes();renderHistory()}function renderContent(){var _s=currentSection;
var ca=document.getElementById("content-area");
ca.classList.add("fading");
setTimeout(function(){
var e=sections[_s];
var n='<div class="content-header"><div class="content-title"><span class="accent">'+e.accent+"</span>"+e.title.replace(e.accent,"")+'</div><div class="content-desc">'+e.subtitle+" · "+e.desc+'</div></div><div class="content-loading"><span></span><span></span><span></span></div><div class="mode-grid">'+e.modes.map(function(m,i){
var ak=_s+"-"+i,has=!!agents[ak];
return '<div class="mode-card'+(has?' active-agent':'')+'" data-mode="'+i+'" style="animation-delay:'+(.1+i*.12)+'s"><div class="mode-card-corner"></div><div class="mode-card-scanline"></div><div class="mode-card-inner"><div class="mode-card-top"><div class="mode-card-icon">'+m.icon+'</div><div class="mode-card-index">NO.0'+(i+1)+'</div></div><div class="mode-card-name">'+m.name+'</div>'+(has?'<div class="mode-card-features-area"><div class="mode-card-features-text">'+(agents[ak].features||'')+'</div></div>':'')+'<div class="mode-card-desc">'+m.desc+'</div><div class="mode-card-footer"><div class="mode-card-status'+(has?' active':'')+'"><span class="mode-card-dot'+(has?' active':'')+'"></span>'+(has?'已激活':'待更新')+'</div><div class="mode-card-enter">进入 <span class="mode-card-enter-arrow">→</span></div></div></div></div>';
}).join("")+"</div>";
ca.innerHTML=n;ca.classList.remove("fading");
var overall=document.getElementById("stat-overall");
var hasAny=false;
e.modes.forEach(function(m,i){if(agents[_s+"-"+i])hasAny=true});
overall.textContent=hasAny?"已激活":"待更新";
overall.className="stat-value "+(hasAny?"":"gold");
document.getElementById("stat-modes").textContent=e.modes.length;
document.getElementById("stat-systems").textContent=new Set(e.modes.map(function(m){return m.name})).size;
setTimeout(function(){
var ld=ca.querySelector(".content-loading");if(ld)ld.remove();
document.querySelectorAll(".mode-card").forEach(function(card){
card.addEventListener("click",function(){
var modeIdx=parseInt(card.dataset.mode);
var ak=_s+"-"+modeIdx;
if(agents[ak]){sectionModes[_s]=modeIdx;openChat(_s,modeIdx)}
else{currentMode=modeIdx;renderContent();renderRightModes()}
});
});
},300);
renderRightModes();
},250);
}

function addHistory(section,mode){var agent=agents[section+"-"+mode];if(!agent)return;historyStack=historyStack.filter(function(h){return h.section!==section||h.mode!==mode});historyStack.unshift({section:section,mode:mode,name:agent.name,icon:agent.icon,msgs:chatMessages.slice(0)});if(historyStack.length>5)historyStack.pop();try{localStorage.setItem("fp_history",JSON.stringify(historyStack))}catch(e){}renderHistory()}function renderHistory(){var list=document.getElementById("history-list");if(!list)return;list.innerHTML=historyStack.map(function(h){return '<div class="history-item" onclick="goHistory('+h.section+','+h.mode+')"><span class="history-icon">'+h.icon+'</span>'+h.name+'</div>'}).join("")||'<div style="font-size:10px;color:var(--text-muted);padding:4px">暂无记录</div>'}function goHistory(section,mode){if(currentSection!==section){document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active")});var nav=document.querySelector('.nav-item[data-section="'+section+'"]');if(nav)nav.classList.add("active");currentSection=section;sectionModes[currentSection]=mode;currentMode=mode}if(chatOpen){closeChat()}sectionSavedKey[currentSection]=section+"-"+mode;var he=null;for(var i=0;i<historyStack.length;i++){if(historyStack[i].section===section&&historyStack[i].mode===mode){he=historyStack[i];break}}openChat(section,mode,he?he.msgs:null)}function renderRightModes(){
var e=sections[currentSection],t=document.getElementById("right-modes");
t.innerHTML=e.modes.map(function(m,i){
var ak=currentSection+"-"+i,has=!!agents[ak];
return '<div class="right-mode-item'+(i===currentMode?" current":"")+'" data-mode="'+i+'"><div class="right-mode-label"><span class="right-mode-dot"></span>'+m.name+'</div><span class="right-mode-arrow">→</span></div>';
}).join("");
t.querySelectorAll(".right-mode-item").forEach(function(item){
item.addEventListener("click",function(){
var modeIdx=parseInt(item.dataset.mode);
var ak=currentSection+"-"+modeIdx;
if(agents[ak]){sectionModes[currentSection]=modeIdx;openChat(currentSection,modeIdx)}
else{currentMode=modeIdx;renderContent()}
});
});
}

document.querySelectorAll(".nav-item").forEach(function(e){
e.addEventListener("click",function(){
if(currentSection===parseInt(e.dataset.section))return;
document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active","entering")});
e.classList.add("active","entering");
setTimeout(function(){e.classList.remove("entering")},600);
sectionSavedKey[currentSection]=chatOpen?chatKey:"";currentSection=parseInt(e.dataset.section);closeMobileMenu();if(sectionSavedKey[currentSection]){var parts=sectionSavedKey[currentSection].split("-");var m=parseInt(parts[1]);currentMode=m;sectionModes[currentSection]=m;renderRightModes();openChat(parseInt(parts[0]),m)}else{if(chatOpen){closeChat()}renderContent();renderRightModes();renderHistory()}
});
});
var canvas=document.getElementById("bg-canvas"),ctx=canvas.getContext("2d"),particles=[],rainDrops=[],gridOffset=0,sparks=[],mx=-1,my=-1,pmx=-1,pmy=-1;
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;var fc=document.getElementById("fx-canvas");if(fc){fc.width=window.innerWidth;fc.height=window.innerHeight;fxCtx=fc.getContext("2d")}initRain()}
window.addEventListener("resize",resize);resize();
function drawGrid(){var s=50;ctx.strokeStyle=themeWasteland?"rgba(180,150,100,0.04)":"rgba(255,255,255,0.02)";ctx.lineWidth=.5;ctx.beginPath();for(var x=0;x<=canvas.width;x+=s){ctx.moveTo(x,0);ctx.lineTo(x,canvas.height)}for(var y=gridOffset%s-s;y<=canvas.height+s;y+=s){ctx.moveTo(0,y);ctx.lineTo(canvas.width,y)}ctx.stroke()}
function drawAccentLines(){var s=50,o=gridOffset%s;for(var y=-s+o;y<=canvas.height+s;y+=s*5){var a=.03+.02*Math.sin(y*.01+gridOffset*.003);ctx.strokeStyle=themeWasteland?"rgba(210,160,60,"+a+")":"rgba(0,229,255,"+a+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke()}for(var y=-s*2+o;y<=canvas.height+s*2;y+=s*7){var a2=.025+.015*Math.sin(y*.015+gridOffset*.005+1);ctx.strokeStyle=themeWasteland?"rgba(200,150,80,"+a2+")":"rgba(255,160,30,"+a2+")";ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke()}}
function initRain(){rainDrops=[];var cols=Math.floor(canvas.width/28);for(var i=0;i<cols;i++){rainDrops.push({x:i*28+Math.random()*10,y:Math.random()*canvas.height,speed:1.2+Math.random()*2.5,len:6+Math.floor(Math.random()*16),bright:Math.random()>.85,phase:Math.random()*100})}}
function Particle(){this.reset();this.y=Math.random()*canvas.height}
Particle.prototype.reset=function(){this.x=Math.random()*canvas.width;this.y=canvas.height+10;this.size=Math.random()*2.5+.5;this.speed=Math.random()*.8+.3;this.opacity=Math.random()*.35+.1;this.hue=themeWasteland?(Math.random()>.5?35:Math.random()>.4?30:Math.random()>.5?25:45):(Math.random()>.55?190:Math.random()>.4?270:Math.random()>.5?35:20);this.glow=Math.random()>.7}
Particle.prototype.update=function(){this.y-=this.speed;if(this.y<-10)this.reset()}
Particle.prototype.draw=function(){var c="hsla("+this.hue+","+(themeWasteland?"70%":"90%")+","+(themeWasteland?"50%":"60%")+","+this.opacity+")";if(this.glow){ctx.shadowColor=c;ctx.shadowBlur=6}ctx.fillStyle=c;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,2*Math.PI);ctx.fill();ctx.shadowBlur=0}
for(var i=0;i<150;i++)particles.push(new Particle);
initRain();
function LightningBolt(x1,y1,x2,y2,life,displace){this.segments=[];this.life=life;this.maxLife=life;this._build(x1,y1,x2,y2,displace)}
LightningBolt.prototype._build=function(x1,y1,x2,y2,d){var dx=x2-x1,dy=y2-y1,dist=Math.sqrt(dx*dx+dy*dy);if(dist<d||dist<8){this.segments.push({x1:x1,y1:y1,x2:x2,y2:y2});return}var mx=(x1+x2)/2+(Math.random()-.5)*d*.8,my=(y1+y2)/2+(Math.random()-.5)*d*.8;this._build(x1,y1,mx,my,d*.55);this._build(mx,my,x2,y2,d*.55);if(Math.random()<.35){var bx=mx+(Math.random()-.5)*d*.6,by=my+(Math.random()-.5)*d*.6;this.segments.push({x1:mx,y1:my,x2:bx,y2:by})}}
LightningBolt.prototype.draw=function(){if(this.life<=0)return;var a=this.life/this.maxLife;var w=a*1.5+.5;ctx.lineWidth=w;ctx.lineCap="round";ctx.shadowBlur=20+25*a;ctx.shadowColor=themeWasteland?"rgba(200,150,80,"+a+")":"rgba(80,180,255,"+a+")";ctx.strokeStyle=themeWasteland?"rgba(220,180,100,"+Math.min(a*1.2,1)+")":"rgba(100,200,255,"+Math.min(a*1.2,1)+")";ctx.beginPath();for(var i=0;i<this.segments.length;i++){var s=this.segments[i];ctx.moveTo(s.x1,s.y1);ctx.lineTo(s.x2,s.y2)}ctx.stroke();ctx.lineWidth=w*.5;ctx.shadowBlur=8+12*a;ctx.shadowColor=themeWasteland?"rgba(240,200,140,"+a+")":"rgba(180,220,255,"+a+")";ctx.strokeStyle=themeWasteland?"rgba(255,220,160,"+Math.min(a*1.1,1)+")":"rgba(200,240,255,"+Math.min(a*1.1,1)+")";ctx.beginPath();for(var i=0;i<this.segments.length;i++){var s=this.segments[i];ctx.moveTo(s.x1,s.y1);ctx.lineTo(s.x2,s.y2)}ctx.stroke();ctx.lineWidth=w*.2;ctx.shadowBlur=3+6*a;ctx.shadowColor=themeWasteland?"rgba(255,240,200,"+a+")":"rgba(255,255,255,"+a+")";ctx.strokeStyle=themeWasteland?"rgba(255,240,200,"+a+")":"rgba(255,255,255,"+a+")";ctx.beginPath();for(var i=0;i<this.segments.length;i++){var s=this.segments[i];ctx.moveTo(s.x1,s.y1);ctx.lineTo(s.x2,s.y2)}ctx.stroke();ctx.shadowBlur=0;ctx.lineCap="butt"}
LightningBolt.prototype.update=function(){this.life--}
function spawnLightning(x,y,tx,ty,life,d){var dx=(tx||0)-x,dy=(ty||0)-y,dist=Math.sqrt(dx*dx+dy*dy);var l=life||10+Math.floor(Math.random()*8);var displace=d||Math.max(dist*.3,15);if(!tx||dist<5){tx=x+(Math.random()-.5)*30;ty=y+(Math.random()-.5)*30;displace=10}sparks.push(new LightningBolt(x,y,tx,ty,l,displace))}
var rainChars="0123456789ABCDEFabcdef01";
function drawRain(){ctx.font="13px Courier New,monospace";for(var r=0;r<rainDrops.length;r++){var d=rainDrops[r];d.phase+=d.speed*.15;for(var c=0;c<d.len;c++){var cy=d.y-c*20;if(cy<0||cy>canvas.height)continue;var chIdx=Math.floor((d.phase+c*3)%rainChars.length);var ch=rainChars[chIdx];var alpha=c==0?.9:c==1?.6:Math.max(0,(.4-c*.04));if(d.bright)alpha*=1.4;var hue=themeWasteland?(c==0?35:c<3?30:Math.random()>.5?25:40):(c==0?120:c<3?180:Math.random()>.5?190:35);ctx.fillStyle=themeWasteland?("hsla("+hue+",50%,"+(35+c*4)+"%,"+alpha+")"):("hsla("+hue+",80%,"+(50+c*3)+"%,"+alpha+")");if(c==0){ctx.shadowColor=themeWasteland?("hsla("+hue+",70%,45%,"+alpha+")"):("hsla("+hue+",100%,70%,"+alpha+")");ctx.shadowBlur=themeWasteland?2:8}ctx.fillText(themeWasteland?"·":ch,d.x,cy);ctx.shadowBlur=0}d.y+=d.speed;if(d.y-d.len*20>canvas.height){d.y=-d.len*20+Math.random()*40;d.speed=1.2+Math.random()*2.5;d.bright=Math.random()>.85}}}
function drawGlowPulses(){var t=gridOffset*.02;for(var i=0;i<3;i++){var px=canvas.width*(.2+.6*((Math.sin(t+i*2.1)+1)/2));var py=canvas.height*(.2+.6*((Math.cos(t*.7+i*1.7)+1)/2));var hue=themeWasteland?(i==0?35:i==1?25:40):(i==0?190:i==1?35:270);var a=.015+.01*Math.sin(t*3+i);var g=ctx.createRadialGradient(px,py,0,px,py,canvas.width*.25);g.addColorStop(0,"hsla("+hue+",80%,55%,"+a+")");g.addColorStop(1,"transparent");ctx.fillStyle=g;ctx.fillRect(px-canvas.width*.25,py-canvas.width*.25,canvas.width*.5,canvas.width*.5)}}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);gridOffset+=.3;drawGlowPulses();drawGrid();drawAccentLines();drawRain();for(var si=sparks.length-1;si>=0;si--){sparks[si].update();if(sparks[si].life<=0){sparks.splice(si,1)}else{sparks[si].draw()}};particles.forEach(function(p){p.update();p.draw()});requestAnimationFrame(animate)}
animate();
var soundMode=parseInt(localStorage.getItem("fp_soundMode")||"1");var soundEnabled=localStorage.getItem("fp_soundEnabled")!=="0";function playMoveSound(){if(!soundEnabled)return;if(soundMode===1)playElectric();else playWaterFlow()}function playClickSound(){if(!soundEnabled)return;if(soundMode===1)playClick();else playWaterDrop()}function updateSoundUI(){var s=document.getElementById("set-sound-mode");if(s)s.value=soundMode;var t=document.getElementById("set-sound-toggle");if(t)t.value=soundEnabled?"1":"0"}var currentTheme=localStorage.getItem("fp_theme")||"cyberpunk";var themeWasteland=false;function applyTheme(t){currentTheme=t;themeWasteland=t==="wasteland";if(t==="wasteland"){document.body.classList.add("theme-wasteland");var li=document.querySelector(".logo-icon");if(li)li.textContent="💀";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="🏜️";if(nis[1])nis[1].textContent="⚠️";if(nis[2])nis[2].textContent="📻"}else{document.body.classList.remove("theme-wasteland");var li=document.querySelector(".logo-icon");if(li)li.textContent="⚡";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="🎬";if(nis[1])nis[1].textContent="💡";if(nis[2])nis[2].textContent="📡"}localStorage.setItem("fp_theme",t);var s=document.getElementById("set-theme-mode");if(s)s.value=t}function updateThemeUI(){var s=document.getElementById("set-theme-mode");if(s)s.value=currentTheme}function saveThemeSettings(){localStorage.setItem("fp_theme",currentTheme);document.getElementById("settings-overlay").classList.remove("open");console.log("主题已保存:",currentTheme)}applyTheme(currentTheme);
function saveSoundSettings(){soundMode=parseInt(document.getElementById("set-sound-mode").value);soundEnabled=document.getElementById("set-sound-toggle").value==="1";localStorage.setItem("fp_soundMode",soundMode);localStorage.setItem("fp_soundEnabled",soundEnabled?"1":"0");document.getElementById("settings-overlay").classList.remove("open")}var audioCtx=null;function initAudio(){if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)()}}
function playElectric(){if(!audioCtx)return;var dur=.06,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.008))}var src=ctx.createBufferSource();src.buffer=buf;var bp=ctx.createBiquadFilter();bp.type="bandpass";bp.frequency.value=2000+Math.random()*3000;bp.Q.value=.5;var gain=ctx.createGain();gain.gain.setValueAtTime(.02,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(bp);bp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}
function playClick(){if(!audioCtx)return;var dur=.15,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.02))}var src=ctx.createBufferSource();src.buffer=buf;var lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(800,ctx.currentTime);lp.frequency.exponentialRampToValueAtTime(80,ctx.currentTime+dur);var gain=ctx.createGain();gain.gain.setValueAtTime(.08,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(lp);lp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}
document.addEventListener("click",function(){initAudio()},{once:true});document.addEventListener("mousemove",function(){initAudio()},{once:true});function playWaterFlow(){if(!audioCtx||!soundEnabled)return;var dur=.18,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.04))}var src=ctx.createBufferSource();src.buffer=buf;var lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=300+Math.random()*200;lp.Q.value=.4;var gain=ctx.createGain();gain.gain.setValueAtTime(.025,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(lp);lp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}function playWaterDrop(){if(!audioCtx||!soundEnabled)return;var dur=.1,ctx=audioCtx,rate=ctx.sampleRate;var osc=ctx.createOscillator();osc.type="sine";osc.frequency.setValueAtTime(800+Math.random()*400,ctx.currentTime);osc.frequency.exponentialRampToValueAtTime(200+Math.random()*100,ctx.currentTime+dur);var gain=ctx.createGain();gain.gain.setValueAtTime(.12,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+dur)}
var sparkTimer=0;var rustSpots=[],debrisParticles=[];function spawnRust(x,y){rustSpots.push({x:x,y:y,r:3,life:45,max:45});if(rustSpots.length>50)rustSpots.shift()}function spawnImpact(x,y){for(var i=0;i<24;i++){var a=Math.random()*Math.PI*2,s=2+Math.random()*12;debrisParticles.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,life:20+Math.random()*35,size:1+Math.random()*5,alpha:.95})}for(var i=0;i<12;i++){var a2=Math.random()*Math.PI*2,r=5+Math.random()*25;debrisParticles.push({x:x+Math.cos(a2)*r,y:y+Math.sin(a2)*r,vx:Math.cos(a2)*.8,vy:Math.sin(a2)*.8-1.5,life:10+Math.random()*15,size:2+Math.random()*7,alpha:.7,isDust:1})}spawnRust(x,y)}function updateEffects(){for(var i=rustSpots.length-1;i>=0;i--){var s=rustSpots[i];s.life-=.8;s.r+=.2;if(s.life<=0)rustSpots.splice(i,1)}for(var i=debrisParticles.length-1;i>=0;i--){var d=debrisParticles[i];d.life--;d.x+=d.vx;d.y+=d.vy;d.vy+=.35;if(d.life<=0||d.y>canvas.height+100)debrisParticles.splice(i,1)}}function drawEffectsFx(){var ctx=fxCtx;function drawEffects(){for(var i=0;i<rustSpots.length;i++){var s=rustSpots[i],a=s.life/s.max,r=s.r;var g=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,r);g.addColorStop(0,"rgba(190,110,35,"+(a*.7)+")");g.addColorStop(.5,"rgba(150,80,20,"+(a*.45)+")");g.addColorStop(1,"rgba(100,50,10,0)");ctx.fillStyle=g;ctx.fillRect(s.x-r,s.y-r,r*2,r*2)}for(var i=0;i<debrisParticles.length;i++){var d=debrisParticles[i],a2=d.life/(d.isDust?25:55);ctx.fillStyle=d.isDust?"rgba(160,120,70,"+(a2*d.alpha)+")":(d.size>3?"rgba(130,75,25,":"rgba(180,110,50,")+(a2*d.alpha)+")";ctx.beginPath();ctx.arc(d.x,d.y,d.size,0,Math.PI*2);ctx.fill()}}}var fxCtx=null;function initFxCtx(){if(!fxCtx){var c=document.getElementById("fx-canvas");if(c){c.width=window.innerWidth;c.height=window.innerHeight;fxCtx=c.getContext("2d")}}}function effectsLoop(){if(themeWasteland){initFxCtx();if(fxCtx){fxCtx.clearRect(0,0,fxCtx.canvas.width,fxCtx.canvas.height);updateEffects();drawEffectsFx()}}requestAnimationFrame(effectsLoop)}effectsLoop();
document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;sparkTimer++;if(themeWasteland){spawnRust(mx,my);if(sparkTimer%5==0)playMoveSound()}else{if(pmx>=0){var dx=mx-pmx,dy=my-pmy,dist=Math.sqrt(dx*dx+dy*dy);if(dist>8){spawnLightning(pmx,pmy,mx,my,8+Math.floor(dist/20),dist*.4)}if(sparkTimer%3==0){playMoveSound();spawnLightning(mx,my,null,null,6,12)}}}pmx=mx;pmy=my});
document.addEventListener("mouseleave",function(){pmx=-1;pmy=-1;if(themeWasteland)rustSpots=[]});
document.addEventListener("touchmove",function(e){var t=e.touches[0];mx=t.clientX;my=t.clientY;sparkTimer++;if(themeWasteland){spawnRust(mx,my);if(sparkTimer%5==0)playMoveSound()}else{if(pmx>=0){var dx=mx-pmx,dy=my-pmy,dist=Math.sqrt(dx*dx+dy*dy);if(dist>8){spawnLightning(pmx,pmy,mx,my,8+Math.floor(dist/20),dist*.4)}if(sparkTimer%3==0){playMoveSound();spawnLightning(mx,my,null,null,6,12)}}}pmx=mx;pmy=my},{passive:true});
document.addEventListener("touchend",function(){pmx=-1;pmy=-1;if(themeWasteland)rustSpots=[]});
document.addEventListener("click",function(e){playClickSound();if(themeWasteland){spawnImpact(e.clientX,e.clientY)}else{for(var i=0;i<6;i++){var ang=Math.random()*Math.PI*2;var r=30+Math.random()*50;spawnLightning(e.clientX,e.clientY,e.clientX+Math.cos(ang)*r,e.clientY+Math.sin(ang)*r,12,18)}for(var i=0;i<4;i++){var ang2=Math.random()*Math.PI*2;spawnLightning(e.clientX,e.clientY,null,null,8,20)}}});

!function(){var themes=["cool","warm","purple"];var chars=["01","0123456789ABCDEF",">_$#&@*%!","FLOW.01 FLOW.02 RANK.03","0xDEAD 0xBEEF 0xCAFE","{flow:player,rank:01}"];for(var i=0;i<12;i++){var d=document.createElement("div");d.className="data-stream "+themes[i%3];d.style.left=3+8*i+"%";d.style.setProperty("--dur",(7+7*Math.random())+"s");d.style.setProperty("--delay",(10*Math.random())+"s");d.style.animationDuration=(7+7*Math.random())+"s";d.style.animationDelay=(10*Math.random())+"s";var ch=chars[i%chars.length];var t="";for(var j=0;j<40;j++){t+=ch[Math.floor(Math.random()*ch.length)];if(j%8==7)t+="  "}d.textContent=t;document.body.appendChild(d)}}();

var chatOpen=false,chatKey="",chatMessages=[],isTyping=false;
function openChat(section,mode,savedMsgs){
chatKey=section+"-"+mode;var agent=agents[chatKey];
if(!agent){alert("该智能体尚未配置");return}
document.getElementById("chat-agent-name").textContent=agent.name;
document.getElementById("chat-agent-sub").textContent=agent.section;
document.getElementById("chat-agent-icon").textContent=agent.icon||"🚀";
document.getElementById("chat-messages").innerHTML="";
document.getElementById("chat-questions").innerHTML=agent.questions.map(function(q){return '<span class="chat-question-chip" onclick="sendPreset(this.textContent)">'+q+"</span>"}).join("");
document.getElementById("chat-overlay").classList.add("open");
chatOpen=true;chatMessages=[];if(!savedMsgs)addHistory(section,mode);if(chatKey==='0-3'||chatKey==='2-0'){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('qa')}else if(agent.formOnly){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('form')}else{document.getElementById('chat-mode-tabs').style.display='';switchChatMode('qa')}document.querySelectorAll('.chat-mode-tab').forEach(function(t){t.classList.remove('active')});var firstTab=document.querySelector('.chat-mode-tab');if(firstTab)firstTab.classList.add('active');
addMessage("assistant",agent.opening);
}
var chatMode="qa";
function switchChatMode(mode){
chatMode=mode;
document.querySelectorAll(".chat-mode-tab").forEach(function(t){t.classList.remove("active")});
if(typeof event!=="undefined"&&event&&event.target)event.target.classList.add("active");
var msgs=document.getElementById("chat-messages");
var questions=document.getElementById("chat-questions");
var inputArea=document.querySelector(".chat-input-area");
var formPanel=document.getElementById("chat-form-panel");
var rwPanel=document.getElementById("chat-form-rewrite");
if(mode==="form"){
msgs.style.display="none";questions.style.display="none";inputArea.style.display="none";
var xp=document.getElementById("chat-form-xuehui");if(xp)xp.style.display="none";
var tj=document.getElementById("chat-form-tiejia");if(tj)tj.style.display="none";
if(chatKey==="0-3"){formPanel.style.display="none";rwPanel.style.display="flex";updateRewriteApiStatus()}else if(chatKey==="0-0"){formPanel.style.display="none";rwPanel.style.display="none";var xp=document.getElementById("chat-form-xuehui");if(xp)xp.style.display="flex";xuehuiUpdateStatus()}else if(chatKey==="1-2"){formPanel.style.display="none";rwPanel.style.display="none";var tj=document.getElementById("chat-form-tiejia");if(tj)tj.style.display="flex";tjUpdateStatus()}else{formPanel.style.display="flex";rwPanel.style.display="none";updateFormApiStatus()}
}else{
msgs.style.display="";questions.style.display="";inputArea.style.display="";
formPanel.style.display="none";rwPanel.style.display="none";
var xp=document.getElementById("chat-form-xuehui");if(xp)xp.style.display="none";
var tj=document.getElementById("chat-form-tiejia");if(tj)tj.style.display="none";
}
}
function submitFormScript(){
var product=document.getElementById("form-product").value.trim();
var usp=document.getElementById("form-usp").value.trim();
var audience=document.getElementById("form-audience").value.trim();
var goal=document.getElementById("form-goal").value;
var duration=document.getElementById("form-duration").value;
var scriptMethods=Array.from(document.getElementById("script-chips").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val}).join("、")||"未选择";
var visualMethods=Array.from(document.getElementById("visual-chips").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val}).join("、")||"未选择";
var extra=document.getElementById("form-extra").value.trim();
if(!product||!usp||!audience){alert("请至少填写产品信息、核心卖点和目标人群");return}
var agent=agents[chatKey];if(!agent)return;
if(!apiConfig.apikey||apiConfig.apikey.length<10){
alert("请先在左侧栏 ⚙ API 配置 中设置 API Key");return
}
var prompt="请根据以下信息生成引流脚本\n\n视频时长范围："+duration+"\n"+(duration==="30秒以内"?"（紧凑聚焦，15-30秒，主打1个脚本手法）":duration==="60秒以上"?"（深度展开，45-60秒，可用2个脚本手法+详细视觉）":"（标准结构，30-45秒，1主1辅手法）")+"\n\n## 产品信息\n"+product+"\n\n## 核心卖点\n"+usp+"\n\n## 目标人群\n"+audience+"\n\n## 营销目标\n"+goal;prompt+="\n\n## 脚本手法\n"+scriptMethods;prompt+="\n\n## 视觉手法\n"+visualMethods;
if(extra)prompt+="\n\n## 补充信息\n"+extra;
prompt+="\n\n请严格按照马源内容体系工作流程输出：\n1. 策略分析\n2. 脚本手法选择\n3. 视觉手法匹配\n4. 完整脚本（开场+主体+结尾）\n5. 专项建议";
switchChatMode("qa");
addMessage("user","📋 [表单提交]\n产品："+product+"\n卖点："+usp+"\n人群："+audience+"\n目标："+goal+"\n时长："+duration+"\n脚本手法："+scriptMethods+"\n视觉手法："+visualMethods+(extra?"\n补充："+extra:""));
showTyping();
var msgs=[{role:"system",content:agent.systemPrompt},{role:"user",content:prompt}];
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:16000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return};addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","❌ 请求失败："+e.message)})
}
var xhState={industry:"",audience:"",elements:[],topics:[],selectedTopic:null,templates:[],openings:[],selectedOpenings:[],results:[]};
var xhOpenTypes=[
{name:"圈定人群",desc:"喊出人群标签+制造悬念痛点"},
{name:"直接提问",desc:"用疑问词+反常识/悬念逼用户思考"},
{name:"自我否定",desc:"推翻认知+极端对比+利益诱惑"},
{name:"反认知",desc:"颠覆常识认知+强制暂停"},
{name:"高价值展示",desc:"极端成果+低门槛获取+时间紧迫"},
{name:"直击痛点",desc:"场景痛点+情绪放大+低门槛解药"},
{name:"损失厌恶",desc:"信息断点+对比落差+限时危机"},
{name:"对比对立",desc:"极端选项+利益诱惑+身份绑架"},
{name:"头牌借势",desc:"借顶流IP+关联自身内容"},
{name:"警告避坑",desc:"死亡场景+权威背书+逃生指南"},
{name:"引起焦虑",desc:"死亡预言+身份绑架+末日解药"},
{name:"制造错过",desc:"限时机会+损失暗示+紧迫行动"},
{name:"场景代入",desc:"具体场景+身份共鸣+自然过渡"},
{name:"身份标签",desc:"喊出精确身份+专属痛点+解决方案"},
{name:"数字清单",desc:"数字承诺+清单体+收藏指令"},
{name:"故事开头",desc:"冲突事件+细节镜头+悬念铺垫"},
{name:"数据震撼",desc:"具体数字冲击+认知颠覆+利益关联"},
{name:"权威背书",desc:"绑定权威+可信证据+结论延伸"},
{name:"争议话题",desc:"对立观点+选边效应+讨论引导"},
{name:"灵魂拷问",desc:"直击灵魂问题+价值观冲突+反思引导"},
{name:"干货合集",desc:"稀缺信息+收藏价值+即刻效果承诺"},
{name:"跨界组合",desc:"A领域常识+B领域视角=新流量密码"},
{name:"送惊喜",desc:"身份反差+情感暴击+过程揭秘"},
{name:"荷尔蒙",desc:"视觉/声音暗示+犹抱琵琶半遮面"},
{name:"盲盒",desc:"未知快感+低成本高期待+社交货币"},
{name:"奇葩相关",desc:"行业反差+猎奇心理+社交传播"},
{name:"负面的",desc:"阴暗窥视+道德审判+弱者代入"},
{name:"具体的事",desc:"真实生活切片+反常细节+悬念留白"},
{name:"高情绪",desc:"情绪能量分级+物理引爆+面部特写"},
{name:"强节奏",desc:"三秒多次画面切换+卡点轰炸+悬念急刹"},
{name:"凑热闹",desc:"人群效应+意外入侵+镜面克隆"},
{name:"沉浸感",desc:"全感官卷入+微距暴击+环境音结界"},
{name:"反差感",desc:"打破认知+身份/场景/阶层反转"},
{name:"特殊视角",desc:"非常规视角+偷窥效应+认知颠覆"},
{name:"故事感",desc:"画面叙事+物件隐喻+环境线索"},
{name:"复古怀旧",desc:"记忆触发+感官穿越+年代错位"}
];
var xhOpeningDetails={
"圈定人群":{formula:"喊出人群标签+制造悬念/痛点/恐惧",logic:"触发身份认同感→激发'与我有关'警觉性",examples:["新手做抖音，千万别直接发视频","穷人家的孩子想翻身，一定要先学会'不听话'","水瓶座2026年财运暴涨的3个密码"],tips:"3秒内让用户觉得视频和自己有关；后半句用避坑警告/颠覆认知/悬念钩子"},
"直接提问":{formula:"疑问词+反常识/悬念/利益点",logic:"人面对提问本能停留思考",examples:["你敢信？靠喝水一周瘦5斤","你知道什么钱最好赚吗？","为什么新手发10条视频都不火，唯独这条爆了？"],tips:"用'你敢信/你知道/你有没有/如果…会怎样'开头；问题要有争议性或反常识"},
"自我否定":{formula:"推翻认知+极端对比+利益诱惑",logic:"人性爱看反转，打脸剧情永远吸引人",examples:["我骂了2年AI是智商税，直到…","全网吹爆这款产品，我却劝你别买","嘲笑闺蜜做抖音3年，直到她提了保时捷"],tips:"否定要有力度；必须附证据支撑；绑定当下热点"},
"反认知":{formula:"常识认知+颠覆结论+悬念钩子",logic:"制造认知冲突=强制用户暂停验证",examples:["皮肤科医生警告：敷面膜越勤老得越快","董宇辉才是真狠人","预制菜根本不是懒人福音"],tips:"颠覆要有科学/权威依据；避免绝对化表述；标注信息来源"},
"高价值展示":{formula:"极端成果+低门槛获取+时间紧迫",logic:"触发损失厌恶+成果诱惑双开关",examples:["吃瘦100斤的食谱被举报下架","帮1500个素人起号变现总结3条公式","被封3个号才摸透的抖音算法"],tips:"用具体数字+银行流水/后台数据可视化；限时压迫"},
"直击痛点":{formula:"场景化痛点+情绪放大器+低门槛解药",logic:"痛点触发→焦虑升级→解决方案渴求",examples:["存款3万别碰这5个医美项目","被AI淘汰的打工人必看这3个技能","每天盯屏幕12小时自救指南"],tips:"痛点要聚焦具体场景；方案要低门槛可执行；具象化展示痛点"},
"损失厌恶":{formula:"信息断点+对比落差+限时危机",logic:"别人知道我不知道→必须补课；现在不学→永远错过",examples:["6800元课程偷学的5个公式","ChatGPT-6这功能被阉割","抖音下月严查这类内容现在改还来得及"],tips:"制造信息差+时间紧迫感；伪造权威文件佐证"},
"对比对立":{formula:"极端选项+利益诱惑+身份绑架",logic:"认知冲突→站队本能→必须看结论",examples:["Vision Pro 4 VS 华为AR眼镜实测","30岁存款50万该买房还是买AI课程","用iPhone19的和用华为Pura 100的社交圈差距"],tips:"避免拉踩法律风险；数据需有第三方检测背书"},
"头牌借势":{formula:"顶流事件/人物+矛盾冲突点+解决方案带货",logic:"顶流吸引→移情效应→知识迁移→行为转化",examples:["马斯克禁止员工用的3种脑机训练法","拆解某爆款AI剧名场面普通人复刻术","海淀妈妈圈疯传的脑机学习法"],tips:"绑定24小时内热搜更佳；版权意识避免侵权"},
"警告避坑":{formula:"死亡场景+权威背书+逃生指南",logic:"恐惧是人类第一驱动力",examples:["千万别更新iOS这3个漏洞会让手机变砖","卫健委警告这3种抗衰药吃多致癌","发这5类视频直接封号已有90万人中招"],tips:"不过度制造恐慌；证据链完整；规避法律红线"},
"引起焦虑":{formula:"死亡预言+身份绑架+末日解药",logic:"不做XX必死→自我代入恐慌→必须看完保命",examples:["2026年前不学这3个AI技能100%被裁员","每天戴AR眼镜超2小时失明率飙升","脑机用户这3种梦境永久损伤记忆力"],tips:"预言要有数据/研究支撑；适度恐慌不要过度；给明确解药"},
"制造错过":{formula:"限时机会+损失暗示+紧迫行动",logic:"现在不行动→永远失去红利",examples:["2026年还剩7个月普通人抓住这3件事还能翻身","这波红利只剩90天","十年前错过比特币2026年别再错过这个"],tips:"明确时间窗口+具体损失数字；结合当下时间节点"},
"场景代入":{formula:"具体场景+身份共鸣+自然过渡",logic:"用户看到熟悉的场景会自动代入角色",examples:["深夜加班的你打开外卖APP…","带娃逛超市时突然发现…","挤地铁通勤时刷到这条…"],tips:"场景要具体可感；让用户'看到自己'；场景→痛点→方案自然过渡"},
"身份标签":{formula:"喊出精确身份+专属痛点+解决方案",logic:"精准标签触发代入感→这是我的问题",examples:["月薪不过万的打工人集合","刚学化妆的女生看过来","25岁还房贷的90后必看"],tips:"身份标签越具体越好；用薪资/年龄/状态双重锁定"},
"数字清单":{formula:"数字承诺+清单体+收藏指令",logic:"数字产生确定感→大脑认为有干货",examples:["会计新人必备7个Excel神技","咖啡店老板不会告诉你的6个暴利秘密","2026年必装的8个AI工具"],tips:"数字要具体奇数为佳；每项之间形成递进/并列关系"},
"故事开头":{formula:"冲突事件+细节镜头+悬念铺垫",logic:"人类天生爱听故事→故事开头即锁定注意力",examples:["一条视频赚100万后我才明白…","婆婆凌晨3点开车带我去泡温泉","我在城中村开便利店遇到的第100个客人"],tips:"爆点前置不要铺垫；用细节特写而非概括；3秒内引爆冲突"},
"数据震撼":{formula:"具体数字冲击+认知颠覆+利益关联",logic:"数据打破模糊认知→产生信息差震撼",examples:["敷面膜使角质层变薄17%协和研究实锤","测试87个账号73%播放量破10万的方法","每天超2碗米饭糖尿病风险激增53%"],tips:"数据要精确且有出处；数据与用户利益直接挂钩"},
"权威背书":{formula:"绑定权威+可信证据+结论延伸",logic:"权威可信→结论不可反驳→必须采纳",examples:["协和医院最新研究显示…","我帮100个素人起号总结出最致命3个错误","前字节运营总监揭秘2026起号潜规则"],tips:"附证件/文件/邀请函等可视化证据；权威要具体到机构+人名"},
"争议话题":{formula:"对立观点+选边效应+讨论引导",logic:"争议触发站队本能→评论区开战→算法助推",examples:["全网都在教AI写作我偏说这3类人2026年千万别用","为什么XXX被全网骂却越骂越火","ChatGPT-6和Claude 3谁更危险"],tips:"观点要有依据不怕争议；避免人身攻击；引导评论互动"},
"灵魂拷问":{formula:"直击灵魂问题+价值观冲突+反思引导",logic:"触及深层价值观→用户被迫自我审视",examples:["你上一次真正开心是什么时候","如果明天被AI替代你现在会后悔没学什么","穷人家的孩子该不该读博士"],tips:"问题要直击内心不留退路；避免说教；给反思空间"},
"干货合集":{formula:"稀缺信息+收藏价值+即刻效果承诺",logic:"干货=未知信息+即刻效果=高获得感",examples:["全网下架的内部资料我偷偷存了电子版","今年最全的行业避坑指南建议下载保存","这5个隐藏功能90%的人不知道"],tips:"每项干货要有独立价值；用'建议收藏/下载保存'引导"},
"跨界组合":{formula:"A领域常识+B领域视角=新流量密码",logic:"信息杂交创造认知颠覆效应",examples:["从刑法角度看奶茶配料表","王者荣耀段位暴露你的教育风格","程序员用代码拆解女团舞走位规律"],tips:"两个领域要有内在联系；不能强行跨界；保持专业度"},
"送惊喜":{formula:"身份反差+情感暴击+过程揭秘",logic:"窥私欲→期待惊喜→情感共鸣→传播冲动",examples:["偷偷改造老公工具箱他回家后反应绝了","给环卫工妈妈准备惊喜的第7天","用00后方式给奶奶过生日"],tips:"成本低效果大；突出情感反应而非礼物本身；系列化运营"},
"荷尔蒙":{formula:"视觉/声音暗示+犹抱琵琶半遮面",logic:"三秒必停机制→本能不能划走",examples:["长腿美女厨师敲门的深夜私房菜","银行职员换装嘻哈打碟","健身教练的深夜拉伸课"],tips:"避免低俗保留高级感；用价值护城河平衡；分层发布策略"},
"盲盒":{formula:"未知快感+低成本高期待+社交货币",logic:"像赌徒一样期待下一杯的惊喜印章",examples:["100元高铁盲盒","超市20元购物盲盒","你敢让陌生人决定你未来24小时吗"],tips:"悬念前置+过程留白+意外转折；避免单调套路"},
"奇葩相关":{formula:"行业反差+猎奇心理+社交传播",logic:"猎奇激活大脑多巴胺抽奖机",examples:["火锅店最怕遇到的8类顾客","00后实习生把公章刻成卡通猫爪","我给稻田装霓虹灯防鸟"],tips:"行业错位要合理；避免低俗化；用动画规避敏感画面"},
"负面的":{formula:"阴暗窥视+道德审判+弱者代入",logic:"负面内容=人性显微镜放大隐秘欲望",examples:["超市大妈偷换价签监控实录","外卖小哥电梯里被白领故意绊倒","网红餐厅被宰的168小时"],tips:"给企业logo打码；避免诱导未成年人；用'专业演员出演'声明"},
"具体的事":{formula:"真实生活切片+反常细节+悬念留白",logic:"真实生活=永不落幕的连续剧",examples:["今早买豆浆遇到件怪事","外卖柜前拍到的奇观","城中村早点铺的保时捷车主"],tips:"隐私保护打码；避免摆拍穿帮；系列化观察日记"},
"高情绪":{formula:"情绪能量分级+物理引爆+面部特写",logic:"情绪浓度=流量加速器",examples:["美术生撕毁画纸突然大笑","考研党凌晨3点对墙背书的窒息感","拳头砸开鸡胸肉包装嘶吼这玩意狗都不吃"],tips:"情绪人设要适配领域；避免情绪透支；极端情绪需心理预警标签"},
"强节奏":{formula:"三秒多次画面切换+卡点轰炸+悬念急刹",logic:"画面切换频率=隐形指挥棒操控用户停留",examples:["0.5秒快剪三组冲突画面→剪刀剪吊牌→火烤LOGO→放大镜怼缝线","鉴宝快递拆箱→工具特写→破坏检测→表情反转","扫码付款→后厨黑幕→价格对比→愤怒摔碗"],tips:"前3秒超3次画面切换；每句台词配画面切；关键证据前突然黑屏"},
"凑热闹":{formula:"人群效应+意外入侵+镜面克隆",logic:"羊群效应=流量放大器",examples:["街头采访突然涌入20个围观群众","外卖小哥闯入直播间跳女团舞","菜市场大妈与虚拟偶像合唱"],tips:"用镜面分身/倒放/声音蒙太奇低成本造势；避免扰民"},
"沉浸感":{formula:"全感官卷入+微距暴击+环境音结界",logic:"像VR眼镜般绑架用户所有感官",examples:["木匠刨花连续15秒木屑翻卷特写","采耳全过程棉签摩擦耳道声","从炒锅火焰穿进油烟机内部清洁"],tips:"重复规律动作+手部特写+节奏音效；每20秒插静止特写防眩晕"},
"反差感":{formula:"打破认知+身份/场景/阶层反转",logic:"反差火药桶瞬间点燃好奇心",examples:["煎饼摊老板唱美声围裙配燕尾服","劳斯莱斯后备箱煮泡面水晶杯配不锈钢锅","保洁阿姨下班变DJ工作服与夜店装同屏"],tips:"反差元素要有关联性；用道具/声音蒙太奇低成本实现"},
"特殊视角":{formula:"非常规视角+偷窥效应+认知颠覆",logic:"非常规视角=注意力黑洞",examples:["锅底视角看蛋液凝固","蟑螂视角逛厨房","身份证视角看主人夜生活"],tips:"虫眼/上帝/物品拟人/时空折叠视角；防眩晕；伦理红线不能偷拍"},
"故事感":{formula:"画面叙事+物件隐喻+环境线索",logic:"画面即剧本三秒造悬念",examples:["边整理衣柜边吐槽拍到半开衣柜门","相亲资料表特写放大186体育生字样","擦玻璃时突然停顿暗示看到不该看的"],tips:"用摇晃结婚照/撕碎体检报告等道具叙事；微动作传递情绪"},
"复古怀旧":{formula:"记忆触发+感官穿越+年代错位",logic:"怀旧=时光机瞬间拉人入局",examples:["爷爷用算盘给孙子算游戏段位","诺基亚手机玩原神","老式电视机改造成猫窝"],tips:"视觉泛黄滤镜+听觉Windows XP开机音效；精准狙击30+人群"}
};
var xhElementDetails={
"头牌选题":{rules:"句式：世界上最贵的东西到底有多贵 / 明星的东西到底值多少钱 / 最牛的人到底有多牛 / 最贵的东西到底好在哪",example:"汽车->周杰伦车库里的车值多少钱，医美->世界上整容花费最多的人花了多少钱"},
"怀旧选题":{rules:"句式：20年前经典的 / 古代人是如何办到的 / 小时候那些难忘的 / 当年最火的 / 曾经那些价值不菲的",example:"母婴->古代人是如何剖腹产的，女装->80年代最流行的港风"},
"对立选题":{rules:"句式：穷人vs富人 / 南方人vs北方人 / 男人vs女人 / 中国人vs外国人 / 古代vs现代 / 有良心的vs没良心的 / 曾经vs现在",example:"烧烤->北方人vs南方人吃烧烤的区别，教培->穷人家vs富人家孩子上课外班的区别"},
"最差选题":{rules:"关键词：贬值最快的 / 最难吃的 / 差评最多的 / 最难看的 / 最没面子的 / 拼多多9块9的 / 最难用的 / 反人类设计的。要靠谱不硬加",example:"装修->贬值最快的家具、最没面子的装修风格"},
"荷尔蒙选题":{rules:"句式：相亲成功率高的 / 异性多看你两眼 / 最具有性缩力的 / 自以为很帅实际很丑 / 去丈母娘家能先动筷",example:"穿搭->这样穿女生在大街上会多看你两眼，健身->男生练哪里越练女生越讨厌"},
"猎奇选题":{rules:"句式：脑回路有病的 / 外行人绝对不知道的 / 黑心内幕操作的 / 内行人的神奇操作 / 匪夷所思的行为",example:"结合行业出选题，围绕猎奇感即可"},
"圈人群选题":{rules:"句式：星座的 / 内向或外向的 / 不同MBTI的 / 身价十个亿的 / 第一次体验的 / 弱势群体的",example:"母婴->巨蟹座妈妈带孩子有哪些麻烦、身价十个亿的妈妈怎么带孩子"},
"成本选题":{rules:"围绕成本元素（金钱/时间/面子/力气）：便宜又有面子的 / 十分之一金钱时间 / 如何偷懒 / 花小钱办大事",example:"母婴->如何让爸爸帮忙夜里看孩子，摄影->逛街拍照找这三个建筑物肯定好看"}
};
var xhTemplateDetails={
"讲故事类":{principles:"用户不爱听道理爱听故事。好故事3特征：有冲突、有细节、有反转",steps:"4步模板：1锁定人群(3秒拦截) 2引爆冲突(情绪钩子) 3展开过程(分2-3阶段含具体事件) 4自然带货(产品变解决方案)",techniques:"3技巧：爆点前置(开头亮结果)、细节特写如婆婆凌晨3点开车带我去泡温泉、金句点睛对比式/数字式收尾",pitfalls:"避坑：别自嗨删主观感慨、别啰嗦删无关细节、别虚假"},
"共鸣型段子类":{principles:"用户心理：这不就是我吗/终于有人说实话了",steps:"3大模板：1假如XX说真话揭露行业潜规则 2深度还原名场面复刻尴尬瞬间 3XX和XX的差别极端对比制造笑点",techniques:"5技巧：反转型、行业梗+大众梗、具象化数字、方言反差、结尾神转折带货",pitfalls:"避坑：别自嗨删业内梗、别侵权、前3秒必出爆点"},
"教知识类":{principles:"获得感三要素：信息量大、效果立现、颠覆认知",steps:"5大模板：三段论痛点->方案->步骤、一口气挑战密集知识点、盘点体怀旧猎奇、五问法、防坑指南",techniques:"拒绝正确的废话、慎用专业术语、情绪大于知识量",pitfalls:"减肥要少吃多动->火锅后喝这杯刮油水体重不涨"},
"晒过程类":{principles:"核心：有手艺/猎奇性/治愈感",steps:"火车节模型：拆解成连贯步骤每节关键动作+情绪波动",techniques:"3玩法：猎奇反差、治愈解压、反向操作",pitfalls:"避免纯流水账、慎用专业术语、选题猎奇优先"}
};

function xuehuiUpdateStatus(){var s=document.getElementById("form-xh-status");var m=document.getElementById("form-xh-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 已配置 - "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="未配置 API Key"}}
function xuehuiCallAPI(systemPrompt,userPrompt,callback,opts){
if(!apiConfig.apikey||apiConfig.apikey.length<10){alert("请先配置 API Key");return}
var msgs=[{role:"system",content:systemPrompt},{role:"user",content:userPrompt}];
opts=opts||{};
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:opts.temperature||0.8,max_tokens:opts.max_tokens||4000,response_format:opts.response_format||void 0})})
.then(function(r){return r.json()})
.then(function(data){
 if(data.error){alert("API error: "+data.error.message);return}
 var text=data.choices[0].message.content;
 try{var t=text.replace(/^```(?:json)?\s*\n?/,"").replace(/\n?```\s*$/,"");var json=JSON.parse(t);callback(json)}catch(e){callback({raw:text})}
}).catch(function(e){alert("request failed: "+e.message)});
}
function xuehuiStep1(){
xhState.industry=document.getElementById("xh-industry").value.trim();
xhState.audience=document.getElementById("xh-audience").value.trim();
var els=Array.from(document.getElementById("xh-elements").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(!xhState.industry||!xhState.audience){alert("请填写行业和目标人群");return}
if(els.length===0){alert("请至少选择一个爆款元素");return}
xhState.elements=els;
var perEl=els.length===1?10:5;
var elementRules=xhState.elements.map(function(n){var d=xhElementDetails[n];if(!d)return"【"+n+"】无详细规则";return"【"+n+"】句式："+d.rules+" 示例："+d.example;}).join("\n\n");
var sysPrompt='你是短视频爆款选题生成专家，基于薛辉内容培训体系。用户选择了以下爆款元素，请严格按照对应元素的固定句式生成选题。\n\n=== 用户选择的爆款元素规则 ===\n{elementRules}\n\n=== 输出要求 ===\n用户选择的爆款元素：{elements}，每个元素生成{count}个选题。\n标题要口语化、有冲击力，像抖音爆款标题。必须严格按照对应元素的句式来生成。\n输出JSON：{"topics":[{"id":1,"title":"选题标题","element":"元素名","idea":"选题思路说明"}]}\n'.replace("{elementRules}",elementRules).replace("{elements}",els.join("、")).replace("{count}",perEl);
var userPrompt="行业："+xhState.industry+" 目标人群："+xhState.audience+" 爆款元素："+els.join("、");
var btn=document.querySelector("#xh-step1 .chat-form-submit");btn.textContent="生成中...";btn.disabled=true;
xuehuiCallAPI(sysPrompt,userPrompt,function(json){
 btn.textContent="🚀 生成爆款选题";btn.disabled=false;
 var topics=json.topics||[];
 if(!Array.isArray(topics)||topics.length===0){alert("生成失败，请重试");return}
 xhState.topics=topics;xhState.selectedTopic=null;
 var list=document.getElementById("xh-topics-list");
 list.innerHTML=topics.map(function(t,i){return '<div class="xh-topic-card" onclick="xuehuiSelectTopic('+i+',this)" style="padding:12px 14px;border-radius:10px;border:2px solid var(--border-glow);background:var(--bg-card);cursor:pointer;transition:all .2s"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="font-size:12px;color:var(--purple);font-weight:700">#'+(i+1)+'</span><span style="font-size:11px;padding:2px 8px;border-radius:10px;background:var(--purple-dim);color:var(--purple)">'+t.element+'</span></div><div style="font-size:13px;font-weight:600;color:var(--text-primary)">'+t.title+'</div><div style="font-size:11px;color:var(--text-muted);margin-top:4px">'+t.idea+'</div></div>'}).join("");
 document.getElementById("xh-step2").style.display="";
}, {response_format:{type:"json_object"}});
}
function xuehuiSelectTopic_orig(idx,el){
document.querySelectorAll(".xh-topic-card").forEach(function(c){c.style.borderColor="var(--border-glow)";c.style.background="var(--bg-card)"});
el.style.borderColor="var(--purple)";el.style.background="rgba(168,85,247,0.08)";
xhState.selectedTopic=xhState.topics[idx];
document.getElementById("xh-step3").style.display="";
setTimeout(function(){if(xhState.selectedTopic)xuehuiRecommendTemplates();},500);
}

function xuehuiSelectTopic(idx,el){
xuehuiSelectTopic_orig(idx,el);
}

function xuehuiStep2Next(){
if(!xhState.selectedTopic){alert("请先选择一个选题");return}
document.getElementById("xh-step3").style.display="";
}
function xuehuiStep3Next(){
var tmpls=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(tmpls.length===0){alert("请至少选择一个文案模板");return}
xhState.templates=tmpls;
document.getElementById("xh-step4").style.display="";
xuehuiRenderOpenings();
}
function xuehuiRenderOpenings(){
var container=document.getElementById("xh-openings");
container.innerHTML=xhOpenTypes.map(function(o){return '<span class="select-chip" data-val="'+o.name+'" onclick="xuehuiToggleOpening(this)" title="'+o.desc+'">'+o.name+'</span>'}).join("");
xuehuiUpdateCount();
}
function xuehuiToggleOpening(el){el.classList.toggle("selected");xuehuiUpdateCount();}
function xuehuiUpdateCount(){
var sel=document.querySelectorAll("#xh-openings .select-chip.selected").length;
var tmpl=xhState.templates.length;
document.getElementById("xh-count-info").textContent="已选 "+sel+" 个开头 x "+tmpl+" 个模板 = "+(sel*tmpl*2)+" 条文案（90秒标准 + 2分钟深度）";
}
function xuehuiGenerate(){
// Ensure templates are captured from DOM if not already set
if(!xhState.templates||xhState.templates.length===0){
xhState.templates=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
}
xhState.selectedOpenings=Array.from(document.getElementById("xh-openings").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(xhState.selectedOpenings.length===0){alert("请至少选择一个开头类型");return}
var t=xhState.selectedTopic;
var openingRules=xhState.selectedOpenings.map(function(n){var d=xhOpeningDetails[n];if(!d)return"【"+n+"】无详细规则";return"【"+n+"】公式："+d.formula+" 逻辑："+d.logic+" 示例："+d.examples.join("；")+" 技巧："+d.tips;}).join("\n\n");
var tmplRules=xhState.templates.map(function(tn){var d=xhTemplateDetails[tn];if(!d)return"";return"【模板："+tn+"】\n原则："+d.principles+"\n步骤："+d.steps+"\n技巧："+d.techniques+"\n避坑："+d.pitfalls}).join("\n\n");
var sysPrompt="你是短视频爆款文案生成专家，基于薛辉内容培训体系。根据用户选择的文案模板类型和开头类型，为指定的选题生成完整文案。\n\n=== 用户选择的文案模板规则 ===\n\n"+tmplRules+"\\n\\n=== 用户选择的开头类型规则 ===\\n{openingRules}\\n\\n=== 生成规则（必须严格遵守） ===\\n\\n【字数强制要求 - 这是最重要的规则】\\n!!! 警告：字数不足的文案将被拒绝，请务必严格遵守 !!!\\n1. 90秒标准版：必须写够 250-350 字（约 35-45 秒口播时长），结构完整、节奏紧凑、信息密度高\\n2. 2分钟深度版：必须写够 500-650 字（约 100-120 秒口播时长），深入展开、有细节描写、有情绪铺垫、有场景还原\\n\\n【严正警告】\\n- 禁止输出低于字数下限的文案！90秒版不可少于250字，2分钟版不可少于500字\\n- 禁止用空话凑字数，每句话都要有信息量\\n- 每种「模板类型 + 开头类型」组合，必须同时输出90秒版和2分钟版各1条\\n\\n【格式要求】\\n- 文案必须以用户选择的开头类型句式开头，前3秒必须有钩子\\n- 文案口语化，适合真人口播，像在跟朋友聊天，不是念稿\\n- 有明确转化引导（关注/点赞/评论/私信），自然植入不突兀\\n- 避免书面语、主观感慨、啰嗦废话\\n- 【🔴 强制自查 - 写完后逐字数字数】90秒版少于300字禁止提交，2分钟版少于550字禁止提交，字数不够必须重写，不允许任何借口\\n- 每句15-25字，段落2-3句；90秒版至少6段，2分钟版至少10段\\n\\n【输出JSON格式】\\n{\\\"results\\\":[\\n  {\\\"copyType\\\":\\\"讲故事类\\\",\\\"openingType\\\":\\\"圈定人群\\\",\\\"duration\\\":\\\"90秒标准\\\",\\\"content\\\":\\\"（必须300-400字，少于300字禁止提交）\\\"},\\n  {\\\"copyType\\\":\\\"讲故事类\\\",\\\"openingType\\\":\\\"圈定人群\\\",\\\"duration\\\":\\\"2分钟深度\\\",\\\"content\\\":\\\"（必须550-700字，少于550字禁止提交）\\\"},\\n  ...每种模板×开头组合2条\\n]}\"".replace("{industry}",xhState.industry).replace("{audience}",xhState.audience).replace("{topic}",t.title).replace("{element}",t.element).replace("{templates}",xhState.templates.join("、")).replace("{openings}",xhState.selectedOpenings.join("、")).replace("{openingRules}",openingRules);
var userPrompt="行业："+xhState.industry+" 人群："+xhState.audience+" 选题："+t.title+" 元素："+t.element+" 模板："+xhState.templates.join("、")+" 开头："+xhState.selectedOpenings.join("、");
var btn=document.querySelector("#xh-step4 .chat-form-submit");btn.textContent="生成中...";btn.disabled=true;
xuehuiCallAPI(sysPrompt,userPrompt,function(json){
 btn.textContent="✍️ 生成爆款文案";btn.disabled=false;
 var results=json.results||[];
 if(!Array.isArray(results)||results.length===0){alert("生成失败，请重试");return}
 xhState.results=results;
 var container=document.getElementById("xh-results-content");
 var grouped={};
 results.forEach(function(r){var key=r.copyType||"other";if(!grouped[key])grouped[key]=[];grouped[key].push(r)});
 var html="";
 for(var g in grouped){
  html+='<div style="margin-bottom:12px"><div style="font-size:13px;font-weight:700;color:var(--purple);margin-bottom:8px;padding:6px 12px;background:rgba(168,85,247,.08);border-radius:8px">'+g+'</div>';
  grouped[g].forEach(function(r){
   var durColor=r.duration==="90秒标准"?"var(--cyan)":"var(--gold)";var charCount=r.content?r.content.length:0;var countColor=charCount<(r.duration==="90秒标准"?300:550)?"var(--red)":"var(--green)";
   html+='<div style="padding:12px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-card);margin-bottom:8px"><div style="display:flex;gap:8px;margin-bottom:6px"><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(0,229,255,.1);color:'+durColor+'">'+r.duration+' <span style="font-size:9px;color:'+countColor+'">('+charCount+'字)</span></span><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(168,85,247,.1);color:var(--purple)">'+r.openingType+'</span><span style="flex:1"></span><button onclick="copyXhResult(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="复制全文">&#x1f4cb; 复制</button><button onclick="expandCopy(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="扩写">📝 扩写</button></div><div style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap">'+r.content+'</div><div class="xh-expand-area" style="display:none;margin-top:8px;padding:8px;border-radius:8px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><input type="number" class="xh-expand-input" placeholder="请输入你想要扩写的字数..." style="flex:1;padding:4px 8px;border-radius:6px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px" min="100"><button onclick="doExpandCopy(this)" style="background:var(--purple);color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;font-size:11px;white-space:nowrap">确认扩写</button></div><div class="xh-expand-result" style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap;margin-top:6px;display:none"></div><div class="xh-expand-loading" style="display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:8px">扩写中...</div></div></div>';
// Monitor template selection for auto-recommend
var xhOrigToggleChip=toggleChip;
toggleChip=function(chip,containerId,maxSelect){
xhOrigToggleChip(chip,containerId,maxSelect);
// Check if it's the templates container
if(containerId==="xh-templates"){
setTimeout(function(){
var selected=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected"));
if(selected.length>0){
// Set xhState.templates and trigger openings recommendation
xhState.templates=selected.map(function(c){return c.dataset.val});
xuehuiRecommendOpenings();
}
},300);
}
};


  });
  html+='</div>';
 }
 container.innerHTML=html;
 document.getElementById("xh-results").style.display="";
}, {temperature:0.1,max_tokens:32000});
}


// Auto-recommend: debounced input handling
var xhAutoRecTimer=null;
function xhAutoRecElements(){
clearTimeout(xhAutoRecTimer);
xhAutoRecTimer=setTimeout(function(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(industry.length>=2&&audience.length>=2){
xuehuiRecommendElements();
}
},800);
}
// Attach auto-recommend to inputs
document.getElementById("xh-industry").addEventListener("input",xhAutoRecElements);
document.getElementById("xh-audience").addEventListener("input",xhAutoRecElements);


function xuehuiRecommendElements(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(!industry||!audience){alert("请先填写行业和人群");return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="分析中...";btn.disabled=true;}
var prompt="行业："+industry+" 人群："+audience+"\n\n从以下8种爆款元素中推荐1-2个最适合的，只输出JSON数组：\n"+JSON.stringify(Object.keys(xhElementDetails))+"\n每个元素说明：\n"+Object.entries(xhElementDetails).map(function(e){return e[0]+": "+e[1].desc}).join("\n")+"\n\n你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]";
xuehuiCallAPI("你是爆款选题推荐专家。根据行业和人群推荐最合适的爆款元素。你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="智能推荐爆款元素";btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("推荐失败");return}
 }
 var container=document.getElementById("xh-elements");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="推荐";
   chip.appendChild(badge);chip.classList.add("recommended");
  }
 });
});
}
function xuehuiRecommendTemplates(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(!industry||!audience){alert("请先填写行业和人群");return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="分析中...";btn.disabled=true;}
var element=xhState.selectedTopic?xhState.selectedTopic.element:"";
var prompt="行业："+industry+" 人群："+audience+" 选题元素："+element+"\n\n从以下4种模板推荐1-2个：讲故事类、共鸣型段子类、教知识类、晒过程类\n你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]";
xuehuiCallAPI("你是文案模板推荐专家。你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="智能推荐模板";btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("推荐失败");return}
 }
 var container=document.getElementById("xh-templates");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="推荐";
   chip.appendChild(badge);chip.classList.add("recommended");
  }
 });
});
}
function xuehuiRecommendOpenings(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
var tmpls=xhState.templates||[];
if(!industry||!audience){alert("请先填写行业和人群");return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="分析中...";btn.disabled=true;}
var prompt="行业："+industry+" 人群："+audience+" 已选模板："+tmpls.join("、")+"\n\n从以下36种开头推荐2-3个：\n"+JSON.stringify(Object.keys(xhOpeningDetails))+"\n你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]";
xuehuiCallAPI("你是开头推荐专家。你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="智能推荐开头";btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("推荐失败");return}
 }
 var container=document.getElementById("xh-openings");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="推荐";
   chip.appendChild(badge);chip.classList.add("recommended");
  }
 });
});
}


function xuehuiBackTo(step){
["xh-step1","xh-step2","xh-step3","xh-step4","xh-results"].forEach(function(id){document.getElementById(id).style.display=""});
}
function xuehuiReset(){
document.querySelectorAll("#xh-elements .rec-badge,#xh-templates .rec-badge,#xh-openings .rec-badge").forEach(function(b){b.remove()});
document.getElementById("xh-topics-list").innerHTML="";
document.getElementById("xh-results-content").innerHTML="";
document.getElementById("xh-industry").value="";document.getElementById("xh-audience").value="";
document.querySelectorAll("#xh-elements .select-chip.selected,#xh-templates .select-chip.selected,#xh-openings .select-chip.selected").forEach(function(c){c.classList.remove("selected")});
xhState={industry:"",audience:"",elements:[],topics:[],selectedTopic:null,templates:[],openings:[],selectedOpenings:[],results:[]};
}
function copyXhResult(btn){var card=btn.closest("div").parentElement;var text=card.querySelector("div:last-child").textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){btn.textContent="\u2705 已复制";var _copyColor=themeWasteland?"#d4a830":"#10b981";btn.style.color=_copyColor;setTimeout(function(){btn.textContent="\uD83D\uDCCB 复制";btn.style.color="var(--text-secondary)"},2000)}).catch(function(){fallbackCopy(btn,text)})}else{fallbackCopy(btn,text)}}function fallbackCopy(btn,text){var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");btn.textContent="\u2705 已复制";var _copyColor=themeWasteland?"#d4a830":"#10b981";btn.style.color=_copyColor;setTimeout(function(){btn.textContent="\uD83D\uDCCB 复制";btn.style.color="var(--text-secondary)"},2000)}catch(e){alert("复制失败，请手动选择复制")}document.body.removeChild(ta)}
function expandCopy(btn){
var card=btn.closest("div").parentElement;
var area=card.querySelector(".xh-expand-area");
if(area.style.display==="none"||!area.style.display){area.style.display=""}else{area.style.display="none"}
}
function doExpandCopy(btn){
var card=btn.closest(".xh-expand-area").parentElement;
var input=card.querySelector(".xh-expand-input");
var targetWords=parseInt(input.value);
if(!targetWords||targetWords<50){alert("请输入至少50字的扩写目标");return}
var originalContent=btn.closest(".xh-expand-area").previousElementSibling.textContent;
var loading=card.querySelector(".xh-expand-loading");
var resultDiv=card.querySelector(".xh-expand-result");
loading.style.display="";resultDiv.style.display="none";
var prompt="原文案："+originalContent+"\n\n请将上述文案扩写至约"+targetWords+"字，保持原有风格、口语化表达，丰富细节和场景描写。只输出扩写后的完整文案。";
xuehuiCallAPI("你是文案扩写专家。只输出扩写后的文案。",prompt,function(json){
loading.style.display="none";
var expanded=typeof json==="string"?json:(json.raw||json.content||json.expanded||json.text||JSON.stringify(json));
resultDiv.textContent=expanded;
resultDiv.style.display="";
var charCount=expanded.length;
var countSpan=document.createElement("span");
countSpan.style.cssText="font-size:9px;margin-left:6px;color:"+(charCount>=targetWords?"var(--green)":"var(--red)");
countSpan.textContent="("+charCount+"字)";
resultDiv.appendChild(countSpan);
},{temperature:0.3,max_tokens:8000});
}
function closeChat(){
document.getElementById("chat-overlay").classList.remove("open");
chatOpen=false;chatMessages=[];
}
function selectRewriteMode(el){document.querySelectorAll("#rw-mode-chips .select-chip").forEach(function(c){c.classList.remove("selected")});el.classList.add("selected");rwMode=el.dataset.val;document.getElementById("rw-custom-group2").style.display=rwMode==="B"?"":"none"}function selectRewriteModeBtn(el,mode){document.querySelectorAll(".rw-mode-btn").forEach(function(b){b.classList.remove("selected");b.style.borderColor="var(--border-glow)";b.style.background="var(--bg-card)"});el.classList.add("selected");el.style.borderColor="var(--purple)";el.style.background="rgba(168,85,247,0.08)";rwMode=mode;document.getElementById("rw-custom-group2").style.display=mode==="B"?"":"none"}
function updateRewriteApiStatus(){var s=document.getElementById("form-rw-status");var m=document.getElementById("form-rw-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 已配置 · "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="未配置 API Key · 请在左侧栏 ⚙ API 配置 中设置"}}
function goBackRewriteStep1(){document.getElementById("rw-step2").style.display="none";document.getElementById("rw-step1").style.display=""}
function submitRewriteStep1(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10){alert("请先在左侧栏 API 配置中设置 API Key");return}
var content=document.getElementById("rw-text").value.trim();
if(!content){alert("请输入文案内容");return}
switchChatMode("qa");document.getElementById("chat-back-row").style.display="";addMessage("user","[提交文案]\n"+content.substring(0,300)+(content.length>300?"...":""));showTyping();
var prompt="请分析以下视频文案：\n\n"+content+"\n\n请输出逐字稿和原视频分析，包括行业、IP人设、内容结构、情绪曲线、关键钩子";
var msgs=[{role:"system",content:agent.systemPrompt},{role:"user",content:prompt}];
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})})
.then(function(r){return r.json()})
.then(function(data){
 hideTyping();
 if(data.error){addMessage("assistant","API错误："+data.error.message);return}
 addMessage("assistant",data.choices[0].message.content);
 document.getElementById("rw-step1").style.display="none";document.getElementById("rw-step2").style.display="";
}).catch(function(e){hideTyping();addMessage("assistant","请求失败："+e.message)});
}function submitRewriteStep2(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10)return;var custom=document.getElementById("rw-custom2").value.trim();if(rwMode==="B"&&!custom){alert("请填写自定义赛道与人设");return}var prompt="请基于上一轮的逐字稿和分析，按以下模式进行仿写：\n\n仿写模式："+(rwMode==="A"?"模式A 原汁原味仿写":"模式B 自定义定位仿写")+(rwMode==="B"?"\n新赛道/新人设："+custom:"")+"\n\n请直接输出仿写文案和仿写逻辑说明";switchChatMode("qa");addMessage("user","✍️ [仿写提交]\n模式："+(rwMode==="A"?"原汁原味":"自定义")+(rwMode==="B"?"\n赛道/人设："+custom:""));showTyping();var msgs=[{role:"system",content:agent.systemPrompt}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:prompt});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return};addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","❌ 请求失败："+e.message)})}
function addMessageHTML(role,html){
chatMessages.push({role:role,content:html});
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg "+role;
div.innerHTML='<div class="chat-avatar">'+(role==="assistant"?"🤖":"👤")+'</div><div class="chat-bubble">'+html+"</div>";
msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function openSettingsFromChat(){
closeChat();
setTimeout(function(){
document.getElementById("sidebar-api-body").classList.add("open");
document.getElementById("sb-apikey").focus();
},400);
}
function addMessage(role,content){
chatMessages.push({role:role,content:content});
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg "+role;
div.innerHTML='<div class="chat-avatar">'+(role==="assistant"?"🤖":"👤")+'</div><div class="chat-bubble">'+content.replace(/\n/g,"<br>")+"</div>";
msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function showTyping(){
if(isTyping)return;isTyping=true;
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg assistant";div.id="typing-indicator";
div.innerHTML='<div class="chat-avatar">🤖</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function hideTyping(){
isTyping=false;var el=document.getElementById("typing-indicator");if(el)el.remove();
}
function sendMessage(){
var input=document.getElementById("chat-input");var text=input.value.trim();
if(!text||isTyping)return;input.value="";input.style.height="auto";
addMessage("user",text);showTyping();callAgent(text);
}
function sendPreset(text){document.getElementById("chat-input").value=text;sendMessage()}
function handleChatKey(e){
if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage()}
var el=e.target;el.style.height="auto";el.style.height=Math.min(el.scrollHeight,100)+"px";
}

function normalizeEndpoint(url){
if(!url||url.length<5)return "https://api.openai.com/v1/chat/completions";
if(url.includes("/chat/completions")||url.includes("/v1/chat/completions"))return url;
url=url.replace(/\/+$/,"");
var known={ "api.deepseek.com":"https://api.deepseek.com/chat/completions" };
for(var key in known){if(url.includes(key))return known[key]}
return url+"/v1/chat/completions";
}
var apiConfig={endpoint:localStorage.getItem("fp_endpoint")||"https://api.openai.com/v1/chat/completions",apikey:localStorage.getItem("fp_apikey")||localStorage.getItem("flowplayer_api_key")||"",model:localStorage.getItem("fp_model")||"gpt-4o"};
function loadConfigUI(){document.getElementById("cfg-endpoint").value=apiConfig.endpoint;document.getElementById("cfg-apikey").value=apiConfig.apikey;document.getElementById("cfg-model").value=apiConfig.model}
function updateFormApiStatus(){
var s=document.getElementById("form-api-status");
var m=document.getElementById("form-api-msg");
if(!s)return;
if(apiConfig.apikey&&apiConfig.apikey.length>9){
s.className="form-api-status ok";m.textContent="API 已配置 · "+apiConfig.model+" · 端点: "+apiConfig.endpoint.split("/").slice(0,3).join("/");
}else{
s.className="form-api-status missing";m.textContent="未配置 API Key · 请在左侧栏 ⚙ API 配置 中设置";
}
}
function toggleChip(el,groupId,max){
var chips=document.getElementById(groupId).querySelectorAll(".select-chip");
var selected=document.getElementById(groupId).querySelectorAll(".select-chip.selected");
if(el.classList.contains("selected")){el.classList.remove("selected");return}
if(selected.length>=max){selected[0].classList.remove("selected")}
el.classList.add("selected");
}
function openSettings(e){var o=document.getElementById("settings-overlay");o.classList.add("open");document.getElementById("set-endpoint").value=apiConfig.endpoint;document.getElementById("set-apikey").value=apiConfig.apikey;document.getElementById("set-model").value=apiConfig.model;updateSoundUI();updateThemeUI();var b=document.querySelector("#settings-tab-theme .sidebar-api-save");if(b){b.onclick=saveThemeSettings}}function closeSettings(e){if(e&&e.target!==document.getElementById("settings-overlay"))return;document.getElementById("settings-overlay").classList.remove("open")}function switchSettingsTab(tab,btn){document.querySelectorAll(".settings-tab").forEach(function(t){t.classList.remove("active")});btn.classList.add("active");document.querySelectorAll(".settings-tab-content").forEach(function(c){c.classList.remove("active")});document.getElementById("settings-tab-"+tab).classList.add("active")}
function saveSettingsApi(){apiConfig.endpoint=normalizeEndpoint(document.getElementById("set-endpoint").value.trim());apiConfig.apikey=document.getElementById("set-apikey").value.trim();apiConfig.model=document.getElementById("set-model").value.trim()||"gpt-4o";localStorage.setItem("fp_endpoint",apiConfig.endpoint);localStorage.setItem("fp_apikey",apiConfig.apikey);localStorage.setItem("fp_model",apiConfig.model);document.getElementById("settings-overlay").classList.remove("open");updateApiStatus();updateFormApiStatus()}
function updateApiStatus(){var btn=document.querySelector(".sidebar-settings-btn");if(!btn)return;if(apiConfig.apikey){if(themeWasteland){btn.style.color="#d4a830";btn.style.borderColor="rgba(200,132,42,.4)"}else{btn.style.color="#10b981";btn.style.borderColor="rgba(16,185,129,.3)"}}else{btn.style.color="var(--text-muted)";btn.style.borderColor="var(--border-glow)"}}
function toggleSettings(e){e.stopPropagation();var p=document.getElementById("chat-settings-panel");p.classList.toggle("open")}
function applyAdjustment(){var t=document.getElementById("cfg-adjust");var v=t.value.trim();if(!v)return;document.getElementById("chat-settings-panel").classList.remove("open");addMessage("user","?? ?????"+v);t.value="";showTyping();callAgentForAdjust(v)}
function clearAdjustment(){document.getElementById("cfg-adjust").value=""}
function callAgentForAdjust(adjustText){var agent=agents[chatKey];if(!agent)return;if(!apiConfig.apikey||apiConfig.apikey.length<10){hideTyping();addMessageHTML("assistant","?? ???? API Key?????? ? API ?? ????");return}var msgs=[{role:"system",content:agent.systemPrompt}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:"??????????????????????????????????????????\n"+adjustText});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","? API ???"+data.error.message);return}addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","? ???????"+e.message)})}
function callAgent(userMsg){
var agent=agents[chatKey];if(!agent)return;
if(!apiConfig.apikey||apiConfig.apikey.length<10){
hideTyping();
addMessageHTML("assistant","⚠️ 尚未配置 API Key。<br><br><span class=\"api-config-hint\" onclick=\"openSettingsFromChat()\">⚙ 点击此处配置 API</span><br><br>也可以在右侧栏 ⚙ API 配置 中设置。");
return;
}
var msgs=[{role:"system",content:agent.systemPrompt}];
chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});
fetch(apiConfig.endpoint,{
method:"POST",
headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},
body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})
}).then(function(r){return r.json()}).then(function(data){
hideTyping();
if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return}
addMessage("assistant",data.choices[0].message.content);
}).catch(function(e){hideTyping();addMessage("assistant","❌ 网络请求失败："+e.message)});
}

var origSend=sendMessage;
sendMessage=function(){
var input=document.getElementById("chat-input");var text=input.value.trim();
if(text.startsWith("sk-")&&text.length>30){
apiConfig.apikey=text;localStorage.setItem("fp_apikey",apiConfig.apikey);input.value="";
updateApiStatus();updateFormApiStatus();addMessage("assistant","✅ API Key 已保存！\n\n端点："+apiConfig.endpoint+"\n模型："+apiConfig.model+"\n\n现在可以开始使用了，直接告诉我你的产品和需求。");return;
}
origSend();
};

document.getElementById("chat-overlay").addEventListener("click",function(e){if(e.target===this)closeChat()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&chatOpen)closeChat()});

function toggleMobileMenu(){var s=document.querySelector(".sidebar-left");var o=document.getElementById("mobile-overlay");if(s.classList.contains("mobile-open")){closeMobileMenu()}else{s.classList.add("mobile-open");o.classList.add("open")}}
function closeMobileMenu(){document.querySelector(".sidebar-left").classList.remove("mobile-open");document.getElementById("mobile-overlay").classList.remove("open")}
function handleResize(){var m=document.getElementById("menu-toggle");if(window.innerWidth<=768){m.style.display="flex"}else{m.style.display="none";closeMobileMenu()}}
window.addEventListener("resize",handleResize);
handleResize();
renderContent();
updateApiStatus();document.querySelector(".sidebar-settings-btn").addEventListener("click",function(e){e.stopPropagation();openSettings()});document.getElementById("logo-area").addEventListener("click",function(e){e.stopPropagation();goHome()});document.querySelector(".sidebar-settings-btn").addEventListener("click",function(e){e.stopPropagation();openSettings()});


// Auto-recommend triggers
// Auto-recommend function overrides (global scope)
// Auto-recommend now handled in xuehuiSelectTopic_orig
var origToggleChip2=toggleChip;
toggleChip=function(chip,containerId,maxSelect){
origToggleChip2(chip,containerId,maxSelect);
if(containerId==="xh-templates"){
setTimeout(function(){
var sel=document.getElementById("xh-templates").querySelectorAll(".select-chip.selected");
if(sel.length>0){
xhState.templates=Array.from(sel).map(function(c){return c.dataset.val});
xuehuiRenderOpenings();
xuehuiRecommendOpenings();
}
},300);
}
};
// DOM-dependent auto-recommend initialization
document.addEventListener("DOMContentLoaded",function(){
xuehuiRenderOpenings();
var elIndustry=document.getElementById("xh-industry");
var elAudience=document.getElementById("xh-audience");
if(!elIndustry||!elAudience)return;
var recTimer=null;
function autoRecElements(){
clearTimeout(recTimer);
recTimer=setTimeout(function(){
if(elIndustry.value.trim().length>=2&&elAudience.value.trim().length>=2){
xuehuiRecommendElements();
}
},1000);
}
elIndustry.addEventListener("input",autoRecElements);
elAudience.addEventListener("input",autoRecElements);
});

document.addEventListener("DOMContentLoaded",function(){var diag=document.getElementById("diag");if(diag){var ak=Object.keys(agents).join(",");var a20=!!agents["2-0"];var ar="origSelectTopic" in window;diag.textContent="agents:"+ak+" | 2-0:"+a20+" | autoRec:"+ar;}});


function tjUpdateStatus(){var s=document.getElementById("form-tj-status");var m=document.getElementById("form-tj-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 已配置 - "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="未配置 API Key"}}
function tjPick(el,groupId,max){var chips=document.getElementById(groupId).querySelectorAll(".select-chip");var selected=document.getElementById(groupId).querySelectorAll(".select-chip.selected");if(el.classList.contains("selected")){el.classList.remove("selected");return}if(selected.length>=max){selected[0].classList.remove("selected")}el.classList.add("selected")}
function tjGetVal(id){var c=document.getElementById(id).querySelector(".select-chip.selected");return c?c.dataset.val:""}
function tjGetVals(id){return Array.from(document.getElementById(id).querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val})}
function tjStep1(){var p=tjGetVal("tj-product-type");var a=tjGetVal("tj-audience");var s=document.getElementById("tj-selling-points").value.trim();var pp=document.getElementById("tj-pain-points").value.trim();var sc=tjGetVal("tj-scene");var pr=tjGetVal("tj-price");if(!p||!a||!s||!pp||!sc||!pr){alert("请完成所有必填项");return}document.getElementById("tj-loading").style.display="";var prompt="产品类型："+p+"\n目标受众："+a+"\n核心卖点："+s+"\n核心痛点："+pp+"\n使用场景："+sc+"\n价格定位："+pr+"\n\n从12种钩子类型中推荐3种最合适的，每种附推荐理由。\n12种钩子：1.点名受众 2.痛点共鸣 3.身份推荐 4.对话冲突 5.提出疑问 6.开箱评测 7.产地探访 8.实验演示 9.情绪共鸣 10.效果前置 11.悬念好奇 12.正话反说\n\n输出纯JSON数组：[{\"type\":\"钩子名\",\"reason\":\"推荐理由\"}]";xuehuiCallAPI("你是短视频营销专家。只输出JSON数组。",prompt,function(json){document.getElementById("tj-loading").style.display="none";var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);if(!Array.isArray(recs)||recs.length===0){for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}}if(!Array.isArray(recs)||recs.length===0){alert("推荐失败");return}var html="";recs.forEach(function(r,i){html+='<div style="margin-bottom:8px"><span style="font-weight:700;color:var(--purple)">'+(i+1)+'. '+r.type+'</span><br><span style="color:var(--text-muted);font-size:11px">'+r.reason+'</span></div>'});document.getElementById("tj-hooks-result").innerHTML=html;})}
function tjStep2(){var hooks=tjGetVals("tj-hooks");if(hooks.length===0){alert("请至少选择一个钩子类型");return}}
function tjStep3(){var persona=tjGetVal("tj-persona");var tone=tjGetVal("tj-tone");if(!persona||!tone){alert("请选择人设视角和语气风格");return}var p=tjGetVal("tj-product-type");var a=tjGetVal("tj-audience");var s=document.getElementById("tj-selling-points").value.trim();var pp=document.getElementById("tj-pain-points").value.trim();var sc=tjGetVal("tj-scene");var pr=tjGetVal("tj-price");var hooks=tjGetVals("tj-hooks");document.getElementById("tj-loading").style.display="";var prompt="产品类型："+p+"\n目标受众："+a+"\n核心卖点："+s+"\n核心痛点："+pp+"\n使用场景："+sc+"\n价格定位："+pr+"\n钩子类型："+hooks.join("、")+"\n人设视角："+persona+"\n语气风格："+tone+"\n\n生成完整引流文案，包含：\n【标题建议】（3个）\n【完整口播文案】（300-500字，口语化，先制造坏情绪再引出解决方案）\n【分镜脚本】（表格格式：时间段|画面描述|口播文案|情绪/语气）\n【可视化建议】（3-5个画面）\n【转化引导】（结尾话术+评论区预设3条）\n\n只输出纯文本，不要JSON格式。";xuehuiCallAPI("你是短视频营销文案专家。只输出纯文本文案。",prompt,function(json){document.getElementById("tj-loading").style.display="none";var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));document.getElementById("tj-result").textContent=result;})}
function tjCopyResult(){var text=document.getElementById("tj-result").textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){alert("已复制到剪贴板")}).catch(function(){fallbackTjCopy(text)})}else{fallbackTjCopy(text)}}
function fallbackTjCopy(text){var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");alert("已复制")}catch(e){alert("复制失败，请手动复制")}document.body.removeChild(ta)}
function tjIterate(type){var current=document.getElementById("tj-result").textContent;if(!current){alert("请先生成文案");return}document.getElementById("tj-loading").style.display="";var prompt="原文案："+current+"\n\n操作："+type+"\n\n请根据操作重新生成文案。只输出纯文本。";xuehuiCallAPI("你是文案优化专家。只输出纯文本。",prompt,function(json){document.getElementById("tj-loading").style.display="none";var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));var div=document.getElementById("tj-iterate-result");div.textContent=result;div.style.display=""})}
function tjReset(){var ir=document.getElementById("tj-iterate-result");if(ir)ir.style.display="none";document.getElementById("tj-step1").style.display="";document.getElementById("tj-selling-points").value="";document.getElementById("tj-pain-points").value="";document.getElementById("tj-hooks-result").innerHTML="";document.getElementById("tj-result").textContent="";document.querySelectorAll("#tj-product-type .select-chip.selected,#tj-audience .select-chip.selected,#tj-scene .select-chip.selected,#tj-price .select-chip.selected,#tj-hooks .select-chip.selected,#tj-persona .select-chip.selected,#tj-tone .select-chip.selected").forEach(function(c){c.classList.remove("selected")})}