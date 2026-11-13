/* 実表示・単体HTMLはこの同じ生成器を使用。入力値は必ずエスケープし、実行URLを許可しない。 */
(()=>{'use strict';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const imageURL=v=>{v=String(v||'').trim();return /^(https?:\/\/|data:image\/(?:png|jpeg|webp|gif);base64,)/i.test(v)?v:''};
const linkURL=v=>{v=String(v||'').trim();return /^(?:https?:\/\/|mailto:|tel:|#|\/(?!\/)|\.\.?\/)/i.test(v)?v:'#'};
const DEFAULT_MENU='ホーム\n作品\nお問い合わせ';
// 「ラベル | URL」を1行1項目で解析。URL省略時は #。
const menuItems=v=>String(v??'').split('\n').map(l=>{const i=l.indexOf('|');const label=(i<0?l:l.slice(0,i)).trim(),href=i<0?'':l.slice(i+1).trim();return{label,href:href||'#'}}).filter(x=>x.label);
const CSS=`*{box-sizing:border-box}html{color-scheme:light}body{margin:0;background:#fff;color:#202b38;font:16px/1.8 system-ui,-apple-system,"Noto Sans JP",sans-serif;overflow-wrap:anywhere}a{color:#244f77}a:focus-visible,button:focus-visible,input:focus-visible{outline:3px solid #d06c17;outline-offset:3px}.site{max-width:1440px;margin:auto;padding:40px}.flow{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;align-items:start}.block{grid-column:1/-1;min-width:0}.half{grid-column:auto}h1,h2,h3,p,figure{margin:0}h1{font-size:clamp(1.8rem,4vw,3.2rem);line-height:1.35}h2{font-size:clamp(1.4rem,3vw,2.2rem);line-height:1.5}h3{font-size:1.2rem;line-height:1.5}p{white-space:pre-wrap}header,footer{padding:24px;background:#eef2f5;border-radius:12px}footer{text-align:center;font-size:.875rem}.hero{padding:clamp(20px,4vw,48px);background:#eaf1f6;border-radius:16px;display:grid;gap:24px}.hero img,figure img{display:block;width:100%;height:auto;max-height:700px;object-fit:contain;border-radius:10px}.image-empty{min-height:140px;background:#eef2f5;display:grid;place-items:center;color:#526171}[data-sized] img,[data-sized] .image-empty{height:var(--h-web,var(--h-phone));max-height:none;object-fit:cover;width:100%}[data-sized] .image-empty{min-height:0}.game [data-sized] img,.game [data-sized] .image-empty{height:100%}.columns{display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:24px}.column{min-width:0;padding:16px;border:1px solid #d7e0e7;border-radius:12px;align-content:start}.section{padding:24px;border:1px solid #d7e0e7;border-radius:12px}.button-wrap{text-align:center}.action{display:inline-flex;align-items:center;justify-content:center;min-height:44px;min-width:44px;padding:10px 24px;border-radius:8px;border:0;background:#244f77;color:white;text-decoration:none;font:inherit;font-weight:700}.site-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 24px}.site-title{font-weight:700}.menu{display:flex;flex-wrap:wrap;gap:4px 8px;margin:0;padding:0;list-style:none}.menu a{display:inline-flex;align-items:center;min-height:44px;min-width:44px;padding:4px 12px;border-radius:8px}.form-demo{display:grid;gap:12px;padding:24px;border:1px solid #d7e0e7}.form-demo input{display:block;max-width:100%;min-height:44px;width:100%;font:inherit}.form-note{font-size:.875rem}.game{position:relative;aspect-ratio:16/9;overflow:hidden}.game>.block{position:absolute;overflow:auto;padding:8px;background:#eef2f5;border:1px solid #bac9d5}.game p{font-size:clamp(.6rem,2vw,1.2rem)}@media(max-width:600px){.site-header{flex-direction:column;flex-wrap:nowrap;align-items:stretch;gap:8px}.site-header .menu{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,8em),1fr));gap:4px}.site-header .menu a{width:100%;justify-content:center;background:#fff}.site{padding:16px}.flow,.columns{gap:12px}.half{grid-column:1/-1}.columns{grid-template-columns:minmax(0,1fr)}.section,header,footer{padding:16px}.hero{gap:12px}.column{padding:12px}[data-sized] img,[data-sized] .image-empty{height:var(--h-phone,var(--h-web))}}`;
function normalize(wf){
 const fix=bs=>{for(const b of bs){b.content=b.content&&typeof b.content==='object'?b.content:{};const c=b.content;
 if(c.text==null)c.text=String(b.label||'');if(b.type==='header'&&c.menu==null)c.menu=DEFAULT_MENU;if(b.type==='heading'&&!['h1','h2','h3'].includes(c.level))c.level='h2';
 if(b.heights&&typeof b.heights==='object'){const o={};for(const k of['web','phone','game']){const n=Number(b.heights[k]);if(Number.isFinite(n))o[k]=Math.min(2000,Math.max(120,Math.round(n)))}if(Object.keys(o).length)b.heights=o;else delete b.heights}else delete b.heights;
 if(b.type==='columns'){b.cols=Math.min(4,Math.max(2,Number(b.cols)||2));b.children=Array.from({length:b.cols},(_,i)=>Array.isArray(b.children?.[i])?b.children[i]:[]);b.children.forEach(fix)}
 if(b.type==='section'){b.children=Array.isArray(b.children)?b.children:[];fix(b.children)}
 }};fix(wf.blocks);wf.version=2;return wf;
}
function documentHTML(wf,geometry,title){
 let heading=0,navs=0;const text=b=>b.content?.text??b.label??'', content=b=>b.content||{};
 const sizeAttr=b=>{const parts=[];const wn=Number(b.heights?.web),pn=Number(b.heights?.phone);if(Number.isFinite(wn))parts.push('--h-web:'+Math.round(wn)+'px');if(Number.isFinite(pn))parts.push('--h-phone:'+Math.round(pn)+'px');return parts.length?` style="${parts.join(';')}" data-sized="1"`:''};
 // 最初はh1、以後は飛び級しない。編集欄の希望レベルを可能な範囲で反映。
 const headingHTML=(value,wanted)=>{let n=Number(String(wanted||'h2').slice(1))||2;n=heading?Math.min(n,heading+1):1;if(heading&&n===1)n=2;heading=n;return `<h${n}>${escape(value)}</h${n}>`};
 const img=(src,alt)=>{src=imageURL(src);return src?`<img src="${escape(src)}" alt="${escape(alt)}">`:'<div class="image-empty">画像を選択してください</div>'};
 const action=(label,href)=>`<a class="action" href="${escape(linkURL(href))}">${escape(label||'詳しく見る')}</a>`;
 // ナビの名前は1つ目「メイン」、以降は重複しない名前に。
 const menu=(items,cls)=>items.length?`<nav class="${cls}" aria-label="${navs++?'メニュー'+navs:'メイン'}"><ul class="menu">${items.map(x=>`<li><a href="${escape(linkURL(x.href))}">${escape(x.label)}</a></li>`).join('')}</ul></nav>`:'';
 const sequence=bs=>bs.map(block).join('\n');
 function block(b){const c=content(b),t=text(b),cl='block'+(b.w==='half'?' half':''),attr=`class="${cl}" data-block-id="${escape(b.id)}"`;switch(b.type){
 case'heading':return `<div ${attr}>${headingHTML(t,c.level)}</div>`;
 case'text':return `<div ${attr}><p>${escape(t)}</p></div>`;
 case'image':return `<figure ${attr}${sizeAttr(b)}>${img(c.image,c.alt||'')}</figure>`;
 case'button':return `<div class="${cl} button-wrap" data-block-id="${escape(b.id)}">${action(t,c.href)}</div>`;
 case'header':return `<header class="${cl} site-header" data-block-id="${escape(b.id)}"><p class="site-title">${escape(t)}</p>${menu(menuItems(c.menu),'site-nav')}</header>`;
 case'footer':return `<footer ${attr}><p>${escape(t)}</p></footer>`;
 case'nav':{const items=menuItems(t);return items.length?`<div class="${cl}" data-block-id="${escape(b.id)}">${menu(items,'nav')}</div>`:`<div ${attr}></div>`}
 case'hero':return `<section class="${cl} hero" data-block-id="${escape(b.id)}"${sizeAttr(b)}>${headingHTML(t,c.level||'h1')}${img(c.image,c.alt||'')}<div>${action(c.buttonText||'詳しく見る',c.href)}</div></section>`;
 case'section':return `<section class="${cl} section flow" data-block-id="${escape(b.id)}"><div class="block">${headingHTML(t,'h2')}</div>${sequence(b.children||[])}</section>`;
 case'columns':return `<div class="${cl} columns" style="--cols:${b.cols}" data-block-id="${escape(b.id)}">${(b.children||[]).map(bs=>`<div class="column flow">${sequence(bs)}</div>`).join('')}</div>`;
 case'card2':case'card3':return `<div class="${cl} columns" style="--cols:${b.type==='card2'?2:3}" data-block-id="${escape(b.id)}">${Array.from({length:b.type==='card2'?2:3},(_,i)=>`<div class="column">${headingHTML(t+(i+1),'h3')}<p>説明文</p></div>`).join('')}</div>`;
 case'form':return `<div class="${cl} form-demo" data-block-id="${escape(b.id)}">${headingHTML(t.split('\n')[0],'h2')}<p class="form-note">フォームの見本です。送信機能はありません。</p><label>お名前<input type="text" autocomplete="name"></label><label>メール<input type="email" autocomplete="email"></label><button type="button" class="action">送信（見本）</button></div>`;
 default:return `<div ${attr}><p>${escape(t)}</p></div>`;
 }}
 const top=[],mid=[],bottom=[];let started=false;for(const r of geometry.rects.filter(r=>!r.nested)){const b=r.b;if(!started&&['header','nav'].includes(b.type))top.push(b);else{started=true;mid.push(b)}}while(mid.at(-1)?.type==='footer')bottom.unshift(mid.pop());
 let body;if(wf.frame==='game'){body=`<main class="game">${geometry.rects.map(r=>block(r.b).replace('class="block',`style="left:${r.x/geometry.W*100}%;top:${r.y/geometry.H*100}%;width:${r.w/geometry.W*100}%;height:${r.h/geometry.H*100}%" class="block`)).join('')}</main>`}else body=`<div class="site flow">${sequence(top)}<main class="block flow">${sequence(mid)}</main>${sequence(bottom)}</div>`;
 return `<!DOCTYPE html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${escape(title||wf.name||'Webページ')}</title>\n<style>${CSS}</style>\n</head>\n<body>\n${body}\n</body>\n</html>`;
}
async function compress(file){
 if(!/^image\/(png|jpeg|webp|gif)$/.test(file.type))throw Error('PNG・JPEG・WebP・GIFを選択してください（GIFは静止画になります）');
 if(file.size>30*1024*1024)throw Error('画像は30MB以下にしてください');
 const u=URL.createObjectURL(file);try{const im=new Image();im.src=u;await im.decode();const ratio=Math.min(1,1600/Math.max(im.width,im.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(im.width*ratio));canvas.height=Math.max(1,Math.round(im.height*ratio));canvas.getContext('2d').drawImage(im,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/webp',.82)}finally{URL.revokeObjectURL(u)}
}
async function embedImages(wf){const copy=JSON.parse(JSON.stringify(wf)),warnings=[],cache=new Map();async function walk(bs){for(const b of bs){const src=b.content?.image;if(src&&/^https?:\/\//i.test(src)){try{if(!cache.has(src))cache.set(src,(async()=>{const r=await fetch(src,{mode:'cors',credentials:'omit',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();return compress(await r.blob())})());b.content.image=await cache.get(src)}catch{warnings.push(src)}}if(b.type==='columns')for(const col of b.children||[])await walk(col);if(b.type==='section')await walk(b.children||[])}}await walk(copy.blocks);return{wf:copy,warnings:[...new Set(warnings)]}}
window.TsukuruReal={menuItems,DEFAULT_MENU,normalize,documentHTML,compress,embedImages,imageURL,linkURL,CSS};
})();
