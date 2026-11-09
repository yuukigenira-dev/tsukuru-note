(()=>{'use strict';
const blue='#245a78',orange='#9a4c18';
const rule=(selector,color,specificity,extra={})=>({selector,color,specificity,important:false,inline:false,layer:null,inherited:false,...extra});
const cases=[
{id:'class',title:'要素名とclass：後に書いたpよりclassが優先',why:'同じ出所・重要度・レイヤーでは、classの詳細度 0-1-0 が、要素名の 0-0-1 より高いためです。',rules:[rule('.notice',blue,[0,1,0]),rule('p',orange,[0,0,1])]},
{id:'id',title:'IDとclass：IDを含む指定が優先',why:'左のIDの列を先に比べます。1-0-0 は 0-1-0 より高く、後から書いたclassでは上書きできません。',rules:[rule('#message',blue,[1,0,0]),rule('.notice',orange,[0,1,0])]},
{id:'order',title:'同じ詳細度：後に書いた指定が優先',why:'どちらも0-1-0。同じ出所・重要度・レイヤーで、@scopeによる差もないため、後に書いた.noteが採用されます。HTMLのclass属性に並べる順番ではありません。',rules:[rule('.notice',blue,[0,1,0]),rule('.note',orange,[0,1,0])]},
{id:'inline',title:'style属性：通常のCSSよりインラインが優先',why:'同じ作成者の通常宣言では、HTMLのstyle属性への指定が、スタイルシートのセレクターより優先されます。style属性を単純にIDとして数えるわけではありません。',rules:[rule('#message',blue,[1,0,0]),rule('style属性',orange,null,{inline:true})]},
{id:'important',title:'!important：詳細度より先に重要度で比較',why:'同じ作成者の宣言では、!important付きの宣言が通常宣言より優先されます。!importantはセレクターの詳細度を増やすものではありません。',rules:[rule('#message',blue,[1,0,0]),rule('.notice',orange,[0,1,0],{important:true})]},
{id:'important-tie',title:'!important同士：同じレイヤーなら詳細度を比較',why:'両方に!importantがあっても同じ強さとは限りません。同じ作成者・レイヤーでは、IDの1-0-0がclassの0-1-0より高いため、先に書かれたIDの指定が採用されます。',rules:[rule('#message',blue,[1,0,0],{important:true}),rule('.notice',orange,[0,1,0],{important:true})]},
{id:'inline-important',title:'style属性にも例外：!importantの指定が優先',why:'通常のstyle属性の指定より、作成者の!important付き宣言が優先されます。「インラインなら必ず最強」ではありません。',rules:[rule('style属性',blue,null,{inline:true}),rule('.notice',orange,[0,1,0],{important:true})]},
{id:'inherit',title:'継承：親のIDより子への直接指定を確認',why:'親のcolorは、子に直接の指定がない場合に引き継がれます。親のIDと子の要素名の詳細度を競わせるわけではありません。',rules:[rule('#container',blue,[1,0,0],{inherited:true}),rule('p',orange,[0,0,1])]},
{id:'where',title:':where()：中にIDがあっても詳細度は0',why:':where()とその引数は詳細度へ加算されません。:where(#message)は0-0-0、pは0-0-1なのでpが採用されます。',rules:[rule(':where(#message)',blue,[0,0,0]),rule('p',orange,[0,0,1])]},
{id:'is',title:':is()：引数のうち最も高い詳細度を使う',why:':is()自身は加算せず、引数リストで最も高い詳細度を使います。#messageを含むため1-0-0です。:not()や:has()も引数の詳細度を使います。',rules:[rule(':is(#message, .notice)',blue,[1,0,0]),rule('.notice',orange,[0,1,0])]},
{id:'layer',title:'応用：通常宣言ではレイヤー外の指定が優先',why:'@layerに属さない通常宣言は、同じ作成者のレイヤー内の通常宣言より優先されます。レイヤーの比較は詳細度より先です。',rules:[rule('#message',blue,[1,0,0],{layer:0}),rule('p',orange,[0,0,1])]},
{id:'layer-important',title:'応用：!importantではレイヤーの順が逆になる',why:'同じ作成者の!important同士では、先に宣言されたレイヤーが優先されます。baseのpが、後のthemeのIDより優先されます。',rules:[rule('p',blue,[0,0,1],{important:true,layer:0}),rule('#message',orange,[1,0,0],{important:true,layer:1})]}
];
function keys(r,index){return[Number(r.important),Number(r.inline),r.important?(r.layer===null?-999:100-r.layer):(r.layer===null?999:r.layer),...(r.specificity||[0,0,0]),index]}
function compare(a,b){for(let i=0;i<a.length;i++)if(a[i]!==b[i])return a[i]-b[i];return 0}
function winner(s,enabled=s.rules.map(()=>true)){let ids=s.rules.map((r,i)=>enabled[i]?i:-1).filter(i=>i>=0),direct=ids.filter(i=>!s.rules[i].inherited);if(direct.length)ids=direct;return ids.sort((a,b)=>compare(keys(s.rules[b],b),keys(s.rules[a],a)))[0]??null}
function html(s,enabled=s.rules.map(()=>true)){const inline=s.rules.find((r,i)=>r.inline&&enabled[i]);return '<div id="container">\n  <p id="message" class="notice note"'+(inline?' style="color: '+inline.color+(inline.important?' !important':'')+';"':'')+'>この文章の文字色を比べます。</p>\n</div>'}
function css(s,enabled=s.rules.map(()=>true)){const blocks=[];if(s.rules.some(r=>r.layer!==null))blocks.push('@layer base, theme;');s.rules.forEach((r,i)=>{if(!enabled[i]||r.inline)return;let code=r.selector+' {\n  color: '+r.color+(r.important?' !important':'')+';\n}';if(r.layer!==null)code='@layer '+['base','theme'][r.layer]+' {\n'+code.split('\n').map(l=>'  '+l).join('\n')+'\n}';blocks.push(code)});return blocks.join('\n\n')}
const specificity=[
['#message','1-0-0','IDセレクターを1つ数えます。'],['.notice','0-1-0','classを1つ数えます。'],['[type="email"]','0-1-0','属性セレクターもclassと同じ列です。'],[':hover','0-1-0','一般の擬似クラスもclassと同じ列です。'],['p','0-0-1','要素名を1つ数えます。'],['p::before','0-0-2','要素名pと擬似要素::beforeをそれぞれ数えます。'],['article > p.notice','0-1-2','classが1、要素名が2。>や空白は数えません。'],['#message.notice','1-1-0','IDが1、classが1です。'],['*','0-0-0','全称セレクターは加算しません。'],[':where(#message)','0-0-0',':where()とその引数は加算しません。'],[':is(p, #message)','1-0-0','引数のうち最も高い詳細度。:not()・:has()も同じ考え方です。'],['li:nth-child(2n of .notice)','0-2-1','liが0-0-1、:nth-child()自身とofの.noticeがそれぞれ0-1-0です。'],['p, #message','一致したセレクターごと','カンマ区切りを合計しません。#messageも一致する要素では1-0-0です。']
];
function selectorInfo(r){
const name=r.name.replace(/（.*?）/,'');
if(r.category==='非標準・ブラウザー専用')return{weight:'ブラウザー専用',note:'非標準の指定です。通常の構文では'+(name.startsWith('::')?'擬似要素の列':'擬似クラスの列')+'へ数えますが、対象ブラウザーがこの指定をどう解釈するかを仕様・開発者ツールで確認してください。未対応の指定は適用されません。'};
if([':left',':right',':first'].includes(name)||r.name===':blank（印刷）')return{weight:'@page専用 '+([':left',':right'].includes(name)?'0-0-1':'0-1-0'),note:'要素を選ぶ通常の詳細度とは別です。ページ名 − :first・:blank − :left・:rightの3列で比べます。'};
if(name==='&')return{weight:'親の指定による',note:'ネストの親セレクターリストの最も高い詳細度を引き継ぎます。この例の.cardの内側の&:hoverは0-2-0です。&単体に固定の数値はありません。'};
if(['svg|a','*|a'].includes(name))return{weight:'0-0-1',note:'要素名aだけを数えます。名前空間の接頭辞・区切り・*は詳細度へ加算しません。'};
const basic={'h2':['0-0-1','h2という要素名を1つ数えます。'],'.heading':['0-1-0','classを1つ数えます。'],'#profile':['1-0-0','IDを1つ数えます。'],'*':['0-0-0','全称セレクターは加算しません。'],'h2, p':['各0-0-1','カンマ区切りを合計しません。対象に一致する各セレクターを別々に扱います。'],'h2.heading':['0-1-1','classが1、要素名が1です。']};
if(basic[name])return{weight:basic[name][0],note:basic[name][1]};
if(r.category==='親子・兄弟')return{weight:'0-0-2',note:'この例は要素名を2つ数えます。空白・>・+・~などの結合子は詳細度へ加算しません。'};
if(r.category==='属性')return{weight:'0-1-0',note:'属性セレクターをclassと同じ列へ1つ数えます。属性の値や~=等の演算子、i・sのフラグは加算しません。'};
if(name===':where()')return{weight:'0-0-0',note:':where()とその引数は加算しません。ただしp:where(...)のpのような外側の指定は別に数えます。'};
if([':is()',':not()',':has()'].includes(name))return{weight:'引数の最大値',note:name+'自体は加算せず、引数のうち最も高い詳細度を使います。外側の要素名やclassは加算します。例：article:has(> h2)は0-0-2、:not(.notice)は0-1-0。'};
if([':host()',':host-context()'].includes(name))return{weight:'0-1-0 ＋ 引数',note:'擬似クラス自身の0-1-0と、引数の詳細度を加算します。:host(.active)は0-2-0。Shadow DOMの境界でのカスケード規則にも注意してください。'};
if(name==='::cue()')return{weight:'字幕用：仕様・実装を確認',note:'WebVTT独自の字幕用セレクターです。一般的なHTMLの引数として数値を決め付けず、字幕トラックの仕様と対象ブラウザーで詳細度の扱いを確認してください。'};
if(name==='::slotted()')return{weight:'0-0-1 ＋ 引数',note:'擬似要素自身と引数のセレクターの詳細度を加算します。引数がspanなら0-0-2。要素名videoなどが外側にある場合はさらに加算します。'};
if(r.category==='擬似要素')return{weight:'0-0-1',note:'この擬似要素を要素名と同じ列へ1つ数えます。p::beforeならpも数えて0-0-2です。::part(label)など、識別用の名前はclassとして数えません。'};
return{weight:'0-1-0',note:'この擬似クラス自身をclassと同じ列へ1つ数えます。button:hoverは要素名buttonも含めて0-1-1。:nth-child()・:nth-last-child()でofのセレクターを指定する場合、その最大の詳細度も加算します。'};
}
window.AtlasCSSPriorityData={cases,specificity,winner,css,html,selectorInfo};
})();
