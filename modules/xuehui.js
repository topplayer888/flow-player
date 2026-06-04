var xhOpenTypes=[
{name:"鍦堝畾浜虹兢",desc:"鍠婂嚭浜虹兢鏍囩+鍒堕€犳偓蹇电棝鐐?},
{name:"鐩存帴鎻愰棶",desc:"鐢ㄧ枒闂瘝+鍙嶅父璇?鎮康閫肩敤鎴锋€濊€?},
{name:"鑷垜鍚﹀畾",desc:"鎺ㄧ炕璁ょ煡+鏋佺瀵规瘮+鍒╃泭璇辨儜"},
{name:"鍙嶈鐭?,desc:"棰犺甯歌瘑璁ょ煡+寮哄埗鏆傚仠"},
{name:"楂樹环鍊煎睍绀?,desc:"鏋佺鎴愭灉+浣庨棬妲涜幏鍙?鏃堕棿绱ц揩"},
{name:"鐩村嚮鐥涚偣",desc:"鍦烘櫙鐥涚偣+鎯呯华鏀惧ぇ+浣庨棬妲涜В鑽?},
{name:"鎹熷け鍘屾伓",desc:"淇℃伅鏂偣+瀵规瘮钀藉樊+闄愭椂鍗辨満"},
{name:"瀵规瘮瀵圭珛",desc:"鏋佺閫夐」+鍒╃泭璇辨儜+韬唤缁戞灦"},
{name:"澶寸墝鍊熷娍",desc:"鍊熼《娴両P+鍏宠仈鑷韩鍐呭"},
{name:"璀﹀憡閬垮潙",desc:"姝讳骸鍦烘櫙+鏉冨▉鑳屼功+閫冪敓鎸囧崡"},
{name:"寮曡捣鐒﹁檻",desc:"姝讳骸棰勮█+韬唤缁戞灦+鏈棩瑙ｈ嵂"},
{name:"鍒堕€犻敊杩?,desc:"闄愭椂鏈轰細+鎹熷け鏆楃ず+绱ц揩琛屽姩"},
{name:"鍦烘櫙浠ｅ叆",desc:"鍏蜂綋鍦烘櫙+韬唤鍏遍福+鑷劧杩囨浮"},
{name:"韬唤鏍囩",desc:"鍠婂嚭绮剧‘韬唤+涓撳睘鐥涚偣+瑙ｅ喅鏂规"},
{name:"鏁板瓧娓呭崟",desc:"鏁板瓧鎵胯+娓呭崟浣?鏀惰棌鎸囦护"},
{name:"鏁呬簨寮€澶?,desc:"鍐茬獊浜嬩欢+缁嗚妭闀滃ご+鎮康閾哄灚"},
{name:"鏁版嵁闇囨捈",desc:"鍏蜂綋鏁板瓧鍐插嚮+璁ょ煡棰犺+鍒╃泭鍏宠仈"},
{name:"鏉冨▉鑳屼功",desc:"缁戝畾鏉冨▉+鍙俊璇佹嵁+缁撹寤朵几"},
{name:"浜夎璇濋",desc:"瀵圭珛瑙傜偣+閫夎竟鏁堝簲+璁ㄨ寮曞"},
{name:"鐏甸瓊鎷烽棶",desc:"鐩村嚮鐏甸瓊闂+浠峰€艰鍐茬獊+鍙嶆€濆紩瀵?},
{name:"骞茶揣鍚堥泦",desc:"绋€缂轰俊鎭?鏀惰棌浠峰€?鍗冲埢鏁堟灉鎵胯"},
{name:"璺ㄧ晫缁勫悎",desc:"A棰嗗煙甯歌瘑+B棰嗗煙瑙嗚=鏂版祦閲忓瘑鐮?},
{name:"閫佹儕鍠?,desc:"韬唤鍙嶅樊+鎯呮劅鏆村嚮+杩囩▼鎻"},
{name:"鑽峰皵钂?,desc:"瑙嗚/澹伴煶鏆楃ず+鐘规姳鐞电惗鍗婇伄闈?},
{name:"鐩茬洅",desc:"鏈煡蹇劅+浣庢垚鏈珮鏈熷緟+绀句氦璐у竵"},
{name:"濂囪懇鐩稿叧",desc:"琛屼笟鍙嶅樊+鐚庡蹇冪悊+绀句氦浼犳挱"},
{name:"璐熼潰鐨?,desc:"闃存殫绐ヨ+閬撳痉瀹″垽+寮辫€呬唬鍏?},
{name:"鍏蜂綋鐨勪簨",desc:"鐪熷疄鐢熸椿鍒囩墖+鍙嶅父缁嗚妭+鎮康鐣欑櫧"},
{name:"楂樻儏缁?,desc:"鎯呯华鑳介噺鍒嗙骇+鐗╃悊寮曠垎+闈㈤儴鐗瑰啓"},
{name:"寮鸿妭濂?,desc:"涓夌澶氭鐢婚潰鍒囨崲+鍗＄偣杞扮偢+鎮康鎬ュ埞"},
{name:"鍑戠儹闂?,desc:"浜虹兢鏁堝簲+鎰忓鍏ヤ镜+闀滈潰鍏嬮殕"},
{name:"娌夋蹈鎰?,desc:"鍏ㄦ劅瀹樺嵎鍏?寰窛鏆村嚮+鐜闊崇粨鐣?},
{name:"鍙嶅樊鎰?,desc:"鎵撶牬璁ょ煡+韬唤/鍦烘櫙/闃跺眰鍙嶈浆"},
{name:"鐗规畩瑙嗚",desc:"闈炲父瑙勮瑙?鍋风鏁堝簲+璁ょ煡棰犺"},
{name:"鏁呬簨鎰?,desc:"鐢婚潰鍙欎簨+鐗╀欢闅愬柣+鐜绾跨储"},
{name:"澶嶅彜鎬€鏃?,desc:"璁板繂瑙﹀彂+鎰熷畼绌胯秺+骞翠唬閿欎綅"}
];

var xhElementDetails={
"澶寸墝閫夐":{rules:"鍙ュ紡锛氫笘鐣屼笂鏈€璐电殑涓滆タ鍒板簳鏈夊璐?/ 鏄庢槦鐨勪笢瑗垮埌搴曞€煎灏戦挶 / 鏈€鐗涚殑浜哄埌搴曟湁澶氱墰 / 鏈€璐电殑涓滆タ鍒板簳濂藉湪鍝?,example:"姹借溅->鍛ㄦ澃浼﹁溅搴撻噷鐨勮溅鍊煎灏戦挶锛屽尰缇?>涓栫晫涓婃暣瀹硅姳璐规渶澶氱殑浜鸿姳浜嗗灏戦挶"},
"鎬€鏃ч€夐":{rules:"鍙ュ紡锛?0骞村墠缁忓吀鐨?/ 鍙や唬浜烘槸濡備綍鍔炲埌鐨?/ 灏忔椂鍊欓偅浜涢毦蹇樼殑 / 褰撳勾鏈€鐏殑 / 鏇剧粡閭ｄ簺浠峰€间笉鑿茬殑",example:"姣嶅┐->鍙や唬浜烘槸濡備綍鍓栬吂浜х殑锛屽コ瑁?>80骞翠唬鏈€娴佽鐨勬腐椋?},
"瀵圭珛閫夐":{rules:"鍙ュ紡锛氱┓浜簐s瀵屼汉 / 鍗楁柟浜簐s鍖楁柟浜?/ 鐢蜂汉vs濂充汉 / 涓浗浜簐s澶栧浗浜?/ 鍙や唬vs鐜颁唬 / 鏈夎壇蹇冪殑vs娌¤壇蹇冪殑 / 鏇剧粡vs鐜板湪",example:"鐑х儰->鍖楁柟浜簐s鍗楁柟浜哄悆鐑х儰鐨勫尯鍒紝鏁欏煿->绌蜂汉瀹秜s瀵屼汉瀹跺瀛愪笂璇惧鐝殑鍖哄埆"},
"鏈€宸€夐":{rules:"鍏抽敭璇嶏細璐€兼渶蹇殑 / 鏈€闅惧悆鐨?/ 宸瘎鏈€澶氱殑 / 鏈€闅剧湅鐨?/ 鏈€娌￠潰瀛愮殑 / 鎷煎澶?鍧?鐨?/ 鏈€闅剧敤鐨?/ 鍙嶄汉绫昏璁＄殑銆傝闈犺氨涓嶇‖鍔?,example:"瑁呬慨->璐€兼渶蹇殑瀹跺叿銆佹渶娌￠潰瀛愮殑瑁呬慨椋庢牸"},
"鑽峰皵钂欓€夐":{rules:"鍙ュ紡锛氱浉浜叉垚鍔熺巼楂樼殑 / 寮傛€у鐪嬩綘涓ょ溂 / 鏈€鍏锋湁鎬х缉鍔涚殑 / 鑷互涓哄緢甯呭疄闄呭緢涓?/ 鍘讳笀姣嶅瀹惰兘鍏堝姩绛?,example:"绌挎惌->杩欐牱绌垮コ鐢熷湪澶ц涓婁細澶氱湅浣犱袱鐪硷紝鍋ヨ韩->鐢风敓缁冨摢閲岃秺缁冨コ鐢熻秺璁ㄥ帉"},
"鐚庡閫夐":{rules:"鍙ュ紡锛氳剳鍥炶矾鏈夌梾鐨?/ 澶栬浜虹粷瀵逛笉鐭ラ亾鐨?/ 榛戝績鍐呭箷鎿嶄綔鐨?/ 鍐呰浜虹殑绁炲鎿嶄綔 / 鍖し鎵€鎬濈殑琛屼负",example:"缁撳悎琛屼笟鍑洪€夐锛屽洿缁曠寧濂囨劅鍗冲彲"},
"鍦堜汉缇ら€夐":{rules:"鍙ュ紡锛氭槦搴х殑 / 鍐呭悜鎴栧鍚戠殑 / 涓嶅悓MBTI鐨?/ 韬环鍗佷釜浜跨殑 / 绗竴娆′綋楠岀殑 / 寮卞娍缇や綋鐨?,example:"姣嶅┐->宸ㄨ煿搴у濡堝甫瀛╁瓙鏈夊摢浜涢夯鐑︺€佽韩浠峰崄涓嚎鐨勫濡堟€庝箞甯﹀瀛?},
"鎴愭湰閫夐":{rules:"鍥寸粫鎴愭湰鍏冪礌锛堥噾閽?鏃堕棿/闈㈠瓙/鍔涙皵锛夛細渚垮疁鍙堟湁闈㈠瓙鐨?/ 鍗佸垎涔嬩竴閲戦挶鏃堕棿 / 濡備綍鍋锋噿 / 鑺卞皬閽卞姙澶т簨",example:"姣嶅┐->濡備綍璁╃埜鐖稿府蹇欏閲岀湅瀛╁瓙锛屾憚褰?>閫涜鎷嶇収鎵捐繖涓変釜寤虹瓚鐗╄偗瀹氬ソ鐪?}
};

var xhState={industry:"",audience:"",elements:[],topics:[],selectedTopic:null,templates:[],openings:[],selectedOpenings:[],results:[]};

// xuehui module

function xuehuiUpdateStatus(){var s=document.getElementById("form-xh-status");var m=document.getElementById("form-xh-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 宸查厤缃?- "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="鏈厤缃?API Key"}}
function xuehuiStep1(){
xhState.industry=document.getElementById("xh-industry").value.trim();
xhState.audience=document.getElementById("xh-audience").value.trim();
var els=Array.from(document.getElementById("xh-elements").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(!xhState.industry||!xhState.audience){alert("璇峰～鍐欒涓氬拰鐩爣浜虹兢");return}
if(els.length===0){alert("璇疯嚦灏戦€夋嫨涓€涓垎娆惧厓绱?);return}
xhState.elements=els;
var perEl=els.length===1?10:5;
var elementRules=xhState.elements.map(function(n){var d=xhElementDetails[n];if(!d)return"銆?+n+"銆戞棤璇︾粏瑙勫垯";return"銆?+n+"銆戝彞寮忥細"+d.rules+" 绀轰緥锛?+d.example;}).join("\n\n");
var sysPrompt='浣犳槸鐭棰戠垎娆鹃€夐鐢熸垚涓撳锛屽熀浜庤枦杈夊唴瀹瑰煿璁綋绯汇€傜敤鎴烽€夋嫨浜嗕互涓嬬垎娆惧厓绱狅紝璇蜂弗鏍兼寜鐓у搴斿厓绱犵殑鍥哄畾鍙ュ紡鐢熸垚閫夐銆俓n\n=== 鐢ㄦ埛閫夋嫨鐨勭垎娆惧厓绱犺鍒?===\n{elementRules}\n\n=== 杈撳嚭瑕佹眰 ===\n鐢ㄦ埛閫夋嫨鐨勭垎娆惧厓绱狅細{elements}锛屾瘡涓厓绱犵敓鎴恵count}涓€夐銆俓n鏍囬瑕佸彛璇寲銆佹湁鍐插嚮鍔涳紝鍍忔姈闊崇垎娆炬爣棰樸€傚繀椤讳弗鏍兼寜鐓у搴斿厓绱犵殑鍙ュ紡鏉ョ敓鎴愩€俓n杈撳嚭JSON锛歿"topics":[{"id":1,"title":"閫夐鏍囬","element":"鍏冪礌鍚?,"idea":"閫夐鎬濊矾璇存槑"}]}\n'.replace("{elementRules}",elementRules).replace("{elements}",els.join("銆?)).replace("{count}",perEl);
var userPrompt="琛屼笟锛?+xhState.industry+" 鐩爣浜虹兢锛?+xhState.audience+" 鐖嗘鍏冪礌锛?+els.join("銆?);
var btn=document.querySelector("#xh-step1 .chat-form-submit");btn.textContent="鐢熸垚涓?..";btn.disabled=true;
xuehuiCallAPI(sysPrompt,userPrompt,function(json){
 btn.textContent="馃殌 鐢熸垚鐖嗘閫夐";btn.disabled=false;
 var topics=json.topics||[];
 if(!Array.isArray(topics)||topics.length===0){alert("鐢熸垚澶辫触锛岃閲嶈瘯");return}
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
if(!xhState.selectedTopic){alert("璇峰厛閫夋嫨涓€涓€夐");return}
document.getElementById("xh-step3").style.display="";
}
function xuehuiStep3Next(){
var tmpls=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(tmpls.length===0){alert("璇疯嚦灏戦€夋嫨涓€涓枃妗堟ā鏉?);return}
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
document.getElementById("xh-count-info").textContent="宸查€?"+sel+" 涓紑澶?x "+tmpl+" 涓ā鏉?= "+(sel*tmpl*2)+" 鏉℃枃妗堬紙90绉掓爣鍑?+ 2鍒嗛挓娣卞害锛?;
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
function copyVoiceover(btn){
 var el=btn.parentElement.parentElement.querySelector(".xh-voiceover-text");
 var t=el.textContent.trim();
 if(navigator.clipboard&&navigator.clipboard.writeText){
  navigator.clipboard.writeText(t).then(function(){
   btn.textContent="鉁?宸插鍒?;setTimeout(function(){btn.textContent="馃搵 涓€閿鍒?},2000);
  }).catch(function(){fallbackCopy(t)})
 }else{fallbackCopy(t)}
}
function xhRegenerate(){
 var feedback=document.getElementById("xh-regen-input").value.trim();
 if(!feedback){alert("璇疯緭鍏ヤ紭鍖栨剰瑙?);return}
 if(!xhState.results||xhState.results.length===0){alert("娌℃湁鍙紭鍖栫殑鍐呭");return}
 var sysPrompt="浣犳槸鐭棰戞枃妗堜紭鍖栦笓瀹躲€傛牴鎹敤鎴风殑浼樺寲鎰忚锛屽鍘熸枃妗堣繘琛屼慨鏀广€備繚鎸佸師鏈夌粨鏋勶紝鍙仛鐢ㄦ埛瑕佹眰鐨勮皟鏁淬€傜洿鎺ヨ繑鍥炰紭鍖栧悗鐨勬枃妗堢函鏂囨湰锛屼笉瑕佸姞浠讳綍璇存槑銆?;
 var userPrompt="浼樺寲鎰忚锛?+feedback+"\n\n鍘熸枃妗堬細\n"+xhState.results.map(function(r,i){return "銆愭枃妗?+(i+1)+"銆?+r.duration+" - "+r.copyType+" - "+r.openingType+"\n"+r.content}).join("\n\n---\n\n");
 document.getElementById("xh-regen-loading").style.display="";
 document.getElementById("xh-regen-result").style.display="none";
 xuehuiCallAPI(sysPrompt,userPrompt,function(json){
  document.getElementById("xh-regen-loading").style.display="none";
  var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));
  var div=document.getElementById("xh-regen-result");
  div.innerHTML='<div style="padding:12px;border-radius:8px;border:1px solid var(--cyan);background:rgba(0,229,255,.04)"><div style="font-size:11px;font-weight:600;color:var(--cyan);margin-bottom:6px">鉁?浼樺寲缁撴灉</div><div style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap">'+result+'</div><button onclick="copyXhResult(this)" style="margin-top:8px;background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px">馃搵 澶嶅埗</button></div>';
  div.style.display="";
 }, {temperature:0.3,max_tokens:8000});
}
function xuehuiRecommendElements(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(!industry||!audience){alert("璇峰厛濉啓琛屼笟鍜屼汉缇?);return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="鍒嗘瀽涓?..";btn.disabled=true;}
var prompt="琛屼笟锛?+industry+" 浜虹兢锛?+audience+"\n\n浠庝互涓?绉嶇垎娆惧厓绱犱腑鎺ㄨ崘1-2涓渶閫傚悎鐨勶紝鍙緭鍑篔SON鏁扮粍锛歕n"+JSON.stringify(Object.keys(xhElementDetails))+"\n姣忎釜鍏冪礌璇存槑锛歕n"+Object.entries(xhElementDetails).map(function(e){return e[0]+": "+e[1].desc}).join("\n")+"\n\n浣犲繀椤讳弗鏍艰緭鍑虹函JSON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]";
xuehuiCallAPI("浣犳槸鐖嗘閫夐鎺ㄨ崘涓撳銆傛牴鎹涓氬拰浜虹兢鎺ㄨ崘鏈€鍚堥€傜殑鐖嗘鍏冪礌銆備綘蹇呴』涓ユ牸杈撳嚭绾疛SON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="鏅鸿兘鎺ㄨ崘鐖嗘鍏冪礌";btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("鎺ㄨ崘澶辫触");return}
 }
 var container=document.getElementById("xh-elements");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="鎺ㄨ崘";
   chip.appendChild(badge);chip.classList.add("recommended");
  }
 });
});
}
function xuehuiRecommendTemplates(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
if(!industry||!audience){alert("璇峰厛濉啓琛屼笟鍜屼汉缇?);return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="鍒嗘瀽涓?..";btn.disabled=true;}
var element=xhState.selectedTopic?xhState.selectedTopic.element:"";
var prompt="琛屼笟锛?+industry+" 浜虹兢锛?+audience+" 閫夐鍏冪礌锛?+element+"\n\n浠庝互涓?绉嶆ā鏉挎帹鑽?-2涓細璁叉晠浜嬬被銆佸叡楦ｅ瀷娈靛瓙绫汇€佹暀鐭ヨ瘑绫汇€佹檼杩囩▼绫籠n浣犲繀椤讳弗鏍艰緭鍑虹函JSON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]";
xuehuiCallAPI("浣犳槸鏂囨妯℃澘鎺ㄨ崘涓撳銆備綘蹇呴』涓ユ牸杈撳嚭绾疛SON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="鏅鸿兘鎺ㄨ崘妯℃澘";btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("鎺ㄨ崘澶辫触");return}
 }
 var container=document.getElementById("xh-templates");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="鎺ㄨ崘";
   chip.appendChild(badge);chip.classList.add("recommended");
  }
 });
});
}
function xuehuiRecommendOpenings(){
var industry=document.getElementById("xh-industry").value.trim();
var audience=document.getElementById("xh-audience").value.trim();
var tmpls=xhState.templates||[];
if(!industry||!audience){alert("璇峰厛濉啓琛屼笟鍜屼汉缇?);return}
var btn=(typeof event!=="undefined"&&event&&event.target)?event.target:null;if(btn){btn.textContent="鍒嗘瀽涓?..";btn.disabled=true;}
var prompt="琛屼笟锛?+industry+" 浜虹兢锛?+audience+" 宸查€夋ā鏉匡細"+tmpls.join("銆?)+"\n\n浠庝互涓?6绉嶅紑澶存帹鑽?-3涓細\n"+JSON.stringify(Object.keys(xhOpeningDetails))+"\n浣犲繀椤讳弗鏍艰緭鍑虹函JSON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]";
xuehuiCallAPI("浣犳槸寮€澶存帹鑽愪笓瀹躲€備綘蹇呴』涓ユ牸杈撳嚭绾疛SON鏁扮粍锛屼笉瑕乵arkdown浠ｇ爜鍧楋紝涓嶈鍏朵粬鏂囧瓧銆傜ず渚嬶細[\"A\",\"B\"]",prompt,function(json){
 if(btn){btn.textContent="鏅鸿兘鎺ㄨ崘寮€澶?;btn.disabled=false;}
 var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);
 if(!Array.isArray(recs)||recs.length===0){
  for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}
  if(!Array.isArray(recs)||recs.length===0){alert("鎺ㄨ崘澶辫触");return}
 }
 var container=document.getElementById("xh-openings");
 if(!container)return;
 container.querySelectorAll(".select-chip .rec-badge").forEach(function(b){b.remove()});
 recs.forEach(function(key){
  var chip=container.querySelector('.select-chip[data-val="'+key+'"]');
  if(chip&&!chip.querySelector(".rec-badge")){
   var badge=document.createElement("span");badge.className="rec-badge";badge.textContent="鎺ㄨ崘";
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
function xuehuiGenerate(){
// Ensure templates are captured from DOM if not already set
if(!xhState.templates||xhState.templates.length===0){
xhState.templates=Array.from(document.getElementById("xh-templates").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
}
xhState.selectedOpenings=Array.from(document.getElementById("xh-openings").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val});
if(xhState.selectedOpenings.length===0){alert("璇疯嚦灏戦€夋嫨涓€涓紑澶寸被鍨?);return}
var t=xhState.selectedTopic;
var openingRules=xhState.selectedOpenings.map(function(n){var d=xhOpeningDetails[n];if(!d)return"銆?+n+"銆戞棤璇︾粏瑙勫垯";return"銆?+n+"銆戝叕寮忥細"+d.formula+" 閫昏緫锛?+d.logic+" 绀轰緥锛?+d.examples.join("锛?)+" 鎶€宸э細"+d.tips;}).join("\n\n");
var tmplRules=xhState.templates.map(function(tn){var d=xhTemplateDetails[tn];if(!d)return"";return"銆愭ā鏉匡細"+tn+"銆慭n鍘熷垯锛?+d.principles+"\n姝ラ锛?+d.steps+"\n鎶€宸э細"+d.techniques+"\n閬垮潙锛?+d.pitfalls}).join("\n\n");
var sysPrompt="浣犳槸鐭棰戠垎娆炬枃妗堢敓鎴愪笓瀹讹紝鍩轰簬钖涜緣鍐呭鍩硅浣撶郴銆傛牴鎹敤鎴烽€夋嫨鐨勬枃妗堟ā鏉跨被鍨嬪拰寮€澶寸被鍨嬶紝涓烘寚瀹氱殑閫夐鐢熸垚瀹屾暣鏂囨銆俓n\n=== 鐢ㄦ埛閫夋嫨鐨勬枃妗堟ā鏉胯鍒?===\n\n"+tmplRules+"\\n\\n=== 鐢ㄦ埛閫夋嫨鐨勫紑澶寸被鍨嬭鍒?===\\n{openingRules}\\n\\n=== 鐢熸垚瑙勫垯锛堝繀椤讳弗鏍奸伒瀹堬級 ===\\n\\n銆愬瓧鏁板己鍒惰姹?- 杩欐槸鏈€閲嶈鐨勮鍒欍€慭\n!!! 璀﹀憡锛氬瓧鏁颁笉瓒崇殑鏂囨灏嗚鎷掔粷锛岃鍔″繀涓ユ牸閬靛畧 !!!\\n1. 90绉掓爣鍑嗙増锛氬繀椤诲啓澶?250-350 瀛楋紙绾?35-45 绉掑彛鎾椂闀匡級锛岀粨鏋勫畬鏁淬€佽妭濂忕揣鍑戙€佷俊鎭瘑搴﹂珮\\n2. 2鍒嗛挓娣卞害鐗堬細蹇呴』鍐欏 500-650 瀛楋紙绾?100-120 绉掑彛鎾椂闀匡級锛屾繁鍏ュ睍寮€銆佹湁缁嗚妭鎻忓啓銆佹湁鎯呯华閾哄灚銆佹湁鍦烘櫙杩樺師\\n\\n銆愪弗姝ｈ鍛娿€慭\n- 绂佹杈撳嚭浣庝簬瀛楁暟涓嬮檺鐨勬枃妗堬紒90绉掔増涓嶅彲灏戜簬250瀛楋紝2鍒嗛挓鐗堜笉鍙皯浜?00瀛梊\n- 绂佹鐢ㄧ┖璇濆噾瀛楁暟锛屾瘡鍙ヨ瘽閮借鏈変俊鎭噺\\n- 姣忕銆屾ā鏉跨被鍨?+ 寮€澶寸被鍨嬨€嶇粍鍚堬紝蹇呴』鍚屾椂杈撳嚭90绉掔増鍜?鍒嗛挓鐗堝悇1鏉\n\\n銆愭牸寮忚姹傘€慭\n- 鏂囨蹇呴』浠ョ敤鎴烽€夋嫨鐨勫紑澶寸被鍨嬪彞寮忓紑澶达紝鍓?绉掑繀椤绘湁閽╁瓙\\n- 鏂囨鍙ｈ鍖栵紝閫傚悎鐪熶汉鍙ｆ挱锛屽儚鍦ㄨ窡鏈嬪弸鑱婂ぉ锛屼笉鏄康绋縗\n- 鏈夋槑纭浆鍖栧紩瀵硷紙鍏虫敞/鐐硅禐/璇勮/绉佷俊锛夛紝鑷劧妞嶅叆涓嶇獊鍏€\\n- 閬垮厤涔﹂潰璇€佷富瑙傛劅鎱ㄣ€佸暟鍡﹀簾璇漒\n- 銆愷煍?寮哄埗鑷煡 - 鍐欏畬鍚庨€愬瓧鏁板瓧鏁般€?0绉掔増灏戜簬300瀛楃姝㈡彁浜わ紝2鍒嗛挓鐗堝皯浜?50瀛楃姝㈡彁浜わ紝瀛楁暟涓嶅蹇呴』閲嶅啓锛屼笉鍏佽浠讳綍鍊熷彛\\n- 姣忓彞15-25瀛楋紝娈佃惤2-3鍙ワ紱90绉掔増鑷冲皯6娈碉紝2鍒嗛挓鐗堣嚦灏?0娈礬\n\\n銆愯緭鍑篔SON鏍煎紡銆慭\n{\\\"results\\\":[\\n  {\\\"copyType\\\":\\\"璁叉晠浜嬬被\\\",\\\"openingType\\\":\\\"鍦堝畾浜虹兢\\\",\\\"duration\\\":\\\"90绉掓爣鍑哱\\",\\\"content\\\":\\\"锛堝繀椤?00-400瀛楋紝灏戜簬300瀛楃姝㈡彁浜わ級\\\"},\\n  {\\\"copyType\\\":\\\"璁叉晠浜嬬被\\\",\\\"openingType\\\":\\\"鍦堝畾浜虹兢\\\",\\\"duration\\\":\\\"2鍒嗛挓娣卞害\\\",\\\"content\\\":\\\"锛堝繀椤?50-700瀛楋紝灏戜簬550瀛楃姝㈡彁浜わ級\\\"},\\n  ...姣忕妯℃澘脳寮€澶寸粍鍚?鏉\n]}\"".replace("{industry}",xhState.industry).replace("{audience}",xhState.audience).replace("{topic}",t.title).replace("{element}",t.element).replace("{templates}",xhState.templates.join("銆?)).replace("{openings}",xhState.selectedOpenings.join("銆?)).replace("{openingRules}",openingRules);
var userPrompt="琛屼笟锛?+xhState.industry+" 浜虹兢锛?+xhState.audience+" 閫夐锛?+t.title+" 鍏冪礌锛?+t.element+" 妯℃澘锛?+xhState.templates.join("銆?)+" 寮€澶达細"+xhState.selectedOpenings.join("銆?);
var btn=document.querySelector("#xh-step4 .chat-form-submit");btn.textContent="鐢熸垚涓?..";btn.disabled=true;
xuehuiCallAPI(sysPrompt,userPrompt,function(json){
 btn.textContent="鉁嶏笍 鐢熸垚鐖嗘鏂囨";btn.disabled=false;
 var results=json.results||[];
 if(!Array.isArray(results)||results.length===0){alert("鐢熸垚澶辫触锛岃閲嶈瘯");return}
 xhState.results=results;
 var container=document.getElementById("xh-results-content");
 var grouped={};
 results.forEach(function(r){var key=r.copyType||"other";if(!grouped[key])grouped[key]=[];grouped[key].push(r)});
 var html="";
 for(var g in grouped){
  html+='<div style="margin-bottom:12px"><div style="font-size:13px;font-weight:700;color:var(--purple);margin-bottom:8px;padding:6px 12px;background:rgba(168,85,247,.08);border-radius:8px">'+g+'</div>';
  grouped[g].forEach(function(r){
   var durColor=r.duration==="90绉掓爣鍑??"var(--cyan)":"var(--gold)";var charCount=r.content?r.content.length:0;var countColor=charCount<(r.duration==="90绉掓爣鍑??300:550)?"var(--red)":"var(--green)";
   html+='<div style="padding:12px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-card);margin-bottom:8px"><div style="display:flex;gap:8px;margin-bottom:6px"><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(0,229,255,.1);color:'+durColor+'">'+r.duration+' <span style="font-size:9px;color:'+countColor+'">('+charCount+'瀛?</span></span><span style="font-size:10px;padding:2px 6px;border-radius:6px;background:rgba(168,85,247,.1);color:var(--purple)">'+r.openingType+'</span><span style="flex:1"></span><button onclick="copyXhResult(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="澶嶅埗鍏ㄦ枃">&#x1f4cb; 澶嶅埗</button><button onclick="expandCopy(this)" style="background:var(--bg-panel);border:1px solid var(--border-glow);color:var(--text-secondary);padding:3px 8px;border-radius:6px;cursor:pointer;font-size:10px" title="鎵╁啓">馃摑 鎵╁啓</button></div><div style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap">'+r.content+'</div><div class="xh-expand-area" style="display:none;margin-top:8px;padding:8px;border-radius:8px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)"><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><input type="number" class="xh-expand-input" placeholder="璇疯緭鍏ヤ綘鎯宠鎵╁啓鐨勫瓧鏁?.." style="flex:1;padding:4px 8px;border-radius:6px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px" min="100"><button onclick="doExpandCopy(this)" style="background:var(--purple);color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;font-size:11px;white-space:nowrap">纭鎵╁啓</button></div><div class="xh-expand-result" style="font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap;margin-top:6px;display:none"></div><div class="xh-expand-loading" style="display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:8px">鎵╁啓涓?..</div></div></div>';
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
 // Add regenerate section
 var regenHTML="<div style=\"margin-top:16px;padding:12px;border-radius:10px;border:1px dashed var(--border-glow);background:rgba(168,85,247,.04)\"><div style=\"font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:8px\">馃攧 浼樺寲鎰忚鍚庨噸鏂扮敓鎴?/div><textarea id=\"xh-regen-input\" placeholder=\"杈撳叆浼樺寲鎰忚锛屼緥濡傦細璇皵鏇存椿娉笺€佸鍔犱骇鍝佸姛鏁堟弿杩般€佺缉鐭埌200瀛?..\" style=\"width:100%;min-height:60px;padding:8px;border-radius:8px;border:1px solid var(--border-glow);background:var(--bg-panel);color:var(--text-primary);font-size:11px;resize:vertical;margin-bottom:8px;font-family:inherit\"></textarea><button onclick=\"xhRegenerate()\" class=\"sidebar-api-save\" style=\"width:100%\">鉁?閲嶆柊鐢熸垚</button><div id=\"xh-regen-result\" style=\"margin-top:10px;display:none\"></div><div id=\"xh-regen-loading\" style=\"display:none;text-align:center;color:var(--text-muted);font-size:11px;padding:12px\">閲嶆柊鐢熸垚涓?..</div></div>";
 container.innerHTML+=regenHTML;
 document.getElementById("xh-results").style.display="";
}, {temperature:0.1,max_tokens:32000});
}
