/* つくるノート：ワイヤーフレーム（ブロックを積む簡易ワイヤーフレーム作成）。tsukuru-shell.js より前に読み込む。
   保存キー: tsukuru-wireframe-v1 = {draft:{…}, items:[{id,name,frame,blocks,updated}]}
   描画は1つの部品リスト（prims）から SVG プレビューと PNG（canvas）の両方を作る。外部ライブラリなし。 */
(()=>{'use strict';
const KEY='tsukuru-wireframe-v1';
const h=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const btn=(t,c,fn,aria)=>{const b=h('button','tn-btn '+(c||''),t);b.type='button';if(aria)b.setAttribute('aria-label',aria);b.onclick=fn;return b};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);

/* ---------- 枠と部品 ---------- */
const FRAMES={
 web:{label:'Web',sub:'PC 1440幅',W:1440,H:900,pad:40,gap:24,fs:40,hs:{S:96,M:220,L:520},kind:'stack'},
 phone:{label:'スマホ',sub:'390×844',W:390,H:844,pad:16,gap:12,fs:16,hs:{S:56,M:140,L:300},kind:'stack'},
 game:{label:'ゲーム横長',sub:'1280×720 / 16:9',W:1280,H:720,pad:32,gap:0,fs:26,kind:'free'}};
const WEB_PARTS=[['header','ヘッダー','サイト名','S'],['nav','ナビ','ホーム\n作品\nお知らせ\nお問い合わせ','S'],['hero','キービジュアル','キービジュアル','L'],['heading','見出し','見出し','S'],['text','テキスト','本文テキスト','M'],['image','画像','画像','M'],['section','セクション','セクション','M'],['columns','カラム','カラム','M'],['card2','カード×2','カード','M'],['card3','カード×3','カード','M'],['button','ボタン','ボタン','S'],['form','フォーム','お問い合わせ\nお名前\nメール\n送信','L'],['footer','フッター','© サイト名','S']];
/* game: [type,名前,初期ラベル,初期位置(縦+横),基準幅(比),基準高(比)] */
const GAME_PARTS=[['logo','タイトルロゴ','タイトルロゴ','tc',.5,.2],['menu','メニューボタン群','はじめから\nつづきから\n設定','bc',.3,.36],['char','立ち絵','立ち絵','br',.26,.86],['dialog','セリフ枠','セリフがここに入ります。\n2行目のセリフ。','bc',.9,.26],['name','名前欄','名前','bl',.18,.08],['choice','選択肢','選択肢A\n選択肢B\n選択肢C','mc',.46,.4],['save','セーブスロット','セーブ','mc',.84,.74],['hud','ステータス/HUD','HP\nMP','tl',.3,.14]];
const PART=Object.fromEntries([...WEB_PARTS.map(p=>[p[0],{name:p[1],label:p[2],h:p[3]}]),...GAME_PARTS.map(p=>[p[0],{name:p[1],label:p[2],pos:p[3],bw:p[4],bh:p[5]}])]);
const SIZES=[['S','S'],['M','M'],['L','L']],VPOS=[['t','上'],['m','中'],['b','下']],HPOS=[['l','左'],['c','中央'],['r','右']];
const SCALE={S:.7,M:1,L:1.3};
function newBlock(type,frame){const p=PART[type];return TsukuruReal.normalize({blocks:[{id:uid(),type,label:p.label,h:p.h||'M',w:'full',pos:frame==='game'?p.pos||'mc':'mc'}]}).blocks[0]}

/* ---------- 1画面目（ファーストビュー）の線 ---------- */
const FKEY='tsukuru-wireframe-fold-v1';
const FOLDS=[[844,'844（390×844 最近のiPhone）'],[640,'640（360×640 / 720×1280設計の1画面）'],[667,'667（375×667 SE）']];
function foldPref(){let d={};try{d=JSON.parse(localStorage.getItem(FKEY)||'{}')||{}}catch{}return{phone:FOLDS.some(f=>f[0]===d.phone)?d.phone:844,show:d.show!==false,png:d.png!==false}}
function setFold(k,v){const d=foldPref();d[k]=v;try{localStorage.setItem(FKEY,JSON.stringify(d))}catch{}}
function foldY(frame){return frame==='phone'?foldPref().phone:frame==='web'?900:null}
/* ---------- 配置計算 ---------- */
function layout(wf){const F=FRAMES[wf.frame],out=[];
 if(F.kind==='stack'){
  // 子カラムも同じ配置計算に通す。SVGとPNGに別々のレイアウトを持たせない。
  function stack(bs,x,start,w,nested=false){let y=start;
   function place(b,bx,by,bw){const R={b,x:bx,y:by,w:bw,h:F.hs[b.h]||F.hs.M,nested};out.push(R);
    if(b.type==='columns'){const cols=b.children||[],n=wf.frame==='phone'?1:b.cols,g=F.gap,cw=(bw-g*(n-1))/n;let bottom=by;
     if(n===1){for(const col of cols){bottom=stack(col,bx,bottom+g,bw,true)+g}}
     else cols.forEach((col,i)=>{bottom=Math.max(bottom,stack(col,bx+i*(cw+g),by+g,cw,true)+g)});
     R.h=Math.max(R.h,bottom-by)}
    if(b.type==='section')R.h=Math.max(R.h,stack(b.children||[],bx+F.gap,by+F.fs*2,bw-F.gap*2,true)-by+F.gap);
    return R.h}
   for(let i=0;i<bs.length;i++){const b=bs[i];if(b.w==='half'){const cw=(w-F.gap)/2;let hh=place(b,x,y,cw);if(bs[i+1]?.w==='half')hh=Math.max(hh,place(bs[++i],x+cw+F.gap,y,cw));y+=hh+F.gap}else y+=place(b,x,y,w)+F.gap}
   return bs.length?y-F.gap:start}
  const end=stack(wf.blocks,F.pad,F.pad,F.W-F.pad*2);return{W:F.W,H:Math.max(F.H,Math.ceil(end+F.pad)),rects:out}}
 for(const b of wf.blocks){const p=PART[b.type]||{bw:.3,bh:.2},s=SCALE[b.h]||1;let w=b.w==='full'?F.W-F.pad*2:Math.min(F.W-F.pad*2,F.W*p.bw*s),hh=Math.min(F.H-F.pad*2,F.H*p.bh*s);
  const v=b.pos[0],c=b.pos[1];const x=c==='l'?F.pad:c==='r'?F.W-F.pad-w:(F.W-w)/2,y=v==='t'?F.pad:v==='b'?F.H-F.pad-hh:(F.H-hh)/2;out.push({b,x,y,w,h:hh})}
 return{W:F.W,H:F.H,rects:out}}

/* ---------- 描画部品（prims） ---------- */
/* r=四角(c: blk=ブロック, in=濃い, pl=淡い枠, lbl=文字の台) / x=画像のバツ / t=文字 */
function prims(R,fs){const{b,x,y,w,h:H}=R,L=String(b.label||'').split('\n').map(s=>s.trim()).filter(Boolean),first=L[0]||PART[b.type]?.name||'',P=[],f=Math.min(fs,H*.42);
 const r=(x,y,w,h,c='blk')=>P.push({k:'r',x,y,w,h,c}),cross=(x,y,w,h)=>P.push({k:'x',x,y,w,h}),t=(x,y,s,size=f,a='middle',bold)=>P.push({k:'t',x,y,s,size,a,bold});
 const tag=(cx,cy,s,size=f)=>{const tw=Math.min(w-8,s.length*size*1.05+size);r(cx-tw/2,cy-size*.85,tw,size*1.7,'lbl');t(cx,cy,s,size)};
 const bars=(items,bx,by,bw,bh)=>{const n=Math.max(1,items.length),g=Math.min(14,bh*.08),ih=(bh-g*(n-1))/n;items.forEach((s,i)=>{const yy=by+i*(ih+g);r(bx,yy,bw,ih,'in');t(bx+bw/2,yy+ih/2,s,Math.min(f,ih*.5))})};
 switch(b.type){
 case'columns':r(x,y,w,H,'pl');break;
 case'section':r(x,y,w,H,'pl');t(x+f*.8,y+f,first,f,'start',1);break;
 case'header':r(x,y,w,H);{const lg=Math.min(H*.6,48);r(x+H*.25,y+(H-lg)/2,lg,lg,'in');t(x+H*.25+lg+12,y+H/2,first,f,'start',1);for(let i=0;i<3;i++)r(x+w-(i+1)*(Math.min(110,w*.12)+12),y+H*.38,Math.min(110,w*.12),H*.24,'in')}break;
 case'nav':{r(x,y,w,H);const n=Math.max(1,L.length),g=12,iw=(w-g*(n+1))/n;L.forEach((s,i)=>{r(x+g+i*(iw+g),y+H*.2,iw,H*.6,'pl');t(x+g+i*(iw+g)+iw/2,y+H/2,s,Math.min(f,H*.3,iw/Math.max(2,s.length)))})}break;
 case'hero':case'image':case'char':r(x,y,w,H);cross(x,y,w,H);tag(x+w/2,y+H/2,first);break;
 case'heading':r(x,y,w,H);t(x+f*.8,y+H/2,first,Math.min(f*1.3,H*.5),'start',1);break;
 case'text':case'dialog':{r(x,y,w,H);const lh=Math.min(f*1.5,H/3.5);let yy=y+lh;(L.length?L:['']).forEach(s=>{if(yy<y+H-4){t(x+f*.8,yy,s,Math.min(f,lh*.7),'start');yy+=lh}});for(;yy<y+H-lh*.3;yy+=lh)r(x+f*.8,yy-lh*.18,(w-f*1.6)*(yy+lh>y+H-lh*.3?.6:1),lh*.32,'in')}break;
 case'card2':case'card3':{const n=b.type==='card2'?2:3,g=Math.min(20,w*.03),cw=(w-g*(n-1))/n;for(let i=0;i<n;i++){const cx=x+i*(cw+g);r(cx,y,cw,H);cross(cx,y,cw,H*.55);const cf=Math.min(f,H*.14,cw/Math.max(3,first.length+2));t(cx+cw*.08,y+H*.68,first+(i+1),cf,'start',1);r(cx+cw*.08,y+H*.82,cw*.7,Math.max(4,H*.06),'in')}}break;
 case'button':{r(x,y,w,H,'pl');const bw=Math.min(w*.8,Math.max(160,first.length*f*1.2+f*2)),bh=Math.min(H*.7,f*2.4);r(x+(w-bw)/2,y+(H-bh)/2,bw,bh,'in');t(x+w/2,y+H/2,first,Math.min(f,bh*.45),'middle',1)}break;
 case'form':{r(x,y,w,H);const items=L.slice(1,-1),sub=L.length>1?L[L.length-1]:'送信',n=items.length+2,rh=H/(n+.5);t(x+f*.8,y+rh*.6,first,Math.min(f,rh*.45),'start',1);items.forEach((s,i)=>{const yy=y+rh*(i+1.1);t(x+f*.8,yy+rh*.4,s,Math.min(f*.8,rh*.35),'start');r(x+w*.3,yy+rh*.12,w*.62,rh*.6,'pl')});const by=y+rh*(n-.7),bw=Math.min(w*.4,260);r(x+(w-bw)/2,by,bw,rh*.6,'in');t(x+w/2,by+rh*.3,sub,Math.min(f*.8,rh*.3),'middle',1)}break;
 case'footer':r(x,y,w,H,'in');t(x+w/2,y+H/2,first,f*.8);break;
 case'logo':r(x,y,w,H);t(x+w/2,y+H/2,first,Math.min(f*1.6,H*.4,w/Math.max(2,first.length)),'middle',1);break;
 case'menu':case'choice':bars(L.length?L:[first],x,y,w,H);break;
 case'name':r(x,y,w,H,'in');t(x+w/2,y+H/2,first,Math.min(f,H*.5));break;
 case'save':{r(x,y,w,H);const th=Math.min(f*1.8,H*.15);t(x+f,y+th*.7,first,Math.min(f,th*.7),'start',1);const cols=2,rows=3,g=12,sw=(w-g*(cols+1))/cols,sh=(H-th-g*(rows+1))/rows;for(let i=0;i<cols*rows;i++){const sx=x+g+(i%cols)*(sw+g),sy=y+th+g+Math.floor(i/cols)*(sh+g);r(sx,sy,sw,sh,'pl');r(sx+6,sy+6,sh*1.4-12,sh-12,'in');t(sx+sh*1.4+4,sy+sh/2,'スロット'+(i+1),Math.min(f*.7,sh*.3),'start')}}break;
 case'hud':{r(x,y,w,H);const items=L.length?L:['HP'],rh=H/items.length;items.forEach((s,i)=>{const yy=y+i*rh;t(x+12,yy+rh/2,s,Math.min(f*.7,rh*.5),'start',1);r(x+w*.3,yy+rh*.3,w*.62,rh*.4,'pl');r(x+w*.3,yy+rh*.3,w*.62*(.75-i*.25>.15?.75-i*.25:.3),rh*.4,'in')})}break;
 default:r(x,y,w,H);t(x+w/2,y+H/2,first)}
 return P}

/* ---------- SVG プレビュー ---------- */
const NS='http://www.w3.org/2000/svg';
const sv=(t,a)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);return e};
function svg(wf,sel,onPick){const{W,H,rects}=layout(wf),fs=FRAMES[wf.frame].fs;const s=sv('svg',{viewBox:`0 0 ${W} ${H}`,class:'wf-svg',role:'img','aria-label':FRAMES[wf.frame].label+'のワイヤーフレーム（'+wf.blocks.length+'ブロック）'});
 s.append(sv('rect',{x:0,y:0,width:W,height:H,class:'wf-bgr'}));
 for(const R of rects){const g=sv('g',{class:'wf-g'+(R.b.id===sel?' wf-sel':''),'data-id':R.b.id});
  for(const p of prims(R,fs)){if(p.k==='r')g.append(sv('rect',{x:p.x,y:p.y,width:Math.max(0,p.w),height:Math.max(0,p.h),rx:Math.min(8,p.h/4),class:'wf-'+p.c}));
   else if(p.k==='x')g.append(sv('path',{d:`M${p.x} ${p.y}L${p.x+p.w} ${p.y+p.h}M${p.x+p.w} ${p.y}L${p.x} ${p.y+p.h}`,class:'wf-cross'}));
   else{const e=sv('text',{x:p.x,y:p.y,'font-size':p.size,'text-anchor':p.a,'dominant-baseline':'central',class:'wf-txt'+(p.bold?' wf-b':'')});e.textContent=p.s;g.append(e)}}
  const hit=sv('rect',{x:R.x,y:R.y,width:R.w,height:R.h,class:'wf-hit'});g.append(hit);g.addEventListener('click',()=>onPick(R.b.id));s.append(g)}
 const fy=foldY(wf.frame);if(fy&&foldPref().show&&fy<=H){const fs2=wf.frame==='web'?28:14;s.append(sv('line',{x1:0,y1:fy,x2:W,y2:fy,class:'wf-fold'}));const t=sv('text',{x:W-8,y:fy-6,'font-size':fs2,'text-anchor':'end',class:'wf-foldtxt'});t.textContent='1画面目ここまで（'+fy+'）';s.append(t)}
 return s}

/* ---------- PNG（canvas） ---------- */
function themeColors(el){const cs=getComputedStyle(el),v=n=>cs.getPropertyValue(n).trim();return{bg:v('--wf-bg'),blk:v('--wf-block'),in:v('--wf-inner'),pl:v('--wf-place'),line:v('--wf-line'),txt:v('--wf-text'),lbl:v('--wf-block'),fold:v('--wf-fold')}}
function toCanvas(wf,C){const{W,H,rects}=layout(wf),fs=FRAMES[wf.frame].fs;const k=Math.min(1,8000/H);const cv=document.createElement('canvas');cv.width=Math.round(W*k);cv.height=Math.round(H*k);const x=cv.getContext('2d');x.scale(k,k);
 x.fillStyle=C.bg;x.fillRect(0,0,W,H);const font=getComputedStyle(document.body).getPropertyValue('--tn-font')||'sans-serif';
 const rr=(a,b,w,hh,r)=>{x.beginPath();if(x.roundRect)x.roundRect(a,b,w,hh,r);else x.rect(a,b,w,hh)};
 for(const R of rects)for(const p of prims(R,fs)){if(p.k==='r'){if(p.w<=0||p.h<=0)continue;rr(p.x,p.y,p.w,p.h,Math.min(8,p.h/4));x.fillStyle=p.c==='in'?C.in:p.c==='pl'?C.pl:C.blk;x.fill();x.lineWidth=2;x.strokeStyle=C.line;if(p.c!=='lbl')x.stroke()}
  else if(p.k==='x'){x.beginPath();x.moveTo(p.x,p.y);x.lineTo(p.x+p.w,p.y+p.h);x.moveTo(p.x+p.w,p.y);x.lineTo(p.x,p.y+p.h);x.lineWidth=2;x.strokeStyle=C.line;x.stroke()}
  else{x.fillStyle=C.txt;x.font=(p.bold?'700 ':'400 ')+p.size+'px '+font;x.textAlign=p.a==='middle'?'center':'left';x.textBaseline='middle';x.fillText(p.s,p.x,p.y)}}
 const fy=foldY(wf.frame);if(fy&&foldPref().png&&fy<=H){x.save();x.setLineDash([12,8]);x.lineWidth=3;x.strokeStyle=C.fold;x.beginPath();x.moveTo(0,fy);x.lineTo(W,fy);x.stroke();x.restore();x.fillStyle=C.fold;x.font='700 '+(wf.frame==='web'?28:14)+'px '+font;x.textAlign='right';x.textBaseline='alphabetic';x.fillText('1画面目ここまで（'+fy+'）',W-8,fy-6)}
 return cv}

/* ---------- HTML 骨組み ---------- */
function toHTML(wf){const lines=b=>String(b.label||'').split('\n').map(s=>s.trim()).filter(Boolean),one=b=>esc(lines(b)[0]||PART[b.type].name);
 const part=(b,ind)=>{const I=ind,L=lines(b);switch(b.type){
  case'header':return`${I}<header class="site-header">\n${I}  <p class="site-title"><a href="#">${one(b)}</a></p>\n${I}</header>`;
  case'nav':return`${I}<nav class="site-nav" aria-label="メイン">\n${I}  <ul>\n${(L.length?L:['ホーム']).map(s=>`${I}    <li><a href="#">${esc(s)}</a></li>`).join('\n')}\n${I}  </ul>\n${I}</nav>`;
  case'hero':return`${I}<section class="hero">\n${I}  <h1>${one(b)}</h1>\n${I}  <img src="hero.jpg" alt="" width="1440" height="600">\n${I}</section>`;
  case'heading':return`${I}<h2>${one(b)}</h2>`;
  case'text':return(L.length?L:['本文']).map(s=>`${I}<p>${esc(s)}</p>`).join('\n');
  case'image':return`${I}<figure>\n${I}  <img src="image.jpg" alt="${one(b)}" width="800" height="450">\n${I}  <figcaption>${one(b)}</figcaption>\n${I}</figure>`;
  case'card2':case'card3':{const n=b.type==='card2'?2:3;let s=`${I}<div class="cards">`;for(let i=1;i<=n;i++)s+=`\n${I}  <article class="card">\n${I}    <img src="card${i}.jpg" alt="" width="400" height="240">\n${I}    <h3>${one(b)}${i}</h3>\n${I}    <p>説明文</p>\n${I}  </article>`;return s+`\n${I}</div>`}
  case'button':return`${I}<button type="button">${one(b)}</button>`;
  case'form':{const items=L.slice(1,-1),sub=L.length>1?L[L.length-1]:'送信';return`${I}<form action="#" method="post">\n${I}  <h2>${one(b)}</h2>\n${items.map((s,i)=>`${I}  <p>\n${I}    <label for="f${b.id}-${i}">${esc(s)}</label>\n${I}    <input id="f${b.id}-${i}" name="field${i+1}" type="${/メール|mail/i.test(s)?'email':'text'}">\n${I}  </p>`).join('\n')}${items.length?'\n':''}${I}  <button type="submit">${esc(sub)}</button>\n${I}</form>`}
  case'footer':return`${I}<footer class="site-footer">\n${I}  <p><small>${one(b)}</small></p>\n${I}</footer>`;
  default:return`${I}<div>${one(b)}</div>`}};
 const top=[],mid=[],bot=[];const bs=wf.blocks;let i=0;while(i<bs.length&&['header','nav'].includes(bs[i].type))top.push(bs[i++]);let j=bs.length;while(j>i&&bs[j-1].type==='footer')j--;mid.push(...bs.slice(i,j));bot.push(...bs.slice(j));
 const body=[];for(const b of top)body.push(part(b,'  '));const m=[];for(let k=0;k<mid.length;k++){const b=mid[k];if(b.w==='half'&&mid[k+1]?.w==='half'){m.push(`    <div class="row">\n${part(b,'      ')}\n${part(mid[k+1],'      ')}\n    </div>`);k++}else m.push(part(b,'    '))}
 body.push('  <main>'+(m.length?'\n'+m.join('\n')+'\n  ':'')+'</main>');for(const b of bot)body.push(part(b,'  '));
 return`<!DOCTYPE html>\n<html lang="ja">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${esc(wf.name||'ワイヤーフレーム')}</title>\n</head>\n<body>\n${body.join('\n')}\n</body>\n</html>\n`}

/* ---------- 保存 ---------- */
function load(){try{const d=JSON.parse(localStorage.getItem(KEY)||'{}');return{draft:valid(d.draft)?TsukuruReal.normalize(d.draft):blank('phone'),items:Array.isArray(d.items)?d.items.filter(valid).map(TsukuruReal.normalize):[]}}catch{return{draft:blank('phone'),items:[]}}}
function valid(w){const check=bs=>Array.isArray(bs)&&bs.every(b=>b&&PART[b.type]&&(b.type!=='columns'||!b.children||(Array.isArray(b.children)&&b.children.every(check)))&&(b.type!=='section'||!b.children||check(b.children)));return w&&FRAMES[w.frame]&&check(w.blocks)}
function blank(frame){return{id:uid(),name:'',frame,blocks:[],version:2}}
function persist(st){try{localStorage.setItem(KEY,JSON.stringify(st));return true}catch{return false}}

/* ---------- 画面 ---------- */
function wireframe(box){const st=load();let wf=st.draft,sel=null,view='wire',saveOK=true;const save=()=>{st.draft=wf;saveOK=persist(st);storageNotice.hidden=saveOK;if(!saveOK)storageNotice.textContent='保存容量が足りないか、保存が無効です。今回の変更は再読み込みで失われます。画像を減らすかHTMLを書き出してください。';return saveOK};
 box.classList.add('wf');box.append(h('p','tn-hint','部品をタップすると下に積み重なります。'),h('p','tn-hint wf-hint2','ブロックをタップすると編集できます。'));
 const status=h('p','wt-status');status.setAttribute('role','status');const storageNotice=h('p','wf-storage-notice');storageNotice.setAttribute('role','alert');storageNotice.hidden=true;
 const tabs=h('div','tn-subtabs wf-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','画面の種類');
 const keys=Object.keys(FRAMES);keys.forEach((k,n)=>{const F=FRAMES[k];const b=h('button','tn-subtab wf-tab');b.type='button';b.setAttribute('role','tab');b.id='wfTab-'+k;b.dataset.f=k;b.setAttribute('aria-controls','wfPanel');b.append(h('span','wf-tab1',F.label),h('span','wf-tab2',F.sub));
  const pick=v=>{if(wf.frame===v)return;if(wf.blocks.length&&(v==='game')!==(wf.frame==='game')){wf=Object.assign(blank(v),{name:wf.name});status.textContent='Web・スマホとゲームでは部品が違うため、新しい白紙にしました'}else{wf.frame=v;if(v==='game')wf.blocks.forEach(b=>b.w='half')}sel=null;save();draw()};
  b.onclick=()=>pick(k);b.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const m=keys[(n+(e.key==='ArrowRight'?1:keys.length-1))%keys.length];pick(m);tabs.querySelector('[data-f="'+m+'"]').focus()}};tabs.append(b)});
 const panel=h('div','wf-panel');panel.id='wfPanel';panel.setAttribute('role','tabpanel');
 const viewBox=h('div','wf-view-switch');const stage=h('div','wf-stage'),meta=h('p','wf-meta'),foldBox=h('div','wf-foldbox'),palette=h('div','wf-palette'),list=h('ol','wf-blocks');
 const exp=h('section','wt-card wt-open wf-exp');const savedSec=h('section','wt-card wt-open wf-saved');
 panel.append(h('h2','wt-title','プレビュー'),viewBox,meta,stage,foldBox,h('h2','wt-title','部品を追加'),palette,h('h2','wt-title','ブロック'),list);
 box.append(tabs,panel,storageNotice,status,exp,savedSec);
 const pickBlock=id=>{sel=id;draw();const item=list.querySelector('[data-id="'+CSS.escape(id)+'"]');if(item){item.scrollIntoView({block:'center',behavior:'smooth'});const c=item.querySelector('.wf-editor textarea,.wf-editor select,.wf-editor [aria-checked="true"]')||item.querySelector('.wf-pick');c?.focus({preventScroll:true})}};
 function seg(name,opts,cur,on){const g=h('div','wf-seg');g.setAttribute('role','radiogroup');g.setAttribute('aria-label',name);g.append(h('span','wf-seglab',name));for(const[v,t]of opts){const b=h('button','wf-segbtn',t);b.type='button';b.setAttribute('role','radio');b.setAttribute('aria-checked',String(v===cur));b.setAttribute('aria-label',name+' '+t);b.tabIndex=v===cur?0:-1;b.onclick=()=>on(v);b.onkeydown=e=>{if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].includes(e.key))return;e.preventDefault();const i=opts.findIndex(o=>o[0]===v),n=opts[(i+(['ArrowRight','ArrowDown'].includes(e.key)?1:opts.length-1))%opts.length];on(n[0]);box.querySelector('[role="radiogroup"][aria-label="'+CSS.escape(name)+'"] [aria-label="'+CSS.escape(name+' '+n[1])+'"]')?.focus()};g.append(b)}return g}
 function draw(){for(const b of tabs.children){const on=b.dataset.f===wf.frame;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1}panel.setAttribute('aria-labelledby','wfTab-'+wf.frame);
  const F=FRAMES[wf.frame],Lo=layout(wf);stage.dataset.frame=wf.frame;drawStage();viewBox.replaceChildren(seg('表示',[['wire','ワイヤーフレーム表示'],['real','実表示']],view,v=>{view=v;draw()}));meta.textContent=F.label+'（'+F.sub+'）　'+Lo.W+'×'+Lo.H+'px　'+wf.blocks.length+'ブロック';
  drawFold();palette.replaceChildren();for(const p of wf.frame==='game'?GAME_PARTS:WEB_PARTS){const b=h('button','wf-part');b.type='button';b.textContent='＋ '+p[1];b.setAttribute('aria-label',p[1]+'を追加');b.onclick=()=>{const nb=newBlock(p[0],wf.frame);if(wf.frame==='game')nb.w=p[0]==='dialog'?'full':'half';wf.blocks.push(nb);sel=nb.id;save();draw();status.textContent=p[1]+'を追加しました'};palette.append(b)}
  list.replaceChildren();if(!wf.blocks.length)list.append(h('li','tn-hint','まだブロックがありません。上の部品をタップしてください。'));
  renderItems(wf.blocks,list);
  drawExport();drawSaved()}
 function drawStage(){
  if(view==='wire'){stage.replaceChildren(svg(wf,sel,pickBlock));return}
  const frame=h('iframe','wf-real-frame');frame.title='実表示プレビュー（リンクは編集用に無効）';frame.setAttribute('sandbox','allow-same-origin');
  // iframe内の幅でメディアクエリーを評価。プレビュー・書き出しは同一HTML。
  frame.onload=()=>{const doc=frame.contentDocument;if(!doc)return;const fit=()=>{frame.style.height=Math.min(8000,Math.max(300,Math.ceil(doc.body.getBoundingClientRect().height)))+'px'};fit();new ResizeObserver(fit).observe(doc.body);
   for(const im of doc.images)im.addEventListener('load',fit);
   doc.addEventListener('click',e=>{e.preventDefault();const el=e.target.closest('[data-block-id]');if(el)pickBlock(el.dataset.blockId)});
  };frame.srcdoc=TsukuruReal.documentHTML(wf,layout(wf));stage.replaceChildren(frame);
 }
 function field(parent,b,label,key,type='text'){
  const lab=h('label','wf-lab');lab.append(h('span','',label));const input=h(type==='textarea'?'textarea':'input',type==='textarea'?'wf-ta':'wf-name');
  if(type!=='textarea')input.type=type;else input.rows=3;input.value=b.content[key]||'';input.oninput=()=>{b.content[key]=input.value;if(key==='text')b.label=input.value;save();drawStage()};lab.append(input);parent.append(lab);return input;
 }
 function imageFields(parent,b){
  field(parent,b,'画像URL（https://…）','image','url');field(parent,b,'代替テキスト（装飾画像は空欄）','alt');
  const lab=h('label','wf-lab');lab.append(h('span','','端末の画像を選択（URLを置き換え）'));const file=h('input','wf-name');file.type='file';file.accept='image/png,image/jpeg,image/webp,image/gif';file.onchange=async()=>{if(!file.files[0])return;file.disabled=true;try{const data=await TsukuruReal.compress(file.files[0]);b.content.image=data;if(save())status.textContent='画像を縮小して保存しました';draw()}catch(e){status.textContent=e.message}finally{file.disabled=false}};lab.append(file);parent.append(lab);
  parent.append(btn('画像を外す','ghost',()=>{b.content.image='';save();draw()}));
 }
 function renderItems(bs,ul){bs.forEach((b,i)=>{
  const li=h('li','wf-item'+(b.id===sel?' wf-on':''));li.dataset.id=b.id;const nm=PART[b.type].name;
  const head=h('div','wf-ihead'),acts=h('div','wf-iacts');head.append(btn((i+1)+'. '+nm,'ghost wf-pick',()=>pickBlock(b.id),nm+'の内容を編集'));
  const mv=d=>{const j=i+d;if(j<0||j>=bs.length)return;[bs[i],bs[j]]=[bs[j],bs[i]];sel=b.id;save();draw()};
  const up=btn('↑','ghost wf-ib wf-up',()=>mv(-1),nm+'を上へ');up.disabled=i===0;const down=btn('↓','ghost wf-ib wf-down',()=>mv(1),nm+'を下へ');down.disabled=i===bs.length-1;
  acts.append(up,down,btn('削除','ghost wf-ib wf-del',()=>{bs.splice(i,1);sel=null;save();draw()},nm+'を削除'));head.append(acts);li.append(head);
  if(b.id===sel){const edit=h('div','wf-editor');edit.setAttribute('role','group');edit.setAttribute('aria-label',nm+'の内容');
   if(b.type!=='columns')field(edit,b,b.type==='heading'?'見出しテキスト':b.type==='text'?'本文テキスト':b.type==='button'?'ボタンの文字':'表示する文字','text','textarea');
   if(b.type==='heading'){const lab=h('label','wf-lab');lab.append(h('span','','見出しレベル'));const se=h('select','wf-select');se.setAttribute('aria-label','見出しレベル');for(const v of ['h1','h2','h3']){const o=h('option','',v);o.value=v;o.selected=v===b.content.level;se.append(o)}se.onchange=()=>{b.content.level=se.value;save();drawStage()};lab.append(se);edit.append(lab,h('p','wt-desc','最初の見出しはh1、以降は飛び級しない階層に自動調整します。'))}
   if(b.type==='image'||b.type==='hero')imageFields(edit,b);
   if(b.type==='button'||b.type==='hero'){if(b.type==='hero')field(edit,b,'ボタンの文字','buttonText');field(edit,b,'リンク先URL（https://… / #… / ./…）','href','text')}
   if(b.type==='columns')edit.append(seg('列数',[[2,'2'],[3,'3'],[4,'4']],b.cols,v=>{const old=b.children;b.cols=v;b.children=Array.from({length:v},(_,j)=>old[j]||[]);if(v<old.length)b.children[v-1].push(...old.slice(v).flat());save();draw()}),h('p','wt-desc','スマホでは列の順に縦積み。列数を減らすと末尾の列へ子ブロックを移します。'));
   edit.append(seg('高さ',SIZES,b.h,v=>{b.h=v;save();draw()}),seg('幅',wf.frame==='game'?[['half','標準'],['full','全幅']]:[['full','全幅'],['half','半分']],b.w,v=>{b.w=v;save();draw()}));
   if(wf.frame==='game')edit.append(seg('縦',VPOS,b.pos[0],v=>{b.pos=v+b.pos[1];save();draw()}),seg('横',HPOS,b.pos[1],v=>{b.pos=b.pos[0]+v;save();draw()}));li.append(edit);
  }else li.append(h('p','wt-desc',String(b.content.text||b.label||nm).slice(0,80)));
  const childUI=(child,j)=>{const sub=h('div','wf-children');sub.append(h('h3','wf-child-title',b.type==='columns'?(j+1)+'列目':'セクションの中'));const lab=h('label','wf-lab');lab.append(h('span','','追加する子ブロック'));const se=h('select','wf-select');se.setAttribute('aria-label','追加する子ブロック');for(const p of WEB_PARTS.filter(p=>!['header','footer'].includes(p[0]))){const o=h('option','',p[1]);o.value=p[0];se.append(o)}lab.append(se);sub.append(lab,btn('子ブロックを追加','ghost wf-add-child',()=>{const nb=newBlock(se.value,wf.frame);child.push(nb);sel=nb.id;save();draw()}));const ol=h('ol','wf-blocks');renderItems(child,ol);sub.append(ol);li.append(sub)};
  if(b.type==='columns')b.children.forEach(childUI);if(b.type==='section')childUI(b.children,0);ul.append(li);
 })}
 function exportDialog(){const d=h('dialog','wf-dialog');d.setAttribute('aria-labelledby','wfExportTitle');const title=h('h2','','HTMLで書き出す');title.id='wfExportTitle';d.append(title);
  const inp=(label,value)=>{const l=h('label','wf-lab');l.append(h('span','',label));const i=h('input','wf-name');i.type='text';i.value=value;l.append(i);d.append(l);return i};
  const titleInput=inp('ページタイトル',wf.name||'Webページ'),filename=inp('ファイル名',wf.name||'web-page');
  d.append(h('p','wt-desc','画像を埋め込んだ単一HTMLを作成します。URL画像は配信元のCORS設定で埋め込めない場合があります。見出し階層は自動調整します。'));
  const note=h('p','wf-export-notice');note.setAttribute('role','status');d.append(note);const actions=h('div','tn-acts');let prepared=null;
  const download=()=>{const html=TsukuruReal.documentHTML(prepared.wf,layout(prepared.wf),titleInput.value),blob=new Blob([html],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob),a=h('a');a.href=url;a.download=(filename.value.trim().replace(/\.html?$/i,'').replace(/[\\/:*?"<>|\u0000-\u001f]/g,'-').replace(/^\.+/,'')||'web-page')+'.html';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);status.textContent=prepared.warnings.length?'HTMLを書き出しました。一部の画像は外部URLのため、オフラインでは表示できません。':'画像を埋め込んだ単体HTMLを書き出しました';d.close()};
  const go=btn('HTMLをダウンロード','wf-download',async()=>{if(prepared){download();return}go.disabled=true;note.textContent='画像を埋め込み中…';try{prepared=await TsukuruReal.embedImages(wf);if(prepared.warnings.length){note.textContent='埋め込めない画像が'+prepared.warnings.length+'件あります（CORS・形式・通信など）。このまま書き出すと外部URLが残り、単体・オフライン表示は保証できません。完全な単体HTMLにするには端末の画像を選び直してください。';go.textContent='外部画像URLを残して書き出す'}else download()}catch(e){note.textContent='書き出しに失敗しました：'+e.message}finally{go.disabled=false}});
  actions.append(go,btn('閉じる','ghost',()=>d.close()));d.append(actions);const previous=document.activeElement;d.addEventListener('close',()=>{d.remove();if(previous?.isConnected)previous.focus()});document.body.append(d);d.showModal();titleInput.focus();
 }
 const out=h('pre','wt-code wf-html');out.hidden=true;out.tabIndex=0;
 function drawFold(){foldBox.replaceChildren();const fy=foldY(wf.frame);foldBox.hidden=!fy||view==='real';if(foldBox.hidden)return;const P=foldPref();
  const ck=(txt,k,cls)=>{const l=h('label','wf-check '+(cls||''));const i=h('input');i.type='checkbox';i.checked=P[k];i.onchange=()=>{setFold(k,i.checked);draw()};l.append(i,h('span','',txt));return l};
  foldBox.append(ck('1画面目の線を表示','show','wf-fold-show'));
  if(wf.frame==='phone'){const l=h('label','wf-lab wf-foldsel');l.append(h('span','','1画面目の高さ'));const se=h('select','wf-select');se.id='wfFoldSel';for(const[v,t]of FOLDS){const o=h('option','',t);o.value=v;o.selected=v===P.phone;se.append(o)}se.onchange=()=>{setFold('phone',+se.value);draw()};l.append(se);foldBox.append(l)}
  else foldBox.append(h('p','wt-desc','1画面目：900px（1440×900）'));
  foldBox.append(ck('PNGにも線を入れる','png','wf-fold-png'),h('p','wt-desc wf-tip','実装では height:100svh が定番'))}
 function drawExport(){exp.replaceChildren(h('h2','wt-title','書き出し'));const a=h('div','tn-acts');
  a.append(btn('HTMLで書き出す','wf-export',exportDialog));
  a.append(btn('PNGで保存','wf-png',()=>{if(!wf.blocks.length){status.textContent='ブロックを追加してから保存してください';return}const cv=toCanvas(wf,themeColors(box));cv.toBlob(bl=>{if(!bl){status.textContent='PNGを作れませんでした';return}const u=URL.createObjectURL(bl),l=h('a');l.href=u;l.download=(wf.name||'wireframe')+'-'+wf.frame+'.png';document.body.append(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);status.textContent='PNGを保存しました（'+cv.width+'×'+cv.height+'px）'},'image/png')}));
  if(wf.frame!=='game')a.append(btn('HTMLの骨組みをコピー','ghost wf-copy',async()=>{const t=toHTML(wf);out.textContent=t;out.hidden=false;try{await navigator.clipboard.writeText(t);status.textContent='HTMLをコピーしました'}catch{const r=document.createRange();r.selectNodeContents(out);getSelection().removeAllRanges();getSelection().addRange(r);status.textContent='コピーできなかったため、下のHTMLを選択しました（長押しでコピー）'}}));
  exp.append(a);if(wf.frame==='game')exp.append(h('p','wt-desc','HTMLの骨組みはWeb・スマホ用です。ゲーム画面はPNGで保存してください。'));else exp.append(out)}
 function drawSaved(){savedSec.replaceChildren(h('h2','wt-title','保存（この端末）'));const row=h('div','wf-namerow');const lab=h('label','wf-lab');lab.append(h('span','','名前'));const nm=h('input','wf-name');nm.type='text';nm.value=wf.name||'';nm.placeholder='例：トップページ案';nm.oninput=()=>{wf.name=nm.value;save()};lab.append(nm);row.append(lab);savedSec.append(row);
  const a=h('div','tn-acts');a.append(btn('保存する','wf-save',()=>{const name=nm.value.trim()||('無題 '+new Date().toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}));wf.name=name;const copy=JSON.parse(JSON.stringify(wf));copy.updated=Date.now();const k=st.items.findIndex(x=>x.id===wf.id);if(k>=0)st.items[k]=copy;else st.items.unshift(copy);save();draw();if(saveOK)status.textContent='「'+name+'」を保存しました'}),btn('新しく作る','ghost wf-new',()=>{wf=blank(wf.frame);sel=null;save();draw();status.textContent='新しい白紙を用意しました'}));savedSec.append(a);
  const ul=h('ul','wf-savedlist');if(!st.items.length)ul.append(h('li','wt-desc','保存したワイヤーフレームはまだありません。'));
  for(const it of st.items){const li=h('li','wf-sitem');const tx=h('div','wf-stext');tx.append(h('strong','',it.name),h('small','',FRAMES[it.frame].label+'（'+FRAMES[it.frame].sub+'）'),h('small','',it.blocks.length+'ブロック'));
   const op=btn('開く','ghost',()=>{wf=JSON.parse(JSON.stringify(it));sel=null;save();draw();status.textContent='「'+it.name+'」を開きました';box.scrollIntoView({block:'start'})},it.name+'を開く');
   const dl=btn('削除','ghost wf-del',()=>{if(!confirm('「'+it.name+'」を削除しますか？'))return;st.items=st.items.filter(x=>x.id!==it.id);save();draw();status.textContent='「'+it.name+'」を削除しました'},it.name+'を削除');
   const ac=h('div','wf-sacts');ac.append(op,dl);li.append(tx,ac);ul.append(li)}savedSec.append(ul)}
 draw()}

window.TsukuruPages=Object.assign(window.TsukuruPages||{},{wireframe});
window.TsukuruWireframe={FRAMES,WEB_PARTS,GAME_PARTS,layout,prims,toHTML,toCanvas,KEY,newBlock,toRealHTML:(wf,title)=>TsukuruReal.documentHTML(wf,layout(wf),title)};
/* 検索（「ワイヤー」「wireframe」）から開けるようにする */
try{AtlasGlobalSearch.index.push({title:'ワイヤーフレーム',text:'wireframe ワイヤー 画面設計 レイアウト案 Web スマホ ゲーム PNG HTML骨組み 実表示 HTML書き出し ページ作成',domain:'web',open:()=>TsukuruShell.openPage('wireframe','ワイヤーフレーム')})}catch{}
})();
