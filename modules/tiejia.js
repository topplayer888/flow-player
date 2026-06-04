// tiejia module

function tjUpdateStatus(){
  var s=document.getElementById("form-tj-status");
  var m=document.getElementById("form-tj-msg");
  if(!s)return;
  if(apiConfig.apikey&&apiConfig.apikey.length>9){
    s.className="form-api-status ok";
    m.textContent="API 已配置 - "+apiConfig.model;
  }else{
    s.className="form-api-status missing";
    m.textContent="未配置 API Key";
  }
}

function tjPick(el,groupId,max){
  var selected=document.getElementById(groupId).querySelectorAll(".select-chip.selected");
  if(el.classList.contains("selected")){
    el.classList.remove("selected");
    if(groupId!=="tj-hooks"&&groupId!=="tj-persona"&&groupId!=="tj-tone"){tjCheckStep1Auto()}
    return;
  }
  if(selected.length>=max){selected[0].classList.remove("selected")}
  el.classList.add("selected");
  if(groupId!=="tj-hooks"&&groupId!=="tj-persona"&&groupId!=="tj-tone"){tjCheckStep1Auto()}
}

function tjCheckStep1Auto(){
  var p=tjGetVal("tj-product-type");
  var a=tjGetVal("tj-audience");
  var s=document.getElementById("tj-selling-points").value.trim();
  var pp=document.getElementById("tj-pain-points").value.trim();
  var sc=tjGetVal("tj-scene");
  var pr=tjGetVal("tj-price");
  if(p&&a&&s&&pp&&sc&&pr){tjStep1()}
}

function tjGetVal(id){
  var c=document.getElementById(id).querySelector(".select-chip.selected");
  return c?c.dataset.val:"";
}

function tjGetVals(id){
  return Array.from(document.getElementById(id).querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
}

function tjParseJsonArray(json){
  var recs=Array.isArray(json)?json:[];
  if(recs.length===0&&json&&json.raw){
    try{recs=JSON.parse(json.raw)}catch(e){recs=[]}
  }
  if((!Array.isArray(recs)||recs.length===0)&&json){
    for(var k in json){
      if(Array.isArray(json[k])){recs=json[k];break}
    }
  }
  return Array.isArray(recs)?recs:[];
}

function tjStep1(){
  var pn=document.getElementById("tj-product-name").value.trim();
  var p=tjGetVal("tj-product-type");
  var a=tjGetVal("tj-audience");
  var s=document.getElementById("tj-selling-points").value.trim();
  var pp=document.getElementById("tj-pain-points").value.trim();
  var sc=tjGetVal("tj-scene");
  var pr=tjGetVal("tj-price");
  if(!p||!a||!s||!pp||!sc||!pr){alert("请完成所有必填项");return}
  document.getElementById("tj-loading").style.display="";
  var prompt="产品名称："+pn+"\n产品类型："+p+"\n目标受众："+a+"\n核心卖点："+s+"\n核心痛点："+pp+"\n使用场景："+sc+"\n价格定位："+pr+"\n\n从12种钩子类型中推荐3种最合适的，每种附推荐理由。\n12种钩子：1.点名受众 2.痛点共鸣 3.身份推荐 4.对话冲突 5.提出疑问 6.开箱评测 7.产地探访 8.实验演示 9.情绪共鸣 10.效果前置 11.悬念好奇 12.正话反说\n\n输出纯JSON数组：[{\"type\":\"钩子名\",\"reason\":\"推荐理由\"}]";
  xuehuiCallAPI("你是短视频营销专家。只输出JSON数组。",prompt,function(json){
    document.getElementById("tj-loading").style.display="none";
    var recs=tjParseJsonArray(json);
    if(recs.length===0){alert("推荐失败");return}
    var html="";
    recs.forEach(function(r,i){
      html+='<div style="margin-bottom:8px"><span style="font-weight:700;color:var(--purple)">'+(i+1)+'. '+r.type+'</span><br><span style="color:var(--text-muted);font-size:11px">'+r.reason+'</span></div>';
    });
    document.getElementById("tj-hooks-result").innerHTML=html;
    var hookChips=document.querySelectorAll("#tj-hooks .select-chip");
    hookChips.forEach(function(c){
      var b=c.querySelector(".tj-badge");
      if(b)b.remove();
    });
    recs.forEach(function(r){
      hookChips.forEach(function(c){
        if(c.dataset.val===r.type){
          var badge=document.createElement("span");
          badge.className="tj-badge";
          badge.textContent="推荐";
          badge.style.cssText="display:inline-block;margin-left:4px;padding:1px 6px;border-radius:10px;font-size:10px;background:var(--purple);color:#fff;font-weight:600";
          c.appendChild(badge);
        }
      });
    });
    document.getElementById("tj-step2");
  });
}

function tjStep2(){
  var hooks=tjGetVals("tj-hooks");
  if(hooks.length===0){alert("请至少选择一个钩子类型");return}
}

function tjStep3(){
  var persona=tjGetVal("tj-persona");
  var tone=tjGetVal("tj-tone");
  if(!persona||!tone){alert("请选择人设视角和语气风格");return}
  var pn=document.getElementById("tj-product-name").value.trim();
  var p=tjGetVal("tj-product-type");
  var a=tjGetVal("tj-audience");
  var s=document.getElementById("tj-selling-points").value.trim();
  var pp=document.getElementById("tj-pain-points").value.trim();
  var sc=tjGetVal("tj-scene");
  var pr=tjGetVal("tj-price");
  var hooks=tjGetVals("tj-hooks");
  document.getElementById("tj-loading").style.display="";
  var prompt="产品名称："+pn+"\n产品类型："+p+"\n目标受众："+a+"\n核心卖点："+s+"\n核心痛点："+pp+"\n使用场景："+sc+"\n价格定位："+pr+"\n钩子类型："+hooks.join("、")+"\n人设视角："+persona+"\n语气风格："+tone+"\n\n生成完整引流文案，包含：\n【标题建议】（3个）\n【完整口播文案】（300-500字，口语化，先制造坏情绪再引出解决方案）\n【分镜脚本】（表格格式：时间段|画面描述|口播文案|情绪/语气）\n【可视化建议】（3-5个画面）\n【转化引导】（结尾话术+评论区预设3条）\n\n只输出纯文本，不要JSON格式。";
  xuehuiCallAPI("你是短视频营销文案专家。只输出纯文本文案。",prompt,function(json){
    document.getElementById("tj-loading").style.display="none";
    var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));
    document.getElementById("tj-result").textContent=result;
    tjRenderVoiceover(result);
  });
}

function copyTjVoiceover(btn){
  var text=document.getElementById("tj-voiceover-text").textContent;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      if(btn){
        var orig=btn.textContent;
        btn.textContent="已复制";
        setTimeout(function(){btn.textContent=orig},1500);
      }
    });
  }else{
    var ta=document.createElement("textarea");
    ta.value=text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

function tjToggleIterate(el){
  el.classList.toggle("selected");
  var ir=document.getElementById("tj-iterate-result");
  if(ir){ir.style.display="none";ir.innerHTML=""}
}

function tjBindIterateOnly(){
  if(window.__tjIterateOnlyBound)return;
  window.__tjIterateOnlyBound=true;
  document.addEventListener("click",function(e){
    var chip=e.target&&e.target.closest?e.target.closest("#tj-iterate-options .select-chip"):null;
    if(!chip)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    tjToggleIterate(chip);
  },true);
}

function tjRenderVoiceover(result){
  var oldVo=document.getElementById("tj-voiceover-wrap");
  if(oldVo)oldVo.remove();
  var voWrap=document.createElement("div");
  voWrap.id="tj-voiceover-wrap";
  voWrap.style.cssText="margin-top:16px;padding:12px;border-radius:10px;border:1px solid var(--border-glow);background:rgba(0,229,255,.03)";
  voWrap.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:12px;font-weight:600;color:var(--cyan)">🎙 纯口播文案</span><button onclick="copyTjVoiceover(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 一键复制</button></div><div class="tj-voiceover-text" id="tj-voiceover-text" style="font-size:12px;line-height:1.8;color:var(--text-primary);white-space:pre-wrap;max-height:300px;overflow-y:auto;padding:8px;background:var(--bg-card);border-radius:8px"><span style="color:var(--text-muted)">⏳ 提取纯口播中...</span></div>';
  document.getElementById("tj-result").insertAdjacentElement("afterend",voWrap);
  var voPrompt="请从以下内容中提取纯口播文案，只保留可实际朗读的脚本部分，删除所有分析、策略、手法选择、建议、标记符号等非口播内容。直接输出纯净的口播文案，不要任何说明。\n\n原始内容：\n"+result;
  xuehuiCallAPI("你是口播文案提取助手。只输出纯口播文案。",voPrompt,function(voJson){
    var vo=typeof voJson==="string"?voJson:(voJson.raw||voJson.content||voJson.text||JSON.stringify(voJson));
    var voEl=document.getElementById("tj-voiceover-text");
    if(voEl)voEl.textContent=vo;
  },{temperature:0.3,max_tokens:4000});
}

function copyTjRegenVoiceover(btn){
  var el=document.getElementById("tj-regen-voiceover-text");
  var text=el?el.textContent:"";
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      if(btn){
        var orig=btn.textContent;
        btn.textContent="已复制";
        setTimeout(function(){btn.textContent=orig},1500);
      }
    });
  }else{
    fallbackTjCopy(text);
  }
}

function tjRenderRegenVoiceover(result){
  var ir=document.getElementById("tj-iterate-result");
  if(!ir)return;
  ir.style.display="";
  ir.style.cssText="display:block;margin-top:12px;padding:12px;border-radius:10px;border:1px solid var(--border-glow);background:rgba(0,229,255,.03)";
  ir.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:12px;font-weight:600;color:var(--cyan)">🎙 重新生成口播逐字稿</span><button onclick="copyTjRegenVoiceover(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">📋 一键复制</button></div><div class="tj-voiceover-text" id="tj-regen-voiceover-text" style="font-size:12px;line-height:1.8;color:var(--text-primary);white-space:pre-wrap;max-height:300px;overflow-y:auto;padding:8px;background:var(--bg-card);border-radius:8px"></div>';
  document.getElementById("tj-regen-voiceover-text").textContent=result;
}

function tjCleanVoiceoverText(text){
  return String(text||"")
    .replace(/```[\s\S]*?```/g,function(block){return block.replace(/```[a-zA-Z]*|```/g,"")})
    .split(/\r?\n/)
    .map(function(line){return line.trim()})
    .filter(function(line){
      if(!line)return true;
      if(/^#+\s*/.test(line))return false;
      if(/^【?(标题建议|分镜脚本|可视化建议|转化引导|评论区预设|分析|说明|优化逻辑|输出|口播文案)】?[:：]?/.test(line))return false;
      if(/^(时间段|画面描述|情绪\/语气|镜头|建议|标题)[|｜]/.test(line))return false;
      return true;
    })
    .join("\n")
    .replace(/^\s*(以下是|重新生成的|优化后的)?\s*口播(文案|逐字稿)\s*[:：]\s*/,"")
    .trim();
}

function tjGetRegenSource(){
  var vo=document.getElementById("tj-voiceover-text");
  var voText=vo?vo.textContent.trim():"";
  if(voText&&voText.indexOf("提取纯口播中")===-1){
    return {type:"纯口播文案",text:voText};
  }
  var currentEl=document.getElementById("tj-result");
  return {type:"完整文案",text:currentEl?currentEl.textContent.trim():""};
}

function tjBuildIterateInstruction(type){
  var map={
    "换钩子":"重写开头钩子，前3到5句话必须明显不同，用新的切入方式制造注意力，但保留产品核心卖点。",
    "换人设":"更换口播视角和身份表达方式，整篇用新的说话人身份重写，不能沿用原来的叙述口吻。",
    "换风格":"更换语气风格和节奏，句式、措辞、情绪强度都要明显变化。",
    "缩短":"压缩篇幅，删除重复铺垫和弱信息，只保留最有转化力的口播内容。",
    "加长":"加长内容，补充具体场景、痛点细节、产品价值和自然过渡，不能只重复原句。",
    "批量":"生成3个不同版本，每个版本都要使用不同开头和表达方式，版本之间不能互相复述。"
  };
  return map[type]||("按“"+type+"”方向重写口播文案，必须让表达和原稿有明显差异。");
}

function tjSameContent(a,b){
  function norm(s){
    return String(s||"").replace(/\s+/g,"").replace(/[，。！？、,.!?;；:："'“”‘’（）()【】\[\]-]/g,"");
  }
  var na=norm(a),nb=norm(b);
  return na&&nb&&na===nb;
}

function tjRegen(){
  var source=tjGetRegenSource();
  var current=source.text;
  if(!current){alert("请先生成文案");return}
  var selected=Array.from(document.querySelectorAll("#tj-iterate-options .select-chip.selected")).map(function(c){return c.dataset.val});
  var input=document.getElementById("tj-regen-input");
  var suggestion=input?input.value.trim():"";
  if(selected.length===0&&!suggestion){alert("请选择一个调整按钮，或输入其它调整意见");return}
  var requirements=[];
  if(selected.length>0){
    requirements.push("用户选择的调整按钮："+selected.join("、"));
    selected.forEach(function(type){requirements.push("- "+tjBuildIterateInstruction(type))});
  }
  if(suggestion){requirements.push("用户输入的其它调整："+suggestion)}
  document.getElementById("tj-loading").style.display="";
  var prompt="以下是需要改写的"+source.type+"，这是原稿，不是最终答案：\n\n"+current+"\n\n调整要求：\n"+requirements.join("\n")+"\n\n请根据以上调整要求重新生成【口播逐字稿】。\n\n必须遵守：\n1. 这是改写任务，不是复制任务，不能原样返回原稿，也不能只删标题后照抄原句。\n2. 必须让开头、句式、表达顺序和重点呈现方式根据用户选择/输入发生明显变化。\n3. 用户同时选择按钮和输入调整意见时，两类要求都要执行。\n4. 只输出真人可以直接照读的逐字稿正文。\n5. 不要标题建议、分镜脚本、画面描述、可视化建议、转化引导、评论区预设、分析说明。\n6. 不要 Markdown、不要表格、不要项目符号、不要“口播文案：”“以下是”等说明。\n7. 用自然口语短句分行，每一行都是可朗读内容。\n8. 如果用户选择“批量生成更多变体”，可以输出“版本1”“版本2”“版本3”标签，但每个版本下面只能是逐字稿正文。";
  xuehuiCallAPI("你是短视频口播逐字稿优化专家。你只能输出可直接朗读的口播逐字稿，禁止输出标题、分镜、画面建议、转化引导和解释。",prompt,function(json){
    var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));
    var cleaned=tjCleanVoiceoverText(result);
    if(tjSameContent(current,cleaned)){
      var retryPrompt=prompt+"\n\n上一轮输出与原稿过于接近。请立刻重新改写，必须更换开头、重排表达顺序、替换关键句式，并严格执行调整要求。只输出新的口播逐字稿正文。";
      xuehuiCallAPI("你是短视频口播逐字稿重写专家。你的任务是强制改写，禁止复述原稿，禁止输出解释。",retryPrompt,function(retryJson){
        document.getElementById("tj-loading").style.display="none";
        var retryResult=typeof retryJson==="string"?retryJson:(retryJson.raw||retryJson.content||retryJson.text||JSON.stringify(retryJson));
        tjRenderRegenVoiceover(tjCleanVoiceoverText(retryResult));
      },{temperature:1,max_tokens:4000});
      return;
    }
    document.getElementById("tj-loading").style.display="none";
    tjRenderRegenVoiceover(cleaned);
  },{temperature:0.95,max_tokens:4000});
}

function tjCopyResult(btn){
  var text=document.getElementById("tj-result").textContent;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      if(btn){
        btn.textContent="已复制";
        setTimeout(function(){btn.textContent="复制全文"},1500);
      }
    }).catch(function(){fallbackTjCopy(text)});
  }else{
    fallbackTjCopy(text);
  }
}

function fallbackTjCopy(text){
  var ta=document.createElement("textarea");
  ta.value=text;
  ta.style.position="fixed";
  ta.style.left="-9999px";
  document.body.appendChild(ta);
  ta.select();
  try{document.execCommand("copy");alert("已复制")}catch(e){alert("复制失败，请手动复制")}
  document.body.removeChild(ta);
}

tjBindIterateOnly();
