// mayuan module

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
showApiConfigPrompt();return
}
var durRule="";if(duration==="30秒以内")durRule="【强制字数限制】口播文案80-120字，5-8句，每句12-18字。开场1句3秒，主体3-5句20秒，结尾1-2句5秒。";else if(duration==="60秒以上")durRule="【强制字数限制】口播文案300-500字，15-25句。开场2-3句5秒，主体12-18句45秒，结尾3-4句10秒。信息密度高，有细节展开。";else durRule="【强制字数限制】口播文案150-250字，10-15句。开场1-2句5秒，主体7-10句30秒，结尾2-3句10秒。";var prompt="请根据以下信息生成引流脚本\n\n视频时长范围："+duration+"\n"+durRule+"\n\n## 产品信息\n"+product+"\n\n## 核心卖点\n"+usp+"\n\n## 目标人群\n"+audience+"\n\n## 营销目标\n"+goal;prompt+="\n\n## 脚本手法\n"+scriptMethods;prompt+="\n\n## 视觉手法\n"+visualMethods;
if(extra)prompt+="\n\n## 补充信息\n"+extra;
prompt+="\n\n请严格按照马源内容体系工作流程输出：\n1. 策略分析\n2. 脚本手法选择\n3. 视觉手法匹配\n4. 完整脚本（每条口播文案前必须加【🎙口播】前缀，分镜描述前加【📷分镜】前缀，便于区分）\n5. 专项建议";
var submitBtn=document.getElementById("my-submit-btn")||document.querySelector("#chat-form-panel .chat-form-submit");
if(typeof setGenerateButtonLoading==="function")setGenerateButtonLoading(submitBtn,true,"生成中...");
var fa=document.getElementById("form-result-area");
fa.innerHTML="";
fa.style.display="";
var msgs=[{role:"system",content:appendCopyCoherenceRule(agent.systemPrompt)},{role:"user",content:appendCopyCoherenceRule(prompt)}];
apiFetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:16000})}).then(function(r){return r.json()}).then(function(data){
if(data.error){fa.innerHTML='<div style="color:#ef4444;padding:12px">❌ API 错误：'+data.error.message+'</div>';return}
if(!data.choices||!data.choices[0]||!data.choices[0].message){fa.innerHTML='<div style="color:#ef4444;padding:12px">❌ API 返回格式异常</div>';return}
var c=data.choices[0].message.content;
fa.innerHTML='<div style="background:var(--bg-card);border:1px solid var(--border-glow);border-radius:10px;padding:16px"><div style="font-size:12px;font-weight:600;color:var(--purple);margin-bottom:10px">📝 生成结果</div><div style="font-size:12px;line-height:1.6;color:var(--text-primary)">'+formatScript(c)+'</div><div style="margin-top:12px;display:flex;gap:8px"><button onclick="copyFormResult(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:4px 12px;border-radius:6px;cursor:pointer;font-size:11px">📋 复制</button></div></div><div style="margin-top:12px;padding:12px;border-radius:10px;border:1px solid var(--border-glow);background:rgba(0,229,255,.03)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:12px;font-weight:600;color:var(--cyan)">🎙 纯口播文案</span><button onclick="copyVoiceoverForm(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 一键复制</button></div><div class="form-voiceover-text" id="form-voiceover-text" style="font-size:12px;line-height:1.6;color:var(--text-primary);white-space:pre-wrap;max-height:300px;overflow-y:auto;padding:8px;background:var(--bg-panel);border-radius:8px"><span style="color:var(--text-muted)">⏳ 提取纯口播中...</span></div>';
// Extract pure voiceover via second API call
var voPrompt="请从以下内容中提取纯口播文案，只保留可实际朗读的脚本部分，删除所有分析、策略、手法选择、建议等非口播内容。直接输出纯净的口播文案，不要任何说明。\n\n原始内容：\n"+c;
apiFetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:[{role:"user",content:voPrompt}],temperature:.3,max_tokens:8000})}).then(function(r2){return r2.json()}).then(function(d2){
 var vo=d2.error?c:((d2.choices&&d2.choices[0]&&d2.choices[0].message)?d2.choices[0].message.content:c);
 document.getElementById("form-voiceover-text").textContent=typeof compactResultText==="function"?compactResultText(vo):vo;
}).catch(function(){
 document.getElementById("form-voiceover-text").textContent=c;
});
fa.innerHTML+= '</div><div style="margin-top:12px;padding:12px;border-radius:10px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:8px">🔄 优化意见后重新生成</div><textarea id="form-regen-input" placeholder="输入优化意见" style="width:100%;min-height:50px;padding:8px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px;resize:vertical;margin-bottom:8px;font-family:inherit"></textarea><button id="form-regen-btn" onclick="formRegenerate()" class="sidebar-api-save" style="width:100%">✨ 重新生成</button><div id="form-regen-result" style="margin-top:10px;display:none"></div><div id="form-regen-loading" style="display:none"></div></div>'
}).catch(function(e){if(typeof isAbortError==="function"&&isAbortError(e)){if(typeof showGenerationAbortNotice==="function")showGenerationAbortNotice();return}fa.innerHTML='<div style="color:#ef4444;padding:12px">❌ 请求失败：'+e.message+'</div>'}).finally(function(){if(typeof setGenerateButtonLoading==="function")setGenerateButtonLoading(submitBtn,false)})
}
function copyVoiceoverForm(btn){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
 var el=btn.parentElement.parentElement.querySelector(".form-voiceover-text");
 var t=el.textContent.trim();
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(t).then(function(){
   btn.textContent="✅ 已复制";setTimeout(function(){btn.textContent="📋 一键复制"},2000);
  }).catch(function(){fallbackCopy(t)})
 }else{fallbackCopy(t)}
}
function formatScript(t){
 t=typeof compactResultText==="function"?compactResultText(t):String(t||"").replace(/\n{3,}/g,"\n\n").trim();
 return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
  .replace(/【🎙口播】/g,"<span style=\"color:#10b981;font-weight:600\">🎙 口播：</span>").replace(/【📷分镜】/g,"<span style=\"color:#60a5fa;font-weight:600\">📷 分镜：</span>")
  .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
  .replace(/^### (.+)$/gm,"<h4 style=\"margin:6px 0 2px;font-size:13px;color:var(--purple)\">$1</h4>")
  .replace(/^## (.+)$/gm,"<h3 style=\"margin:6px 0 2px;font-size:14px;color:var(--cyan)\">$1</h3>")
  .replace(/^# (.+)$/gm,"<h2 style=\"margin:8px 0 4px;font-size:15px;color:var(--cyan)\">$1</h2>")
  .replace(/^\- (.+)$/gm,"<li style=\"margin:0 0 0 16px\">$1</li>")
  .replace(/^(\d+)\. (.+)$/gm,"<div style=\"margin:1px 0 1px 8px\"><span style=\"color:var(--purple)\">$1.</span> $2</div>")
  .replace(/^【(.+?)】/gm,"<span style=\"color:var(--gold);font-weight:600\">【$1】</span>")
  .replace(/\n/g,"<br>")
  .replace(/<br>(<h[234])/g,"$1")
  .replace(/(<\/h[234]>)<br>/g,"$1")
  .replace(/<br><br>/g,"<br>");
}
function copyFormResult(btn){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
 var area=document.getElementById("form-result-area");
 var t=area.textContent.trim();
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(t).then(function(){
   btn.textContent="✅ 已复制";setTimeout(function(){btn.textContent="📋 复制"},2000);
  }).catch(function(){fallbackCopy(t)})
 }else{fallbackCopy(t)}
}
function formRegenerate(){
 var fb=document.getElementById("form-regen-input").value.trim();
 if(!fb){alert("请输入优化意见");return}
 var orig=document.querySelector("#form-result-area .form-voiceover-text");
 if(!orig){alert("没有可优化的内容");return}
 var content=orig.textContent.trim();
 var agent=agents[chatKey];if(!agent)return;
 var sysPrompt="你是短视频文案优化专家，根据用户优化意见修改文案，直接返回优化后的纯文本。";
 var userPrompt="优化意见："+fb+"\n\n原文案：\n"+content;
 sysPrompt = "你是短视频口播文案优化专家。根据用户优化意见修改文案，只输出优化后的口播文案正文，不要解释，不要标题，不要分析。";
 userPrompt += "\n\n必须只输出优化后的口播文案正文。不要输出策略分析、脚本手法、视觉手法、分镜、标题、建议、说明或编号清单。每行一句自然口语，方便直接复制拍摄。";
 var regenBtn=document.getElementById("form-regen-btn");
 if(typeof setGenerateButtonLoading==="function")setGenerateButtonLoading(regenBtn,true,"重新生成中...");
 var regenLoading=document.getElementById("form-regen-loading");
 if(regenLoading)regenLoading.style.display="none";
 document.getElementById("form-regen-result").style.display="none";
 apiFetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:[{role:"system",content:appendCopyCoherenceRule(sysPrompt)},{role:"user",content:appendCopyCoherenceRule(userPrompt)}],temperature:.3,max_tokens:8000})}).then(function(r){return r.json()}).then(function(data){
 if(typeof setGenerateButtonLoading==="function")setGenerateButtonLoading(regenBtn,false);
 var regenLoadingDone=document.getElementById("form-regen-loading");
 if(regenLoadingDone)regenLoadingDone.style.display="none";
  if(data.error){document.getElementById("form-regen-result").innerHTML='<div style="color:#ef4444">❌ '+data.error.message+'</div>';document.getElementById("form-regen-result").style.display="";return}
  if(!data.choices||!data.choices[0]||!data.choices[0].message){document.getElementById("form-regen-result").innerHTML='<div style="color:#ef4444">❌ API 返回格式异常</div>';document.getElementById("form-regen-result").style.display="";return}
  var result=data.choices[0].message.content;
  document.getElementById("form-regen-result").innerHTML='<div style="padding:12px;border-radius:8px;border:1px solid var(--cyan);background:rgba(0,229,255,.04)"><div style="font-size:11px;font-weight:600;color:var(--cyan);margin-bottom:6px">✅ 优化结果</div><div style="font-size:12px;line-height:1.6;color:var(--text-primary);white-space:pre-wrap">'+(typeof compactResultText==="function"?compactResultText(result):result).replace(/</g,"&lt;").replace(/>/g,"&gt;")+'</div><button onclick="copyFormRegenResult(this)" style="margin-top:8px;background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 复制</button></div>';
  document.getElementById("form-regen-result").style.display="";
 }).catch(function(e){
  if(typeof isAbortError==="function"&&isAbortError(e)){if(typeof showGenerationAbortNotice==="function")showGenerationAbortNotice();return}
  if(typeof setGenerateButtonLoading==="function")setGenerateButtonLoading(regenBtn,false);
  var regenLoadingErr=document.getElementById("form-regen-loading");
  if(regenLoadingErr)regenLoadingErr.style.display="none";
  document.getElementById("form-regen-result").innerHTML='<div style="color:#ef4444">❌ '+e.message+'</div>';
  document.getElementById("form-regen-result").style.display="";
 })
}
function copyFormRegenResult(btn){if(apiConfig&&(!apiConfig.apikey||apiConfig.apikey.length<10)){showApiConfigPrompt();return;}
 var t=btn.parentElement.textContent.replace("📋 复制","").trim();
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(t).then(function(){btn.textContent="✅ 已复制";setTimeout(function(){btn.textContent="📋 复制"},2000)}).catch(function(){fallbackCopy(t)})
 }else{fallbackCopy(t)}
}
function fallbackCopy(btn,text){if(typeof text==="undefined"){text=btn;btn=null}var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");if(btn){btn.textContent="\u2705 已复制";var _copyColor=themeWasteland?"#d4a830":"#10b981";btn.style.color=_copyColor;setTimeout(function(){btn.textContent="\uD83D\uDCCB 复制";btn.style.color="var(--text-secondary)"},2000)}}catch(e){alert("复制失败，请手动选择复制")}document.body.removeChild(ta)}
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
