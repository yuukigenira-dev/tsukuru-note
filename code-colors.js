(()=>{'use strict';
// Lexical display only: never parse examples as HTML, and preserve every source character.
function tokenize(source,kind='html'){
 const s=String(source??''),out=[];
 const add=(text,role='syntax')=>{if(!text)return;const last=out[out.length-1];if(last?.role===role)last.text+=text;else out.push({text,role})};
 function css(text){let i=0,boundary=true;while(i<text.length){
  if(text.startsWith('/*',i)){const end=text.indexOf('*/',i+2),j=end<0?text.length:end+2;add(text.slice(i,j),'comment');i=j;continue}
  if(boundary){const head=text.slice(i).match(/^([^{};]+)(?=\{)/);if(head){add(head[1],head[1].trim().startsWith('@')?'syntax':'selector');i+=head[1].length;boundary=false;continue}}
  const m=boundary?text.slice(i).match(/^(\s*)(--[\w-]+|[-a-zA-Z][\w-]*)(\s*:\s*)/):null;
  if(m){let j=i+m[0].length,quote='',depth=0,selector=false;const start=j;while(j<text.length){const c=text[j];if(quote){if(c==='\\'){j+=Math.min(2,text.length-j);continue}if(c===quote)quote='';j++;continue}if(c==='"'||c==="'"){quote=c;j++;continue}if(text.startsWith('/*',j)){const e=text.indexOf('*/',j+2);j=e<0?text.length:e+2;continue}if(c==='('||c==='[')depth++;else if(c===')'||c===']')depth=Math.max(0,depth-1);if(!depth&&c==='{'){selector=true;break}if(!depth&&(c===';'||c==='}'))break;j++}
   if(!selector){add(m[0]);const value=text.slice(start,j),trail=value.match(/\s*$/)[0];add(value.slice(0,value.length-trail.length),'value');add(trail);i=j;boundary=false;continue}
  }
  const c=text[i];add(c);if(!/\s/.test(c))boundary=c==='{'||c===';';i++;
 }}
 function tag(text){const re=/([^\s"'<>\/=]+)(\s*=\s*)(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;let last=0;for(const m of text.matchAll(re)){const value=m[3]??m[4]??m[5],prefix=m[1]+m[2],quoted=m[3]!==undefined||m[4]!==undefined,q=quoted?m[0][prefix.length]:'';const start=m.index+prefix.length+(quoted?1:0);add(text.slice(last,start));if(m[1].toLowerCase()==='style')css(value);else add(value,'value');last=start+value.length;if(q){add(q);last++}}add(text.slice(last));}
 function html(text){if(!text.includes('<')&&/^\s*[\w:-]+\s*=/.test(text)){tag(text);return}let i=0;while(i<text.length){
  if(text.startsWith('<!--',i)){const e=text.indexOf('-->',i+4),j=e<0?text.length:e+3;add(text.slice(i,j),'comment');i=j;continue}
  if(text[i]==='<'&&/^<(?:\/?[a-zA-Z]|!|\?)/.test(text.slice(i))){let j=i+1,quote='';for(;j<text.length;j++){const c=text[j];if(quote){if(c===quote)quote=''}else if(c==='"'||c==="'")quote=c;else if(c==='>'){j++;break}}const part=text.slice(i,j);tag(part);i=j;const raw=part.match(/^<(style|script|textarea|title)\b/i);if(raw&&!/\/\s*>$/.test(part)){const close=new RegExp('</'+raw[1]+'\\s*>','ig');close.lastIndex=i;const m=close.exec(text),end=m?m.index:text.length,body=text.slice(i,end);if(raw[1].toLowerCase()==='style')css(body);else add(body,raw[1].toLowerCase()==='script'?'plain':'value');i=end}continue}
  let j=i+1;while(j<text.length&&text[j]!=='<')j++;const value=text.slice(i,j);add(value,value.trim()?'value':'syntax');i=j;
 }}
 if(kind==='css')css(s);else if(kind==='js')add(s,'plain');else if(kind==='mixed'){const marker='\n\n/* CSS */\n',at=s.indexOf(marker);if(at<0)html(s);else{html(s.slice(0,at));add(marker,'comment');css(s.slice(at+marker.length))}}else html(s);
 return out;
}
function legend(){const p=document.createElement('div');p.className='code-color-legend';p.setAttribute('aria-label','コードの色の見方');for(const[cls,text]of [['selector','紫：CSSの指定先・適用条件'],['value','オレンジ：内容・設定値'],['syntax','ブルー：構文・プロパティ名']]){const item=document.createElement('span'),dot=document.createElement('i');item.className='code-legend-'+cls;dot.setAttribute('aria-hidden','true');item.append(dot,document.createTextNode(text));p.append(item)}const note=document.createElement('small');note.textContent='値には使える形式や範囲があり、変えると見た目や動作も変わります。class・idの名前を変えるときは、対応するCSSや参照先も揃えてください。';p.append(note);return p}
function paint(pre,kind='html',source=pre.textContent){pre.dataset.codeLanguage=kind;source=window.AtlasReadableCode?.format(source,kind)||source;if(window.AtlasCodeExplain){const interactive=AtlasCodeExplain.paint(pre,kind,source);if(interactive)return interactive}const code=document.createElement('code');for(const t of tokenize(source,kind)){const span=document.createElement('span');span.className='code-part-'+t.role;span.textContent=t.text;if(t.role==='selector')span.title='CSSの指定先・適用条件です。変更の可否は項目の目的と説明で確認します。';if(t.role==='value')span.title='内容・設定値：使える形式と目的を確認';code.append(span)}pre.classList.add('code-colored');pre.replaceChildren(code);return pre}
function enhance(pre,kind='html',source=pre.textContent){paint(pre,kind,source);if(!pre.closest('.web-card,.replacement-guide')&&!pre.previousElementSibling?.classList.contains('code-color-legend'))pre.before(legend());return pre}
window.AtlasCodeColors={tokenize,legend,paint,enhance};
})();
