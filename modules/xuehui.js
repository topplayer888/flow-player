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

var xhState={industry:"",audience:"",elements:[],topics:[],selectedTopic:null,templates:[],openings:[],selectedOpenings:[],results:[]};

// xuehui module

function xhParseJsonArray(json){
 var recs=Array.isArray(json)?json:[];
 if(recs.length===0&&json&&json.raw){
  try{recs=JSON.parse(json.raw.replace(/^```(?:json)?\s*\n?/,"").replace(/\n?```\s*$/,""))}catch(e){recs=[]}
 }
 if((!Array.isArray(recs)||recs.length===0)&&json){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
 }
 return Array.isArray(recs)?recs:[];
}

function xuehuiUpdateStatus(){var s=document.getElementById("form-xh-status");var m=document.getElementById("form-xh-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 已配置 - "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="未配置 API Key"}}
function xuehuiStep1(){if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();return;}
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
function xuehuiSelectTopic(idx,el){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
xuehuiSelectTopic_orig(idx,el);
}
function xuehuiStep2Next(){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
if(!xhState.selectedTopic){alert("请先选择一个选题");return}
document.getElementById("xh-step3").style.display="";
}
function xuehuiStep3Next(){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
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
function xuehuiToggleOpening(el){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}el.classList.toggle("selected");xuehuiUpdateCount();}
function xuehuiUpdateCount(){
var sel=document.querySelectorAll("#xh-openings .select-chip.selected").length;
var tmpl=xhState.templates.length;
document.getElementById("xh-count-info").textContent="已选 "+sel+" 个开头 x "+tmpl+" 个模板 = "+(sel*tmpl*2)+" 条文案（90秒标准 + 2分钟深度）";
}
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
function copyVoiceover(btn){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
 var el=btn.parentElement.parentElement.querySelector(".xh-voiceover-text");
 var t=el.textContent.trim();
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(t).then(function(){
   btn.textContent="✅ 已复制";setTimeout(function(){btn.textContent="📋 一键复制"},2000);
  }).catch(function(){fallbackCopy(t)})
 }else{fallbackCopy(t)}
}
function copyXhResult(btn){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
 var card=btn.closest("[data-xh-card]")||btn.closest("div");
 var el=card?card.querySelector(".xh-copy-content"):null;
 var text=el?el.textContent.trim():"";
 if(!text){
  var fallback=btn.parentElement&&btn.parentElement.nextElementSibling;
  text=fallback?fallback.textContent.trim():"";
 }
 if(!text){alert("没有找到可复制的文案");return}
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(text).then(function(){
   var original=btn.textContent;
   btn.textContent="✅ 已复制";
   btn.style.color="#10b981";
   setTimeout(function(){btn.textContent=original;btn.style.color="var(--text-secondary)"},2000);
  }).catch(function(){fallbackCopyXh(btn,text)})
 }else{fallbackCopyXh(btn,text)}
}
function fallbackCopyXh(btn,text){
 var ta=document.createElement("textarea");
 ta.value=text;
 ta.style.position="fixed";
 ta.style.left="-9999px";
 document.body.appendChild(ta);
 ta.select();
 try{
  document.execCommand("copy");
  var original=btn.textContent;
  btn.textContent="✅ 已复制";
  btn.style.color="#10b981";
  setTimeout(function(){btn.textContent=original;btn.style.color="var(--text-secondary)"},2000);
 }catch(e){alert("复制失败，请手动选择复制")}
 document.body.removeChild(ta);
}
function xhRegenerate(){if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();return;}
 var feedback=document.getElementById("xh-regen-input").value.trim();
 if(!feedback){alert("请输入优化意见");return}
 if(!xhState.results||xhState.results.length===0){alert("没有可优化的内容");return}
 var sysPrompt="你是短视频文案优化专家。根据用户的优化意见，对原文案进行修改。保持原有结构，只做用户要求的调整。直接返回优化后的文案纯文本，不要加任何说明。";
 var userPrompt="优化意见："+feedback+"\n\n原文案：\n"+xhState.results.map(function(r,i){return "【文案"+(i+1)+"】"+r.duration+" - "+r.copyType+" - "+r.openingType+"\n"+r.content}).join("\n\n---\n\n");
 document.getElementById("xh-regen-loading").style.display="";
 document.getElementById("xh-regen-result").style.display="none";
 xuehuiCallAPI(sysPrompt,userPrompt,function(json){
  document.getElementById("xh-regen-loading").style.display="none";
  var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));
  var div=document.getElementById("xh-regen-result");
  div.innerHTML='<div data-xh-card="regen" style="padding:12px;border-radius:8px;border:1px solid var(--cyan);background:rgba(0,229,255,.04)"><div style="font-size:11px;font-weight:600;color:var(--cyan);margin-bottom:6px">✅ 优化结果</div><div class="xh-copy-content" style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap">'+result+'</div><button onclick="copyXhResult(this)" style="margin-top:8px;background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 复制</button></div>';
  div.style.display="";
 }, {temperature:0.3,max_tokens:8000});
}
function xuehuiRecommendElements(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(!industry||!audience){alert("请先填写行业和人群");return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="分析中...";btn.disabled=true;}
var prompt="行业："+industry+" 人群："+audience+"\n\n从以下8种爆款元素中推荐1-2个最适合的，只输出JSON数组：\n"+JSON.stringify(Object.keys(xhElementDetails))+"\n每个元素说明：\n"+Object.entries(xhElementDetails).map(function(e){return e[0]+": "+e[1].rules+" 示例："+e[1].example}).join("\n")+"\n\n你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]";
xuehuiCallAPI("你是爆款选题推荐专家。根据行业和人群推荐最合适的爆款元素。你必须严格输出纯JSON数组，不要markdown代码块，不要其他文字。示例：[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="智能推荐爆款元素";btn.disabled=false;}
 var recs=xhParseJsonArray(json);
 if(!Array.isArray(recs)||recs.length===0){
  alert("推荐失败");return
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
 var recs=xhParseJsonArray(json);
 if(!Array.isArray(recs)||recs.length===0){
  alert("推荐失败");return
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
 var recs=xhParseJsonArray(json);
 if(!Array.isArray(recs)||recs.length===0){
  alert("推荐失败");return
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
function xuehuiGenerate(){if(!apiConfig||!apiConfig.apikey||apiConfig.apikey.length<10){showApiConfigPrompt();return;}
// Ensure templates are captured from DOM if not already set
if(!xhState.templates||xhState.templates.length===0){
xhState.templates=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
}
if(!xhState.selectedTopic){alert("请先选择一个选题");return}
if(!xhState.templates||xhState.templates.length===0){alert("请至少选择一个文案模板");return}
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
   html+='<div data-xh-card="result" style="padding:12px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-card);margin-bottom:8px"><div style="display:flex;gap:8px;margin-bottom:6px"><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(0,229,255,.1);color:'+durColor+'">'+r.duration+' <span style="font-size:9px;color:'+countColor+'">('+charCount+'字)</span></span><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(168,85,247,.1);color:var(--purple)">'+r.openingType+'</span><span style="flex:1"></span><button onclick="copyXhResult(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="复制全文">&#x1f4cb; 复制</button><button onclick="expandCopy(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="扩写">📝 扩写</button></div><div class="xh-copy-content" style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap">'+r.content+'</div><div class="xh-expand-area" style="display:none;margin-top:8px;padding:8px;border-radius:8px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><input type="number" class="xh-expand-input" placeholder="请输入你想要扩写的字数..." style="flex:1;padding:4px 8px;border-radius:6px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px" min="100"><button onclick="doExpandCopy(this)" style="background:var(--purple);color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;font-size:11px;white-space:nowrap">确认扩写</button></div><div class="xh-expand-result" style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap;margin-top:6px;display:none"></div><div class="xh-expand-loading" style="display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:8px">扩写中...</div></div></div>';
  });
  html+='</div>';
 }
 container.innerHTML=html;
 // Add regenerate section
 var regenHTML="<div style=\"margin-top:16px;padding:12px;border-radius:10px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)\"><div style=\"font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:8px\">🔄 优化意见后重新生成</div><textarea id=\"xh-regen-input\" placeholder=\"输入优化意见，例如：语气更活泼、增加产品功效描述、缩短到200字...\" style=\"width:100%;min-height:60px;padding:8px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px;resize:vertical;margin-bottom:8px;font-family:inherit\"></textarea><button onclick=\"xhRegenerate()\" class=\"sidebar-api-save\" style=\"width:100%\">✨ 重新生成</button><div id=\"xh-regen-result\" style=\"margin-top:10px;display:none\"></div><div id=\"xh-regen-loading\" style=\"display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:12px\">重新生成中...</div></div>";
 container.innerHTML+=regenHTML;
 document.getElementById("xh-results").style.display="";
}, {temperature:0.1,max_tokens:32000});
}
