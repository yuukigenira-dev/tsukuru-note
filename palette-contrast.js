/* 配色の組み合わせ：各色の文字コントラスト（WCAG 2.x）を表示する追加モジュール。core.js の描画（atlasPaletteRendered）後に表示を更新する。 */
(()=>{'use strict';
const hex=s=>{const m=/^#?([0-9a-f]{6})$/i.exec(String(s).trim());if(!m)return null;const n=parseInt(m[1],16);return[n>>16&255,n>>8&255,n&255]};
const ch=v=>{v/=255;return v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4};
const lum=([r,g,b])=>0.2126*ch(r)+0.7152*ch(g)+0.0722*ch(b);
const ratio=(a,b)=>{const x=lum(hex(a)),y=lum(hex(b));return(Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)};
const judge=r=>r>=4.5?['ok','✓','本文OK']:r>=3?['large','△','大きい文字のみ']:['ng','×','文字には不向き'];
const fmt=r=>{let t=r.toFixed(2);if(r<4.5&&t==='4.50')t='4.49';if(r<3&&t==='3.00')t='2.99';return t};
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
function item(label,fg,bg){const r=ratio(fg,bg),[k,icon,word]=judge(r);const li=el('li','pc-item pc-'+k);const s=el('span','pc-sample','Aa');s.style.color=fg;s.style.background=bg;s.setAttribute('aria-hidden','true');const lb=el('span','pc-label');for(const t of [].concat(label))lb.append(el('span','pc-line',t));li.append(s,lb,el('span','pc-ratio',fmt(r)),el('span','pc-judge',icon+' '+word));return li}
function render(){const host=document.getElementById('swatches');if(!host)return;const colors=[...host.querySelectorAll('.palette-slot code, .swatch small')].map(x=>x.textContent.trim().toUpperCase()).filter(hex);
 let box=document.getElementById('paletteContrast');if(!box){box=el('section','palette-contrast');box.id='paletteContrast';box.setAttribute('aria-label','文字の読みやすさ（コントラスト比）');host.after(box)}box.replaceChildren();if(!colors.length)return;
 box.append(el('h3','pc-title','文字の読みやすさ（コントラスト比）'),el('p','pc-note','基準：4.5以上=本文OK／3.0以上=大きい文字のみ／それ未満=文字には不向き（WCAG 2.x）'));
 const list=el('div','pc-grid');colors.forEach((c,i)=>{const card=el('div','pc-card');const head=el('div','pc-head');const chip=el('span','pc-chip');chip.style.background=c;chip.setAttribute('aria-hidden','true');head.append(chip,el('strong','',(i+1)+'. '+c));const ul=el('ul','pc-list');ul.append(item('白文字','#FFFFFF',c),item('黒文字','#000000',c));card.append(head,ul);list.append(card)});box.append(list);
 const pairs=[];const uniq=[...new Set(colors)];for(let i=0;i<uniq.length;i++)for(let j=i+1;j<uniq.length;j++){const r=ratio(uniq[i],uniq[j]);if(r>=3){const[a,b]=lum(hex(uniq[i]))<lum(hex(uniq[j]))?[uniq[i],uniq[j]]:[uniq[j],uniq[i]];pairs.push([r,a,b])}}pairs.sort((x,y)=>y[0]-x[0]);
 const det=el('details','pc-pairs');det.append(el('summary','','この配色の中で文字と背景に使える組み合わせ（'+pairs.length+'）'));const ul=el('ul','pc-list');if(!pairs.length)ul.append(el('li','pc-empty','3.0以上になる組み合わせはありません。文字には白か黒を使ってください。'));for(const[,a,b]of pairs)ul.append(item(['文字 '+a,'背景 '+b],a,b));det.append(ul);box.append(det)}
let q=0;const sched=()=>{if(!q)q=requestAnimationFrame(()=>{q=0;render()})};addEventListener('atlasPaletteRendered',sched);
const host=document.getElementById('swatches');if(host)new MutationObserver(sched).observe(host,{childList:true,subtree:true,characterData:true});
window.AtlasPaletteContrast={ratio,lum,judge,render};render();
})();
