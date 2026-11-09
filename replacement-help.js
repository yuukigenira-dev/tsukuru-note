(()=>{'use strict';
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n};
const cssValues={
'content':['"→ "','"サンプル"','擬似要素などに表示する文字。引用符を残します。'],
'display':['flex','grid','並べ方。grid-template-columnsなど、方式専用の指定も一緒に見直します。'],
'color':['#245A42','#245A42','文字色。#から始まる6桁の色コード等へ変更します。'],
'background':['#F1EADB','#F1EADB','背景の指定。写真・グラデーションの場合は必要な指定を残します。'],
'background-color':['#F1EADB','#F1EADB','背景色。重ねる文字とのコントラストも確認します。'],
'font-size':['20px','20px','文字サイズ。px/rem/emなど単位を残します。'],
'font-family':['"Yu Gothic", sans-serif','"Yu Gothic", sans-serif','書体名。端末にない書体は別途読み込みが必要です。'],
'font-weight':['400','700','文字の太さ。400は標準、700は一般的に太字。'],
'font-style':['normal','italic','文字の傾き。HTMLの強調の意味は変わりません。'],
'line-height':['2','2','行の高さ。単位なしなら文字サイズに対する倍率です。'],
'letter-spacing':['0.08em','0.08em','字間。単位も含めて変更します。'],
'text-align':['left','right','文字等の行内内容を揃える方向。left/center/rightなど。'],
'gap':['24px','24px','子同士の隙間。Grid/Flexの親へ指定します。'],
'row-gap':['32px','32px','行と行の隙間。'],
'column-gap':['24px','24px','列と列の隙間。'],
'padding':['32px 24px','32px 24px','内側の余白。値2つなら上下・左右の順。'],
'margin':['24px auto','24px auto','外側の余白。左右中央のautoを残す場合は数値部分だけ変えます。'],
'width':['80%','80%','幅。固定pxと親基準の%では意味が違います。'],
'height':['240px','240px','高さ。固定高へ変える場合は内容の見切れに注意。'],
'max-width':['960px','960px','最大幅。親や表示領域より大きい場合の挙動も確認します。'],
'min-width':['120px','120px','最小幅。大きくしすぎると狭い画面ではみ出します。'],
'min-height':['300px','300px','最小高さ。内容が増えた場合は通常それ以上に伸びます。'],
'border-radius':['20px','20px','角丸の大きさ。'],
'border':['2px solid #245A42','2px solid #245A42','線幅・種類・色の順。値だけを変更します。'],
'opacity':['0.5','0.5','不透明度。0〜1。子や文字も一緒に透過します。'],
'justify-content':['center','space-between','主軸方向の配置。親のdisplayや方向と一緒に確認します。'],
'align-items':['flex-start','center','交差軸などの配置。'],
'flex-direction':['column','row','子を並べる方向。横row・縦column。'],
'flex-wrap':['wrap','nowrap','折り返しの有無。'],
'object-fit':['contain','cover','画像全体を残すcontain、枠を埋めて切るcover。'],
'object-position':['50% 20%','50% 20%','画像のどの位置を優先して見せるか。'],
'list-style-type':['disc','square','マーカーの種類。discは丸、squareは四角。'],
'list-style':['square','none','マーカーの形式など。'],
'position':['relative','relative','配置方式。top等や親子の基準も変わるため、値だけでなく全体を確認。'],
'z-index':['20','20','同じ重なりの範囲での前後関係。'],
'grid-template-columns':['repeat(2, minmax(0, 1fr))','repeat(2, minmax(0, 1fr))','列数・幅。2を3にすると3列の指定になります。']
};
function newText(text){if(/メール/.test(text))return'連絡先メールアドレス';if(/名前|担当/.test(text))return'サンプル窓口';if(/所在地|住所/.test(text))return'アクセス';if(/作品|商品/.test(text))return'サンプル商品の紹介';if(/Ctrl|Shift|Enter/.test(text))return'Enter';if(/Copyright|©/.test(text))return'© Example Company';return'表示したい文章'}
function analyze(row,sample){const example=String(row.example||''),isCSS=row.kind==='css',html=sample?.html??(isCSS?'':example),css=sample?.css??(isCSS?example:''),records=[],seen=new Set();let after=example,afterHTML=html,afterCSS=css;function add(where,from,to,why,apply){if(!from||from===to||seen.has(where+'|'+from)||records.length>=14)return;seen.add(where+'|'+from);records.push({where,from,to,why});if(apply)apply()}
function replacePlain(from,to){const re=new RegExp('(>\\s*)'+escapeRe(from)+'(\\s*<)','g');after=after.replace(re,(_,a,b)=>a+to+b);afterHTML=afterHTML.replace(re,(_,a,b)=>a+to+b)}
// Text and attribute values are replacements; syntax and attribute/property names stay intact.
if(html&&(!isCSS||/[.#][a-zA-Z_-]/.test(example))){for(const key of ['required','disabled','readonly','checked','selected','multiple','hidden','open','controls','loop','muted']){const re=new RegExp('\\s+'+key+'(?:\\s*=\\s*(?:\"[^\"]*\"|\'[^\']*\'|[^\\s>]+))?(?=\\s|/?>)','g');if(re.test(html))add(key+'属性の有無',key,'属性を外す','状態や動作を変える場合だけ追加・削除します。'+key+'=\"false\"では解除できない真偽属性です。',()=>{after=after.replace(re,'');afterHTML=afterHTML.replace(re,'')})}for(const m of html.matchAll(/>\s*([^<>]+?)\s*</g)){const value=m[1].trim();if(!value||value.length>140||/^[{}\s]+$/.test(value))continue;const to=newText(value);add('画面に表示する文字',value,to,'タグの中の文章だけを変更。< と >、閉じタグを残します。',()=>replacePlain(value,to));if(records.filter(r=>r.where==='画面に表示する文字').length>=3)break}
for(const m of html.matchAll(/\b([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)){const key=m[1],value=m[2]??m[3];if(!value)continue;const quote=m[2]!==undefined?'"':"'";let to,why,paired=false;if(key==='href'||key==='src'||key==='action'||key==='poster'||key==='data'){if(value.startsWith('data:'))continue;if(value.startsWith('#')){to='#section-info';why='移動先のidもsection-infoへ一致させます。';paired=true}else if(value.startsWith('mailto:')){to='mailto:contact@example.com';why='メールアドレスへ変更。mailto:は残します。'}else if(/^https?:/.test(value)){to='https://example.com/sample-page';why='自分のURLへ変更。example.comは説明用の予約ドメインです。'}else{const ext=value.split('.').pop();to=key==='poster'||key==='src'&&/^(png|jpg|jpeg|webp|svg)$/.test(ext)?'sample-image.'+ext:key==='src'&&ext==='js'?'sample-script.js':key==='src'&&/^(mp4|mp3|webm)$/.test(ext)?'sample-media.'+ext:'sample-page.html';why='実際に置いたファイルの名前・拡張子・フォルダ階層へ合わせます。例のファイルは同梱されていない場合があります。'}}else if(key==='alt'){to='サンプル商品の写真';why='画像の内容・役割を説明。装飾だけなら空のaltも検討。'}else if(key==='style'){to='color: #245A42;';why='style属性内はCSSです。プロパティ名・コロン・セミコロンを保ち、必要な値を変更します。'}else if(key==='placeholder'){to='例：サンプル内容';why='短い入力例へ変更。labelを削除しないでください。'}else if(key==='title'){to='サンプルの説明';why='補足文へ変更。重要な説明は画面にも表示します。'}else if(key==='id'){to='sample-'+value;why='for、hrefの#、aria-*等の参照と、CSS/JSのid参照も一緒に合わせます。';paired=true}else if(key==='for'){if(html.includes('id='+quote+value+quote))continue;to='sample-'+value;why='対象の入力要素のidも同じ文字列へ変更します。';paired=true}else if(key==='class'){to=value.split(/\s+/).map(v=>'sample-'+v).join(' ');why='名前を変える場合だけ、HTMLのclassとCSSの.クラス名、JSの参照を一緒に変更。文章を変えるだけならclassはそのままで構いません。';paired=true}else if(key==='name'){to='sample_field';why='フォームの送信キー。受け取るサーバー側も合わせて変更します。'}else if(key==='value'&&!/^(true|false)$/.test(value)){to=/^\d+$/.test(value)?'50':'sample-value';why='入力・選択肢等の値。type、min/max、受信側の期待に合う値へ変更。'}else if(key==='datetime'){to='2030-01-01';why='実際の日時へ変更。表示する文章も同じ日時に合わせます。'}else continue;
add(key+'="…" の値',value,to,why,()=>{const from=key+'='+quote+value+quote,replacement=key+'='+quote+to+quote;after=after.split(from).join(replacement);afterHTML=afterHTML.split(from).join(replacement);if(paired){if(key==='id'||key==='for'){for(const k of ['id','for','aria-controls','aria-describedby','aria-labelledby','list']){const f=k+'='+quote+value+quote,t=k+'='+quote+to+quote;after=after.split(f).join(t);afterHTML=afterHTML.split(f).join(t)}after=after.split('#'+value).join('#'+to);afterHTML=afterHTML.split('#'+value).join('#'+to);afterCSS=afterCSS.replace(new RegExp('#'+escapeRe(value)+'(?![\\w-])','g'),'#'+to)}if(key==='href'&&value.startsWith('#')){const fromId=value.slice(1),toId=to.slice(1);for(const q of ['"',"'"]){after=after.split('id='+q+fromId+q).join('id='+q+toId+q);afterHTML=afterHTML.split('id='+q+fromId+q).join('id='+q+toId+q)}}if(key==='class'){const a=value.split(/\s+/),b=to.split(/\s+/);a.forEach((n,i)=>afterCSS=afterCSS.replace(new RegExp('\\.'+escapeRe(n)+'(?![\\w-])','g'),'.'+b[i]));if(isCSS)after=afterCSS}}})}}
const cssSource=isCSS?example:css;for(const m of cssSource.matchAll(/([\w-]+)\s*:\s*([^;{}\n]+)(?:;|(?=\}))/g)){const key=m[1],value=m[2].trim();let to,why;const rule=cssValues[key];if(/^var\(/.test(value))continue;if(key.startsWith('--')){to='#245A42';why='CSS変数に入れる値。変数名とvar()側の名前は対応させたままにします。'}else if(rule){to=value===rule[0]?rule[1]:rule[0];why=rule[2]}else if(/^#[\da-f]{3,8}$/i.test(value)){to='#245A42';why='色の値。桁数と#を保ちます。'}else if(/^\d+(?:\.\d+)?(?:px|em|rem|%)$/.test(value)){const match=value.match(/^([\d.]+)(.*)$/);to=String(+match[1]+(+match[1]<2?.25:8))+match[2];why='数値部分を変更。単位を消さず、用途に合う範囲で調整します。'}else continue;add(key+': …; の値',value,to,why,()=>{const from=key+':'+m[0].slice(m[0].indexOf(':')+1).replace(/;$/,'');const re=new RegExp('('+escapeRe(key)+'\\s*:\\s*)'+escapeRe(value)+'(?=\\s*[;}])','g');afterCSS=afterCSS.replace(re,(_,prefix)=>prefix+to);if(isCSS)after=after.replace(re,(_,prefix)=>prefix+to)})}
if(!records.length){const note=row.kind==='elements'?'この例には置き換える文章や属性値がありません。要素名そのものは説明対象なので、そのまま使います。':'この例のキーワードは動作を決める指定です。目的が変わる場合は、使い分けの説明を読んでから変更します。';records.push({where:'基本の構文',from:example,to:'そのまま使用',why:note})}return{records,after,afterHTML,afterCSS,html,css}}
function escapeRe(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function render(row,sample){const data=analyze(row,sample),details=el('details',undefined,'replacement-guide'),summary=el('summary','どこを入れ替える？：変更する値と、変更後の例');details.append(summary);let built=false;details.addEventListener('toggle',()=>{if(!details.open||built)return;built=true;const wrap=el('div',undefined,'replacement-table-wrap'),table=el('table'),head=el('tr');['入れ替える場所','この例の値','入れ替え例','一緒に確認すること'].forEach(t=>head.append(el('th',t)));const thead=el('thead');thead.append(head);table.append(thead);const tbody=el('tbody');data.records.forEach(r=>{const tr=el('tr');tr.append(el('th',r.where));for(const value of [r.from,r.to]){const td=el('td'),code=el('code',value);code.className='replacement-value';td.append(code);tr.append(td)}tr.append(el('td',r.why));tbody.append(tr)});table.append(tbody);wrap.append(table);details.append(wrap);const changed=el('details',undefined,'replacement-after');changed.append(el('summary','上の入れ替え例を反映したコードを見る'));const pre=el('pre');pre.textContent=data.after;changed.append(pre);AtlasCodeColors.enhance(pre,row.kind==='css'?'css':'html');if(sample?.html&&sample?.css){const h=el('pre',data.afterHTML),c=el('pre',data.afterCSS);changed.append(el('p','classやidの名前を変えた場合は、次のHTMLとCSSをセットで確認してください。','hint'),el('strong','関連するHTML'),h,el('strong','関連するCSS'),c);AtlasCodeColors.enhance(h,'html');AtlasCodeColors.enhance(c,'css')}details.append(changed,el('p','これは書き換える位置を学ぶための例です。リンク先・画像ファイル・送信先は自分で用意したものを指定し、変更後に動作を確認してください。','hint'))});return details}
window.AtlasReplacementHelp={analyze,render};
})();
