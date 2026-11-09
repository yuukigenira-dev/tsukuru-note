/* つくるノート: 新シェル（下部タブ・上部検索・領域切替・設定）。既存の画面とデータはそのまま使う。 */
(()=>{'use strict';
const D=window.AtlasDesk,DKEY='tsukuru-domain-v1';
/* カテゴリ登録表：カテゴリを増やすときはここに1件追加するだけ。
   id=既存画面の領域ID（AtlasDesk.tools のキー）, label=表示名, icon=メニューの記号, order=並び順,
   quick=調べるのタイル, quickRef=画面先頭の早見表（タブ切替・タップでコピー）, tools=[[key,名前,説明]]=「道具」の1列リスト, groups=[{id,label,keys}]を指定すると「HTML｜CSS」のような切替タブで表示（初回は先頭、最後の選択は groupKey に保存）, lines={key:{title:[行...],desc:[行...]}}=カードの改行を個別指定（省略時は「・」で自動改行）, learn=学ぶの一覧, question=質問する画面, other=「その他の道具」 */
const CATEGORIES=[
 {id:'web',label:'コード',icon:'</>',order:1,lines:{selectors:{title:['CSSセレクター','擬似クラス一覧']},csspriority:{title:['CSSの優先順位','詳細度（特異性）']}},quick:['elements','attributes','htmlvalues','css','selectors','csspriority'],groups:[{id:'html',label:'HTML',keys:['elements','attributes','htmlvalues']},{id:'css',label:'CSS',keys:['css','selectors','csspriority']},{id:'js',label:'JS',page:'jsSnippets'}],
  tools:[['flexgrid','flex と grid の早見表','よく使う並べ方をプレビューしてコピー','flexgrid'],['units','レスポンシブと単位変換','px⇄rem、ブレイクポイント、clamp()','units'],['shadows','影と角丸の見本','box-shadow と border-radius をタップでコピー','shadows'],['wireframe','ワイヤーフレーム','部品を積んで画面の設計図を作る（Web・スマホ・ゲーム）','wireframe']],groupKey:'tsukuru-code-mode-v1',learn:['codingguide','minitest'],question:'freequestion-web',other:[]},
 {id:'color',label:'デザイン',icon:'◐',order:2,lines:{cmykcatalog:{desc:['CMYKの数値で探す']},colormix:{title:['RGB・CMYKの混色']}},quick:[],
  quickRef:{key:'tsukuru-colorref-mode-v1',title:'色コード早見表',
   rgb:{all:'catalog',names:['red','orangered','orange','gold','yellow','yellowgreen','green','seagreen','teal','cyan','deepskyblue','dodgerblue','blue','navy','indigo','purple','magenta','hotpink','pink','brown','white','lightgray','gray','black']},
   cmyk:{all:'cmykcatalog',values:[['シアン',100,0,0,0],['マゼンタ',0,100,0,0],['イエロー',0,0,100,0],['ブラック',0,0,0,100],['赤',0,100,100,0],['緑',100,0,100,0],['青',100,100,0,0],['オレンジ',0,50,100,0],['空色',50,0,0,0],['ピンク',0,50,0,0],['黄緑',50,0,100,0],['紺',100,80,0,30],['茶',0,60,100,45],['グレー50%',0,0,0,50],['グレー20%',0,0,0,20],['リッチブラック',40,40,40,100]]}},
  tools:[['palette','配色の組み合わせ','基準色から合う色を出す'],['imagecolors','画像の色を調べる','写真やスクショから色を取る'],['fonts','フォント一覧','同じ文章で書体を見比べる'],['contrast','文字の読みやすさ','文字色と背景色のコントラストを確認']],learn:['colorcourse','colorlearning','designpractice','minitest'],question:'freequestion-color',other:['accessibility','layoutgrid','gradient','imagepractice','batchimages']},
 {id:'music',label:'音楽',icon:'♪',order:3,lines:{discover:{desc:['キーと雰囲気から','進行を探す']}},quick:['chord','scale','keychords','detector','discover','partprogressions'],learn:['theory','musicpractice','minitest'],question:'freequestion-music',other:[]}
].sort((a,b)=>a.order-b.order);
const CAT=Object.fromEntries(CATEGORIES.map(c=>[c.id,c])),DOMS=CATEGORIES.map(c=>c.id),LABEL=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.label]));
const LEARN=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.learn||[]])),QUESTION=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.question])),QUICK=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.quick||[]])),OTHER=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.other||[]]));
const HIDDEN=[['music','progression','作曲スタジオ（進行メモ・打ち込み）','コードを並べて再生・保存。保存データはそのまま残っています']];
const EXTRA_TITLES={'music:theory':'理論ガイド','music:quiz':'クイズ（音楽・旧版）','color:quiz':'クイズ（色・旧版）','color:guide':'色彩辞典','music:progression':'作曲スタジオ（進行メモ）','color:palette':'配色の組み合わせ','color:contrast':'文字の読みやすさ（コントラスト）'};
const $=s=>document.querySelector(s);
const h=(t,c,txt)=>{const e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e};
let domain=(()=>{try{const v=localStorage.getItem(DKEY);return DOMS.includes(v)?v:'web'}catch{return 'web'}})();
let tab='find';
function title(d,k){const r=(D.tools[d]||[]).find(x=>x[0]===k);return EXTRA_TITLES[d+':'+k]||(r?r[1]:tabButton(d,k)?.textContent.trim()||k)}
function desc(d,k){const r=(D.tools[d]||[]).find(x=>x[0]===k);return r?r[2]||'':''}
function tabButton(d,k){return [...document.querySelectorAll('#'+d+'Page .tabs button')].find(b=>(b.dataset.studioKey||b.dataset.mtab||b.dataset.ctab||b.dataset.web)===k)}
function exists(d,k){return !!tabButton(d,k)||(D.tools[d]||[]).some(r=>r[0]===k)}
// 旧版で隠されていた入口を、スタジオ以外すべて戻す
for(const b of document.querySelectorAll('[data-desk-removed="true"]')){const k=b.dataset.studioKey||b.dataset.mtab||b.dataset.ctab||b.dataset.web;if(k&&k!=='progression'){b.hidden=false;b.removeAttribute('data-desk-removed')}}
// ---------- DOM ----------
const top=h('header','tn-top');top.innerHTML='<button class="tn-menu" type="button" aria-label="カテゴリを切り替える" aria-expanded="false" aria-controls="tnDrawer"><span class="tn-burger" aria-hidden="true">☰</span><span class="tn-cat"></span></button><button class="tn-back" type="button" aria-label="一覧に戻る" hidden>‹</button><label class="tn-search"><span aria-hidden="true">🔍</span><input id="tnQuery" type="search" enterkeyhint="search" autocomplete="off" placeholder="CSS、タグ、色を検索" aria-label="すべてから検索"></label>';
const screen=h('main','tn-screen');screen.id='tnScreen';screen.setAttribute('aria-live','polite');
const bar=h('nav','tn-tabbar');bar.setAttribute('aria-label','メイン');
for(const[k,ic,t]of[['find','🔍','調べる'],['learn','📘','学ぶ'],['saved','★','保存'],['settings','⚙','設定']]){const b=h('button');b.type='button';b.dataset.tnTab=k;b.dataset.icon=ic;b.textContent=t;b.onclick=()=>show(k);bar.append(b)}
const drawer=h('div','tn-drawer');drawer.id='tnDrawer';drawer.hidden=true;drawer.innerHTML='<div class="tn-overlay"></div><aside class="tn-panel" role="dialog" aria-modal="true" aria-labelledby="tnDrawerTitle"><div class="tn-panel-head"><h2 id="tnDrawerTitle">カテゴリ</h2><button type="button" class="tn-close" aria-label="メニューを閉じる"></button></div><ul class="tn-cats" role="list"></ul></aside>';
document.body.append(top,screen,bar,drawer);document.body.classList.add('tn');
const q=$('#tnQuery'),back=$('.tn-back'),menu=$('.tn-menu'),panel=drawer.querySelector('.tn-panel');let lastFocus=null;
function drawCats(){const ul=drawer.querySelector('.tn-cats');ul.replaceChildren();for(const c of CATEGORIES){const li=h('li');const b=h('button','tn-catbtn');b.type='button';if(c.id===domain)b.setAttribute('aria-current','true');b.append(h('span','tn-caticon',c.icon),h('span','',c.label));b.onclick=()=>{setDomain(c.id);closeMenu();if(document.body.classList.contains('tn-tool')||q.value.trim()){q.value='';}show(tab==='saved'||tab==='settings'?'find':tab)};li.append(b);ul.append(li)}}
function focusables(){return [...panel.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])')].filter(e=>!e.disabled)}
function openMenu(){lastFocus=document.activeElement;drawCats();drawer.hidden=false;menu.setAttribute('aria-expanded','true');document.body.classList.add('tn-drawer-open');(panel.querySelector('[aria-current]')||focusables()[0]).focus()}
function closeMenu(){if(drawer.hidden)return;drawer.hidden=true;menu.setAttribute('aria-expanded','false');document.body.classList.remove('tn-drawer-open');(lastFocus&&lastFocus.isConnected?lastFocus:menu).focus()}
menu.onclick=()=>drawer.hidden?openMenu():closeMenu();drawer.querySelector('.tn-overlay').onclick=closeMenu;drawer.querySelector('.tn-close').onclick=closeMenu;
drawer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closeMenu()}else if(e.key==='Tab'){const f=focusables(),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
back.onclick=()=>show(tab);
// ---------- helpers ----------
function setDomain(d){if(!CAT[d])d=DOMS[0];domain=d;const lb=document.querySelector('.tn-cat');if(lb)lb.textContent=CAT[d].label;try{localStorage.setItem(DKEY,d)}catch{}document.body.dataset.tnDomain=d}
function lines(v){if(Array.isArray(v))return v.filter(Boolean);v=String(v);const nl=v.split('\n').map(x=>x.trim()).filter(Boolean);if(nl.length>1)return nl;const p=v.split('・').map(x=>x.trim());/* 「C・M・Y・K」「RGB・CMYK」「キー・雰囲気」のような短い並びは分けない */if(p.length>1&&p.every(x=>x.length>=3&&!/^[A-Za-z0-9]+$/.test(x)))return p;return [v]}
function multi(tag,v){const e=h(tag,'tn-lines');for(const t of lines(v))e.append(h('span','tn-line',t));e.setAttribute('aria-label',lines(v).join('、'));return e}
function tile(d,k,cls='tn-tile'){const b=h('button',cls);b.type='button';const o=(CAT[d]?.lines||{})[k]||{};b.append(multi('strong',o.title||title(d,k)));const ds=o.desc||desc(d,k);if(ds&&lines(ds).length)b.append(multi('small',ds));b.onclick=()=>openTool(d,k);return b}
function section(t,...kids){const s=h('section','tn-sec');s.append(h('h2','',t),...kids);return s}
function openTool(d,k){setDomain(d);document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;D.go(d,k);scrollTo(0,0)}
function openPage(name,title){document.body.classList.remove('tn-tool');screen.hidden=false;back.hidden=false;screen.replaceChildren(h('h1','tn-h1',title));const box=h('div','tn-page');screen.append(box);TsukuruPages[name](box);scrollTo(0,0)}
function show(k){tab=k;document.body.classList.remove('tn-tool');screen.hidden=false;back.hidden=true;for(const b of bar.children)b.setAttribute('aria-current',b.dataset.tnTab===k?'page':'false');if(k!=='find'||!q.value.trim())render();else search();scrollTo(0,0)}
// ---------- screens ----------
function render(){screen.replaceChildren();document.body.dataset.tnDomain=domain;
 if(tab==='find'){let g,gt=null;const groups=CAT[domain].groups;if(groups&&groups.length){const gk=CAT[domain].groupKey||('tsukuru-'+domain+'-mode-v1');let cur;try{cur=localStorage.getItem(gk)}catch{}if(!groups.some(x=>x.id===cur))cur=groups[0].id;
  gt=h('div','tn-subtabs');gt.setAttribute('role','tablist');gt.setAttribute('aria-label',CAT[domain].label+'の種類');g=h('div','tn-grid tn-grouped');g.setAttribute('role','tabpanel');g.id='tnGroupPanel';
  const draw=()=>{g.replaceChildren();const grp=groups.find(x=>x.id===cur);g.setAttribute('aria-label',grp.label);g.classList.toggle('tn-grouped-page',!!grp.page);if(grp.page&&window.TsukuruPages?.[grp.page])TsukuruPages[grp.page](g);else for(const k of grp.keys||[])if(exists(domain,k))g.append(tile(domain,k));for(const b of gt.children){const on=b.dataset.g===cur;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1}};
  groups.forEach((x,n)=>{const b=h('button','tn-subtab',x.label);b.type='button';b.setAttribute('role','tab');b.dataset.g=x.id;b.setAttribute('aria-controls','tnGroupPanel');b.onclick=()=>{cur=x.id;try{localStorage.setItem(gk,cur)}catch{}draw()};b.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const m=groups[(n+(e.key==='ArrowRight'?1:groups.length-1))%groups.length];cur=m.id;try{localStorage.setItem(gk,cur)}catch{}draw();gt.querySelector('[data-g="'+m.id+'"]').focus()}};gt.append(b)});draw()}
  else{g=h('div','tn-grid');for(const k of QUICK[domain])if(exists(domain,k))g.append(tile(domain,k))}
  const used=new Set([...(CAT[domain].tools||[]).map(x=>x[0]),CAT[domain].quickRef?.rgb?.all,CAT[domain].quickRef?.cmyk?.all,...QUICK[domain],...LEARN[domain],QUESTION[domain],...OTHER[domain],...HIDDEN.map(x=>x[1])]);
  const rest=h('div','tn-list');for(const[k]of D.tools[domain]||[])if(!used.has(k))rest.append(tile(domain,k,'tn-row'));if(domain==='color'&&tabButton('color','guide'))rest.append(tile('color','guide','tn-row'));
  const C=CAT[domain];if(C.quickRef)screen.append(quickRef(C.quickRef));let toolSec=null;if(C.tools&&C.tools.length){const tl=h('div','tn-list tn-tools');for(const[k,t,ds,pg]of C.tools)if(pg?window.TsukuruPages?.[pg]:exists(domain,k)){const b=h('button','tn-row tn-toolrow');b.type='button';b.append(multi('strong',t),h('small','',ds),h('span','tn-chev','›'));b.setAttribute('aria-label',t+'を開く：'+ds);b.onclick=()=>pg?openPage(pg,t):openTool(domain,k);tl.append(b)}toolSec=section('道具',tl)}if(toolSec&&C.quickRef)screen.append(toolSec);
  if(g.children.length||gt)screen.append(gt?section(LABEL[domain]+'をすぐ調べる',gt,g):section(LABEL[domain]+'をすぐ調べる',g));if(toolSec&&!C.quickRef)screen.append(toolSec);if(rest.children.length)screen.append(section('ほかの辞典と道具',rest));
  if(OTHER[domain].length){const o=h('div','tn-list');for(const k of OTHER[domain])if(exists(domain,k))o.append(tile(domain,k,'tn-row'));const det=h('details','tn-more');det.append(h('summary','','その他の道具（'+o.children.length+'）'),o);screen.append(det)}
  if(domain==='web')screen.append(h('p','tn-hint','例: 「display」「中央寄せ」「gap」と入力すると、1行の答えとコピーボタンが出ます。'));}
 else if(tab==='learn'){const qb=tile(domain,QUESTION[domain],'tn-tile tn-ask');qb.querySelector('strong').replaceChildren(h('span','tn-line','💬 質問する'));qb.querySelector('small')?.remove();qb.append(h('small','','わからないことを書いて、質問文を作る'));
  const l=h('div','tn-list');for(const k of LEARN[domain])if(exists(domain,k))l.append(tile(domain,k,'tn-row'));screen.append(qb,section('講座・レッスン・クイズ',l));}
 else if(tab==='saved'){screen.append(h('h1','tn-h1','保存'));try{screen.append(AtlasEntryFavorites.render())}catch{}const l=h('div','tn-list');
  const a=h('button','tn-row');a.type='button';a.append(h('strong','','よく使う画面（お気に入り・最近）'));a.onclick=()=>{document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;D.home('favorites')};
  const b=h('button','tn-row');b.type='button';b.append(h('strong','','保存したアイデア・配色・音（ライブラリ）'));b.onclick=()=>{document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;D.restoreRoute('#library')};l.append(a,b);screen.append(section('ほかの保存先',l))}
 else settings();
}
function settings(){screen.append(h('h1','tn-h1','設定'));const f=h('fieldset','tn-theme');f.append(h('legend','','テーマ'));const cur=AtlasAppearance.pref?AtlasAppearance.pref():'white';
 for(const[v,t]of[['white','ライト'],['dark','ダーク'],['system','端末に合わせる']]){const l=h('label','tn-radio');const i=h('input');i.type='radio';i.name='atlas-theme';i.value=v;i.checked=cur===v;i.onchange=()=>AtlasAppearance.set(v);l.append(i,h('span','',t));f.append(l)}
 screen.append(f);const l=h('div','tn-list');
 const more=h('button','tn-row');more.type='button';more.append(h('strong','','そのほかの表示・回答の詳しさ'));more.onclick=()=>AtlasAppearance.open();l.append(more);
 const bk=h('button','tn-row');bk.type='button';bk.append(h('strong','','データのバックアップ・読み込み'),h('small','','保存・ライブラリ画面で書き出し／読み込み'));bk.onclick=()=>{document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;D.restoreRoute('#library')};l.append(bk);
 screen.append(section('表示とデータ',l));const hl=h('div','tn-list');for(const[d,k,t,s]of HIDDEN){const b=h('button','tn-row');b.type='button';b.append(h('strong','',t),h('small','',s));b.onclick=()=>{const tb=tabButton(d,k);if(tb)tb.hidden=false;openTool(d,k)};hl.append(b)}screen.append(section('非表示の道具',hl));
 screen.append(h('p','tn-hint','保存データはこの端末のブラウザーに保存されます。'));}
function quickRef(R){const sec=h('section','tn-sec tn-ref');sec.append(h('h2','',R.title));let cur;try{cur=localStorage.getItem(R.key)}catch{}if(cur!=='cmyk')cur='rgb';
 const tabs=h('div','tn-subtabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','色コードの種類');const grid=h('div','tn-swatches');grid.setAttribute('role','tabpanel');grid.id='tnRefPanel';const st=h('p','tn-copied');st.setAttribute('role','status');const more=h('button','tn-btn ghost tn-allcolors');more.type='button';
 const AKEY='tsukuru-color-alpha-v1';let alpha=100;try{const v=+localStorage.getItem(AKEY);if(localStorage.getItem(AKEY)!==null&&v>=0&&v<=100)alpha=Math.round(v/5)*5}catch{}
 const fmtA=()=>String(+(alpha/100).toFixed(2));
 const op=h('div','tn-alpha');op.innerHTML='<label for="tnAlphaRange">不透明度（rgba用）</label><input id="tnAlphaRange" type="range" min="0" max="100" step="5"><span class="tn-alpha-num"><input id="tnAlphaNum" type="number" min="0" max="100" step="5" inputmode="numeric" aria-label="不透明度（パーセント）"><span aria-hidden="true">%</span></span>';
 const ar=op.querySelector('#tnAlphaRange'),an=op.querySelector('#tnAlphaNum');const setA=(v,save=true)=>{v=Math.max(0,Math.min(100,Math.round((+v||0)/5)*5));alpha=v;ar.value=v;an.value=v;ar.setAttribute('aria-valuetext',v+'%');if(save)try{localStorage.setItem(AKEY,String(v))}catch{}};setA(alpha,false);ar.oninput=()=>setA(ar.value);an.onchange=()=>setA(an.value);
 const named=new Map((window.AtlasNamedColors||[]).map(c=>[c.name,c]));
 async function copy(v){try{await navigator.clipboard.writeText(v);st.textContent=v+' をコピーしました';return true}catch{st.textContent='コピーできません：'+v;return false}}
 function sw(color,name,value,sub){const b=h('button','tn-sw');b.type='button';const chip=h('span','tn-swchip');chip.style.background=color;chip.setAttribute('aria-hidden','true');b.append(chip,h('span','tn-swname',name),h('code','tn-swval',value));if(sub){b.append(h('code','tn-swval tn-swsub',sub));b.setAttribute('aria-label',name+' '+value+' '+sub+'（タップでコピー方法を選ぶ）');b.setAttribute('aria-haspopup','dialog');b.onclick=()=>sheet(color,name,value)}else{b.setAttribute('aria-label',name+' '+value+' をコピー');b.onclick=()=>copy(value)}return b}
 function sheet(hexv,name,value){const n=parseInt(hexv.slice(1),16),r=n>>16&255,g=n>>8&255,bl=n&255,rgbv='rgb('+r+', '+g+', '+bl+')';const d=h('dialog','tn-sheet');d.setAttribute('aria-labelledby','tnSheetTitle');const head=h('div','tn-sheet-head');const chip=h('span','tn-swchip tn-sheet-chip');chip.style.background=hexv;chip.setAttribute('aria-hidden','true');const tt=h('h2','',name);tt.id='tnSheetTitle';head.append(chip,tt);d.append(head);
  const a=fmtA(),aa=Math.round(alpha/100*255).toString(16).padStart(2,'0').toUpperCase();const pv=h('div','tn-sheet-preview');pv.setAttribute('role','img');pv.setAttribute('aria-label','不透明度'+alpha+'%のプレビュー');const fill=h('span');fill.style.background='rgba('+r+','+g+','+bl+','+a+')';pv.append(fill,h('small','','不透明度 '+alpha+'%'));d.append(pv);
  for(const[lab,v]of[['HEX',hexv],['rgb()（0〜255）',rgbv],['rgba()（不透明度 '+alpha+'%）','rgba('+r+', '+g+', '+bl+', '+a+')'],['8桁HEX（#RRGGBBAA）',hexv+aa]]){const row=h('div','tn-sheet-row');row.append(h('span','tn-sheet-lab',lab),h('code','tn-sheet-val',v));const cb=h('button','tn-btn','コピー');cb.type='button';cb.setAttribute('aria-label',lab+' '+v+' をコピー');cb.onclick=async()=>{if(await copy(v)){cb.textContent='コピー済み'}};row.append(cb);d.append(row)}
  const close=h('button','tn-btn ghost tn-sheet-close','閉じる');close.type='button';close.onclick=()=>d.close();d.append(close);d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('close',()=>d.remove());document.body.append(d);d.showModal()}
 function draw(){grid.replaceChildren();st.textContent='';for(const b of tabs.children){const on=b.dataset.m===cur;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1}
  op.hidden=cur!=='rgb';if(cur==='rgb'){for(const n of R.rgb.names){const c=named.get(n);if(c){const ja=c.ja||n,m=/（(.+?)）/.exec(ja);{const n=parseInt(c.hex.slice(1),16);grid.append(sw(c.hex,m?m[1]:ja,c.hex,'R'+(n>>16&255)+' G'+(n>>8&255)+' B'+(n&255)))}}}more.textContent='すべての色名・色コードを見る ›';more.onclick=()=>openTool('color',R.rgb.all)}
  else{for(const[n,c,m,y,k]of R.cmyk.values){const hx=AtlasPrintColor.hex(AtlasPrintColor.toRGB([c,m,y,k]));grid.append(sw(hx,n,'C'+c+' M'+m+' Y'+y+' K'+k))}more.textContent='すべてのCMYK色を見る ›';more.onclick=()=>openTool('color',R.cmyk.all)}}
 [['rgb','RGB'],['cmyk','CMYK']].forEach(([m,l],i,arr)=>{const b=h('button','tn-subtab',l);b.type='button';b.setAttribute('role','tab');b.dataset.m=m;b.setAttribute('aria-controls','tnRefPanel');const pick=v=>{cur=v;try{localStorage.setItem(R.key,v)}catch{}draw()};b.onclick=()=>pick(m);b.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const v=arr[(i+1)%2][0];pick(v);tabs.querySelector('[data-m="'+v+'"]').focus()}};tabs.append(b)});
 draw();sec.append(tabs,op,grid,st,more);return sec}
// ---------- search ----------
const css=new Map((window.atlasWebData||[]).filter(r=>r.kind==='css').map(r=>[r.name.toLowerCase(),r]));
const BASE=new Set('display position top right bottom left z-index width height min-width max-width min-height max-height margin padding border border-radius box-shadow box-sizing color background background-color background-image opacity font font-size font-weight font-family line-height letter-spacing text-align text-decoration text-transform white-space overflow flex flex-direction flex-wrap justify-content align-items align-content align-self gap grid grid-template-columns grid-template-rows grid-area grid-column grid-row transform transition animation cursor visibility object-fit list-style outline vertical-align float clear filter content order aspect-ratio inset place-items place-content'.split(' '));
const NEW={'container-type':'2023年から主要ブラウザー対応（新しめ）','text-wrap':'2024年から主要ブラウザー対応（新しめ）','subgrid':'2023年から主要ブラウザー対応（新しめ）','anchor-name':'一部ブラウザーのみ（要確認）','view-transition-name':'一部ブラウザーのみ（要確認）'};
function support(name){if(BASE.has(name))return['ok','主要ブラウザーで広く対応'];if(NEW[name])return['new',NEW[name]];return['?','対応状況はMDNで確認']}
function score(x,t){const ti=x.title.toLowerCase(),tx=(x.text||'').toLowerCase();let s=0;if(ti===t)s=100;else if(ti.startsWith(t))s=60;else if(ti.includes(t))s=40;else if(tx.includes(t))s=12;else return 0;if(x.domain==='web')s+=15;if(x.domain===domain)s+=6;if(css.has(ti))s+=5;return s}
function search(){const t=q.value.trim().toLowerCase();if(!t){show(tab);return}document.body.classList.remove('tn-tool');screen.hidden=false;back.hidden=false;screen.replaceChildren();
 const hits=[];const seen=new Set();for(const x of AtlasGlobalSearch.index){const s=score(x,t);const id=x.domain+x.title;if(s&&!seen.has(id)){seen.add(id);hits.push([s,x])}}hits.sort((a,b)=>b[0]-a[0]);
 const exact=css.get(t);if(exact)screen.append(answer(exact,true));
 const list=h('div','tn-results');list.setAttribute('role','list');screen.append(h('p','tn-count',hits.length+'件'+(hits.length>40?'（上位40件）':'')),list);
 for(const[,x]of hits.slice(0,40)){const c=css.get(x.title.toLowerCase());if(c&&c===exact)continue;const row=h('div','tn-hit');row.setAttribute('role','listitem');const b=h('button','tn-row');b.type='button';b.append(h('span','tn-badge tn-'+x.domain,c?'CSS':LABEL[x.domain]),h('strong','',x.title),h('small','',(x.text||'').slice(0,70)));
  b.onclick=()=>{if(c){const ex=row.querySelector('.tn-answer');if(ex){ex.remove();return}row.append(answer(c,false))}else{document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;x.open();scrollTo(0,0)}};row.append(b);list.append(row)}
 if(!hits.length)list.append(h('p','tn-hint','見つかりませんでした。言い換え（例: 横並び→flex）も試してください。'))}
function answer(r,big){const card=h('article','tn-answer'+(big?' big':''));card.append(h('span','tn-badge tn-web','CSSプロパティ'),h('h2','',r.name),h('p','',r.desc));
 const m=String(r.example||'').match(/\{([^}]*)\}/);const line=(m?m[1]:r.example||'').trim();const code=h('code','tn-code',line);const pre=h('pre');pre.append(code);
 const copy=h('button','tn-btn','コピー');copy.type='button';copy.onclick=async()=>{try{await navigator.clipboard.writeText(line);copy.textContent='コピーしました'}catch{const rg=document.createRange();rg.selectNodeContents(code);getSelection().removeAllRanges();getSelection().addRange(rg);copy.textContent='選択しました'}setTimeout(()=>copy.textContent='コピー',1600)};
 const[st,sx]=support(r.name);const sp=h('p','tn-support tn-s-'+(st==='?'?'q':st));sp.append(h('span','',(st==='ok'?'✓ ':st==='new'?'△ ':'？ ')+sx+' '));const a=h('a','','MDN');a.href='https://developer.mozilla.org/ja/docs/Web/CSS/'+encodeURIComponent(r.name);a.target='_blank';a.rel='noopener';sp.append(a);
 const full=h('pre','tn-example');full.textContent=r.example||'';
 const acts=h('div','tn-acts');acts.append(copy);try{const fb=AtlasEntryFavorites.button({type:'web',domain:'web',kind:'css',name:r.name,title:r.name});fb.classList.add('tn-btn');acts.append(fb)}catch{}
 const more=h('button','tn-btn ghost','例と詳しい説明');more.type='button';more.onclick=()=>{document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;AtlasWebCatalog.open({type:'web',domain:'web',kind:'css',name:r.name});scrollTo(0,0)};acts.append(more);
 card.append(pre,acts,sp,h('h3','','例'),full);return card}
let timer;q.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(search,120)});q.addEventListener('keydown',e=>{if(e.key==='Escape'){q.value='';show(tab)}});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();e.stopImmediatePropagation();q.focus()}},true);
// 旧画面の検索欄からのショートカットはこちらへ
window.TsukuruShell={openPage,categories:CATEGORIES,openMenu,closeMenu,show,openTool,search,get domain(){return domain}};
setDomain(domain);
const h0=location.hash;if(h0&&h0.length>1&&!/^#(home)?$/.test(h0)){document.body.classList.add('tn-tool');screen.hidden=true;back.hidden=false;for(const b of bar.children)b.setAttribute('aria-current','false')}else show('find');
})();
/* コントラスト・ガード: 旧CSS由来の低コントラスト文字（WCAG AA未満）を、表示中の要素だけ読みやすい色に補正する。色見本・プレビューは対象外。 */
(()=>{'use strict';
const rgb=s=>{const m=(s.match(/[\d.]+/g)||[0,0,0]).map(Number);if(m.length<4)m[3]=1;return m};
const lum=c=>{const v=c.slice(0,3).map(x=>{x/=255;return x<=.03928?x/12.92:((x+.055)/1.055)**2.4});return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const blend=(f,b)=>[0,1,2].map(i=>f[i]*f[3]+b[i]*(1-f[3]));
const SKIP='[style*="background"],canvas,svg,[class*=swatch],[class*=preview],[class*=sample],[class*=chip-color],[aria-hidden=true],.tn-top,.tn-tabbar,.tn-screen';
function bgOf(el){const st=[];for(let n=el;n&&n.nodeType===1;n=n.parentElement){const cs=getComputedStyle(n);if(cs.backgroundImage!=='none')return null;const c=rgb(cs.backgroundColor);if(c[3]>0)st.push(c);if(c[3]>=1)break}let b=[255,255,255];for(let i=st.length-1;i>=0;i--)b=blend(st[i],b);return b}
function fix(root=document.querySelector('.shell')){if(!root||!document.body.classList.contains('tn-tool'))return;const H=innerHeight*3;
 for(const el of root.querySelectorAll('*')){if(!el.offsetParent)continue;let txt=false;for(const n of el.childNodes)if(n.nodeType===3&&n.textContent.trim()){txt=true;break}if(!txt)continue;const r=el.getBoundingClientRect();if(r.bottom<-H||r.top>H)continue;if(el.closest(SKIP))continue;const cs=getComputedStyle(el);if(+cs.opacity<.99)continue;const b=bgOf(el);if(!b)continue;const f=blend(rgb(cs.color),b),L1=lum(f),L2=lum(b),ratio=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);const sz=parseFloat(cs.fontSize),need=(sz>=24||(sz>=18.66&&+cs.fontWeight>=700))?3:4.5;
  if(ratio<need){el.style.setProperty('color',L2<.18?'#eceef2':'#1b1b1f','important');el.dataset.tnContrastFixed=''}}}
let q=0;const run=()=>{if(q)return;q=requestAnimationFrame(()=>{q=0;fix()})};
new MutationObserver(run).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','open','data-atlas-theme']});
new MutationObserver(()=>{for(const e of document.querySelectorAll('[data-tn-contrast-fixed]')){e.style.removeProperty('color');e.removeAttribute('data-tn-contrast-fixed')}run()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-atlas-theme']});
addEventListener('scroll',run,{passive:true});window.TsukuruContrast={fix};run();
})();
