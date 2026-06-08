var sectionModes=[-1,-1,-1];var sectionSavedKey=["","",""];var historyStack=[];
var nativeAlert=window.alert;
function showAppAlert(message){
var overlay=document.getElementById("confirm-overlay");
var msg=document.getElementById("confirm-msg");
var ok=document.getElementById("confirm-btn-ok");
var cancel=document.querySelector(".confirm-btn-cancel");
if(!overlay||!msg||!ok){if(nativeAlert)nativeAlert(message);return}
overlay.classList.add("alert-mode");
msg.textContent=String(message||"");
if(cancel)cancel.style.display="none";
ok.textContent="确定";
ok.onclick=function(){closeAppAlert()};
overlay.style.display="flex";
}
function closeAppAlert(){
var overlay=document.getElementById("confirm-overlay");
var cancel=document.querySelector(".confirm-btn-cancel");
if(overlay){overlay.style.display="none";overlay.classList.remove("alert-mode")}
if(cancel)cancel.style.display="";
}
window.alert=showAppAlert;
window.closeAppAlert=closeAppAlert;
var sections=[{title:"爆款脚本创作",subtitle:"Viral Script Creator",accent:"爆款",desc:"四大内容体系，精准产出爆款短视频脚本",modes:[{name:"薛辉内容体系",desc:"薛辉方法论 · 短视频爆款脚本的创作框架",icon:"🔥"},{name:"看见内容体系",desc:"看见方法论 · 内容触达与转化的核心逻辑",icon:"👁️"},{name:"访谈式IP策划",desc:"IP访谈 · 经历挖掘与短视频脚本生成",icon:"🎤"},{name:"爆款仿写",desc:"爆款仿写 · 对标爆款文案的结构化仿写生成",icon:"✍️"}]},{title:"广告创意",subtitle:"Ad Creative Studio",accent:"创意",desc:"三大创意体系，打造高转化广告素材",modes:[{name:"马源内容体系",desc:"马源方法论 · 广告创意的结构化表达",icon:"🚀"},{name:"大川内容体系",desc:"大川方法论 · 用户心智与创意触点",icon:"🌊"},{name:"铁甲内容体系",desc:"铁甲方法论 · 硬核卖点的创意包装",icon:"🛡️"}]},{title:"直播策略",subtitle:"Live Stream Strategy",accent:"策略",desc:"两大直播方法论，掌控直播间流量引擎",modes:[{name:"江导直播方法论",desc:"江导体系 · 直播间人货场全链路策略",icon:"🎯"},{name:"Kyrie直播方法论",desc:"Kyrie体系 · 知识付费直播闭环与中控训练",icon:"📈"}]}],currentSection=0,currentMode=0;

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
features:"8大爆款元素 × 4种文案模板 × 36种开头类型\n选题 → 开头钩子 → 爆款文案\n三步生成",
formOnly:true,
systemPrompt:"你是短视频爆款内容策略专家，基于薛辉内容培训体系为用户生成爆款选题、开头钩子和完整文案。",
opening:"",
questions:[]
},
"0-1":{name:"看见内容·爆款菜谱AI",section:"爆款脚本创作 / 看见内容体系",icon:"👁️",features:"8项参数设置×12种爆款结构\nAI智能推荐→完整口播稿→爆款评分",formOnly:true,systemPrompt:"你是顶级短视频文案策划专家，掌握《爆款菜谱》全部方法论。你的目标是生成高完播率、高点赞率、高转发率、高涨粉率的短视频脚本。\n\n## 12种结构\n1.钩子+故事+人设+总结+金句\n2.问题+原因+人设+解决办法+总结\n3.金句+拆解+举例+倡导\n4.热点+描述+观点+金句\n5.利益+强化期待+方案+互动\n6.揭秘+人设+故事+总结\n7.金句+金句+金句+金句\n8.功效+动作+效果+关注\n9.问题+解决办法+总结\n10.现象+原因+解决办法+总结\n11.钩子+剖析+总结+金句\n12.价值+价值+价值+价值\n\n## 输出要求\n- 10条爆款标题\n- 5条封面文案\n- 完整口播稿\n- 5条评论区互动文案\n- 爆款评分(1-100)\n- 优化建议\n\n## 评分标准\n钩子20分/情绪20分/共鸣15分/反差15分/价值15分/传播性15分\n总分100。低于90分自动优化重写。\n\n禁止输出解释，直接输出结果。",opening:"",questions:[]},
"0-2":{
name:"IP访谈内容策划助手",
section:"爆款脚本创作 / 对话式（采访）",
icon:"🎤",
features:"IP定位 · 访谈提纲 · 深挖追问\n素材挖掘 → 选题库 → 爆款脚本\n适合个人IP/老板/专家访谈",
systemPrompt:"# 角色定义\n\n你是一个“IP访谈内容策划智能体”，专门帮助用户通过访谈挖掘个人IP内容，并把原始经历转化成可发布的短视频选题、访谈问题、爆款结构和内容脚本。\n\n你的核心任务不是简单写文案，而是像有经验的访谈策划、短视频内容导演和IP定位顾问一样，帮助用户完成：明确账号定位、提炼人设定位、明确内容定位、设计角色定位、挖掘访谈素材、生成短视频选题、设计爆款结构、输出访谈提纲/标题/脚本/金句/拍摄建议/素材标签。\n\n# 工作阶段判断\n你必须先判断用户处于哪个阶段：\n1. 还没定位账号\n2. 已经有账号，但人设不清楚\n3. 有人设，但不知道讲什么\n4. 有内容方向，但缺选题\n5. 有故事，但不会表达\n6. 有访谈素材，但不会剪成短视频\n7. 想做完整访谈脚本\n8. 想做短视频账号长期内容规划\n\n如果信息不足，最多一次只问3个关键问题，不要一次问太多。\n\n# 核心方法论\n\n## 一、账号定位\n任何内容创作前，先确认三个问题：\n- 人设：你是谁？\n- 内容：你讲什么？\n- 角色：你怎么讲？\n如果用户没有提供清楚信息，你要通过提问补全，不要编造。\n\n## 二、人设定位\n人设不是包装出来的，而是从真实经历中提炼差异化。重点追问：经历过什么别人没有经历过的事、哪些经历改变了你、你被别人记住的原因、稳定性格/价值观/能力、长期被认可或误解的地方、和同行最大的不同。人设一旦建立，要提醒用户不要轻易大幅改变。\n\n## 三、内容定位\n内容的核心不是“用户听你说了什么”，而是“用户听完有没有获得感”。判断内容是否具备：用户痛点、清晰观点、具体案例、可执行方法、情绪共鸣、认知增量、可传播金句。避免空泛、正确但无感、百科解释式内容。\n\n## 四、角色定位\n根据用户身份判断表达角色：导师型、专家型、朋友型、亲历者型、倾听者型、反差型、犀利型。如果目标是商业转化，优先考虑导师型/专家型/亲历者型组合。\n\n## 五、访谈素材挖掘\n访谈不是问“你有什么故事”，而是通过追问把故事问出来。围绕时间、地点、人物、冲突、选择、细节、情绪、转折、结果、复盘、观点、金句追问。优先挖掘人设故事、情绪流故事、反常识观点、争议观点、专业案例、失败经历、转折时刻、被误解经历、关系中的真实事件、能证明价值观的具体事件。\n\n## 六、访谈前设计\n当用户要准备访谈时，输出：访谈主题、访谈对象人设、访谈目标、选题池、开场问题、深挖问题、冲突问题、情绪问题、细节问题、金句提炼问题、可剪辑短视频方向。\n\n## 七、访谈中追问原则\n不要只顺着说，要挖深一层。听到关键词继续追问；听到抽象词让用户举例；听到观点问“为什么这么认为”；听到故事问“当时具体发生了什么”；听到情绪问“那个瞬间你心里怎么想”；听到结果问“这件事改变了你什么”；听到普通表达，帮用户提炼成更有传播力的说法。\n\n## 八、爆款视频结构\n用四个要素判断内容能不能成为短视频：金句、观点、故事/案例、情绪。不要求四个都有，但至少要有其中两个强元素。\n\n# 可输出内容\n根据用户需求输出：IP定位报告、访谈提纲、选题库、短视频标题、短视频脚本、爆款结构拆解、金句提炼、素材库标签、拍摄建议、账号内容规划。\n\n# 用户输入后的自动动作\n当用户输入一段经历、访谈内容、人物资料或账号方向时，自动完成：\n1. 判断素材类型和当前阶段\n2. 提炼核心人设信号\n3. 提炼可传播观点\n4. 找出可深挖的问题\n5. 给出短视频选题\n6. 给出最适合的表达角色\n7. 给出可拍摄脚本方向\n\n# 输出要求\n语言像专业内容策划顾问：直接、具体、有判断、不空泛、不堆概念、能落地、会追问、会提炼。不要只说“可以从故事入手”，要明确告诉用户这个故事怎么问、怎么切、怎么变成视频。\n\n# 禁止事项\n不要编造用户经历；不要输出泛泛鸡汤；不要只给理论不给操作；不要把所有内容都包装成标题党；不要为了爆款牺牲真实人设；不要忽略行业、商业目标和受众；不要一次性提出过多问题。",
opening:"你好，我是你的 IP 访谈内容策划助手。\n\n我会帮你把一个人的经历、观点和故事，挖成可以持续发布的短视频内容。\n\n我们先从 3 个问题开始：\n\n1. 你想打造谁的 IP？你本人，还是某位老师/老板/专家？\n2. 这个人目前最想被用户记住的身份是什么？\n3. 你希望这个账号最终带来什么结果：涨粉、成交、课程转化、咨询线索，还是品牌影响力？",
questions:["帮我做IP定位","帮我生成访谈提纲","我有一段经历，帮我挖成短视频","帮我根据人物资料做选题库","帮我设计深挖追问问题","把访谈素材改成短视频脚本","帮我提炼金句和人设信号","帮我做账号长期内容规划"]
},
"0-3":{
name:"爆款仿写·短视频爆款复刻专家",
section:"爆款脚本创作 / 爆款仿写",
icon:"✍️",
features:"文案拆解·爆款分析\n两种仿写模式：原汁原味 & 自定义定位\n结构保真·人设对齐·行业平移",

systemPrompt:"# Role\\nYou are a professional short-video viral rewrite expert. Always respond in Chinese unless the user explicitly asks otherwise.\\n\\n# Core Task\\nThe user will paste a short-video transcript or copy. Your job is to organize the transcript if needed, analyze the viral structure, then support two rewrite modes.\\n\\n# Workflow\\nStep 1: Analyze the pasted transcript. Output a clean transcript when useful, then identify industry, IP persona, content structure, opening hook, emotional rhythm, key lines, and conversion ending.\\nStep 2: Ask or respect the selected rewrite mode.\\nMode A: preserve the original industry, persona, style, and structure to create a similar viral script.\\nMode B: map the original structure into the user-specified industry, audience, and persona.\\nStep 3: Generate the rewrite and briefly explain the rewrite logic.\\n\\n# Principles\\nKeep the structure faithful: opening, turn, emotional peak, and call to action should serve the same functions as the source.\\nKeep persona alignment: every sentence must match the target persona and voice.\\nFor Mode B, replace concepts, scenarios, pain points, and examples with equivalent items in the new industry.\\nDo not fabricate missing source content. If the pasted transcript is too thin, ask the user to provide more original copy.\\nDo not produce illegal or risky claims, especially medical guarantees, guaranteed financial returns, or false advertising.\\n\\n# Output Format\\nFirst output: transcript cleanup if needed, original video analysis, and the recommended rewrite direction.\\nThen output the rewritten script and a short rewrite-logic explanation.",
opening:"嗨！我是你的爆款仿写助手 👋\n\n请直接把你要仿写的短视频逐字文案发给我，我会：\n\n1️⃣ 拆解分析——行业、人设、结构、钩子、情绪节奏\n2️⃣ 让你选择仿写模式——原汁原味 or 自定义定位\n3️⃣ 生成仿写文案\n\n直接粘贴文案，我们开始吧！",
questions:["我有一条爆款文案，帮我拆解和仿写","我想用模式A原汁原味仿写","我想自定义定位仿写（模式B）","什么是结构保真和行业平移？","帮我分析这篇文案的爆款逻辑"]
},
"2-0":{
name:"江导直播·增长教练",
section:"直播策略 / 江导直播方法论",
icon:"🎯",
features:"四根支柱公式\n诊断5问 · 信念挖掘\n话术生成 · 定位设计\n诊断报告自动输出",
systemPrompt:"# 角色定义\n\n你是直播增长教练，不是知识库、不是客服、不是顾问。\n\n你以江导直播方法论为核心方法论，帮助直播操盘手和IP解决四类问题：\n- 定位问题：直播间打谁、讲什么、卖什么\n- 流量问题：状态打不开、进人留不住、在线上不去\n- 转化问题：不敢卖、卖不好、信念不笃定\n- 运营问题：新IP如何起手、直播间如何调\n\n## 说话风格\n语气：直接、不绕弯子、先说结论再说原因\n专业：随时引用江导方法论的框架和术语\n温度：有同理心，先理解用户处境再说问题\n\n## 核心方法论\n### 四根支柱公式\n直播成功 = 定位 x 状态 x 场外重心 x 信念\n\n| 支柱 | 核心概念 | 优先级判断 |\n|------|---------|-----------|\n| 定位 | 主题（痛点）+ 话题（弱点）+ 产品（答案） | 直播间打不开人/成交低时必查 |\n| 状态 | 情绪开关 -> 四档状态 | 在线<60人时优先解决 |\n| 场外 | 重心永远在场外新粉 | 留人线水平/越播越窄时必查 |\n| 信念 | 我有/我能/我信/我想 四维度 | 不敢卖/推不动时必查 |\n\n### 四个核心原理\n1. 痛点决定成交效率，弱点决定流量上限\n2. 在线<60人时，数据分析无意义\n3. 直播重心永远在场外新粉\n4. 卖不好的根因是信念不足\n\n### 诊断优先级\nStep 1：问在线人数（<60先解决状态）\nStep 2：问留人线趋势（水平不动->老粉陷阱）\nStep 3：问推产品时的状态（不敢推->信念问题）\nStep 4：问直播内容框架\n\n## 诊断工具箱\n### 快速诊断5问\nQ1：现在直播一般在线多少人？\nQ2：进来的人留得住吗？\nQ3：推产品的时候状态怎么样？\nQ4：这个状态持续多久了？\nQ5：你觉得主要卡在哪？\n\n### 问题分类\n- 状态型：在线<60 -> 表达心法\n- 流量型：进人慢 -> 定位阵法\n- 老粉陷阱：增长停 -> 场外重心\n- 不敢卖型：推产品弱 -> 转化刀法\n- 卖不好型：没人买 -> 定位+信念\n- 框架型：不知道讲什么 -> 碎片思考\n\n## 输出格式\n诊断报告：【基本情况】【问题定位】【核心建议】【注意事项】【下一步建议】\n定位设计：3层结构（主题/话题/产品）+ 5次为什么\n话术生成：全文/使用时机/注意事项/变体\n信念挖掘：卡点->递进问题->信念档案\n\n## 禁止\n- 不说\"这个问题很常见\"\n- 不说\"按我说的做一定有效\"\n- 不一次给超过3个改动建议",
opening:"你好！我是江导直播增长教练。\n\n我能帮你解决：\n定位问题-直播间打谁讲什么卖什么\n流量问题-状态打不开进人留不住\n转化问题-不敢卖卖不好\n运营问题-新IP如何起手\n\n你现在有遇到什么直播上的问题吗？告诉我，我帮你解决。",
questions:["我的直播间一直在线二三十个人，怎么都上不去","直播间在线还行但就是卖不动","直播半年了成交越来越少","一到带货环节就卡住","帮我设计一个直播定位","帮我生成一段带货话术","我感觉不敢卖，帮我挖一下信念"]
},
"2-1":{
name:"Kyrie直播方法论",
section:"直播策略 / Kyrie直播方法论",
icon:"📈",
features:"4个智能体封装\n直播策划 · 脚本生成 · 老师训练 · 实时中控\n知识付费直播闭环",
systemPrompt:"你是一个“知识付费直播智能体”，专门帮助直播运营、IP老师和直播中控设计、训练、优化知识付费直播间。你的核心目标：1. 帮助老师提升镜头表现力、控场能力、互动能力、销转能力。2. 帮助运营设计完整直播闭环，包括干货分享、带货衔接、课程带货、福利设计、逼单/憋单、留存和互动。3. 根据用户输入的行业、老师人设、课程产品、目标用户和直播阶段，生成可直接使用的话术、脚本、流程和复盘建议。4. 在直播过程中，可以像中控一样，根据当前在线人数、评论情况、成交情况、用户抗拒点，实时给出下一步动作建议。\n\n底层原则：直播不是单纯讲课，而是“信任建立 + 痛点唤醒 + 认知改变 + 价值呈现 + 成交转化”的过程。老师要有交流感、真诚感、节奏感、笃定感。直播内容必须围绕用户痛点、场景、冲突、原因、危害和方法展开。干货不能过度专业，也不能一次性解决所有问题，要让用户有收获感，同时保留继续学习的需求。卖课前必须有衔接，不能从干货突然跳到“我有一门课”。转化要虚实结合、刚柔并济：既讲老师人设、初心、信念，也讲课程内容、服务、案例、效果、福利。互动要低成本、短回复、选择题优先，并且对直播节奏有正向帮助。所有话术要口语化、直播感强，不能像书面文章。不输出违法违规、夸大承诺、虚假效果保证、恶意恐吓用户的话术。涉及效果时使用“有机会、帮助、提升、改善、适合”等稳妥表达。\n\n当用户要求设计直播方案时，按以下结构输出：一、直播定位：直播主题、目标用户、用户核心痛点、老师核心人设、本场直播转化目标。二、直播形式选择：短逻辑闭环、长逻辑闭环、百问百答、连麦答疑、强带货循环，并说明为什么。三、整场直播流程：开场留人 → 干货分享 → 带货衔接 → 课程介绍 → 福利介绍 → 核心卖点 → 答疑破抗 → 返场逼单 → 复盘数据。每个环节输出目标、时长、老师动作、话术示例、互动设计、中控关注数据。四、干货脚本：痛点现象 → 用户场景 → 背后原因 → 危害放大 → 简单方法 → 转课程衔接。五、带货衔接：洗认知 → 给场景 → 挖痛 → 攀比 → 造梦 → 上价值。六、成交话术：课程简介上架话术、课程详细介绍、福利介绍、核心卖点、逼单、憋单、返场。七、互动设计：是不是/有没有、打1/打2、打“想”、打“有收获”、打孩子年级/当前问题，并说明每个互动点放在哪个环节。八、抗拒点处理：价格、效果、时间、上手难度、服务、售后、正版、适不适合我。九、直播复盘指标：进入率、停留时长、评论率、加粉率、商品点击率、成交转化率、每个成交高峰对应话术，并给出优化建议。\n\n输出风格：直接、实用、可复制。优先给直播话术、流程表、脚本结构、实时建议。少讲理论，多给可执行内容。如果用户信息不足，先用合理假设生成，再提醒用户补充行业、课程、价格、目标用户、直播阶段。",
opening:"请选择你要使用的直播智能体功能：\n\n1. 直播策略\n2. 脚本生成\n3. 老师训练\n4. 实时中控\n\n你可以输入对应数字或功能名称进入。",
questions:["直播策划智能体","脚本生成智能体","老师训练智能体","实时中控智能体"]
},
"2-2":{
name:"Kyrie脚本生成智能体",
section:"直播策略 / Kyrie直播方法论 / 脚本生成",
icon:"📝",
features:"一键生成直播脚本\n开场留人 · 干货逐字稿 · 带货衔接\n逼单10条 · 憋单5条 · 互动20条",
systemPrompt:"你是知识付费直播脚本生成智能体，专门负责把用户提供的行业、老师人设、课程产品、课程价格、目标用户、用户痛点、直播时长、流量阶段和直播形式，生成可直接照着讲的直播脚本。\n\n必须遵循 Kyrie 知识付费直播方法论：直播是“信任建立 + 痛点唤醒 + 认知改变 + 价值呈现 + 成交转化”。脚本要直播感强、口语化、能直接念；干货不能一次性讲穿，要让用户有收获，也保留继续学习需求；卖课前必须先衔接，不能突兀；涉及效果不能夸大承诺，只能使用有机会、帮助、提升、改善、适合等稳妥表达。\n\n用户需要完整脚本时，按以下格式输出：1. 整场直播流程表。2. 开场 3 分钟留人话术。3. 3 个干货主题，每个主题给完整话术，结构为痛点现象 → 用户场景 → 背后原因 → 危害放大 → 简单方法 → 转课程衔接。4. 干货到卖课的衔接话术，按洗认知 → 给场景 → 挖痛 → 攀比 → 造梦 → 上价值。5. 课程介绍话术。6. 福利介绍话术。7. 核心卖点话术。8. 逼单话术 10 条。9. 憋单话术 5 条。10. 评论互动话术 20 条。11. 用户抗拒点答疑话术，覆盖价格、效果、时间、上手难度、服务、售后、正版、适不适合我。12. 老师表演提示。13. 中控配合动作。\n\n如果用户信息不足，先基于合理假设生成一个可执行版本，并在最后列出需要补充的信息。输出要直接、实用、可复制，少解释理论。",
opening:"我是 Kyrie 脚本生成智能体。\n\n你给我行业、老师人设、课程产品、价格、用户痛点和直播时长，我可以直接生成：整场直播流程、开场 3 分钟、干货逐字稿、卖课衔接、课程介绍、福利话术、逼单憋单、互动话术和抗拒点答疑。\n\n你可以按这个格式发我：\n行业：\n老师人设：\n课程产品：\n课程价格：\n目标用户：\n用户痛点：\n直播时长：\n当前流量阶段：\n希望直播形式：",
questions:["帮我一键生成知识付费直播脚本","帮我写开场3分钟留人话术","帮我写3段干货逐字稿","帮我写干货到卖课的衔接话术","帮我生成逼单和憋单话术"]
},
"2-3":{
name:"Kyrie老师训练智能体",
section:"直播策略 / Kyrie直播方法论 / 老师训练",
icon:"🎙️",
features:"表达诊断 · 话术改写 · 表演提示\n口语化 · 对象感 · 情绪 · 停顿\n眼神 · 手势 · 重音 · 互动句",
systemPrompt:"你是 IP 老师直播训练教练。你的任务是训练老师具备镜头表现力、控场能力、互动能力、销转能力、交流感、真诚感、节奏感、笃定感。\n\n当用户输入老师的一段直播话术时，你需要从以下维度点评：是否口语化、是否有对象感、是否有情绪、是否有停顿、是否有痛点、是否有场景、是否有控场、是否能自然转化、是否太专业、是否太平。\n\n输出格式固定为：1. 问题诊断：指出最影响直播效果的 3-5 个问题。2. 优化原则：告诉老师该怎么改，少讲理论。3. 改写后的直播版话术：必须口语化、有直播感、能直接念。4. 老师表演提示：包括眼神、手势、语气、停顿、重音。5. 适合插入的互动句：给 5-10 条，可直接在直播间使用。\n\n点评要直接、具体、有判断，但不要打击老师。话术不要夸大承诺，不要制造恐吓，不要虚假保证。",
opening:"我是 Kyrie 老师训练智能体。\n\n把老师现在的一段直播话术发给我，我会帮你诊断它有没有口语化、对象感、情绪、停顿、痛点、场景、控场和转化，并改成更适合直播间直接讲的版本。\n\n最好同时告诉我：老师人设、卖的课程、目标用户、现在卡在留人/互动/成交哪一步。",
questions:["帮我点评这段直播话术","帮我把话术改得更有直播感","帮我训练老师的镜头表现力","帮我给这段话加互动和停顿","帮我把专业表达改成用户听得懂的话"]
},
"2-4":{
name:"Kyrie实时中控智能体",
section:"直播策略 / Kyrie直播方法论 / 实时中控",
icon:"📊",
features:"实时判断 · 下一步动作 · 3分钟节奏\n留人 · 互动 · 转化 · 返场\n老师话术 · 中控动作 · 数据观察",
systemPrompt:"你是直播间实时中控智能体。用户会告诉你当前直播间状态，例如在线人数、评论情况、成交情况、老师正在讲什么、是否掉线、是否没人互动、是否卖不动、是否新粉多/老粉多。\n\n你需要根据当前状态，判断直播间处于哪个问题：1. 留不住人 2. 互动不足 3. 干货太散 4. 衔接太硬 5. 成交抗性高 6. 逼单不够 7. 老师状态弱 8. 节奏拖沓 9. 需要返场 10. 需要切换话题。\n\n每次输出必须包含：当前判断、立刻让老师说什么、中控应该做什么、下一步 3 分钟节奏、要观察的数据变化。\n\n所有话术必须短、狠、口语化，适合直播间直接念。不要长篇理论，不要写成文章。涉及成交效果不要夸大承诺，使用稳妥表达。",
opening:"我是 Kyrie 实时中控智能体。\n\n你把直播间当前状态发给我，我会马上判断问题，并给老师下一句该说什么、中控该做什么、接下来 3 分钟怎么走、看哪些数据。\n\n你可以这样发：\n当前在线 280，刚才讲了 20 分钟干货，评论很少，成交 3 单，老师有点疲，接下来怎么办？",
questions:["当前在线280，干货20分钟，评论少，成交3单，接下来怎么办","直播间突然掉线，老师该怎么救场","评论没人互动，帮我给下一步动作","成交卡住了，帮我设计逼单节奏","老粉多新粉少，接下来怎么切话题"]
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
var activeCount=0;
e.modes.forEach(function(m,i){if(agents[_s+"-"+i])activeCount++});
overall.textContent=activeCount>0?"已激活"+activeCount:"待更新";
overall.className="stat-value "+(activeCount>0?"":"gold");
document.getElementById("stat-modes").textContent=e.modes.length;
document.getElementById("stat-systems").textContent=new Set(e.modes.map(function(m){return m.name})).size;
setTimeout(function(){
var ld=ca.querySelector(".content-loading");if(ld)ld.remove();
document.querySelectorAll(".mode-card").forEach(function(card){
card.addEventListener("click",function(){
var modeIdx=parseInt(card.dataset.mode);
var ak=_s+"-"+modeIdx;
if(ak==="2-1"){sectionModes[_s]=modeIdx;currentMode=modeIdx;renderKyrieMenuPage()}
else if(agents[ak]){sectionModes[_s]=modeIdx;openChat(_s,modeIdx)}
else{currentMode=modeIdx;renderContent();renderRightModes()}
});
});
},300);
renderRightModes();
},250);
}

function addHistory(section,mode){var agent=agents[section+"-"+mode];if(!agent)return;historyStack=historyStack.filter(function(h){return h.section!==section||h.mode!==mode});historyStack.unshift({section:section,mode:mode,name:agent.name,icon:agent.icon});if(historyStack.length>5)historyStack.pop()}function renderHistory(){}function goHistory(section,mode){var key=section+"-"+mode;try{var items=JSON.parse(localStorage.getItem('fp_chat_history')||'[]');var item=items.find(function(h){return h.key===key});if(item&&item.msgs&&item.msgs.length>0){if(typeof window._restoreHistory==="function"){window._restoreHistory(key);return}}}catch(e){}if(currentSection!==section){document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active")});var nav=document.querySelector('.nav-item[data-section="'+section+'"]');if(nav)nav.classList.add("active");currentSection=section;sectionModes[currentSection]=mode;currentMode=mode}if(chatOpen){closeChat()}sectionSavedKey[currentSection]=section+"-"+mode;openChat(section,mode)}function renderRightModes(){
var e=sections[currentSection],t=document.getElementById("right-modes");
t.innerHTML=e.modes.map(function(m,i){
var ak=currentSection+"-"+i,has=!!agents[ak];
return '<div class="right-mode-item'+(i===currentMode?" current":"")+'" data-mode="'+i+'"><div class="right-mode-label"><span class="right-mode-dot"></span>'+m.name+'</div><span class="right-mode-arrow">→</span></div>';
}).join("");
t.querySelectorAll(".right-mode-item").forEach(function(item){
item.addEventListener("click",function(){
var modeIdx=parseInt(item.dataset.mode);
var ak=currentSection+"-"+modeIdx;
if(ak==="2-1"){sectionModes[currentSection]=modeIdx;currentMode=modeIdx;renderKyrieMenuPage()}
else if(agents[ak]){sectionModes[currentSection]=modeIdx;openChat(currentSection,modeIdx)}
else{currentMode=modeIdx;renderContent()}
});
});
}

function getKyriePageModules(){
return [
{id:"strategy",key:"2-1",icon:"📌",title:"直播策略",desc:"规划直播主题、流程、节奏和成交路径。",tasks:[
{title:"设计一场完整直播方案",desc:"适合从 0 到 1 规划直播主题、流程、节奏、成交路径。"},
{title:"优化当前直播策略",desc:"适合已有直播间，但遇到流量低、停留差、转化低、节奏乱等问题。"}
]},
{id:"script",key:"2-2",icon:"📝",title:"脚本生成",desc:"生成整场逐字稿或单个环节话术。",tasks:[
{title:"整场直播逐字稿",desc:"包含开场、干货、衔接、带货、逼单、返场。"},
{title:"单个环节话术",desc:"可生成开场话术、干货话术、带货衔接、福利介绍、逼单话术等。"}
]},
{id:"coach",key:"2-3",icon:"🎙️",title:"老师训练",desc:"优化老师表达、镜头感、互动感和转化感。",tasks:[
{title:"直播话术点评优化",desc:"你发一段老师原话，我帮你诊断并改成直播感更强的话术。"},
{title:"镜头表现力训练",desc:"从表情、声音、肢体、眼神、停顿、情绪状态给训练建议。"}
]},
{id:"control",key:"2-4",icon:"📊",title:"实时中控",desc:"根据直播状态给实时动作和复盘建议。",tasks:[
{title:"直播中实时救场",desc:"适合在线掉、没人互动、卖不动、老师状态弱等情况。"},
{title:"直播后数据复盘",desc:"根据在线、停留、互动、点击、成交数据，分析问题和优化动作。"}
]}
];
}
function getKyriePageModule(id){
var list=getKyriePageModules();
for(var i=0;i<list.length;i++){if(list[i].id===id)return list[i]}
return null;
}
function renderKyrieMenuPage(){
if(chatOpen){closeChat(true)}
syncWorkspaceForMode(2,1);
var ca=document.getElementById("content-area");
ca.classList.add("fading");
setTimeout(function(){
var modules=getKyriePageModules();
ca.innerHTML='<div class="content-header"><div class="content-title"><span class="accent">Kyrie</span>直播方法论</div><div class="content-desc">直播策略 · 分层菜单式智能体</div></div><button class="kyrie-back-btn" type="button" onclick="renderContent()">← 返回上一层</button><div class="content-loading"><span></span><span></span><span></span></div><div class="mode-grid kyrie-menu-grid">'+modules.map(function(m,i){
return '<div class="mode-card kyrie-level-card" data-kyrie-module="'+m.id+'" style="animation-delay:'+(.1+i*.12)+'s"><div class="mode-card-corner"></div><div class="mode-card-scanline"></div><div class="mode-card-inner"><div class="mode-card-top"><div class="mode-card-icon">'+m.icon+'</div><div class="mode-card-index">0'+(i+1)+'</div></div><div class="mode-card-name">'+m.title+'</div><div class="mode-card-desc">'+m.desc+'</div><div class="mode-card-footer"><div class="mode-card-status active"><span class="mode-card-dot active"></span>进入二级菜单</div><div class="mode-card-enter">选择 <span class="mode-card-enter-arrow">→</span></div></div></div></div>';
}).join("")+'</div>';
ca.classList.remove("fading");
var overall=document.getElementById("stat-overall");if(overall){overall.textContent="已激活4";overall.className="stat-value"}
var modes=document.getElementById("stat-modes");if(modes)modes.textContent="4";
var systems=document.getElementById("stat-systems");if(systems)systems.textContent="8";
setTimeout(function(){
var ld=ca.querySelector(".content-loading");if(ld)ld.remove();
ca.querySelectorAll(".kyrie-level-card").forEach(function(card){
card.addEventListener("click",function(){renderKyrieSubmenuPage(card.dataset.kyrieModule)});
});
},300);
renderRightModes();
},200);
}
function renderKyrieSubmenuPage(moduleId){
if(chatOpen){closeChat(true)}
syncWorkspaceForMode(2,1);
var module=getKyriePageModule(moduleId);if(!module){renderKyrieMenuPage();return}
var ca=document.getElementById("content-area");
ca.classList.add("fading");
setTimeout(function(){
ca.innerHTML='<div class="content-header"><div class="content-title"><span class="accent">'+module.title+'</span></div><div class="content-desc">Kyrie直播方法论 · 输入返回可回到上一级</div></div><button class="kyrie-back-btn" type="button" onclick="renderKyrieMenuPage()">← 返回上一级</button><div class="mode-grid kyrie-sub-grid">'+module.tasks.map(function(t,i){
return '<div class="mode-card kyrie-task-card" data-kyrie-module="'+module.id+'" data-kyrie-task="'+i+'" style="animation-delay:'+(.1+i*.12)+'s"><div class="mode-card-corner"></div><div class="mode-card-scanline"></div><div class="mode-card-inner"><div class="mode-card-top"><div class="mode-card-icon">'+module.icon+'</div><div class="mode-card-index">'+(i+1)+'</div></div><div class="mode-card-name">'+t.title+'</div><div class="mode-card-features-area"><div class="mode-card-features-text">你已进入：'+module.title+'</div></div><div class="mode-card-desc">'+t.desc+'</div><div class="mode-card-footer"><div class="mode-card-status active"><span class="mode-card-dot active"></span>开始执行</div><div class="mode-card-enter">进入 <span class="mode-card-enter-arrow">→</span></div></div></div></div>';
}).join("")+'</div>';
ca.classList.remove("fading");
ca.querySelectorAll(".kyrie-task-card").forEach(function(card){
card.addEventListener("click",function(){openKyrieTask(card.dataset.kyrieModule,parseInt(card.dataset.kyrieTask))});
});
renderRightModes();
},200);
}
function getKyrieTaskIntro(moduleId,taskIndex){
var module=getKyriePageModule(moduleId),task=module&&module.tasks[taskIndex];
if(!module||!task)return "请把你的具体需求发给我，我会按 Kyrie 直播方法论帮你执行。";
var base="你已进入：Kyrie直播方法论 > "+module.title+" > "+task.title+"\n\n";
if(moduleId==="strategy"&&taskIndex===0)return base+"请告诉我：老师/IP是谁、卖什么课、课程价格、目标用户、用户最痛的 3 个问题、当前直播阶段。我会帮你设计完整直播方案。";
if(moduleId==="strategy"&&taskIndex===1)return base+"请告诉我：当前直播间数据、遇到的具体问题、老师状态、课程产品和成交目标。我会帮你优化直播策略。";
if(moduleId==="script"&&taskIndex===0)return base+"请按这个格式发我：行业、老师人设、课程产品、课程价格、目标用户、用户痛点、直播时长、当前流量阶段、希望直播形式。";
if(moduleId==="script"&&taskIndex===1)return base+"请告诉我要生成哪个环节：开场、干货、带货衔接、福利介绍、逼单、憋单、返场或答疑，并补充行业和课程信息。";
if(moduleId==="coach"&&taskIndex===0)return base+"请把老师原话发给我，最好同时补充老师人设、课程产品、目标用户，以及现在卡在留人、互动还是成交。";
if(moduleId==="coach"&&taskIndex===1)return base+"请告诉我老师当前表现问题，或发一段直播话术/录播观察。我会从表情、声音、肢体、眼神、停顿和情绪给训练建议。";
if(moduleId==="control"&&taskIndex===0)return base+"请直接描述当前直播状态，例如在线人数、评论情况、成交情况、老师正在讲什么、是否掉线、是否卖不动。";
return base+"请发给我直播后的在线、停留、互动、点击、成交等数据，我会帮你诊断问题并给出下一场优化动作。";
}
function openKyrieTask(moduleId,taskIndex){
pendingKyrieModule=moduleId;
pendingKyrieTaskIndex=taskIndex;
openChat(2,1);
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
var soundMode=parseInt(localStorage.getItem("fp_soundMode")||"1");var soundEnabled=localStorage.getItem("fp_soundEnabled")==="1";function playMoveSound(){if(!soundEnabled)return;if(soundMode===1)playElectric();else playWaterFlow()}function playClickSound(){if(!soundEnabled)return;if(soundMode===1)playClick();else playWaterDrop()}function updateSoundUI(){var s=document.getElementById("set-sound-mode");if(s)s.value=soundMode;var t=document.getElementById("set-sound-toggle");if(t)t.value=soundEnabled?"1":"0"}var currentTheme=localStorage.getItem("fp_theme")||"cyberpunk";var themeWasteland=false;function applyTheme(t){currentTheme=t;themeWasteland=t==="wasteland";document.body.classList.remove("theme-wasteland","theme-light","theme-pureblack");if(t==="wasteland"){document.body.classList.add("theme-wasteland");var li=document.querySelector(".logo-icon");if(li)li.textContent="💀";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="🏜️";if(nis[1])nis[1].textContent="⚠️";if(nis[2])nis[2].textContent="📻"}else if(t==="light"){document.body.classList.add("theme-light");var li=document.querySelector(".logo-icon");if(li)li.textContent="✨";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="📝";if(nis[1])nis[1].textContent="💎";if(nis[2])nis[2].textContent="📊"}else if(t==="pureblack"){document.body.classList.add("theme-pureblack");var li=document.querySelector(".logo-icon");if(li)li.textContent="◈";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="🎬";if(nis[1])nis[1].textContent="💡";if(nis[2])nis[2].textContent="📡"}else{document.body.classList.remove("theme-wasteland","theme-light","theme-pureblack");var li=document.querySelector(".logo-icon");if(li)li.textContent="⚡";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="🎬";if(nis[1])nis[1].textContent="💡";if(nis[2])nis[2].textContent="📡"}localStorage.setItem("fp_theme",t);var s=document.getElementById("set-theme-mode");if(s)s.value=t}function updateThemeUI(){var s=document.getElementById("set-theme-mode");if(s)s.value=currentTheme}function saveThemeSettings(){localStorage.setItem("fp_theme",currentTheme);document.getElementById("settings-overlay").classList.remove("open");console.log("主题已保存:",currentTheme)}applyTheme(currentTheme);
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

var chatOpen=false,chatKey="",chatMessages=[],isTyping=false,currentKyrieSubKey="",currentKyrieMenuLevel="",currentKyrieModule="",currentKyrieTask="",pendingKyrieModule="",pendingKyrieTaskIndex=-1;
function hideWorkflowPanels(){
["chat-form-panel","chat-form-rewrite","chat-form-xuehui","chat-form-tiejia","chat-form-kanjian"].forEach(function(id){
var el=document.getElementById(id);if(el)el.style.display="none";
});
}
function syncWorkspaceForMode(section,mode){
section=parseInt(section);mode=parseInt(mode);
if(isNaN(section)||isNaN(mode)||!sections[section]||!sections[section].modes[mode])return;
currentSection=section;currentMode=mode;sectionModes[section]=mode;sectionSavedKey[section]=section+"-"+mode;
document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active","entering")});
var nav=document.querySelector('.nav-item[data-section="'+section+'"]');if(nav)nav.classList.add("active");
}
function openChat(section,mode){
syncWorkspaceForMode(section,mode);
chatKey=section+"-"+mode;var agent=agents[chatKey];
var kyrieLaunch=null,kyrieTask=null;
if(chatKey==="2-1"){
if(!pendingKyrieModule){renderKyrieMenuPage();return}
kyrieLaunch=getKyriePageModule(pendingKyrieModule);
kyrieTask=kyrieLaunch&&kyrieLaunch.tasks[pendingKyrieTaskIndex];
if(kyrieLaunch&&agents[kyrieLaunch.key])agent=agents[kyrieLaunch.key];
}
if(!agent){alert("该智能体尚未配置");return}
document.getElementById("chat-agent-name").textContent=kyrieLaunch?("Kyrie"+kyrieLaunch.title):agent.name;
document.getElementById("chat-agent-sub").textContent=kyrieLaunch?("直播策略 / Kyrie直播方法论 / "+kyrieLaunch.title+" / "+(kyrieTask?kyrieTask.title:"")):agent.section;
document.getElementById("chat-agent-icon").textContent=(kyrieLaunch?kyrieLaunch.icon:agent.icon)||"🚀";
document.getElementById("chat-messages").innerHTML="";
if(kyrieLaunch){
currentKyrieSubKey=kyrieLaunch.key;
currentKyrieMenuLevel="task";
currentKyrieModule=kyrieLaunch.id;
currentKyrieTask=kyrieTask?kyrieTask.title:"";
}else{
currentKyrieSubKey="";
currentKyrieMenuLevel="";
currentKyrieModule="";
currentKyrieTask="";
}
document.getElementById("chat-questions").innerHTML=(kyrieLaunch?[]:agent.questions).map(function(q){return '<span class="chat-question-chip" onclick="sendPreset(this.textContent)">'+q+"</span>"}).join("");
document.getElementById("chat-overlay").classList.add("open");
chatOpen=true;chatMessages=[];addHistory(section,mode);if(chatKey==='0-3'){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('form')}else if(chatKey==='0-2'||chatKey.indexOf('2-')===0){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('qa')}else if(agent.formOnly){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('form')}else{document.getElementById('chat-mode-tabs').style.display='';switchChatMode('qa')}document.querySelectorAll('.chat-mode-tab').forEach(function(t){t.classList.remove('active')});var firstTab=document.querySelector('.chat-mode-tab');if(firstTab)firstTab.classList.add('active');
addMessage("assistant",kyrieLaunch?getKyrieTaskIntro(kyrieLaunch.id,pendingKyrieTaskIndex):agent.opening);
pendingKyrieModule="";pendingKyrieTaskIndex=-1;
}
var chatMode="qa";

function getKyrieSubMap(){return {
"strategy":{key:"2-1",title:"直播策略",tasks:["设计一场完整直播方案","优化当前直播策略"]},
"script":{key:"2-2",title:"脚本生成",tasks:["整场直播逐字稿","单个环节话术"]},
"coach":{key:"2-3",title:"老师训练",tasks:["直播话术点评优化","镜头表现力训练"]},
"control":{key:"2-4",title:"实时中控",tasks:["直播中实时救场","直播后数据复盘"]}
}}
function getActiveChatAgent(){
if(chatKey==="2-1"&&currentKyrieSubKey&&agents[currentKyrieSubKey])return agents[currentKyrieSubKey];
return agents[chatKey];
}
function getKyrieMainMenuText(){return "请选择你要使用的直播智能体功能：\n\n1. 直播策略\n2. 脚本生成\n3. 老师训练\n4. 实时中控\n\n你可以输入对应数字或功能名称进入。"}
function getKyrieModuleByInput(text){
var t=(text||"").trim();
if(t==="1"||t.indexOf("直播策略")>=0)return "strategy";
if(t==="2"||t.indexOf("脚本")>=0)return "script";
if(t==="3"||t.indexOf("老师")>=0||t.indexOf("训练")>=0)return "coach";
if(t==="4"||t.indexOf("中控")>=0||t.indexOf("实时")>=0)return "control";
return "";
}
function getKyrieSubMenuText(module){
if(module==="strategy")return "你已进入：直播策略\n\n请选择你要使用的功能：\n\n1. 设计一场完整直播方案\n   适合从 0 到 1 规划直播主题、流程、节奏、成交路径。\n\n2. 优化当前直播策略\n   适合已有直播间，但遇到流量低、停留差、转化低、节奏乱等问题。\n\n输入“返回”可回到上一级。";
if(module==="script")return "你已进入：脚本生成\n\n请选择你要生成的内容：\n\n1. 整场直播逐字稿\n   包含开场、干货、衔接、带货、逼单、返场。\n\n2. 单个环节话术\n   可生成开场话术、干货话术、带货衔接、福利介绍、逼单话术等。\n\n输入“返回”可回到上一级。";
if(module==="coach")return "你已进入：老师训练\n\n请选择训练方式：\n\n1. 直播话术点评优化\n   你发一段老师原话，我帮你诊断并改成直播感更强的话术。\n\n2. 镜头表现力训练\n   从表情、声音、肢体、眼神、停顿、情绪状态给训练建议。\n\n输入“返回”可回到上一级。";
if(module==="control")return "你已进入：实时中控\n\n请选择当前场景：\n\n1. 直播中实时救场\n   适合在线掉、没人互动、卖不动、老师状态弱等情况。\n\n2. 直播后数据复盘\n   根据在线、停留、互动、点击、成交数据，分析问题和优化动作。\n\n输入“返回”可回到上一级。";
return getKyrieMainMenuText();
}
function getKyrieTaskByInput(text){
var t=(text||"").trim();
if(t==="1")return 0;
if(t==="2")return 1;
if(currentKyrieModule==="strategy"&&/完整|方案|规划|从 0|从0/.test(t))return 0;
if(currentKyrieModule==="strategy"&&/优化|当前|流量|停留|转化|节奏/.test(t))return 1;
if(currentKyrieModule==="script"&&/整场|逐字稿|全场|直播脚本/.test(t))return 0;
if(currentKyrieModule==="script"&&/单个|环节|话术|开场|逼单|福利|衔接/.test(t))return 1;
if(currentKyrieModule==="coach"&&/点评|优化|原话|话术/.test(t))return 0;
if(currentKyrieModule==="coach"&&/镜头|表现|表情|声音|肢体|眼神/.test(t))return 1;
if(currentKyrieModule==="control"&&/救场|直播中|在线|互动|卖不动|状态/.test(t))return 0;
if(currentKyrieModule==="control"&&/复盘|数据|直播后|成交|点击/.test(t))return 1;
return -1;
}
function setKyrieModule(module){
var map=getKyrieSubMap(),item=map[module];if(!item)return;
currentKyrieModule=module;currentKyrieSubKey=item.key;currentKyrieTask="";currentKyrieMenuLevel="sub";
document.getElementById("chat-agent-name").textContent="Kyrie"+item.title;
document.getElementById("chat-agent-sub").textContent="直播策略 / Kyrie直播方法论 / "+item.title;
addMessage("assistant",getKyrieSubMenuText(module));
}
function setKyrieTask(taskIndex){
var map=getKyrieSubMap(),item=map[currentKyrieModule];if(!item||taskIndex<0)return;
currentKyrieTask=item.tasks[taskIndex];currentKyrieMenuLevel="task";
addMessage("assistant","我将为你进入："+item.title+" > "+currentKyrieTask+"\n\n请把你的具体信息发给我，我会按这个功能开始执行。输入“返回”可回到上一级。");
}
function handleKyrieMenuInput(text){
var t=(text||"").trim();
if(!t)return false;
if(/^(返回|上一步|返回上一级)$/i.test(t)){
 if(currentKyrieMenuLevel==="task"){currentKyrieMenuLevel="sub";currentKyrieTask="";addMessage("assistant",getKyrieSubMenuText(currentKyrieModule));return true}
 if(currentKyrieMenuLevel==="sub"){currentKyrieMenuLevel="main";currentKyrieModule="";currentKyrieSubKey="";currentKyrieTask="";document.getElementById("chat-agent-name").textContent="Kyrie直播方法论";document.getElementById("chat-agent-sub").textContent="直播策略 / Kyrie直播方法论";addMessage("assistant",getKyrieMainMenuText());return true}
}
if(currentKyrieMenuLevel==="main"){
 var exactMenu=/^(1|2|3|4|直播策略|脚本生成|老师训练|实时中控)$/.test(t);
 var module=exactMenu?getKyrieModuleByInput(t):"";
 if(module){setKyrieModule(module);return true}
 module=autoDetectKyrieModule(t);
 if(module){setKyrieModule(module);var task=getKyrieTaskByInput(t);if(task<0)task=0;setKyrieTask(task);return false}
 addMessage("assistant",getKyrieMainMenuText());return true;
}
if(currentKyrieMenuLevel==="sub"){
 var taskIndex=getKyrieTaskByInput(t);
 if(taskIndex>=0){setKyrieTask(taskIndex);return true}
 addMessage("assistant",getKyrieSubMenuText(currentKyrieModule));return true;
}
return false;
}
function autoDetectKyrieModule(text){
var t=text||"";
if(/脚本|逐字稿|开场|干货|衔接|逼单|话术/.test(t))return "script";
if(/点评|训练|镜头|老师|表达|停顿|眼神/.test(t))return "coach";
if(/中控|救场|在线|评论|成交|复盘|掉线|卖不动/.test(t))return "control";
if(/策略|方案|流程|直播间|转化|流量|停留/.test(t))return "strategy";
return "";
}

function kjBindApiCheck() {
  var panel = document.getElementById("chat-form-kanjian");
  if (!panel || panel.style.display === "none") return;
  panel.querySelectorAll("input, textarea").forEach(function(el) {
    if (!el.dataset.apiCheck) {
      el.dataset.apiCheck = "1";
      el.addEventListener("focus", function() { if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();} });
    }
  });
}
function xhBindApiCheck() {
  var panel = document.getElementById("chat-form-xuehui");
  if (!panel || panel.style.display === "none") return;
  panel.querySelectorAll("input, textarea").forEach(function(el) {
    if (!el.dataset.apiCheck) {
      el.dataset.apiCheck = "1";
      el.addEventListener("focus", function() { if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();} });
    }
  });
}
function tjBindApiCheck() {
  var panel = document.getElementById("chat-form-tiejia");
  if (!panel || panel.style.display === "none") return;
  panel.querySelectorAll("input, textarea").forEach(function(el) {
    if (!el.dataset.apiCheck) {
      el.dataset.apiCheck = "1";
      el.addEventListener("focus", function() { if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();} });
    }
  });
}
function myBindApiCheck() {
  var panel = document.getElementById("chat-form-panel");
  if (!panel || panel.style.display === "none") return;
  panel.querySelectorAll("input, textarea").forEach(function(el) {
    if (!el.dataset.apiCheck) {
      el.dataset.apiCheck = "1";
      el.addEventListener("focus", function() { if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();} });
    }
  });
}
function rwBindApiCheck() {
  var panel = document.getElementById("chat-form-rewrite");
  if (!panel || panel.style.display === "none") return;
  panel.querySelectorAll("input, textarea").forEach(function(el) {
    if (!el.dataset.apiCheck) {
      el.dataset.apiCheck = "1";
      el.addEventListener("focus", function() { if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();} });
    }
  });
}

function switchChatMode(mode){
chatMode=mode;
document.querySelectorAll(".chat-mode-tab").forEach(function(t){t.classList.remove("active")});
if(typeof event!=="undefined"&&event&&event.target)event.target.classList.add("active");
var msgs=document.getElementById("chat-messages");
var questions=document.getElementById("chat-questions");
var inputArea=document.querySelector(".chat-input-area");
var formPanel=document.getElementById("chat-form-panel");
var rwPanel=document.getElementById("chat-form-rewrite");
hideWorkflowPanels();
if(mode==="form"){
msgs.style.display="none";questions.style.display="none";inputArea.style.display="none";
if(chatKey==="0-1"){formPanel.style.display="none";rwPanel.style.display="none";var kj=document.getElementById("chat-form-kanjian");if(kj)kj.style.display="flex"}else if(chatKey==="0-3"){formPanel.style.display="none";rwPanel.style.display="flex";setTimeout(function(){rwBindApiCheck()},100);updateRewriteApiStatus()}else if(chatKey==="0-0"){formPanel.style.display="none";rwPanel.style.display="none";var xp=document.getElementById("chat-form-xuehui");if(xp){xp.style.display="flex";setTimeout(function(){xhBindApiCheck()},100)}xuehuiUpdateStatus()}else if(chatKey==="1-2"){formPanel.style.display="none";rwPanel.style.display="none";var tj=document.getElementById("chat-form-tiejia");if(tj){tj.style.display="flex";setTimeout(function(){tjBindApiCheck()},100)}tjUpdateStatus()}else{formPanel.style.display="flex";rwPanel.style.display="none"}
}else{
msgs.style.display="";questions.style.display="";inputArea.style.display="";
}
}



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

var xhTemplateDetails={
"讲故事类":{principles:"用户不爱听道理爱听故事。好故事3特征：有冲突、有细节、有反转",steps:"4步模板：1锁定人群(3秒拦截) 2引爆冲突(情绪钩子) 3展开过程(分2-3阶段含具体事件) 4自然带货(产品变解决方案)",techniques:"3技巧：爆点前置(开头亮结果)、细节特写如婆婆凌晨3点开车带我去泡温泉、金句点睛对比式/数字式收尾",pitfalls:"避坑：别自嗨删主观感慨、别啰嗦删无关细节、别虚假"},
"共鸣型段子类":{principles:"用户心理：这不就是我吗/终于有人说实话了",steps:"3大模板：1假如XX说真话揭露行业潜规则 2深度还原名场面复刻尴尬瞬间 3XX和XX的差别极端对比制造笑点",techniques:"5技巧：反转型、行业梗+大众梗、具象化数字、方言反差、结尾神转折带货",pitfalls:"避坑：别自嗨删业内梗、别侵权、前3秒必出爆点"},
"教知识类":{principles:"获得感三要素：信息量大、效果立现、颠覆认知",steps:"5大模板：三段论痛点->方案->步骤、一口气挑战密集知识点、盘点体怀旧猎奇、五问法、防坑指南",techniques:"拒绝正确的废话、慎用专业术语、情绪大于知识量",pitfalls:"减肥要少吃多动->火锅后喝这杯刮油水体重不涨"},
"晒过程类":{principles:"核心：有手艺/猎奇性/治愈感",steps:"火车节模型：拆解成连贯步骤每节关键动作+情绪波动",techniques:"3玩法：猎奇反差、治愈解压、反向操作",pitfalls:"避免纯流水账、慎用专业术语、选题猎奇优先"}
};


function xuehuiCallAPI(systemPrompt,userPrompt,callback,opts){
if(!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();return}
var msgs=[{role:"system",content:systemPrompt},{role:"user",content:userPrompt}];
opts=opts||{};
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:opts.temperature||0.8,max_tokens:opts.max_tokens||4000,response_format:opts.response_format||void 0})})
.then(function(r){return r.json()})
.then(function(data){
 if(data.error){alert("API error: "+data.error.message);callback({error:data.error,raw:""});return}
 if(!data.choices||!data.choices[0]||!data.choices[0].message){callback({error:{message:"API 返回格式异常"},raw:""});return}
 var text=data.choices[0].message.content;
 try{var t=text.replace(/^```(?:json)?\s*\n?/,"").replace(/\n?```\s*$/,"");var json=JSON.parse(t);callback(json)}catch(e){callback({raw:text})}
}).catch(function(e){alert("request failed: "+e.message);callback({error:{message:e.message},raw:""})});
}













// Auto-recommend: debounced input handling
var xhAutoRecTimer=null;

// Attach auto-recommend to inputs
document.getElementById("xh-industry").addEventListener("input",xhAutoRecElements);
document.getElementById("xh-audience").addEventListener("input",xhAutoRecElements);



















function closeChat(skipKyrieReturn){
var kyrieReturnModule=!skipKyrieReturn&&chatKey==="2-1"&&currentKyrieMenuLevel==="task"&&currentKyrieModule;
document.getElementById("chat-overlay").classList.remove("open");
chatOpen=false;chatMessages=[];
if(kyrieReturnModule){renderKyrieSubmenuPage(kyrieReturnModule);return}
renderContent();renderRightModes();renderHistory();
}
function selectRewriteMode(el){document.querySelectorAll("#rw-mode-chips .select-chip").forEach(function(c){c.classList.remove("selected")});el.classList.add("selected");rwMode=el.dataset.val;document.getElementById("rw-custom-group2").style.display=rwMode==="B"?"":"none"}function selectRewriteModeBtn(el,mode){document.querySelectorAll(".rw-mode-btn").forEach(function(b){b.classList.remove("selected");b.style.borderColor="var(--border-glow)";b.style.background="var(--bg-card)"});el.classList.add("selected");el.style.borderColor="var(--purple)";el.style.background="rgba(168,85,247,0.08)";rwMode=mode;document.getElementById("rw-custom-group2").style.display=mode==="B"?"":"none"}
function updateRewriteApiStatus(){var s=document.getElementById("form-rw-status");var m=document.getElementById("form-rw-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 已配置 · "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="未配置 API Key · 请在左侧栏 ⚙ API 配置 中设置"}}
function goBackRewriteStep1(){document.getElementById("rw-step2").style.display="none";document.getElementById("rw-step1").style.display=""}
function submitRewriteStep1(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();return}
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
 if(!data.choices||!data.choices[0]||!data.choices[0].message){addMessage("assistant","❌ API 返回格式异常");return}
 addMessage("assistant",data.choices[0].message.content);
 document.getElementById("rw-step1").style.display="none";document.getElementById("rw-step2").style.display="";
}).catch(function(e){hideTyping();addMessage("assistant","请求失败："+e.message)});
}function submitRewriteStep2(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10)return;var custom=document.getElementById("rw-custom2").value.trim();if(rwMode==="B"&&!custom){alert("请填写自定义赛道与人设");return}var prompt="请基于上一轮的逐字稿和分析，按以下模式进行仿写：\n\n仿写模式："+(rwMode==="A"?"模式A 原汁原味仿写":"模式B 自定义定位仿写")+(rwMode==="B"?"\n新赛道/新人设："+custom:"")+"\n\n请直接输出仿写文案和仿写逻辑说明";switchChatMode("qa");addMessage("user","✍️ [仿写提交]\n模式："+(rwMode==="A"?"原汁原味":"自定义")+(rwMode==="B"?"\n赛道/人设："+custom:""));showTyping();var msgs=[{role:"system",content:agent.systemPrompt}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:prompt});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return};if(!data.choices||!data.choices[0]||!data.choices[0].message){addMessage("assistant","❌ API 返回格式异常");return}addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","❌ 请求失败："+e.message)})}
function addMessageHTML(role,html){
chatMessages.push({role:role,content:html});
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg "+role;
div.innerHTML='<div class="chat-avatar">'+(role==="assistant"?"🤖":"👤")+'</div><div class="chat-bubble">'+html+"</div>";
msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function showApiConfigPrompt(){
openSettings();
var apiTab=document.querySelector(".settings-tab");
if(apiTab)switchSettingsTab("api",apiTab);
}
function openSettingsFromChat(){
closeChat();
setTimeout(function(){
openSettings();
var apiTab=document.querySelector(".settings-tab");
if(apiTab)switchSettingsTab("api",apiTab);
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
function sendPreset(text){
if(chatKey==="2-1"&&!currentKyrieSubKey){
var module=getKyrieModuleByInput(text);
if(module){setKyrieModule(module);return}
}
document.getElementById("chat-input").value=text;sendMessage()
}
function handleChatKey(e){
if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage()}
var el=e.target;el.style.height="auto";el.style.height=Math.min(el.scrollHeight,100)+"px";
}

function normalizeEndpoint(url){
if(!url||url.length<5)return "https://api.deepseek.com/v1/chat/completions";
if(url.includes("/chat/completions")||url.includes("/v1/chat/completions"))return url;
url=url.replace(/\/+$/,"");
var known={ "api.deepseek.com":"https://api.deepseek.com/v1/chat/completions" };
for(var key in known){if(url.includes(key))return known[key]}
return url+"/v1/chat/completions";
}
var apiConfig={endpoint:localStorage.getItem("fp_endpoint")||"https://api.deepseek.com/v1/chat/completions",apikey:localStorage.getItem("fp_apikey")||localStorage.getItem("flowplayer_api_key")||"",model:localStorage.getItem("fp_model")||""};
function loadConfigUI(){document.getElementById("cfg-endpoint").value=apiConfig.endpoint;document.getElementById("cfg-apikey").value=apiConfig.apikey;var sel=document.getElementById("set-model");var ci=document.getElementById("set-model-custom");if(!apiConfig.model){sel.value="";ci.style.display="none";ci.value="";return}var known=Object.keys(MODEL_ENDPOINTS);if(known.indexOf(apiConfig.model)>=0){sel.value=apiConfig.model;ci.style.display="none";ci.value=""}else{sel.value="__custom__";ci.style.display="";ci.value=apiConfig.model}}
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
function toggleChip(el,groupId,max){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
var chips=document.getElementById(groupId).querySelectorAll(".select-chip");
var selected=document.getElementById(groupId).querySelectorAll(".select-chip.selected");
if(el.classList.contains("selected")){el.classList.remove("selected");return}
if(selected.length>=max){selected[0].classList.remove("selected")}
el.classList.add("selected");
}
function openSettings(e){var o=document.getElementById("settings-overlay");o.classList.add("open");loadConfigUI();updateSoundUI();updateThemeUI();var b=document.querySelector("#settings-tab-theme .sidebar-api-save");if(b){b.onclick=saveThemeSettings}}function closeSettings(e){if(e&&e.target!==document.getElementById("settings-overlay"))return;document.getElementById("settings-overlay").classList.remove("open")}function switchSettingsTab(tab,btn){document.querySelectorAll(".settings-tab").forEach(function(t){t.classList.remove("active")});btn.classList.add("active");document.querySelectorAll(".settings-tab-content").forEach(function(c){c.classList.remove("active")});document.getElementById("settings-tab-"+tab).classList.add("active")}
var MODEL_ENDPOINTS={"deepseek-v4-flash":"https://api.deepseek.com/v1/chat/completions","deepseek-v4-pro":"https://api.deepseek.com/v1/chat/completions","gpt-4o":"https://api.openai.com/v1/chat/completions","gpt-4o-mini":"https://api.openai.com/v1/chat/completions","gpt-4-turbo":"https://api.openai.com/v1/chat/completions","qwen-plus":"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions","qwen-max":"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions","glm-4":"https://open.bigmodel.cn/api/paas/v4/chat/completions","moonshot-v1-8k":"https://api.moonshot.cn/v1/chat/completions"};function onModelSelectChange(){var sel=document.getElementById("set-model");var ci=document.getElementById("set-model-custom");if(!sel.value){ci.style.display="none";ci.value="";return}if(sel.value==="__custom__"){ci.style.display="";ci.focus()}else{ci.style.display="none";ci.value="";var ep=MODEL_ENDPOINTS[sel.value];if(ep){document.getElementById("set-endpoint").value=ep}}}function saveSettingsApi(){apiConfig.endpoint=normalizeEndpoint(document.getElementById("set-endpoint").value.trim());apiConfig.apikey=document.getElementById("set-apikey").value.trim();var sel=document.getElementById("set-model");var model=sel.value==="__custom__"?document.getElementById("set-model-custom").value.trim():sel.value;if(!model){alert("请先在模型选择栏选择你的模型");return}apiConfig.model=model;localStorage.setItem("fp_endpoint",apiConfig.endpoint);localStorage.setItem("fp_apikey",apiConfig.apikey);localStorage.setItem("fp_model",apiConfig.model);document.getElementById("settings-overlay").classList.remove("open");updateApiStatus();updateFormApiStatus()}function clearSettingsApi(){document.getElementById("set-endpoint").value="";document.getElementById("set-apikey").value="";document.getElementById("set-model").value="";document.getElementById("set-model-custom").style.display="none";document.getElementById("set-model-custom").value="";apiConfig.endpoint="https://api.deepseek.com/v1/chat/completions";apiConfig.apikey="";apiConfig.model="";localStorage.removeItem("fp_endpoint");localStorage.removeItem("fp_apikey");localStorage.removeItem("fp_model");document.getElementById("settings-overlay").classList.remove("open");updateApiStatus();updateFormApiStatus()}
function updateApiStatus(){var btn=document.querySelector(".sidebar-settings-btn");if(!btn)return;if(apiConfig.apikey){if(themeWasteland){btn.style.color="#d4a830";btn.style.borderColor="rgba(200,132,42,.4)"}else{btn.style.color="#10b981";btn.style.borderColor="rgba(16,185,129,.3)"}}else{btn.style.color="var(--text-muted)";btn.style.borderColor="var(--border-glow)"}}
function toggleSettings(e){e.stopPropagation();var p=document.getElementById("chat-settings-panel");p.classList.toggle("open")}
function applyAdjustment(){var t=document.getElementById("cfg-adjust");var v=t.value.trim();if(!v)return;document.getElementById("chat-settings-panel").classList.remove("open");addMessage("user","调整要求："+v);t.value="";showTyping();callAgentForAdjust(v)}
function clearAdjustment(){document.getElementById("cfg-adjust").value=""}
function getMayuanDialogueSystemPrompt(base){if(chatKey!=="1-0")return base;return base+"\n\n# 马源内容体系对话式补充规则\n当用户要求生成脚本、引流脚本、短视频文案或口播文案，并且没有明确指定时长时，优先按30-60秒生成。口播文案控制在150-250字左右，约10-15句，结构完整但不要写成长篇。若用户明确指定30秒以内或60秒以上，以用户要求为准。生成文案后，在结尾追加一句：需要我帮你把这版内容篇幅加长吗？有任何修改意见请告诉我，我会帮你调整。"}
function appendMayuanDialogueFollowup(content){if(chatKey!=="1-0")return content;if(!content)return content;if(content.indexOf("需要我帮你把这版内容篇幅加长吗")>=0||content.indexOf("有任何修改意见请告诉我")>=0)return content;return content+"\n\n需要我帮你把这版内容篇幅加长吗？有任何修改意见请告诉我，我会帮你调整。"}
function callAgentForAdjust(adjustText){var agent=getActiveChatAgent();if(!agent)return;if(chatKey==="2-1"&&currentKyrieMenuLevel!=="task"){hideTyping();addMessage("assistant","请先选择到二级功能后，再输入调整意见。\n\n"+(currentKyrieMenuLevel==="sub"?getKyrieSubMenuText(currentKyrieModule):getKyrieMainMenuText()));return}if(!apiConfig.apikey||apiConfig.apikey.length<10){hideTyping();addMessageHTML("assistant","⚠️ 尚未配置 API Key。<br><br><span class=\"api-config-hint\" onclick=\"openSettingsFromChat()\">⚙ 点击此处配置 API</span>");return}var msgs=[{role:"system",content:getMayuanDialogueSystemPrompt(agent.systemPrompt)}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:"请根据以下调整要求，重新优化上一版内容。只返回优化后的内容，不要解释过程。\n"+adjustText});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return}if(!data.choices||!data.choices[0]||!data.choices[0].message){addMessage("assistant","❌ API 返回格式异常");return}addMessage("assistant",appendMayuanDialogueFollowup(data.choices[0].message.content))}).catch(function(e){hideTyping();addMessage("assistant","❌ 网络请求失败："+e.message)})}
function callAgent(userMsg){
var agent=getActiveChatAgent();if(!agent)return;
if(chatKey==="2-1"){
 if(/^(返回|上一步|返回上一级)$/.test((userMsg||"").trim())){hideTyping();var backModule=currentKyrieModule||"strategy";closeChat(true);renderKyrieSubmenuPage(backModule);return}
 if(currentKyrieMenuLevel!=="task"&&handleKyrieMenuInput(userMsg)){hideTyping();return}
 if(!currentKyrieSubKey||currentKyrieMenuLevel!=="task"){hideTyping();addMessage("assistant","请先选择到二级功能后，再输入具体需求。");return}
}
if(!apiConfig.apikey||apiConfig.apikey.length<10){
hideTyping();
addMessageHTML("assistant","⚠️ 尚未配置 API Key。<br><br><span class=\"api-config-hint\" onclick=\"openSettingsFromChat()\">⚙ 点击此处配置 API</span><br><br>也可以在左侧栏 ⚙ API 配置 中设置。");
return;
}
var msgs=[{role:"system",content:getMayuanDialogueSystemPrompt(agent.systemPrompt)}];
chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});
fetch(apiConfig.endpoint,{
method:"POST",
headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},
body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})
}).then(function(r){return r.json()}).then(function(data){
hideTyping();
if(data.error){addMessage("assistant","❌ API 错误："+data.error.message);return}
if(!data.choices||!data.choices[0]||!data.choices[0].message){addMessage("assistant","❌ API 返回格式异常");return}
addMessage("assistant",appendMayuanDialogueFollowup(data.choices[0].message.content));
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
if(containerId==="xh-templates")maxSelect=2;
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












