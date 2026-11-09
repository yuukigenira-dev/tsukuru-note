(()=>{'use strict';
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n};
function box(){const figure=el('figure',undefined,'visual-box');figure.setAttribute('aria-label','外側からmargin、border、padding、contentの順に重なるボックスモデル');const m=el('div',undefined,'visual-margin'),b=el('div',undefined,'visual-border'),p=el('div',undefined,'visual-padding'),c=el('div','content：文字・画像','visual-content');m.append(el('strong','margin：枠の外側の余白'),b);b.append(el('strong','border：枠線'),p);p.append(el('strong','padding：枠の内側の余白'),c);figure.append(m,el('figcaption','色は領域を区別するための目印です。marginは透明で、要素の背景色は通常paddingまで描かれます。'));return figure}
function preview(title,html,css,note,height){const figure=el('figure',undefined,'visual-example');figure.append(el('figcaption',title));const frame=el('iframe');frame.title=title;if(height)frame.style.height=height+'px';frame.setAttribute('sandbox','');frame.setAttribute('loading','lazy');frame.srcdoc='<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+'</style>'+html+'</html>';figure.append(frame,el('p',note));return figure}
const previewBase='*{box-sizing:border-box}body{margin:0;padding:14px;font:15px/1.7 system-ui,sans-serif;color:#243c50;background:white;overflow-wrap:anywhere}.sample{border:2px solid #357363;background:#e4f2ec;padding:12px}.item{border:1px solid #849aaf;background:#e3ecf7;padding:8px;text-align:center}';
function record(title,html,css,note,height){return{title,html,css:previewBase+(css||''),note,height}}
function examplesForTerm(title){const t=String(title),out=[];
if(/Flexbox|Grid|フレックス|グリッド|横並び/.test(t)){const grid=/Grid|グリッド/.test(t);out.push(record(grid?'Grid：親に指定して行と列を作る':'Flexbox：親に指定して子を横へ並べる','<div class="sample"><div class="item">A</div><div class="item">B</div><div class="item">C</div><div class="item">D</div></div>',grid?'.sample{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}':'.sample{display:flex;flex-wrap:wrap;gap:10px}.item{flex:1 1 50px}',grid?'親にdisplay: gridと2列の指定を付けた例です。':'親にdisplay: flexを付けた例です。狭いときはflex-wrap: wrapで折り返します。'))}
if(/親要素|子要素|子孫セレクター/.test(t))out.push(record('親・子・孫の入れ子','<div class="sample">親 div<p class="item">子 p<span class="item" style="display:block">孫 span</span></p></div>','','外側のdivから見るとpが子、spanが孫です。子セレクター（>）と子孫セレクター（空白）の対象範囲を区別します。'));
if(/ブロック.*インライン|display$/.test(t))out.push(record('ブロックとインラインの表示','<div class="item">ブロックA</div><div class="item">ブロックB</div><p><span style="background:#e3ecf7">インラインA</span> <span style="background:#e3ecf7">インラインB</span></p>','','通常のブロックは改行して並びます。インラインは文章の流れに入り、幅が足りないと折り返します。'));

if(['ブロックレベル要素','インライン要素','インラインブロック（inline-block）','display'].includes(t))out.push(record('block・inline・inline-blockを同じ条件で比較',
'<p>同じspanにwidth:120px・height:44pxを指定しています。</p><h4>block：行を分ける</h4><div class="display-demo d-block"><span>A</span> <span>B</span></div><h4>inline：文字の流れに入る</h4><div class="display-demo d-inline"><span>A</span> <span>B</span></div><h4>inline-block：行内に置く箱</h4><div class="display-demo d-inline-block"><span>A</span> <span>B</span></div>',
'h4{margin:10px 0 4px;font-size:14px}.display-demo{border:1px dashed #849aaf;padding:8px}.display-demo span{box-sizing:content-box;width:120px;height:44px;border:1px solid #357363;background:#e4f2ec}.d-block span{display:block}.d-inline span{display:inline}.d-inline-block span{display:inline-block;vertical-align:top}',
'通常フロー・横書きの例です。blockは行を分け、inlineのspanには幅・高さが適用されません。inline-blockは幅・高さを持つ箱で、収まるときは同じ行に並びます。画面が狭いと折り返します。'));

const extra=window.AtlasCodingTerms?.find(r=>r.title===t)?.preview;if(extra)out.push(record(extra.title,extra.html,extra.css,extra.note,extra.height));return out;}
function forTerm(title){const t=String(title),out=[];
if(/ボックスモデル|ボックス$|余白|padding|margin|box-sizing|枠線|border(?:\s*\/|$)/i.test(t)){out.push(box());if(/box-sizing|ボックスモデル/.test(t))out.push(el('p','幅200px・左右padding各20px・左右border各2pxの例：content-boxは枠線まで244px、border-boxは枠線まで200px（内容は156px）。marginはどちらにも含みません。','visual-formula'))}
for(const e of examplesForTerm(title))out.push(preview(e.title,e.html,e.css,e.note,e.height));return out.length?[section(out)]:[]}

function section(nodes){const s=el('section',undefined,'term-visual-help');s.append(el('h3','図・表示例で確認'),...nodes);return s}
window.AtlasVisualHelp={forTerm,box,examplesForTerm};
})();
