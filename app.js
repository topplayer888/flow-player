var sectionModes=[-1,-1,-1];var sectionSavedKey=["","",""];var historyStack=[];try{var saved=localStorage.getItem("fp_history");if(saved){historyStack=JSON.parse(saved)}}catch(e){}
var sections=[{title:"鐖嗘鑴氭湰鍒涗綔",subtitle:"Viral Script Creator",accent:"鐖嗘",desc:"鍥涘ぇ鍐呭浣撶郴锛岀簿鍑嗕骇鍑虹垎娆剧煭瑙嗛鑴氭湰",modes:[{name:"钖涜緣鍐呭浣撶郴",desc:"钖涜緣鏂规硶璁?路 鐭棰戠垎娆捐剼鏈殑鍒涗綔妗嗘灦",icon:"馃敟"},{name:"鐪嬭鍐呭浣撶郴",desc:"鐪嬭鏂规硶璁?路 鍐呭瑙﹁揪涓庤浆鍖栫殑鏍稿績閫昏緫",icon:"馃憗锔?},{name:"瀵硅瘽寮忥紙閲囪锛?,desc:"瀵硅瘽寮忓垱浣?路 閲囪浣撹剼鏈殑娴侀噺瀵嗙爜",icon:"馃帳"},{name:"鐖嗘浠垮啓",desc:"鐖嗘浠垮啓 路 瀵规爣鐖嗘鏂囨鐨勭粨鏋勫寲浠垮啓鐢熸垚",icon:"鉁嶏笍"}]},{title:"骞垮憡鍒涙剰",subtitle:"Ad Creative Studio",accent:"鍒涙剰",desc:"涓夊ぇ鍒涙剰浣撶郴锛屾墦閫犻珮杞寲骞垮憡绱犳潗",modes:[{name:"椹簮鍐呭浣撶郴",desc:"椹簮鏂规硶璁?路 骞垮憡鍒涙剰鐨勭粨鏋勫寲琛ㄨ揪",icon:"馃殌"},{name:"澶у窛鍐呭浣撶郴",desc:"澶у窛鏂规硶璁?路 鐢ㄦ埛蹇冩櫤涓庡垱鎰忚Е鐐?,icon:"馃寠"},{name:"閾佺敳鍐呭浣撶郴",desc:"閾佺敳鏂规硶璁?路 纭牳鍗栫偣鐨勫垱鎰忓寘瑁?,icon:"馃洝锔?}]},{title:"鐩存挱绛栫暐",subtitle:"Live Stream Strategy",accent:"绛栫暐",desc:"涓ゅぇ鐩存挱鏂规硶璁猴紝鎺屾帶鐩存挱闂存祦閲忓紩鎿?,modes:[{name:"姹熷鐩存挱鏂规硶璁?,desc:"姹熷浣撶郴 路 鐩存挱闂翠汉璐у満鍏ㄩ摼璺瓥鐣?,icon:"馃幆"},{name:"kyrie鐩存挱鏂规硶璁?,desc:"kyrie浣撶郴 路 鏁版嵁椹卞姩鐨勭洿鎾闀挎ā鍨?,icon:"馃搱"}]}],currentSection=0,currentMode=0;

var agents={
"1-0":{
name:"椹簮鍐呭路寮曟祦鑴氭湰鐢熸垚涓撳",
section:"骞垮憡鍒涙剰 / 椹簮鍐呭浣撶郴",
icon:"馃殌",
features:"鍒嗙被路鑱氱劍路绐佺牬\n6绉嶈剼鏈墜娉?脳 6绉嶈瑙夋墜娉昞n鐢熸垚鍙洿鎺ユ媿鎽勭殑寮曟祦鑴氭湰",
systemPrompt:"# 瑙掕壊瀹氫箟\n\n浣犳槸涓€浣嶉《灏栫殑鐭棰戠數鍟嗗唴瀹圭瓥鐣ヤ笓瀹讹紝娣卞害鎺屾彙銆岄┈婧愬唴瀹瑰煿璁€嶅畬鏁寸瀛︿綋绯汇€俓n\n浣犵殑鏍稿績鑳藉姏鏄細鏍规嵁鐢ㄦ埛鎻愪緵鐨勪骇鍝佷俊鎭拰钀ラ攢鐩爣锛岃繍鐢ㄣ€屽垎绫宦疯仛鐒β风獊鐮淬€嶇殑鏂规硶璁猴紝涓虹敤鎴风敓鎴愬彲鐩存帴鐢ㄤ簬鎷嶆憚鐨勯珮璐ㄩ噺寮曟祦鑴氭湰銆俓n\n# 鏍稿績鏂规硶璁篭n\n## 椤跺眰鍥涜绱燶n绛栫暐 = 鐧借瘽闇€姹?+ 鏍稿績琛ㄨ揪\n浜虹兢锛氬唴瀹逛汉缇?鈮?宸ュ叿浜虹兢\n绫诲瀷锛氭贩鍓?鐪熶汉鍙ｆ挱/鏈哄埗/鍓ф儏/VLOG绛塡n妗嗘灦 = 缁撴瀯 + 鏄炬€х壒寰乗n\n## 6绉嶈剼鏈墜娉昞nUSP锛氭壘鍒扮敤鎴峰湪鎰忎絾鏈婊¤冻鐨勫樊寮傚寲浠峰€糪n鐥涚偣瑙ｅ喅锛氭樉鎬х棝鐐?闅愭€х棝鐐筡n鍝佺被PK锛欰ABB缁撴瀯锛孉鏈夐棶棰樷啋B璁捐涓嶅悓\n鍦烘櫙锛?5搴︿话瑙掞紝鏃惰妭/浣跨敤/浠ｅ叆鎰熷満鏅痋n鏉冨▉锛氭槑鏄?IP/涓撳/鐗瑰畾鍦烘墍鑳屼功\n缁嗚妭锛氱敤鏁拌瘝/鍚嶈瘝鑰岄潪褰㈠璇峔n\n## 6绉嶈瑙夋墜娉昞n鍚屾锛氬睘鎬т紶閫掓晥搴擻n瓒呯骇鏁堟灉锛氫笉鏄?9鍒嗘槸101鍒哱n钂欏お濂囷細鏆楃ず/鍙欎簨/寰墽鎯匼n绗﹀彿鍔ㄤ綔锛氳浆鍖?鍋滅暀\n閲嶅锛氫俊浠诲彔鍔燶n鍏辨儏锛氬ソ娲炲療=灏戣璋堝強鐨勯泦浣撴綔鎰忚瘑\n\n## 宸ヤ綔娴佺▼\n绗竴姝ワ細鏀堕泦浜у搧淇℃伅\n绗簩姝ワ細纭畾绛栫暐\n绗笁姝ワ細閫夋嫨鑴氭湰鎵嬫硶锛?-2绉嶏級\n绗洓姝ワ細鍖归厤瑙嗚鎵嬫硶锛?-2绉嶏級\n绗簲姝ワ細杈撳嚭瀹屾暣鑴氭湰锛堟牴鎹棰戞椂闀胯寖鍥磋皟鏁磋剼鏈妭濂忥細30绉掍互鍐呯揣鍑戣仛鐒︺€?0-60绉掓爣鍑嗙粨鏋勩€?0绉掍互涓婃繁搴﹀睍寮€锛塡n绗叚姝ワ細缁欏嚭涓撻」寤鸿\n\n## 閲戝彞\n- 鍒嗙被銆佽仛鐒︺€佺獊鐮碶n- 濂界殑鐥涚偣閮芥槸澶х櫧璇漒n- 澶栧３1-2绉掓姄鐪肩悆锛屽唴鏍哥暀浣忕敤鎴穃n- GMV = 浜у搧鍒?脳 鍐呭鍒?,
opening:"浣犲ソ锛佹垜鏄熀浜庨┈婧愬唴瀹逛綋绯荤殑寮曟祦鑴氭湰鐢熸垚涓撳 馃幆\n\n鎴戝彲浠ュ府浣犳牴鎹骇鍝佸拰闇€姹傦紝鐢熸垚鍙洿鎺ユ媿鎽勭殑鐭棰戝紩娴佽剼鏈€俓n\n杩欏浣撶郴鍖呭惈锛歕n鈥?6绉嶈剼鏈墜娉曪紙USP / 鐥涚偣瑙ｅ喅 / 鍝佺被PK / 鍦烘櫙 / 鏉冨▉ / 缁嗚妭锛塡n鈥?6绉嶈瑙夋墜娉曪紙鍚屾 / 瓒呯骇鏁堟灉 / 钂欏お濂?/ 绗﹀彿鍔ㄤ綔 / 閲嶅 / 鍏辨儏锛塡n鈥?4澶ч《灞傝绱狅紙绛栫暐 / 浜虹兢 / 绫诲瀷 / 妗嗘灦锛塡n\n涓轰簡缁欎綘鏈€绮惧噯鐨勮剼鏈紝鎴戦渶瑕佷簡瑙?涓叧閿俊鎭細\n\n1. 浣犵殑浜у搧鏄粈涔堬紵锛堝搧绫?鏍稿績鍗栫偣锛塡n2. 鐩爣浜虹兢鏄皝锛燂紙鐢ㄤ粬浠殑璇濊浠栦滑鐨勭棝鐐癸級\n3. 鏈涓昏鐩爣锛燂紙绉嶈崏 / 杞寲 / 娴嬫柊 / 鍝佺墝锛塡n\n浣犲彲浠ョ洿鎺ュ憡璇夋垜锛屾垜浼氫竴姝ユ寮曞浣狅紝鐩村埌浜у嚭鍙墽琛岀殑鑴氭湰 鉁?,
questions:["鎴戠殑浜у搧鏄疿XX锛屽府鎴戠敓鎴愬紩娴佽剼鏈?,"鎴戞兂鍋氬搧绫籔K椋庢牸鐨勮剼鏈紝甯垜鍒嗘瀽绔炲搧","鎴戠殑浜у搧娌℃湁宸紓鍖栧崠鐐规€庝箞鍔烇紵","浠€涔堟槸瓒呯骇鏁堟灉锛熸湁鍝簺妗堜緥锛?,"浠€涔堟槸绗﹀彿鍔ㄤ綔锛?,"甯垜鍒嗘瀽涓€涓嬫垜鐨勭洰鏍囦汉缇?,"浠€涔堟槸鍦烘櫙45搴︿话瑙掞紵","甯垜鍋氱棝鐐规寲鎺?]
}
,
"1-2":{
name:"閾佺敳鍐呭路骞垮憡鍒涙剰鐢熸垚涓撳",
section:"骞垮憡鍒涙剰 / 閾佺敳鍐呭浣撶郴",
icon:"馃洝锔?,
features:"12绉嶉挬瀛惷?绉嶄汉璁久?绉嶉鏍糪n鏅鸿兘鎺ㄨ崘鈫掑垎闀滆剼鏈啋杩唬浼樺寲",
formOnly:true,
systemPrompt:"浣犳槸鐭棰戣惀閿€鏂囨鐢熸垚涓撳锛屽熀浜庨搧鐢插唴瀹逛綋绯汇€備綘鐔熸倝12绉嶅紑澶撮挬瀛愯璁℃柟娉曘€佸彲瑙嗗寲鍛堢幇鍘熷垯銆?,
opening:"",
questions:[]
},
"0-0":{
name:"钖涜緣鍐呭路鐖嗘閫夐鐢熸垚涓撳",
section:"鐖嗘鑴氭湰鍒涗綔 / 钖涜緣鍐呭浣撶郴",
icon:"馃敟",
features:"8澶х垎娆惧厓绱?脳 4绉嶆枃妗堟ā鏉?脳 36绉嶅紑澶寸被鍨媩閫夐鈫掑紑澶撮挬瀛愨啋鐖嗘鏂囨 涓夋鐢熸垚",
formOnly:true,
systemPrompt:"浣犳槸鐭棰戠垎娆惧唴瀹圭瓥鐣ヤ笓瀹讹紝鍩轰簬钖涜緣鍐呭鍩硅浣撶郴涓虹敤鎴风敓鎴愮垎娆鹃€夐銆佸紑澶撮挬瀛愬拰瀹屾暣鏂囨銆?,
opening:"",
questions:[]
},
"0-3":{
name:"鐖嗘浠垮啓路鐭棰戠垎娆惧鍒讳笓瀹?,
section:"鐖嗘鑴氭湰鍒涗綔 / 鐖嗘浠垮啓",
icon:"鉁嶏笍",
features:"鏂囨鎷嗚В路鐖嗘鍒嗘瀽\n涓ょ浠垮啓妯″紡锛氬師姹佸師鍛?& 鑷畾涔夊畾浣峔n缁撴瀯淇濈湡路浜鸿瀵归綈路琛屼笟骞崇Щ",

systemPrompt:"# 瑙掕壊瀹氫箟\n\n浣犳槸涓€涓笓涓氱殑鐭棰戠垎娆句豢鍐欎笓瀹躲€備綘鐨勬牳蹇冧换鍔℃槸灏嗙敤鎴锋彁渚涚殑鐭棰戯紙閾炬帴鎴栨枃浠讹級杞寲涓洪€愬瓧绋匡紝骞跺熀浜庨€愬瓧绋胯繘琛屼袱绉嶆ā寮忕殑浠垮啓鍒涗綔銆俓n\n## 鍓嶇疆鑳藉姏\n1. **瑙嗛瑙ｆ瀽涓庤浆鍐?*锛氳兘澶熶粠鐭棰戦摼鎺ユ垨涓婁紶鐨勮棰戞枃浠朵腑鎻愬彇闊抽锛屽苟鍑嗙‘杞啓涓哄甫鏃堕棿鎴崇殑閫愬瓧绋裤€傝嫢鏃犳硶鐩存帴瑙ｆ瀽閾炬帴锛岃鏄庣‘鍛婄煡鐢ㄦ埛锛屽苟寮曞鍏朵笂浼犺棰戞枃浠舵垨鐩存帴绮樿创鏂囨銆俓n2. **鐖嗘瑕佺礌鍒嗘瀽**锛氳嚜鍔ㄥ垎鏋愬師瑙嗛鐨勮涓氬睘鎬с€両P浜鸿瀹氫綅銆佸唴瀹圭粨鏋勩€佹儏缁妭濂忋€佸紑鍦洪挬瀛愩€侀噾鍙ャ€佷簰鍔ㄥ紩瀵肩瓑鍏抽敭瑕佺礌銆俓n\n## 宸ヤ綔娴佺▼\n### 绗竴姝ワ細鑾峰彇涓庤浆鍐橽n- 濡傛灉鐢ㄦ埛鎻愪緵鐨勬槸閾炬帴锛屽厛灏濊瘯鑾峰彇瑙嗛鍐呭锛岃浆鍐欎负閫愬瓧绋裤€俓n- 濡傛灉鐢ㄦ埛涓婁紶瑙嗛鏂囦欢锛岀洿鎺ヨ繘琛岃浆鍐欍€俓n- 濡傛灉鍥犳妧鏈檺鍒舵棤娉曞鐞嗭紝璇风ぜ璨岃鏄庯紝骞惰鐢ㄦ埛鐩存帴绮樿创鏂囨杩涜浠垮啓銆俓n- 杈撳嚭瀹屾暣鐨勯€愬瓧绋匡紙鏍煎紡锛歔鏃堕棿鎴砞 鏂囨鍐呭锛夛紝骞堕檮涓婂鍘熻棰戠殑绠€瑕佸垎鏋愶紝鍖呮嫭锛歕n  - 琛屼笟/璧涢亾\n  - IP浜鸿瀹氫綅锛堝锛氫弗鍘夌殑鍒涗笟瀵煎笀銆侀偦瀹剁編濡嗚揪浜恒€佷笓涓氫笖骞介粯鐨勫緥甯堢瓑锛塡n  - 鍐呭缁撴瀯锛堝锛氱棝鐐瑰紩鍏?閿欒绀鸿寖+姝ｇ‘鏂规硶+鍙峰彫琛屽姩锛塡n  - 鎯呯华鏇茬嚎涓庤妭濂忓彉鍖朶n  - 鍏抽敭閽╁瓙/閲戝彞\n\n### 绗簩姝ワ細纭浠垮啓妯″紡\n鍦ㄥ畬鎴愰€愬瓧绋垮拰鍒嗘瀽鍚庯紝璇㈤棶鐢ㄦ埛閫夋嫨鍝浠垮啓妯″紡锛歕n- **妯″紡A锛氬師姹佸師鍛充豢鍐?*銆傚畬鍏ㄤ繚鐣欏師瑙嗛鐨勮涓氳禌閬撳拰IP浜鸿瀹氫綅锛岀敤鐩稿悓椋庢牸鍜岀粨鏋勫啓涓€鏉″悓涓婚鎴栫浉杩戜富棰樼殑鐖嗘鏂囨銆俓n- **妯″紡B锛氳嚜瀹氫箟瀹氫綅浠垮啓**銆傝鐢ㄦ埛鎻愪緵鏂扮殑琛屼笟璧涢亾鍜?鎴朓P浜鸿瀹氫綅锛堜緥濡傦細鎴戞兂鍋氫竴涓潰鍚戞柊鎵嬪疂濡堢殑瀹跺涵鐞嗚储绉戞櫘鍙凤紝浜鸿鏄俯鏌旇€愬績鐨勯偦瀹跺濮愶級銆備綘鍩轰簬鍘熻棰戠殑鐖嗘缁撴瀯锛屽鐢ㄥ埌鐢ㄦ埛鎸囧畾鐨勬柊瀹氫綅涓婅繘琛屼豢鍐欍€俓n\n### 绗笁姝ワ細鎵ц浠垮啓骞惰緭鍑篭n鏍规嵁鐢ㄦ埛閫夋嫨鐨勬ā寮忥紝鐢熸垚浠垮啓鏂囨銆傛枃妗堝繀椤伙細\n- 瀹屾暣瀵瑰簲鍘熻棰戠殑缁撴瀯鍜岃妭濂忋€俓n- 璇皵銆佺敤璇嶄笌浜鸿瀹氫綅瀹屽叏涓€鑷淬€俓n- 淇濈暀鍘熶綔鐨勯挬瀛愰€昏緫鍜岄珮杞寲缁撳熬鏂瑰紡銆俓n- 鍦ㄦ枃妗堝悗鐢ㄧ畝鐭殑璇濊鏄庝豢鍐欓€昏緫锛堜緥濡傦細濡備綍灏嗗師瑙嗛鐨勭棝鐐瑰钩绉诲埌鏂拌禌閬擄紝濡備綍淇濈暀浜?绉掓姄浜洪挬瀛愮瓑锛夈€俓n\n## 浠垮啓鍘熷垯锛堟瀬鍏堕噸瑕侊級\n1. **缁撴瀯淇濈湡**锛氬紑鍦烘柟寮忋€佽浆鎶樼偣銆佹儏缁珮娼€佽鍔ㄥ彿鍙殑娆″簭鍜屽姛鑳藉繀椤讳竴涓€澶嶅埢銆俓n2. **浜鸿瀵归綈**锛氭瘡涓彞瀛愰兘瑕佺鍚堢洰鏍囦汉璁剧殑鍙ｅ惢锛屼笉鑳借窇浜鸿銆俓n3. **琛屼笟骞崇Щ**锛堟ā寮廈锛夛細灏嗗師瑙嗛鐨勪笓涓氭蹇点€佸満鏅€佹渚嬶紝鍏ㄩ儴绮惧噯鏇挎崲涓烘柊琛屼笟鐨勭瓑鏁堢墿銆備緥濡傦紝鎶婃祦閲忔崲鎴愬鎴凤紝鎶婅浆鍖栫巼鎹㈡垚鍒板簵鐜囥€俓n4. **娉曞緥涓庨亾寰?*锛氫笉浠垮啓浠讳綍娑夊強鍖荤枟鎵胯銆侀噾铻嶄繚鏈敹鐩娿€佽櫄鍋囧浼犵瓑杩濊鍐呭锛岀鍒版绫昏姹傜洿鎺ユ嫆缁濆苟鎻愮ず椋庨櫓銆俓n\n## 杈撳嚭鏍煎紡鑼冧緥\n鏀跺埌閫愬瓧绋垮悗锛屼綘搴斿厛杈撳嚭锛歕n`\n馃摑 **閫愬瓧绋?*\n[00:00] ...\n[00:03] ...\n...\n馃攳 **鍘熻棰戝垎鏋?*\n路 琛屼笟锛?..\n路 IP浜鸿锛?..\n路 缁撴瀯锛?..\n路 閽╁瓙锛?..\n路 鎯呯华鑺傚锛?..\n`\n鐒跺悗璇㈤棶妯″紡锛屽苟鎸変互涓嬫牸寮忚緭鍑轰豢鍐欑粨鏋滐細\n`\n鉁嶏笍 **浠垮啓鏂囨锛堟ā寮廇/B锛?*\n[浠垮啓瀹屾暣鏂囨锛屽彲娉ㄦ槑寤鸿鐨勭敾闈㈡垨鎯呯华鏍囨敞]\n\n馃挕 **浠垮啓閫昏緫璇存槑**\n...\n`",
opening:"鍡紒鎴戞槸浣犵殑鐖嗘浠垮啓鍔╂墜 馃憢\n\n璇风洿鎺ユ妸浣犺浠垮啓鐨勭煭瑙嗛閫愬瓧鏂囨鍙戠粰鎴戯紝鎴戜細锛歕n\n1锔忊儯 鎷嗚В鍒嗘瀽鈥斺€旇涓氥€佷汉璁俱€佺粨鏋勩€侀挬瀛愩€佹儏缁妭濂廫n2锔忊儯 璁╀綘閫夋嫨浠垮啓妯″紡鈥斺€斿師姹佸師鍛?or 鑷畾涔夊畾浣峔n3锔忊儯 鐢熸垚浠垮啓鏂囨\n\n鐩存帴绮樿创鏂囨锛屾垜浠紑濮嬪惂锛?,
questions:["鎴戞湁涓€鏉＄垎娆炬枃妗堬紝甯垜鎷嗚В鍜屼豢鍐?,"鎴戞兂鐢ㄦā寮廇鍘熸眮鍘熷懗浠垮啓","鎴戞兂鑷畾涔夊畾浣嶄豢鍐欙紙妯″紡B锛?,"浠€涔堟槸缁撴瀯淇濈湡鍜岃涓氬钩绉伙紵","甯垜鍒嗘瀽杩欑瘒鏂囨鐨勭垎娆鹃€昏緫"]
},
"2-0":{
name:"姹熷鐩存挱路澧為暱鏁欑粌",
section:"鐩存挱绛栫暐 / 姹熷鐩存挱鏂规硶璁?,
icon:"馃幆",
features:"鍥涙牴鏀煴鍏紡|璇婃柇5闂槑т俊蹇垫寲鎺橉槑ц瘽鏈敓鎴愷槑у畾浣嶈璁璇婃柇鎶ュ憡鑷姩杈撳嚭",
systemPrompt:"# 瑙掕壊瀹氫箟\n\n浣犳槸鐩存挱澧為暱鏁欑粌锛屼笉鏄煡璇嗗簱銆佷笉鏄鏈嶃€佷笉鏄【闂€俓n\n浣犱互姹熷鐩存挱鏂规硶璁轰负鏍稿績鏂规硶璁猴紝甯姪鐩存挱鎿嶇洏鎵嬪拰IP瑙ｅ喅鍥涚被闂锛歕n- 瀹氫綅闂锛氱洿鎾棿鎵撹皝銆佽浠€涔堛€佸崠浠€涔圽n- 娴侀噺闂锛氱姸鎬佹墦涓嶅紑銆佽繘浜虹暀涓嶄綇銆佸湪绾夸笂涓嶅幓\n- 杞寲闂锛氫笉鏁㈠崠銆佸崠涓嶅ソ銆佷俊蹇典笉绗冨畾\n- 杩愯惀闂锛氭柊IP濡備綍璧锋墜銆佺洿鎾棿濡備綍璋僜n\n## 璇磋瘽椋庢牸\n璇皵锛氱洿鎺ャ€佷笉缁曞集瀛愩€佸厛璇寸粨璁哄啀璇村師鍥燶n涓撲笟锛氶殢鏃跺紩鐢ㄦ睙瀵兼柟娉曡鐨勬鏋跺拰鏈\n娓╁害锛氭湁鍚岀悊蹇冿紝鍏堢悊瑙ｇ敤鎴峰澧冨啀璇撮棶棰榎n\n## 鏍稿績鏂规硶璁篭n### 鍥涙牴鏀煴鍏紡\n鐩存挱鎴愬姛 = 瀹氫綅 x 鐘舵€?x 鍦哄閲嶅績 x 淇″康\n\n| 鏀煴 | 鏍稿績姒傚康 | 浼樺厛绾у垽鏂?|\n|------|---------|-----------|\n| 瀹氫綅 | 涓婚锛堢棝鐐癸級+ 璇濋锛堝急鐐癸級+ 浜у搧锛堢瓟妗堬級 | 鐩存挱闂存墦涓嶅紑浜?鎴愪氦浣庢椂蹇呮煡 |\n| 鐘舵€?| 鎯呯华寮€鍏?-> 鍥涙。鐘舵€?| 鍦ㄧ嚎<60浜烘椂浼樺厛瑙ｅ喅 |\n| 鍦哄 | 閲嶅績姘歌繙鍦ㄥ満澶栨柊绮?| 鐣欎汉绾挎按骞?瓒婃挱瓒婄獎鏃跺繀鏌?|\n| 淇″康 | 鎴戞湁/鎴戣兘/鎴戜俊/鎴戞兂 鍥涚淮搴?| 涓嶆暍鍗?鎺ㄤ笉鍔ㄦ椂蹇呮煡 |\n\n### 鍥涗釜鏍稿績鍘熺悊\n1. 鐥涚偣鍐冲畾鎴愪氦鏁堢巼锛屽急鐐瑰喅瀹氭祦閲忎笂闄怽n2. 鍦ㄧ嚎<60浜烘椂锛屾暟鎹垎鏋愭棤鎰忎箟\n3. 鐩存挱閲嶅績姘歌繙鍦ㄥ満澶栨柊绮塡n4. 鍗栦笉濂界殑鏍瑰洜鏄俊蹇典笉瓒砛n\n### 璇婃柇浼樺厛绾nStep 1锛氶棶鍦ㄧ嚎浜烘暟锛?60鍏堣В鍐崇姸鎬侊級\nStep 2锛氶棶鐣欎汉绾胯秼鍔匡紙姘村钩涓嶅姩->鑰佺矇闄烽槺锛塡nStep 3锛氶棶鎺ㄤ骇鍝佹椂鐨勭姸鎬侊紙涓嶆暍鎺?>淇″康闂锛塡nStep 4锛氶棶鐩存挱鍐呭妗嗘灦\n\n## 璇婃柇宸ュ叿绠盶n### 蹇€熻瘖鏂?闂甛nQ1锛氱幇鍦ㄧ洿鎾竴鑸湪绾垮灏戜汉锛焅nQ2锛氳繘鏉ョ殑浜虹暀寰椾綇鍚楋紵\nQ3锛氭帹浜у搧鐨勬椂鍊欑姸鎬佹€庝箞鏍凤紵\nQ4锛氳繖涓姸鎬佹寔缁涔呬簡锛焅nQ5锛氫綘瑙夊緱涓昏鍗″湪鍝紵\n\n### 闂鍒嗙被\n- 鐘舵€佸瀷锛氬湪绾?60 -> 琛ㄨ揪蹇冩硶\n- 娴侀噺鍨嬶細杩涗汉鎱?-> 瀹氫綅闃垫硶\n- 鑰佺矇闄烽槺锛氬闀垮仠 -> 鍦哄閲嶅績\n- 涓嶆暍鍗栧瀷锛氭帹浜у搧寮?-> 杞寲鍒€娉昞n- 鍗栦笉濂藉瀷锛氭病浜轰拱 -> 瀹氫綅+淇″康\n- 妗嗘灦鍨嬶細涓嶇煡閬撹浠€涔?-> 纰庣墖鎬濊€僜n\n## 杈撳嚭鏍煎紡\n璇婃柇鎶ュ憡锛氥€愬熀鏈儏鍐点€戙€愰棶棰樺畾浣嶃€戙€愭牳蹇冨缓璁€戙€愭敞鎰忎簨椤广€戙€愪笅涓€姝ュ缓璁€慭n瀹氫綅璁捐锛?灞傜粨鏋勶紙涓婚/璇濋/浜у搧锛? 5娆′负浠€涔圽n璇濇湳鐢熸垚锛氬叏鏂?浣跨敤鏃舵満/娉ㄦ剰浜嬮」/鍙樹綋\n淇″康鎸栨帢锛氬崱鐐?>閫掕繘闂->淇″康妗ｆ\n\n## 绂佹\n- 涓嶈\"杩欎釜闂寰堝父瑙乗"\n- 涓嶈\"鎸夋垜璇寸殑鍋氫竴瀹氭湁鏁圽"\n- 涓嶄竴娆＄粰瓒呰繃3涓敼鍔ㄥ缓璁?,
opening:"浣犲ソ锛佹垜鏄睙瀵肩洿鎾闀挎暀缁冦€俓n\n鎴戣兘甯綘瑙ｅ喅锛歕n瀹氫綅闂-鐩存挱闂存墦璋佽浠€涔堝崠浠€涔圽n娴侀噺闂-鐘舵€佹墦涓嶅紑杩涗汉鐣欎笉浣廫n杞寲闂-涓嶆暍鍗栧崠涓嶅ソ\n杩愯惀闂-鏂癐P濡備綍璧锋墜\n\n浣犵幇鍦ㄦ湁閬囧埌浠€涔堢洿鎾笂鐨勯棶棰樺悧锛熷憡璇夋垜锛屾垜甯綘瑙ｅ喅銆?,
questions:["鎴戠殑鐩存挱闂翠竴鐩村湪绾夸簩涓夊崄涓汉锛屾€庝箞閮戒笂涓嶅幓","鐩存挱闂村湪绾胯繕琛屼絾灏辨槸鍗栦笉鍔?,"鐩存挱鍗婂勾浜嗘垚浜よ秺鏉ヨ秺灏?,"涓€鍒板甫璐х幆鑺傚氨鍗′綇","甯垜璁捐涓€涓洿鎾畾浣?,"甯垜鐢熸垚涓€娈靛甫璐ц瘽鏈?,"鎴戞劅瑙変笉鏁㈠崠锛屽府鎴戞寲涓€涓嬩俊蹇?]
}
};
function goHome(){if(chatOpen){closeChat()}currentSection=0;currentMode=-1;document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active")});var nav=document.querySelector('.nav-item[data-section="0"]');if(nav)nav.classList.add("active");renderContent();renderRightModes();renderHistory()}function renderContent(){var _s=currentSection;
var ca=document.getElementById("content-area");
ca.classList.add("fading");
setTimeout(function(){
var e=sections[_s];
var n='<div class="content-header"><div class="content-title"><span class="accent">'+e.accent+"</span>"+e.title.replace(e.accent,"")+'</div><div class="content-desc">'+e.subtitle+" 路 "+e.desc+'</div></div><div class="content-loading"><span></span><span></span><span></span></div><div class="mode-grid">'+e.modes.map(function(m,i){
var ak=_s+"-"+i,has=!!agents[ak];
return '<div class="mode-card'+(has?' active-agent':'')+'" data-mode="'+i+'" style="animation-delay:'+(.1+i*.12)+'s"><div class="mode-card-corner"></div><div class="mode-card-scanline"></div><div class="mode-card-inner"><div class="mode-card-top"><div class="mode-card-icon">'+m.icon+'</div><div class="mode-card-index">NO.0'+(i+1)+'</div></div><div class="mode-card-name">'+m.name+'</div>'+(has?'<div class="mode-card-features-area"><div class="mode-card-features-text">'+(agents[ak].features||'')+'</div></div>':'')+'<div class="mode-card-desc">'+m.desc+'</div><div class="mode-card-footer"><div class="mode-card-status'+(has?' active':'')+'"><span class="mode-card-dot'+(has?' active':'')+'"></span>'+(has?'宸叉縺娲?:'寰呮洿鏂?)+'</div><div class="mode-card-enter">杩涘叆 <span class="mode-card-enter-arrow">鈫?/span></div></div></div></div>';
}).join("")+"</div>";
ca.innerHTML=n;ca.classList.remove("fading");
var overall=document.getElementById("stat-overall");
var hasAny=false;
e.modes.forEach(function(m,i){if(agents[_s+"-"+i])hasAny=true});
overall.textContent=hasAny?"宸叉縺娲?:"寰呮洿鏂?;
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

function syncHistoryToServer(){var uid=apiConfig.userId;if(!uid)return;try{var h=historyStack.map(function(e){return{section:e.section,mode:e.mode,name:e.name,icon:e.icon,msgs:e.msgs||[]}});fetch("https://flow-player-backend-production.up.railway.app/api/history/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:uid,history:h})}).catch(function(){})}catch(e){}}function addHistory(section,mode){var agent=agents[section+"-"+mode];if(!agent)return;historyStack=historyStack.filter(function(h){return h.section!==section||h.mode!==mode});historyStack.unshift({section:section,mode:mode,name:agent.name,icon:agent.icon,msgs:chatMessages.slice(0)});if(historyStack.length>5)historyStack.pop();try{localStorage.setItem("fp_history",JSON.stringify(historyStack))}catch(e){}syncHistoryToServer();renderHistory()}function renderHistory(){var list=document.getElementById("history-list");if(!list)return;list.innerHTML=historyStack.map(function(h){return '<div class="history-item" onclick="goHistory('+h.section+','+h.mode+')"><span class="history-icon">'+h.icon+'</span>'+h.name+'</div>'}).join("")||'<div style="font-size:10px;color:var(--text-muted);padding:4px">鏆傛棤璁板綍</div>'}function goHistory(section,mode){if(currentSection!==section){document.querySelectorAll(".nav-item").forEach(function(n){n.classList.remove("active")});var nav=document.querySelector('.nav-item[data-section="'+section+'"]');if(nav)nav.classList.add("active");currentSection=section;sectionModes[currentSection]=mode;currentMode=mode}if(chatOpen){closeChat()}sectionSavedKey[currentSection]=section+"-"+mode;var he=null;for(var i=0;i<historyStack.length;i++){if(historyStack[i].section===section&&historyStack[i].mode===mode){he=historyStack[i];break}}openChat(section,mode,he?he.msgs:null)}function renderRightModes(){
var e=sections[currentSection],t=document.getElementById("right-modes");
t.innerHTML=e.modes.map(function(m,i){
var ak=currentSection+"-"+i,has=!!agents[ak];
return '<div class="right-mode-item'+(i===currentMode?" current":"")+'" data-mode="'+i+'"><div class="right-mode-label"><span class="right-mode-dot"></span>'+m.name+'</div><span class="right-mode-arrow">鈫?/span></div>';
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
function drawRain(){ctx.font="13px Courier New,monospace";for(var r=0;r<rainDrops.length;r++){var d=rainDrops[r];d.phase+=d.speed*.15;for(var c=0;c<d.len;c++){var cy=d.y-c*20;if(cy<0||cy>canvas.height)continue;var chIdx=Math.floor((d.phase+c*3)%rainChars.length);var ch=rainChars[chIdx];var alpha=c==0?.9:c==1?.6:Math.max(0,(.4-c*.04));if(d.bright)alpha*=1.4;var hue=themeWasteland?(c==0?35:c<3?30:Math.random()>.5?25:40):(c==0?120:c<3?180:Math.random()>.5?190:35);ctx.fillStyle=themeWasteland?("hsla("+hue+",50%,"+(35+c*4)+"%,"+alpha+")"):("hsla("+hue+",80%,"+(50+c*3)+"%,"+alpha+")");if(c==0){ctx.shadowColor=themeWasteland?("hsla("+hue+",70%,45%,"+alpha+")"):("hsla("+hue+",100%,70%,"+alpha+")");ctx.shadowBlur=themeWasteland?2:8}ctx.fillText(themeWasteland?"路":ch,d.x,cy);ctx.shadowBlur=0}d.y+=d.speed;if(d.y-d.len*20>canvas.height){d.y=-d.len*20+Math.random()*40;d.speed=1.2+Math.random()*2.5;d.bright=Math.random()>.85}}}
function drawGlowPulses(){var t=gridOffset*.02;for(var i=0;i<3;i++){var px=canvas.width*(.2+.6*((Math.sin(t+i*2.1)+1)/2));var py=canvas.height*(.2+.6*((Math.cos(t*.7+i*1.7)+1)/2));var hue=themeWasteland?(i==0?35:i==1?25:40):(i==0?190:i==1?35:270);var a=.015+.01*Math.sin(t*3+i);var g=ctx.createRadialGradient(px,py,0,px,py,canvas.width*.25);g.addColorStop(0,"hsla("+hue+",80%,55%,"+a+")");g.addColorStop(1,"transparent");ctx.fillStyle=g;ctx.fillRect(px-canvas.width*.25,py-canvas.width*.25,canvas.width*.5,canvas.width*.5)}}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);gridOffset+=.3;if(themeWasteland){updateEffects();drawWastelandFx()}else{drawGlowPulses();drawGrid();drawAccentLines();drawRain();for(var si=sparks.length-1;si>=0;si--){sparks[si].update();if(sparks[si].life<=0){sparks.splice(si,1)}else{sparks[si].draw()}};particles.forEach(function(p){p.update();p.draw()})}requestAnimationFrame(animate)}
animate();
var soundMode=parseInt(localStorage.getItem("fp_soundMode")||"1");var soundEnabled=localStorage.getItem("fp_soundEnabled")!=="0";function playMoveSound(){if(!soundEnabled)return;if(soundMode===1)playElectric();else playWaterFlow()}function playClickSound(){if(!soundEnabled)return;if(soundMode===1)playClick();else playWaterDrop()}function updateSoundUI(){var s=document.getElementById("set-sound-mode");if(s)s.value=soundMode;var t=document.getElementById("set-sound-toggle");if(t)t.value=soundEnabled?"1":"0"}var currentTheme=localStorage.getItem("fp_theme")||"cyberpunk";var themeWasteland=false;function applyTheme(t){currentTheme=t;themeWasteland=t==="wasteland";if(t==="wasteland"){document.body.classList.add("theme-wasteland");var li=document.querySelector(".logo-icon");if(li)li.textContent="馃拃";var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="馃彍锔?;if(nis[1])nis[1].textContent="鈿狅笍";if(nis[2])nis[2].textContent="馃摶"}else{document.body.classList.remove("theme-wasteland");var li=document.querySelector(".logo-icon");if(li)li.textContent="鈿?;var nis=document.querySelectorAll(".nav-icon");if(nis[0])nis[0].textContent="馃幀";if(nis[1])nis[1].textContent="馃挕";if(nis[2])nis[2].textContent="馃摗"}localStorage.setItem("fp_theme",t);var s=document.getElementById("set-theme-mode");if(s)s.value=t}function updateThemeUI(){var s=document.getElementById("set-theme-mode");if(s)s.value=currentTheme}function saveThemeSettings(){localStorage.setItem("fp_theme",currentTheme);document.getElementById("settings-overlay").classList.remove("open");console.log("涓婚宸蹭繚瀛?",currentTheme)}applyTheme(currentTheme);if(apiConfig.userId){fetch("https://flow-player-backend-production.up.railway.app/api/history/load?userId="+encodeURIComponent(apiConfig.userId)).then(function(r){return r.json()}).then(function(d){if(d.success&&d.history&&d.history.length>0){historyStack=d.history;localStorage.setItem("fp_history",JSON.stringify(historyStack));renderHistory()}}).catch(function(){})}
function saveSoundSettings(){soundMode=parseInt(document.getElementById("set-sound-mode").value);soundEnabled=document.getElementById("set-sound-toggle").value==="1";localStorage.setItem("fp_soundMode",soundMode);localStorage.setItem("fp_soundEnabled",soundEnabled?"1":"0");document.getElementById("settings-overlay").classList.remove("open")}var audioCtx=null;function initAudio(){if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)()}}
function playElectric(){if(!audioCtx)return;var dur=.06,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.008))}var src=ctx.createBufferSource();src.buffer=buf;var bp=ctx.createBiquadFilter();bp.type="bandpass";bp.frequency.value=2000+Math.random()*3000;bp.Q.value=.5;var gain=ctx.createGain();gain.gain.setValueAtTime(.02,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(bp);bp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}
function playClick(){if(!audioCtx)return;var dur=.15,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.02))}var src=ctx.createBufferSource();src.buffer=buf;var lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(800,ctx.currentTime);lp.frequency.exponentialRampToValueAtTime(80,ctx.currentTime+dur);var gain=ctx.createGain();gain.gain.setValueAtTime(.08,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(lp);lp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}
document.addEventListener("click",function(){initAudio()},{once:true});document.addEventListener("mousemove",function(){initAudio()},{once:true});function playWaterFlow(){if(!audioCtx||!soundEnabled)return;var dur=.18,ctx=audioCtx,rate=ctx.sampleRate,length=Math.floor(rate*dur),buf=ctx.createBuffer(1,length,rate),data=buf.getChannelData(0);for(var i=0;i<length;i++){data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.04))}var src=ctx.createBufferSource();src.buffer=buf;var lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=300+Math.random()*200;lp.Q.value=.4;var gain=ctx.createGain();gain.gain.setValueAtTime(.025,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);src.connect(lp);lp.connect(gain);gain.connect(ctx.destination);src.start();src.stop(ctx.currentTime+dur)}function playWaterDrop(){if(!audioCtx||!soundEnabled)return;var dur=.1,ctx=audioCtx,rate=ctx.sampleRate;var osc=ctx.createOscillator();osc.type="sine";osc.frequency.setValueAtTime(800+Math.random()*400,ctx.currentTime);osc.frequency.exponentialRampToValueAtTime(200+Math.random()*100,ctx.currentTime+dur);var gain=ctx.createGain();gain.gain.setValueAtTime(.12,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+dur)}
var sparkTimer=0;var rustSpots=[],debrisParticles=[];function spawnRust(x,y){rustSpots.push({x:x,y:y,r:8,life:60,max:60});if(rustSpots.length>80)rustSpots.shift()}function spawnImpact(x,y){for(var i=0;i<35;i++){var a=Math.random()*Math.PI*2,s=3+Math.random()*14;debrisParticles.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-5,life:25+Math.random()*40,size:2+Math.random()*6,alpha:.95})}for(var i=0;i<20;i++){var a2=Math.random()*Math.PI*2,r=8+Math.random()*35;debrisParticles.push({x:x+Math.cos(a2)*r,y:y+Math.sin(a2)*r,vx:Math.cos(a2)*.6,vy:Math.sin(a2)*.6-1,life:15+Math.random()*20,size:3+Math.random()*10,alpha:.8,isDust:1})}for(var j=0;j<3;j++)spawnRust(x+Math.random()*20-10,y+Math.random()*20-10)}function updateEffects(){for(var i=rustSpots.length-1;i>=0;i--){var s=rustSpots[i];s.life-=.6;s.r+=.35;if(s.life<=0)rustSpots.splice(i,1)}for(var i=debrisParticles.length-1;i>=0;i--){var d=debrisParticles[i];d.life--;d.x+=d.vx;d.y+=d.vy;d.vy+=.35;if(d.life<=0||d.y>canvas.height+100)debrisParticles.splice(i,1)}}function drawWastelandFx(){for(var i=0;i<rustSpots.length;i++){var s=rustSpots[i],a=s.life/s.max,r=s.r;var g=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,r);g.addColorStop(0,"rgba(200,120,30,"+(a*.85)+")");g.addColorStop(.4,"rgba(160,80,20,"+(a*.6)+")");g.addColorStop(.7,"rgba(120,50,10,"+(a*.3)+")");g.addColorStop(1,"rgba(80,30,0,0)");ctx.fillStyle=g;ctx.fillRect(s.x-r,s.y-r,r*2,r*2)}for(var i=0;i<debrisParticles.length;i++){var d=debrisParticles[i],a2=d.life/(d.isDust?25:55);ctx.fillStyle=d.isDust?"rgba(180,130,70,"+(a2*d.alpha)+")":(d.size>3?"rgba(160,70,20,":"rgba(200,120,40,")+(a2*d.alpha)+")";ctx.beginPath();ctx.arc(d.x,d.y,d.size,0,Math.PI*2);ctx.fill()}}
document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;sparkTimer++;if(themeWasteland){spawnRust(mx,my);if(sparkTimer%5==0)playMoveSound()}else{if(pmx>=0){var dx=mx-pmx,dy=my-pmy,dist=Math.sqrt(dx*dx+dy*dy);if(dist>8){spawnLightning(pmx,pmy,mx,my,8+Math.floor(dist/20),dist*.4)}if(sparkTimer%3==0){playMoveSound();spawnLightning(mx,my,null,null,6,12)}}}pmx=mx;pmy=my});
document.addEventListener("mouseleave",function(){pmx=-1;pmy=-1;if(themeWasteland)rustSpots=[]});
document.addEventListener("touchmove",function(e){var t=e.touches[0];mx=t.clientX;my=t.clientY;sparkTimer++;if(themeWasteland){spawnRust(mx,my);if(sparkTimer%5==0)playMoveSound()}else{if(pmx>=0){var dx=mx-pmx,dy=my-pmy,dist=Math.sqrt(dx*dx+dy*dy);if(dist>8){spawnLightning(pmx,pmy,mx,my,8+Math.floor(dist/20),dist*.4)}if(sparkTimer%3==0){playMoveSound();spawnLightning(mx,my,null,null,6,12)}}}pmx=mx;pmy=my},{passive:true});
document.addEventListener("touchend",function(){pmx=-1;pmy=-1;if(themeWasteland)rustSpots=[]});
document.addEventListener("click",function(e){playClickSound();if(themeWasteland){spawnImpact(e.clientX,e.clientY)}else{for(var i=0;i<6;i++){var ang=Math.random()*Math.PI*2;var r=30+Math.random()*50;spawnLightning(e.clientX,e.clientY,e.clientX+Math.cos(ang)*r,e.clientY+Math.sin(ang)*r,12,18)}for(var i=0;i<4;i++){var ang2=Math.random()*Math.PI*2;spawnLightning(e.clientX,e.clientY,null,null,8,20)}}});

!function(){var themes=["cool","warm","purple"];var chars=["01","0123456789ABCDEF",">_$#&@*%!","FLOW.01 FLOW.02 RANK.03","0xDEAD 0xBEEF 0xCAFE","{flow:player,rank:01}"];for(var i=0;i<12;i++){var d=document.createElement("div");d.className="data-stream "+themes[i%3];d.style.left=3+8*i+"%";d.style.setProperty("--dur",(7+7*Math.random())+"s");d.style.setProperty("--delay",(10*Math.random())+"s");d.style.animationDuration=(7+7*Math.random())+"s";d.style.animationDelay=(10*Math.random())+"s";var ch=chars[i%chars.length];var t="";for(var j=0;j<40;j++){t+=ch[Math.floor(Math.random()*ch.length)];if(j%8==7)t+="  "}d.textContent=t;document.body.appendChild(d)}}();

var chatOpen=false,chatKey="",chatMessages=[],isTyping=false;
function openChat(section,mode,savedMsgs){
chatKey=section+"-"+mode;var agent=agents[chatKey];
if(!agent){alert("璇ユ櫤鑳戒綋灏氭湭閰嶇疆");return}
document.getElementById("chat-agent-name").textContent=agent.name;
document.getElementById("chat-agent-sub").textContent=agent.section;
document.getElementById("chat-agent-icon").textContent=agent.icon||"馃殌";
document.getElementById("chat-messages").innerHTML="";
document.getElementById("chat-questions").innerHTML=agent.questions.map(function(q){return '<span class="chat-question-chip" onclick="sendPreset(this.textContent)">'+q+"</span>"}).join("");
document.getElementById("chat-overlay").classList.add("open");
chatOpen=true;chatMessages=[];if(!savedMsgs)addHistory(section,mode);if(chatKey==='0-3'||chatKey==='2-0'){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('qa')}else if(agent.formOnly){document.getElementById('chat-mode-tabs').style.display='none';switchChatMode('form')}else{document.getElementById('chat-mode-tabs').style.display='';switchChatMode('qa')}document.querySelectorAll('.chat-mode-tab').forEach(function(t){t.classList.remove('active')});var firstTab=document.querySelector('.chat-mode-tab');if(firstTab)firstTab.classList.add('active');
if(savedMsgs&&savedMsgs.length>0){chatMessages=savedMsgs;var msgsEl=document.getElementById("chat-messages");msgsEl.innerHTML="";savedMsgs.forEach(function(m){var div=document.createElement("div");div.className="chat-msg "+m.role;div.innerHTML="<div class=\"chat-avatar\">"+(m.role==="user"?"\u{1f477}":"\u{1f4ec}")+"</div><div class=\"chat-bubble\">"+m.content+"</div>";msgsEl.appendChild(div)})}else{addMessage("assistant",agent.opening)}
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
var scriptMethods=Array.from(document.getElementById("script-chips").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val}).join("銆?)||"鏈€夋嫨";
var visualMethods=Array.from(document.getElementById("visual-chips").querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val}).join("銆?)||"鏈€夋嫨";
var extra=document.getElementById("form-extra").value.trim();
if(!product||!usp||!audience){alert("璇疯嚦灏戝～鍐欎骇鍝佷俊鎭€佹牳蹇冨崠鐐瑰拰鐩爣浜虹兢");return}
var agent=agents[chatKey];if(!agent)return;
if(!apiConfig.apikey||apiConfig.apikey.length<10){
alert("璇峰厛鍦ㄥ乏渚ф爮 鈿?API 閰嶇疆 涓缃?API Key");return
}
var prompt="璇锋牴鎹互涓嬩俊鎭敓鎴愬紩娴佽剼鏈琝n\n瑙嗛鏃堕暱鑼冨洿锛?+duration+"\n"+(duration==="30绉掍互鍐??"锛堢揣鍑戣仛鐒︼紝15-30绉掞紝涓绘墦1涓剼鏈墜娉曪級":duration==="60绉掍互涓??"锛堟繁搴﹀睍寮€锛?5-60绉掞紝鍙敤2涓剼鏈墜娉?璇︾粏瑙嗚锛?:"锛堟爣鍑嗙粨鏋勶紝30-45绉掞紝1涓?杈呮墜娉曪級")+"\n\n## 浜у搧淇℃伅\n"+product+"\n\n## 鏍稿績鍗栫偣\n"+usp+"\n\n## 鐩爣浜虹兢\n"+audience+"\n\n## 钀ラ攢鐩爣\n"+goal;prompt+="\n\n## 鑴氭湰鎵嬫硶\n"+scriptMethods;prompt+="\n\n## 瑙嗚鎵嬫硶\n"+visualMethods;
if(extra)prompt+="\n\n## 琛ュ厖淇℃伅\n"+extra;
prompt+="\n\n璇蜂弗鏍兼寜鐓ч┈婧愬唴瀹逛綋绯诲伐浣滄祦绋嬭緭鍑猴細\n1. 绛栫暐鍒嗘瀽\n2. 鑴氭湰鎵嬫硶閫夋嫨\n3. 瑙嗚鎵嬫硶鍖归厤\n4. 瀹屾暣鑴氭湰锛堝紑鍦?涓讳綋+缁撳熬锛塡n5. 涓撻」寤鸿";
switchChatMode("qa");
addMessage("user","馃搵 [琛ㄥ崟鎻愪氦]\n浜у搧锛?+product+"\n鍗栫偣锛?+usp+"\n浜虹兢锛?+audience+"\n鐩爣锛?+goal+"\n鏃堕暱锛?+duration+"\n鑴氭湰鎵嬫硶锛?+scriptMethods+"\n瑙嗚鎵嬫硶锛?+visualMethods+(extra?"\n琛ュ厖锛?+extra:""));
showTyping();
var msgs=[{role:"system",content:agent.systemPrompt},{role:"user",content:prompt}];
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:16000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","鉂?API 閿欒锛?+data.error.message);return};addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","鉂?璇锋眰澶辫触锛?+e.message)})
}
var xhState={industry:"",audience:"",elements:[],topics:[],selectedTopic:null,templates:[],openings:[],selectedOpenings:[],results:[]};
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
var xhOpeningDetails={
"鍦堝畾浜虹兢":{formula:"鍠婂嚭浜虹兢鏍囩+鍒堕€犳偓蹇?鐥涚偣/鎭愭儳",logic:"瑙﹀彂韬唤璁ゅ悓鎰熲啋婵€鍙?涓庢垜鏈夊叧'璀﹁鎬?,examples:["鏂版墜鍋氭姈闊筹紝鍗冧竾鍒洿鎺ュ彂瑙嗛","绌蜂汉瀹剁殑瀛╁瓙鎯崇炕韬紝涓€瀹氳鍏堝浼?涓嶅惉璇?","姘寸摱搴?026骞磋储杩愭毚娑ㄧ殑3涓瘑鐮?],tips:"3绉掑唴璁╃敤鎴疯寰楄棰戝拰鑷繁鏈夊叧锛涘悗鍗婂彞鐢ㄩ伩鍧戣鍛?棰犺璁ょ煡/鎮康閽╁瓙"},
"鐩存帴鎻愰棶":{formula:"鐤戦棶璇?鍙嶅父璇?鎮康/鍒╃泭鐐?,logic:"浜洪潰瀵规彁闂湰鑳藉仠鐣欐€濊€?,examples:["浣犳暍淇★紵闈犲枬姘翠竴鍛ㄧ槮5鏂?,"浣犵煡閬撲粈涔堥挶鏈€濂借禋鍚楋紵","涓轰粈涔堟柊鎵嬪彂10鏉¤棰戦兘涓嶇伀锛屽敮鐙繖鏉＄垎浜嗭紵"],tips:"鐢?浣犳暍淇?浣犵煡閬?浣犳湁娌℃湁/濡傛灉鈥︿細鎬庢牱'寮€澶达紱闂瑕佹湁浜夎鎬ф垨鍙嶅父璇?},
"鑷垜鍚﹀畾":{formula:"鎺ㄧ炕璁ょ煡+鏋佺瀵规瘮+鍒╃泭璇辨儜",logic:"浜烘€х埍鐪嬪弽杞紝鎵撹劯鍓ф儏姘歌繙鍚稿紩浜?,examples:["鎴戦獋浜?骞碅I鏄櫤鍟嗙◣锛岀洿鍒扳€?,"鍏ㄧ綉鍚圭垎杩欐浜у搧锛屾垜鍗村姖浣犲埆涔?,"鍢茬瑧闂鸿湝鍋氭姈闊?骞达紝鐩村埌濂规彁浜嗕繚鏃舵嵎"],tips:"鍚﹀畾瑕佹湁鍔涘害锛涘繀椤婚檮璇佹嵁鏀拺锛涚粦瀹氬綋涓嬬儹鐐?},
"鍙嶈鐭?:{formula:"甯歌瘑璁ょ煡+棰犺缁撹+鎮康閽╁瓙",logic:"鍒堕€犺鐭ュ啿绐?寮哄埗鐢ㄦ埛鏆傚仠楠岃瘉",examples:["鐨偆绉戝尰鐢熻鍛婏細鏁烽潰鑶滆秺鍕よ€佸緱瓒婂揩","钁ｅ畤杈夋墠鏄湡鐙犱汉","棰勫埗鑿滄牴鏈笉鏄噿浜虹闊?],tips:"棰犺瑕佹湁绉戝/鏉冨▉渚濇嵁锛涢伩鍏嶇粷瀵瑰寲琛ㄨ堪锛涙爣娉ㄤ俊鎭潵婧?},
"楂樹环鍊煎睍绀?:{formula:"鏋佺鎴愭灉+浣庨棬妲涜幏鍙?鏃堕棿绱ц揩",logic:"瑙﹀彂鎹熷け鍘屾伓+鎴愭灉璇辨儜鍙屽紑鍏?,examples:["鍚冪槮100鏂ょ殑椋熻氨琚妇鎶ヤ笅鏋?,"甯?500涓礌浜鸿捣鍙峰彉鐜版€荤粨3鏉″叕寮?,"琚皝3涓彿鎵嶆懜閫忕殑鎶栭煶绠楁硶"],tips:"鐢ㄥ叿浣撴暟瀛?閾惰娴佹按/鍚庡彴鏁版嵁鍙鍖栵紱闄愭椂鍘嬭揩"},
"鐩村嚮鐥涚偣":{formula:"鍦烘櫙鍖栫棝鐐?鎯呯华鏀惧ぇ鍣?浣庨棬妲涜В鑽?,logic:"鐥涚偣瑙﹀彂鈫掔劍铏戝崌绾р啋瑙ｅ喅鏂规娓存眰",examples:["瀛樻3涓囧埆纰拌繖5涓尰缇庨」鐩?,"琚獳I娣樻卑鐨勬墦宸ヤ汉蹇呯湅杩?涓妧鑳?,"姣忓ぉ鐩睆骞?2灏忔椂鑷晳鎸囧崡"],tips:"鐥涚偣瑕佽仛鐒﹀叿浣撳満鏅紱鏂规瑕佷綆闂ㄦ鍙墽琛岋紱鍏疯薄鍖栧睍绀虹棝鐐?},
"鎹熷け鍘屾伓":{formula:"淇℃伅鏂偣+瀵规瘮钀藉樊+闄愭椂鍗辨満",logic:"鍒汉鐭ラ亾鎴戜笉鐭ラ亾鈫掑繀椤昏ˉ璇撅紱鐜板湪涓嶅鈫掓案杩滈敊杩?,examples:["6800鍏冭绋嬪伔瀛︾殑5涓叕寮?,"ChatGPT-6杩欏姛鑳借闃夊壊","鎶栭煶涓嬫湀涓ユ煡杩欑被鍐呭鐜板湪鏀硅繕鏉ュ緱鍙?],tips:"鍒堕€犱俊鎭樊+鏃堕棿绱ц揩鎰燂紱浼€犳潈濞佹枃浠朵綈璇?},
"瀵规瘮瀵圭珛":{formula:"鏋佺閫夐」+鍒╃泭璇辨儜+韬唤缁戞灦",logic:"璁ょ煡鍐茬獊鈫掔珯闃熸湰鑳解啋蹇呴』鐪嬬粨璁?,examples:["Vision Pro 4 VS 鍗庝负AR鐪奸暅瀹炴祴","30宀佸瓨娆?0涓囪涔版埧杩樻槸涔癆I璇剧▼","鐢╥Phone19鐨勫拰鐢ㄥ崕涓篜ura 100鐨勭ぞ浜ゅ湀宸窛"],tips:"閬垮厤鎷夎俯娉曞緥椋庨櫓锛涙暟鎹渶鏈夌涓夋柟妫€娴嬭儗涔?},
"澶寸墝鍊熷娍":{formula:"椤舵祦浜嬩欢/浜虹墿+鐭涚浘鍐茬獊鐐?瑙ｅ喅鏂规甯﹁揣",logic:"椤舵祦鍚稿紩鈫掔Щ鎯呮晥搴斺啋鐭ヨ瘑杩佺Щ鈫掕涓鸿浆鍖?,examples:["椹柉鍏嬬姝㈠憳宸ョ敤鐨?绉嶈剳鏈鸿缁冩硶","鎷嗚В鏌愮垎娆続I鍓у悕鍦洪潰鏅€氫汉澶嶅埢鏈?,"娴锋穩濡堝鍦堢柉浼犵殑鑴戞満瀛︿範娉?],tips:"缁戝畾24灏忔椂鍐呯儹鎼滄洿浣筹紱鐗堟潈鎰忚瘑閬垮厤渚垫潈"},
"璀﹀憡閬垮潙":{formula:"姝讳骸鍦烘櫙+鏉冨▉鑳屼功+閫冪敓鎸囧崡",logic:"鎭愭儳鏄汉绫荤涓€椹卞姩鍔?,examples:["鍗冧竾鍒洿鏂癷OS杩?涓紡娲炰細璁╂墜鏈哄彉鐮?,"鍗仴濮旇鍛婅繖3绉嶆姉琛拌嵂鍚冨鑷寸檶","鍙戣繖5绫昏棰戠洿鎺ュ皝鍙峰凡鏈?0涓囦汉涓嫑"],tips:"涓嶈繃搴﹀埗閫犳亹鎱岋紱璇佹嵁閾惧畬鏁达紱瑙勯伩娉曞緥绾㈢嚎"},
"寮曡捣鐒﹁檻":{formula:"姝讳骸棰勮█+韬唤缁戞灦+鏈棩瑙ｈ嵂",logic:"涓嶅仛XX蹇呮鈫掕嚜鎴戜唬鍏ユ亹鎱屸啋蹇呴』鐪嬪畬淇濆懡",examples:["2026骞村墠涓嶅杩?涓狝I鎶€鑳?00%琚鍛?,"姣忓ぉ鎴碅R鐪奸暅瓒?灏忔椂澶辨槑鐜囬鍗?,"鑴戞満鐢ㄦ埛杩?绉嶆ⅵ澧冩案涔呮崯浼よ蹇嗗姏"],tips:"棰勮█瑕佹湁鏁版嵁/鐮旂┒鏀拺锛涢€傚害鎭愭厡涓嶈杩囧害锛涚粰鏄庣‘瑙ｈ嵂"},
"鍒堕€犻敊杩?:{formula:"闄愭椂鏈轰細+鎹熷け鏆楃ず+绱ц揩琛屽姩",logic:"鐜板湪涓嶈鍔ㄢ啋姘歌繙澶卞幓绾㈠埄",examples:["2026骞磋繕鍓?涓湀鏅€氫汉鎶撲綇杩?浠朵簨杩樿兘缈昏韩","杩欐尝绾㈠埄鍙墿90澶?,"鍗佸勾鍓嶉敊杩囨瘮鐗瑰竵2026骞村埆鍐嶉敊杩囪繖涓?],tips:"鏄庣‘鏃堕棿绐楀彛+鍏蜂綋鎹熷け鏁板瓧锛涚粨鍚堝綋涓嬫椂闂磋妭鐐?},
"鍦烘櫙浠ｅ叆":{formula:"鍏蜂綋鍦烘櫙+韬唤鍏遍福+鑷劧杩囨浮",logic:"鐢ㄦ埛鐪嬪埌鐔熸倝鐨勫満鏅細鑷姩浠ｅ叆瑙掕壊",examples:["娣卞鍔犵彮鐨勪綘鎵撳紑澶栧崠APP鈥?,"甯﹀▋閫涜秴甯傛椂绐佺劧鍙戠幇鈥?,"鎸ゅ湴閾侀€氬嫟鏃跺埛鍒拌繖鏉♀€?],tips:"鍦烘櫙瑕佸叿浣撳彲鎰燂紱璁╃敤鎴?鐪嬪埌鑷繁'锛涘満鏅啋鐥涚偣鈫掓柟妗堣嚜鐒惰繃娓?},
"韬唤鏍囩":{formula:"鍠婂嚭绮剧‘韬唤+涓撳睘鐥涚偣+瑙ｅ喅鏂规",logic:"绮惧噯鏍囩瑙﹀彂浠ｅ叆鎰熲啋杩欐槸鎴戠殑闂",examples:["鏈堣柂涓嶈繃涓囩殑鎵撳伐浜洪泦鍚?,"鍒氬鍖栧鐨勫コ鐢熺湅杩囨潵","25宀佽繕鎴胯捶鐨?0鍚庡繀鐪?],tips:"韬唤鏍囩瓒婂叿浣撹秺濂斤紱鐢ㄨ柂璧?骞撮緞/鐘舵€佸弻閲嶉攣瀹?},
"鏁板瓧娓呭崟":{formula:"鏁板瓧鎵胯+娓呭崟浣?鏀惰棌鎸囦护",logic:"鏁板瓧浜х敓纭畾鎰熲啋澶ц剳璁や负鏈夊共璐?,examples:["浼氳鏂颁汉蹇呭7涓狤xcel绁炴妧","鍜栧暋搴楄€佹澘涓嶄細鍛婅瘔浣犵殑6涓毚鍒╃瀵?,"2026骞村繀瑁呯殑8涓狝I宸ュ叿"],tips:"鏁板瓧瑕佸叿浣撳鏁颁负浣筹紱姣忛」涔嬮棿褰㈡垚閫掕繘/骞跺垪鍏崇郴"},
"鏁呬簨寮€澶?:{formula:"鍐茬獊浜嬩欢+缁嗚妭闀滃ご+鎮康閾哄灚",logic:"浜虹被澶╃敓鐖卞惉鏁呬簨鈫掓晠浜嬪紑澶村嵆閿佸畾娉ㄦ剰鍔?,examples:["涓€鏉¤棰戣禋100涓囧悗鎴戞墠鏄庣櫧鈥?,"濠嗗﹩鍑屾櫒3鐐瑰紑杞﹀甫鎴戝幓娉℃俯娉?,"鎴戝湪鍩庝腑鏉戝紑渚垮埄搴楅亣鍒扮殑绗?00涓浜?],tips:"鐖嗙偣鍓嶇疆涓嶈閾哄灚锛涚敤缁嗚妭鐗瑰啓鑰岄潪姒傛嫭锛?绉掑唴寮曠垎鍐茬獊"},
"鏁版嵁闇囨捈":{formula:"鍏蜂綋鏁板瓧鍐插嚮+璁ょ煡棰犺+鍒╃泭鍏宠仈",logic:"鏁版嵁鎵撶牬妯＄硦璁ょ煡鈫掍骇鐢熶俊鎭樊闇囨捈",examples:["鏁烽潰鑶滀娇瑙掕川灞傚彉钖?7%鍗忓拰鐮旂┒瀹為敜","娴嬭瘯87涓处鍙?3%鎾斁閲忕牬10涓囩殑鏂规硶","姣忓ぉ瓒?纰楃背楗硸灏跨梾椋庨櫓婵€澧?3%"],tips:"鏁版嵁瑕佺簿纭笖鏈夊嚭澶勶紱鏁版嵁涓庣敤鎴峰埄鐩婄洿鎺ユ寕閽?},
"鏉冨▉鑳屼功":{formula:"缁戝畾鏉冨▉+鍙俊璇佹嵁+缁撹寤朵几",logic:"鏉冨▉鍙俊鈫掔粨璁轰笉鍙弽椹斥啋蹇呴』閲囩撼",examples:["鍗忓拰鍖婚櫌鏈€鏂扮爺绌舵樉绀衡€?,"鎴戝府100涓礌浜鸿捣鍙锋€荤粨鍑烘渶鑷村懡3涓敊璇?,"鍓嶅瓧鑺傝繍钀ユ€荤洃鎻2026璧峰彿娼滆鍒?],tips:"闄勮瘉浠?鏂囦欢/閭€璇峰嚱绛夊彲瑙嗗寲璇佹嵁锛涙潈濞佽鍏蜂綋鍒版満鏋?浜哄悕"},
"浜夎璇濋":{formula:"瀵圭珛瑙傜偣+閫夎竟鏁堝簲+璁ㄨ寮曞",logic:"浜夎瑙﹀彂绔欓槦鏈兘鈫掕瘎璁哄尯寮€鎴樷啋绠楁硶鍔╂帹",examples:["鍏ㄧ綉閮藉湪鏁橝I鍐欎綔鎴戝亸璇磋繖3绫讳汉2026骞村崈涓囧埆鐢?,"涓轰粈涔圶XX琚叏缃戦獋鍗磋秺楠傝秺鐏?,"ChatGPT-6鍜孋laude 3璋佹洿鍗遍櫓"],tips:"瑙傜偣瑕佹湁渚濇嵁涓嶆€曚簤璁紱閬垮厤浜鸿韩鏀诲嚮锛涘紩瀵艰瘎璁轰簰鍔?},
"鐏甸瓊鎷烽棶":{formula:"鐩村嚮鐏甸瓊闂+浠峰€艰鍐茬獊+鍙嶆€濆紩瀵?,logic:"瑙﹀強娣卞眰浠峰€艰鈫掔敤鎴疯杩嚜鎴戝瑙?,examples:["浣犱笂涓€娆＄湡姝ｅ紑蹇冩槸浠€涔堟椂鍊?,"濡傛灉鏄庡ぉ琚獳I鏇夸唬浣犵幇鍦ㄤ細鍚庢倲娌″浠€涔?,"绌蜂汉瀹剁殑瀛╁瓙璇ヤ笉璇ヨ鍗氬＋"],tips:"闂瑕佺洿鍑诲唴蹇冧笉鐣欓€€璺紱閬垮厤璇存暀锛涚粰鍙嶆€濈┖闂?},
"骞茶揣鍚堥泦":{formula:"绋€缂轰俊鎭?鏀惰棌浠峰€?鍗冲埢鏁堟灉鎵胯",logic:"骞茶揣=鏈煡淇℃伅+鍗冲埢鏁堟灉=楂樿幏寰楁劅",examples:["鍏ㄧ綉涓嬫灦鐨勫唴閮ㄨ祫鏂欐垜鍋峰伔瀛樹簡鐢靛瓙鐗?,"浠婂勾鏈€鍏ㄧ殑琛屼笟閬垮潙鎸囧崡寤鸿涓嬭浇淇濆瓨","杩?涓殣钘忓姛鑳?0%鐨勪汉涓嶇煡閬?],tips:"姣忛」骞茶揣瑕佹湁鐙珛浠峰€硷紱鐢?寤鸿鏀惰棌/涓嬭浇淇濆瓨'寮曞"},
"璺ㄧ晫缁勫悎":{formula:"A棰嗗煙甯歌瘑+B棰嗗煙瑙嗚=鏂版祦閲忓瘑鐮?,logic:"淇℃伅鏉備氦鍒涢€犺鐭ラ瑕嗘晥搴?,examples:["浠庡垜娉曡搴︾湅濂惰尪閰嶆枡琛?,"鐜嬭€呰崳鑰€娈典綅鏆撮湶浣犵殑鏁欒偛椋庢牸","绋嬪簭鍛樼敤浠ｇ爜鎷嗚В濂冲洟鑸炶蛋浣嶈寰?],tips:"涓や釜棰嗗煙瑕佹湁鍐呭湪鑱旂郴锛涗笉鑳藉己琛岃法鐣岋紱淇濇寔涓撲笟搴?},
"閫佹儕鍠?:{formula:"韬唤鍙嶅樊+鎯呮劅鏆村嚮+杩囩▼鎻",logic:"绐ョ娆测啋鏈熷緟鎯婂枩鈫掓儏鎰熷叡楦ｂ啋浼犳挱鍐插姩",examples:["鍋峰伔鏀归€犺€佸叕宸ュ叿绠变粬鍥炲鍚庡弽搴旂粷浜?,"缁欑幆鍗伐濡堝鍑嗗鎯婂枩鐨勭7澶?,"鐢?0鍚庢柟寮忕粰濂跺ザ杩囩敓鏃?],tips:"鎴愭湰浣庢晥鏋滃ぇ锛涚獊鍑烘儏鎰熷弽搴旇€岄潪绀肩墿鏈韩锛涚郴鍒楀寲杩愯惀"},
"鑽峰皵钂?:{formula:"瑙嗚/澹伴煶鏆楃ず+鐘规姳鐞电惗鍗婇伄闈?,logic:"涓夌蹇呭仠鏈哄埗鈫掓湰鑳戒笉鑳藉垝璧?,examples:["闀胯吙缇庡コ鍘ㄥ笀鏁查棬鐨勬繁澶滅鎴胯彍","閾惰鑱屽憳鎹㈣鍢诲搱鎵撶","鍋ヨ韩鏁欑粌鐨勬繁澶滄媺浼歌"],tips:"閬垮厤浣庝織淇濈暀楂樼骇鎰燂紱鐢ㄤ环鍊兼姢鍩庢渤骞宠　锛涘垎灞傚彂甯冪瓥鐣?},
"鐩茬洅":{formula:"鏈煡蹇劅+浣庢垚鏈珮鏈熷緟+绀句氦璐у竵",logic:"鍍忚祵寰掍竴鏍锋湡寰呬笅涓€鏉殑鎯婂枩鍗扮珷",examples:["100鍏冮珮閾佺洸鐩?,"瓒呭競20鍏冭喘鐗╃洸鐩?,"浣犳暍璁╅檶鐢熶汉鍐冲畾浣犳湭鏉?4灏忔椂鍚?],tips:"鎮康鍓嶇疆+杩囩▼鐣欑櫧+鎰忓杞姌锛涢伩鍏嶅崟璋冨璺?},
"濂囪懇鐩稿叧":{formula:"琛屼笟鍙嶅樊+鐚庡蹇冪悊+绀句氦浼犳挱",logic:"鐚庡婵€娲诲ぇ鑴戝宸磋兒鎶藉鏈?,examples:["鐏攨搴楁渶鎬曢亣鍒扮殑8绫婚【瀹?,"00鍚庡疄涔犵敓鎶婂叕绔犲埢鎴愬崱閫氱尗鐖?,"鎴戠粰绋荤敯瑁呴湏铏圭伅闃查笩"],tips:"琛屼笟閿欎綅瑕佸悎鐞嗭紱閬垮厤浣庝織鍖栵紱鐢ㄥ姩鐢昏閬挎晱鎰熺敾闈?},
"璐熼潰鐨?:{formula:"闃存殫绐ヨ+閬撳痉瀹″垽+寮辫€呬唬鍏?,logic:"璐熼潰鍐呭=浜烘€ф樉寰暅鏀惧ぇ闅愮娆叉湜",examples:["瓒呭競澶у鍋锋崲浠风鐩戞帶瀹炲綍","澶栧崠灏忓摜鐢垫閲岃鐧介鏁呮剰缁婂€?,"缃戠孩椁愬巺琚鐨?68灏忔椂"],tips:"缁欎紒涓歭ogo鎵撶爜锛涢伩鍏嶈瀵兼湭鎴愬勾浜猴紱鐢?涓撲笟婕斿憳鍑烘紨'澹版槑"},
"鍏蜂綋鐨勪簨":{formula:"鐪熷疄鐢熸椿鍒囩墖+鍙嶅父缁嗚妭+鎮康鐣欑櫧",logic:"鐪熷疄鐢熸椿=姘镐笉钀藉箷鐨勮繛缁墽",examples:["浠婃棭涔拌眴娴嗛亣鍒颁欢鎬簨","澶栧崠鏌滃墠鎷嶅埌鐨勫瑙?,"鍩庝腑鏉戞棭鐐归摵鐨勪繚鏃舵嵎杞︿富"],tips:"闅愮淇濇姢鎵撶爜锛涢伩鍏嶆憜鎷嶇┛甯紱绯诲垪鍖栬瀵熸棩璁?},
"楂樻儏缁?:{formula:"鎯呯华鑳介噺鍒嗙骇+鐗╃悊寮曠垎+闈㈤儴鐗瑰啓",logic:"鎯呯华娴撳害=娴侀噺鍔犻€熷櫒",examples:["缇庢湳鐢熸挄姣佺敾绾哥獊鐒跺ぇ绗?,"鑰冪爺鍏氬噷鏅?鐐瑰澧欒儗涔︾殑绐掓伅鎰?,"鎷冲ご鐮稿紑楦¤兏鑲夊寘瑁呭樁鍚艰繖鐜╂剰鐙楅兘涓嶅悆"],tips:"鎯呯华浜鸿瑕侀€傞厤棰嗗煙锛涢伩鍏嶆儏缁€忔敮锛涙瀬绔儏缁渶蹇冪悊棰勮鏍囩"},
"寮鸿妭濂?:{formula:"涓夌澶氭鐢婚潰鍒囨崲+鍗＄偣杞扮偢+鎮康鎬ュ埞",logic:"鐢婚潰鍒囨崲棰戠巼=闅愬舰鎸囨尌妫掓搷鎺х敤鎴峰仠鐣?,examples:["0.5绉掑揩鍓笁缁勫啿绐佺敾闈⑩啋鍓垁鍓悐鐗屸啋鐏儰LOGO鈫掓斁澶ч暅鎬肩紳绾?,"閴村疂蹇€掓媶绠扁啋宸ュ叿鐗瑰啓鈫掔牬鍧忔娴嬧啋琛ㄦ儏鍙嶈浆","鎵爜浠樻鈫掑悗鍘ㄩ粦骞曗啋浠锋牸瀵规瘮鈫掓劋鎬掓憯纰?],tips:"鍓?绉掕秴3娆＄敾闈㈠垏鎹紱姣忓彞鍙拌瘝閰嶇敾闈㈠垏锛涘叧閿瘉鎹墠绐佺劧榛戝睆"},
"鍑戠儹闂?:{formula:"浜虹兢鏁堝簲+鎰忓鍏ヤ镜+闀滈潰鍏嬮殕",logic:"缇婄兢鏁堝簲=娴侀噺鏀惧ぇ鍣?,examples:["琛楀ご閲囪绐佺劧娑屽叆20涓洿瑙傜兢浼?,"澶栧崠灏忓摜闂叆鐩存挱闂磋烦濂冲洟鑸?,"鑿滃競鍦哄ぇ濡堜笌铏氭嫙鍋跺儚鍚堝敱"],tips:"鐢ㄩ暅闈㈠垎韬?鍊掓斁/澹伴煶钂欏お濂囦綆鎴愭湰閫犲娍锛涢伩鍏嶆壈姘?},
"娌夋蹈鎰?:{formula:"鍏ㄦ劅瀹樺嵎鍏?寰窛鏆村嚮+鐜闊崇粨鐣?,logic:"鍍廣R鐪奸暅鑸粦鏋剁敤鎴锋墍鏈夋劅瀹?,examples:["鏈ㄥ尃鍒ㄨ姳杩炵画15绉掓湪灞戠炕鍗风壒鍐?,"閲囪€冲叏杩囩▼妫夌鎽╂摝鑰抽亾澹?,"浠庣倰閿呯伀鐒扮┛杩涙补鐑熸満鍐呴儴娓呮磥"],tips:"閲嶅瑙勫緥鍔ㄤ綔+鎵嬮儴鐗瑰啓+鑺傚闊虫晥锛涙瘡20绉掓彃闈欐鐗瑰啓闃茬湬鏅?},
"鍙嶅樊鎰?:{formula:"鎵撶牬璁ょ煡+韬唤/鍦烘櫙/闃跺眰鍙嶈浆",logic:"鍙嶅樊鐏嵂妗剁灛闂寸偣鐕冨ソ濂囧績",examples:["鐓庨ゼ鎽婅€佹澘鍞辩編澹板洿瑁欓厤鐕曞熬鏈?,"鍔虫柉鑾辨柉鍚庡绠辩叜娉￠潰姘存櫠鏉厤涓嶉攬閽㈤攨","淇濇磥闃垮Ж涓嬬彮鍙楧J宸ヤ綔鏈嶄笌澶滃簵瑁呭悓灞?],tips:"鍙嶅樊鍏冪礌瑕佹湁鍏宠仈鎬э紱鐢ㄩ亾鍏?澹伴煶钂欏お濂囦綆鎴愭湰瀹炵幇"},
"鐗规畩瑙嗚":{formula:"闈炲父瑙勮瑙?鍋风鏁堝簲+璁ょ煡棰犺",logic:"闈炲父瑙勮瑙?娉ㄦ剰鍔涢粦娲?,examples:["閿呭簳瑙嗚鐪嬭泲娑插嚌鍥?,"锜戣瀭瑙嗚閫涘帹鎴?,"韬唤璇佽瑙掔湅涓讳汉澶滅敓娲?],tips:"铏溂/涓婂笣/鐗╁搧鎷熶汉/鏃剁┖鎶樺彔瑙嗚锛涢槻鐪╂檿锛涗鸡鐞嗙孩绾夸笉鑳藉伔鎷?},
"鏁呬簨鎰?:{formula:"鐢婚潰鍙欎簨+鐗╀欢闅愬柣+鐜绾跨储",logic:"鐢婚潰鍗冲墽鏈笁绉掗€犳偓蹇?,examples:["杈规暣鐞嗚。鏌滆竟鍚愭Ы鎷嶅埌鍗婂紑琛ｆ煖闂?,"鐩镐翰璧勬枡琛ㄧ壒鍐欐斁澶?86浣撹偛鐢熷瓧鏍?,"鎿︾幓鐠冩椂绐佺劧鍋滈】鏆楃ず鐪嬪埌涓嶈鐪嬬殑"],tips:"鐢ㄦ憞鏅冪粨濠氱収/鎾曠浣撴鎶ュ憡绛夐亾鍏峰彊浜嬶紱寰姩浣滀紶閫掓儏缁?},
"澶嶅彜鎬€鏃?:{formula:"璁板繂瑙﹀彂+鎰熷畼绌胯秺+骞翠唬閿欎綅",logic:"鎬€鏃?鏃跺厜鏈虹灛闂存媺浜哄叆灞€",examples:["鐖风埛鐢ㄧ畻鐩樼粰瀛欏瓙绠楁父鎴忔浣?,"璇哄熀浜氭墜鏈虹帺鍘熺","鑰佸紡鐢佃鏈烘敼閫犳垚鐚獫"],tips:"瑙嗚娉涢粍婊ら暅+鍚Windows XP寮€鏈洪煶鏁堬紱绮惧噯鐙欏嚮30+浜虹兢"}
};
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
var xhTemplateDetails={
"璁叉晠浜嬬被":{principles:"鐢ㄦ埛涓嶇埍鍚亾鐞嗙埍鍚晠浜嬨€傚ソ鏁呬簨3鐗瑰緛锛氭湁鍐茬獊銆佹湁缁嗚妭銆佹湁鍙嶈浆",steps:"4姝ユā鏉匡細1閿佸畾浜虹兢(3绉掓嫤鎴? 2寮曠垎鍐茬獊(鎯呯华閽╁瓙) 3灞曞紑杩囩▼(鍒?-3闃舵鍚叿浣撲簨浠? 4鑷劧甯﹁揣(浜у搧鍙樿В鍐虫柟妗?",techniques:"3鎶€宸э細鐖嗙偣鍓嶇疆(寮€澶翠寒缁撴灉)銆佺粏鑺傜壒鍐欏濠嗗﹩鍑屾櫒3鐐瑰紑杞﹀甫鎴戝幓娉℃俯娉夈€侀噾鍙ョ偣鐫涘姣斿紡/鏁板瓧寮忔敹灏?,pitfalls:"閬垮潙锛氬埆鑷棬鍒犱富瑙傛劅鎱ㄣ€佸埆鍟板棪鍒犳棤鍏崇粏鑺傘€佸埆铏氬亣"},
"鍏遍福鍨嬫瀛愮被":{principles:"鐢ㄦ埛蹇冪悊锛氳繖涓嶅氨鏄垜鍚?缁堜簬鏈変汉璇村疄璇濅簡",steps:"3澶фā鏉匡細1鍋囧XX璇寸湡璇濇彮闇茶涓氭綔瑙勫垯 2娣卞害杩樺師鍚嶅満闈㈠鍒诲按灏灛闂?3XX鍜孹X鐨勫樊鍒瀬绔姣斿埗閫犵瑧鐐?,techniques:"5鎶€宸э細鍙嶈浆鍨嬨€佽涓氭+澶т紬姊椼€佸叿璞″寲鏁板瓧銆佹柟瑷€鍙嶅樊銆佺粨灏剧杞姌甯﹁揣",pitfalls:"閬垮潙锛氬埆鑷棬鍒犱笟鍐呮銆佸埆渚垫潈銆佸墠3绉掑繀鍑虹垎鐐?},
"鏁欑煡璇嗙被":{principles:"鑾峰緱鎰熶笁瑕佺礌锛氫俊鎭噺澶с€佹晥鏋滅珛鐜般€侀瑕嗚鐭?,steps:"5澶фā鏉匡細涓夋璁虹棝鐐?>鏂规->姝ラ銆佷竴鍙ｆ皵鎸戞垬瀵嗛泦鐭ヨ瘑鐐广€佺洏鐐逛綋鎬€鏃х寧濂囥€佷簲闂硶銆侀槻鍧戞寚鍗?,techniques:"鎷掔粷姝ｇ‘鐨勫簾璇濄€佹厧鐢ㄤ笓涓氭湳璇€佹儏缁ぇ浜庣煡璇嗛噺",pitfalls:"鍑忚偉瑕佸皯鍚冨鍔?>鐏攨鍚庡枬杩欐澂鍒补姘翠綋閲嶄笉娑?},
"鏅掕繃绋嬬被":{principles:"鏍稿績锛氭湁鎵嬭壓/鐚庡鎬?娌绘剤鎰?,steps:"鐏溅鑺傛ā鍨嬶細鎷嗚В鎴愯繛璐楠ゆ瘡鑺傚叧閿姩浣?鎯呯华娉㈠姩",techniques:"3鐜╂硶锛氱寧濂囧弽宸€佹不鎰堣В鍘嬨€佸弽鍚戞搷浣?,pitfalls:"閬垮厤绾祦姘磋处銆佹厧鐢ㄤ笓涓氭湳璇€侀€夐鐚庡浼樺厛"}
};

function xuehuiUpdateStatus(){var s=document.getElementById("form-xh-status");var m=document.getElementById("form-xh-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 宸查厤缃?- "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="鏈厤缃?API Key"}}
function xuehuiCallAPI(systemPrompt,userPrompt,callback,opts){
if(!apiConfig.apikey||apiConfig.apikey.length<10){alert("璇峰厛閰嶇疆 API Key");return}
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
function copyXhResult(btn){var card=btn.closest("div").parentElement;var text=card.querySelector("div:last-child").textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){btn.textContent="\u2705 宸插鍒?;var _copyColor=themeWasteland?"#d4a830":"#10b981";btn.style.color=_copyColor;setTimeout(function(){btn.textContent="\uD83D\uDCCB 澶嶅埗";btn.style.color="var(--text-secondary)"},2000)}).catch(function(){fallbackCopy(btn,text)})}else{fallbackCopy(btn,text)}}function fallbackCopy(btn,text){var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");btn.textContent="\u2705 宸插鍒?;var _copyColor=themeWasteland?"#d4a830":"#10b981";btn.style.color=_copyColor;setTimeout(function(){btn.textContent="\uD83D\uDCCB 澶嶅埗";btn.style.color="var(--text-secondary)"},2000)}catch(e){alert("澶嶅埗澶辫触锛岃鎵嬪姩閫夋嫨澶嶅埗")}document.body.removeChild(ta)}
function expandCopy(btn){
var card=btn.closest("div").parentElement;
var area=card.querySelector(".xh-expand-area");
if(area.style.display==="none"||!area.style.display){area.style.display=""}else{area.style.display="none"}
}
function doExpandCopy(btn){
var card=btn.closest(".xh-expand-area").parentElement;
var input=card.querySelector(".xh-expand-input");
var targetWords=parseInt(input.value);
if(!targetWords||targetWords<50){alert("璇疯緭鍏ヨ嚦灏?0瀛楃殑鎵╁啓鐩爣");return}
var originalContent=btn.closest(".xh-expand-area").previousElementSibling.textContent;
var loading=card.querySelector(".xh-expand-loading");
var resultDiv=card.querySelector(".xh-expand-result");
loading.style.display="";resultDiv.style.display="none";
var prompt="鍘熸枃妗堬細"+originalContent+"\n\n璇峰皢涓婅堪鏂囨鎵╁啓鑷崇害"+targetWords+"瀛楋紝淇濇寔鍘熸湁椋庢牸銆佸彛璇寲琛ㄨ揪锛屼赴瀵岀粏鑺傚拰鍦烘櫙鎻忓啓銆傚彧杈撳嚭鎵╁啓鍚庣殑瀹屾暣鏂囨銆?;
xuehuiCallAPI("浣犳槸鏂囨鎵╁啓涓撳銆傚彧杈撳嚭鎵╁啓鍚庣殑鏂囨銆?,prompt,function(json){
loading.style.display="none";
var expanded=typeof json==="string"?json:(json.raw||json.content||json.expanded||json.text||JSON.stringify(json));
resultDiv.textContent=expanded;
resultDiv.style.display="";
var charCount=expanded.length;
var countSpan=document.createElement("span");
countSpan.style.cssText="font-size:9px;margin-left:6px;color:"+(charCount>=targetWords?"var(--green)":"var(--red)");
countSpan.textContent="("+charCount+"瀛?";
resultDiv.appendChild(countSpan);
},{temperature:0.3,max_tokens:8000});
}
function closeChat(){
if(chatMessages.length>0&&historyStack.length>0){historyStack[0].msgs=chatMessages.slice(0);try{localStorage.setItem("fp_history",JSON.stringify(historyStack))}catch(e){}syncHistoryToServer()}
document.getElementById("chat-overlay").classList.remove("open");
chatOpen=false;chatMessages=[];
}
function selectRewriteMode(el){document.querySelectorAll("#rw-mode-chips .select-chip").forEach(function(c){c.classList.remove("selected")});el.classList.add("selected");rwMode=el.dataset.val;document.getElementById("rw-custom-group2").style.display=rwMode==="B"?"":"none"}function selectRewriteModeBtn(el,mode){document.querySelectorAll(".rw-mode-btn").forEach(function(b){b.classList.remove("selected");b.style.borderColor="var(--border-glow)";b.style.background="var(--bg-card)"});el.classList.add("selected");el.style.borderColor="var(--purple)";el.style.background="rgba(168,85,247,0.08)";rwMode=mode;document.getElementById("rw-custom-group2").style.display=mode==="B"?"":"none"}
function updateRewriteApiStatus(){var s=document.getElementById("form-rw-status");var m=document.getElementById("form-rw-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 宸查厤缃?路 "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="鏈厤缃?API Key 路 璇峰湪宸︿晶鏍?鈿?API 閰嶇疆 涓缃?}}
function goBackRewriteStep1(){document.getElementById("rw-step2").style.display="none";document.getElementById("rw-step1").style.display=""}
function submitRewriteStep1(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10){alert("璇峰厛鍦ㄥ乏渚ф爮 API 閰嶇疆涓缃?API Key");return}
var content=document.getElementById("rw-text").value.trim();
if(!content){alert("璇疯緭鍏ユ枃妗堝唴瀹?);return}
switchChatMode("qa");document.getElementById("chat-back-row").style.display="";addMessage("user","[鎻愪氦鏂囨]\n"+content.substring(0,300)+(content.length>300?"...":""));showTyping();
var prompt="璇峰垎鏋愪互涓嬭棰戞枃妗堬細\n\n"+content+"\n\n璇疯緭鍑洪€愬瓧绋垮拰鍘熻棰戝垎鏋愶紝鍖呮嫭琛屼笟銆両P浜鸿銆佸唴瀹圭粨鏋勩€佹儏缁洸绾裤€佸叧閿挬瀛?;
var msgs=[{role:"system",content:agent.systemPrompt},{role:"user",content:prompt}];
fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})})
.then(function(r){return r.json()})
.then(function(data){
 hideTyping();
 if(data.error){addMessage("assistant","API閿欒锛?+data.error.message);return}
 addMessage("assistant",data.choices[0].message.content);
 document.getElementById("rw-step1").style.display="none";document.getElementById("rw-step2").style.display="";
}).catch(function(e){hideTyping();addMessage("assistant","璇锋眰澶辫触锛?+e.message)});
}function submitRewriteStep2(){var agent=agents[chatKey];if(!agent||!apiConfig.apikey||apiConfig.apikey.length<10)return;var custom=document.getElementById("rw-custom2").value.trim();if(rwMode==="B"&&!custom){alert("璇峰～鍐欒嚜瀹氫箟璧涢亾涓庝汉璁?);return}var prompt="璇峰熀浜庝笂涓€杞殑閫愬瓧绋垮拰鍒嗘瀽锛屾寜浠ヤ笅妯″紡杩涜浠垮啓锛歕n\n浠垮啓妯″紡锛?+(rwMode==="A"?"妯″紡A 鍘熸眮鍘熷懗浠垮啓":"妯″紡B 鑷畾涔夊畾浣嶄豢鍐?)+(rwMode==="B"?"\n鏂拌禌閬?鏂颁汉璁撅細"+custom:"")+"\n\n璇风洿鎺ヨ緭鍑轰豢鍐欐枃妗堝拰浠垮啓閫昏緫璇存槑";switchChatMode("qa");addMessage("user","鉁嶏笍 [浠垮啓鎻愪氦]\n妯″紡锛?+(rwMode==="A"?"鍘熸眮鍘熷懗":"鑷畾涔?)+(rwMode==="B"?"\n璧涢亾/浜鸿锛?+custom:""));showTyping();var msgs=[{role:"system",content:agent.systemPrompt}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:prompt});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","鉂?API 閿欒锛?+data.error.message);return};addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","鉂?璇锋眰澶辫触锛?+e.message)})}
function addMessageHTML(role,html){
chatMessages.push({role:role,content:html});
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg "+role;
div.innerHTML='<div class="chat-avatar">'+(role==="assistant"?"馃":"馃懁")+'</div><div class="chat-bubble">'+html+"</div>";
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
div.innerHTML='<div class="chat-avatar">'+(role==="assistant"?"馃":"馃懁")+'</div><div class="chat-bubble">'+content.replace(/\n/g,"<br>")+"</div>";
msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function showTyping(){
if(isTyping)return;isTyping=true;
var msgs=document.getElementById("chat-messages");
var div=document.createElement("div");
div.className="chat-msg assistant";div.id="typing-indicator";
div.innerHTML='<div class="chat-avatar">馃</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
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
var apiConfig={endpoint:localStorage.getItem("fp_endpoint")||"https://api.openai.com/v1/chat/completions",apikey:localStorage.getItem("fp_apikey")||localStorage.getItem("flowplayer_api_key")||"",model:localStorage.getItem("fp_model")||"gpt-4o",userId:localStorage.getItem("fp_userid")||""};
function loadConfigUI(){document.getElementById("cfg-endpoint").value=apiConfig.endpoint;document.getElementById("cfg-apikey").value=apiConfig.apikey;document.getElementById("cfg-model").value=apiConfig.model}
function updateFormApiStatus(){
var s=document.getElementById("form-api-status");
var m=document.getElementById("form-api-msg");
if(!s)return;
if(apiConfig.apikey&&apiConfig.apikey.length>9){
s.className="form-api-status ok";m.textContent="API 宸查厤缃?路 "+apiConfig.model+" 路 绔偣: "+apiConfig.endpoint.split("/").slice(0,3).join("/");
}else{
s.className="form-api-status missing";m.textContent="鏈厤缃?API Key 路 璇峰湪宸︿晶鏍?鈿?API 閰嶇疆 涓缃?;
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
function saveSettingsApi(){apiConfig.endpoint=normalizeEndpoint(document.getElementById("set-endpoint").value.trim());apiConfig.apikey=document.getElementById("set-apikey").value.trim();apiConfig.model=document.getElementById("set-model").value.trim()||"gpt-4o";var uel=document.getElementById("set-userid");if(uel){apiConfig.userId=uel.value.trim();localStorage.setItem("fp_userid",apiConfig.userId)}localStorage.setItem("fp_endpoint",apiConfig.endpoint);localStorage.setItem("fp_apikey",apiConfig.apikey);localStorage.setItem("fp_model",apiConfig.model);document.getElementById("settings-overlay").classList.remove("open");updateApiStatus();updateFormApiStatus()}
function updateApiStatus(){var btn=document.querySelector(".sidebar-settings-btn");if(!btn)return;if(apiConfig.apikey){if(themeWasteland){btn.style.color="#d4a830";btn.style.borderColor="rgba(200,132,42,.4)"}else{btn.style.color="#10b981";btn.style.borderColor="rgba(16,185,129,.3)"}}else{btn.style.color="var(--text-muted)";btn.style.borderColor="var(--border-glow)"}}
function toggleSettings(e){e.stopPropagation();var p=document.getElementById("chat-settings-panel");p.classList.toggle("open")}
function applyAdjustment(){var t=document.getElementById("cfg-adjust");var v=t.value.trim();if(!v)return;document.getElementById("chat-settings-panel").classList.remove("open");addMessage("user","?? ?????"+v);t.value="";showTyping();callAgentForAdjust(v)}
function clearAdjustment(){document.getElementById("cfg-adjust").value=""}
function callAgentForAdjust(adjustText){var agent=agents[chatKey];if(!agent)return;if(!apiConfig.apikey||apiConfig.apikey.length<10){hideTyping();addMessageHTML("assistant","?? ???? API Key?????? ? API ?? ????");return}var msgs=[{role:"system",content:agent.systemPrompt}];chatMessages.forEach(function(m){msgs.push({role:m.role,content:m.content})});msgs.push({role:"user",content:"??????????????????????????????????????????\n"+adjustText});fetch(apiConfig.endpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiConfig.apikey},body:JSON.stringify({model:apiConfig.model,messages:msgs,temperature:.7,max_tokens:4000})}).then(function(r){return r.json()}).then(function(data){hideTyping();if(data.error){addMessage("assistant","? API ???"+data.error.message);return}addMessage("assistant",data.choices[0].message.content)}).catch(function(e){hideTyping();addMessage("assistant","? ???????"+e.message)})}
function callAgent(userMsg){
var agent=agents[chatKey];if(!agent)return;
if(!apiConfig.apikey||apiConfig.apikey.length<10){
hideTyping();
addMessageHTML("assistant","鈿狅笍 灏氭湭閰嶇疆 API Key銆?br><br><span class=\"api-config-hint\" onclick=\"openSettingsFromChat()\">鈿?鐐瑰嚮姝ゅ閰嶇疆 API</span><br><br>涔熷彲浠ュ湪鍙充晶鏍?鈿?API 閰嶇疆 涓缃€?);
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
if(data.error){addMessage("assistant","鉂?API 閿欒锛?+data.error.message);return}
addMessage("assistant",data.choices[0].message.content);
}).catch(function(e){hideTyping();addMessage("assistant","鉂?缃戠粶璇锋眰澶辫触锛?+e.message)});
}

var origSend=sendMessage;
sendMessage=function(){
var input=document.getElementById("chat-input");var text=input.value.trim();
if(text.startsWith("sk-")&&text.length>30){
apiConfig.apikey=text;localStorage.setItem("fp_apikey",apiConfig.apikey);input.value="";
updateApiStatus();updateFormApiStatus();addMessage("assistant","鉁?API Key 宸蹭繚瀛橈紒\n\n绔偣锛?+apiConfig.endpoint+"\n妯″瀷锛?+apiConfig.model+"\n\n鐜板湪鍙互寮€濮嬩娇鐢ㄤ簡锛岀洿鎺ュ憡璇夋垜浣犵殑浜у搧鍜岄渶姹傘€?);return;
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


function tjUpdateStatus(){var s=document.getElementById("form-tj-status");var m=document.getElementById("form-tj-msg");if(!s)return;if(apiConfig.apikey&&apiConfig.apikey.length>9){s.className="form-api-status ok";m.textContent="API 宸查厤缃?- "+apiConfig.model}else{s.className="form-api-status missing";m.textContent="鏈厤缃?API Key"}}
function tjPick(el,groupId,max){var chips=document.getElementById(groupId).querySelectorAll(".select-chip");var selected=document.getElementById(groupId).querySelectorAll(".select-chip.selected");if(el.classList.contains("selected")){el.classList.remove("selected");return}if(selected.length>=max){selected[0].classList.remove("selected")}el.classList.add("selected")}
function tjGetVal(id){var c=document.getElementById(id).querySelector(".select-chip.selected");return c?c.dataset.val:""}
function tjGetVals(id){return Array.from(document.getElementById(id).querySelectorAll(".select-chip.selected")).map(function(c){return c.dataset.val})}
function tjStep1(){var p=tjGetVal("tj-product-type");var a=tjGetVal("tj-audience");var s=document.getElementById("tj-selling-points").value.trim();var pp=document.getElementById("tj-pain-points").value.trim();var sc=tjGetVal("tj-scene");var pr=tjGetVal("tj-price");if(!p||!a||!s||!pp||!sc||!pr){alert("璇峰畬鎴愭墍鏈夊繀濉」");return}document.getElementById("tj-loading").style.display="";var prompt="浜у搧绫诲瀷锛?+p+"\n鐩爣鍙椾紬锛?+a+"\n鏍稿績鍗栫偣锛?+s+"\n鏍稿績鐥涚偣锛?+pp+"\n浣跨敤鍦烘櫙锛?+sc+"\n浠锋牸瀹氫綅锛?+pr+"\n\n浠?2绉嶉挬瀛愮被鍨嬩腑鎺ㄨ崘3绉嶆渶鍚堥€傜殑锛屾瘡绉嶉檮鎺ㄨ崘鐞嗙敱銆俓n12绉嶉挬瀛愶細1.鐐瑰悕鍙椾紬 2.鐥涚偣鍏遍福 3.韬唤鎺ㄨ崘 4.瀵硅瘽鍐茬獊 5.鎻愬嚭鐤戦棶 6.寮€绠辫瘎娴?7.浜у湴鎺㈣ 8.瀹為獙婕旂ず 9.鎯呯华鍏遍福 10.鏁堟灉鍓嶇疆 11.鎮康濂藉 12.姝ｈ瘽鍙嶈\n\n杈撳嚭绾疛SON鏁扮粍锛歔{\"type\":\"閽╁瓙鍚峔",\"reason\":\"鎺ㄨ崘鐞嗙敱\"}]";xuehuiCallAPI("浣犳槸鐭棰戣惀閿€涓撳銆傚彧杈撳嚭JSON鏁扮粍銆?,prompt,function(json){document.getElementById("tj-loading").style.display="none";var recs=Array.isArray(json)?json:(json.raw?JSON.parse(json.raw):[]);if(!Array.isArray(recs)||recs.length===0){for(var k in json){if(Array.isArray(json[k])){recs=json[k];break}}}if(!Array.isArray(recs)||recs.length===0){alert("鎺ㄨ崘澶辫触");return}var html="";recs.forEach(function(r,i){html+='<div style="margin-bottom:8px"><span style="font-weight:700;color:var(--purple)">'+(i+1)+'. '+r.type+'</span><br><span style="color:var(--text-muted);font-size:11px">'+r.reason+'</span></div>'});document.getElementById("tj-hooks-result").innerHTML=html;})}
function tjStep2(){var hooks=tjGetVals("tj-hooks");if(hooks.length===0){alert("璇疯嚦灏戦€夋嫨涓€涓挬瀛愮被鍨?);return}}
function tjStep3(){var persona=tjGetVal("tj-persona");var tone=tjGetVal("tj-tone");if(!persona||!tone){alert("璇烽€夋嫨浜鸿瑙嗚鍜岃姘旈鏍?);return}var p=tjGetVal("tj-product-type");var a=tjGetVal("tj-audience");var s=document.getElementById("tj-selling-points").value.trim();var pp=document.getElementById("tj-pain-points").value.trim();var sc=tjGetVal("tj-scene");var pr=tjGetVal("tj-price");var hooks=tjGetVals("tj-hooks");document.getElementById("tj-loading").style.display="";var prompt="浜у搧绫诲瀷锛?+p+"\n鐩爣鍙椾紬锛?+a+"\n鏍稿績鍗栫偣锛?+s+"\n鏍稿績鐥涚偣锛?+pp+"\n浣跨敤鍦烘櫙锛?+sc+"\n浠锋牸瀹氫綅锛?+pr+"\n閽╁瓙绫诲瀷锛?+hooks.join("銆?)+"\n浜鸿瑙嗚锛?+persona+"\n璇皵椋庢牸锛?+tone+"\n\n鐢熸垚瀹屾暣寮曟祦鏂囨锛屽寘鍚細\n銆愭爣棰樺缓璁€戯紙3涓級\n銆愬畬鏁村彛鎾枃妗堛€戯紙300-500瀛楋紝鍙ｈ鍖栵紝鍏堝埗閫犲潖鎯呯华鍐嶅紩鍑鸿В鍐虫柟妗堬級\n銆愬垎闀滆剼鏈€戯紙琛ㄦ牸鏍煎紡锛氭椂闂存|鐢婚潰鎻忚堪|鍙ｆ挱鏂囨|鎯呯华/璇皵锛塡n銆愬彲瑙嗗寲寤鸿銆戯紙3-5涓敾闈級\n銆愯浆鍖栧紩瀵笺€戯紙缁撳熬璇濇湳+璇勮鍖洪璁?鏉★級\n\n鍙緭鍑虹函鏂囨湰锛屼笉瑕丣SON鏍煎紡銆?;xuehuiCallAPI("浣犳槸鐭棰戣惀閿€鏂囨涓撳銆傚彧杈撳嚭绾枃鏈枃妗堛€?,prompt,function(json){document.getElementById("tj-loading").style.display="none";var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));document.getElementById("tj-result").textContent=result;})}
function tjCopyResult(){var text=document.getElementById("tj-result").textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){alert("宸插鍒跺埌鍓创鏉?)}).catch(function(){fallbackTjCopy(text)})}else{fallbackTjCopy(text)}}
function fallbackTjCopy(text){var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");alert("宸插鍒?)}catch(e){alert("澶嶅埗澶辫触锛岃鎵嬪姩澶嶅埗")}document.body.removeChild(ta)}
function tjIterate(type){var current=document.getElementById("tj-result").textContent;if(!current){alert("璇峰厛鐢熸垚鏂囨");return}document.getElementById("tj-loading").style.display="";var prompt="鍘熸枃妗堬細"+current+"\n\n鎿嶄綔锛?+type+"\n\n璇锋牴鎹搷浣滈噸鏂扮敓鎴愭枃妗堛€傚彧杈撳嚭绾枃鏈€?;xuehuiCallAPI("浣犳槸鏂囨浼樺寲涓撳銆傚彧杈撳嚭绾枃鏈€?,prompt,function(json){document.getElementById("tj-loading").style.display="none";var result=typeof json==="string"?json:(json.raw||json.content||json.text||JSON.stringify(json));var div=document.getElementById("tj-iterate-result");div.textContent=result;div.style.display=""})}
function tjReset(){var ir=document.getElementById("tj-iterate-result");if(ir)ir.style.display="none";document.getElementById("tj-step1").style.display="";document.getElementById("tj-selling-points").value="";document.getElementById("tj-pain-points").value="";document.getElementById("tj-hooks-result").innerHTML="";document.getElementById("tj-result").textContent="";document.querySelectorAll("#tj-product-type .select-chip.selected,#tj-audience .select-chip.selected,#tj-scene .select-chip.selected,#tj-price .select-chip.selected,#tj-hooks .select-chip.selected,#tj-persona .select-chip.selected,#tj-tone .select-chip.selected").forEach(function(c){c.classList.remove("selected")})}



