(()=>{'use strict';
const NS='http://www.w3.org/2000/svg';
const paths={
 home:'M3 10.5 12 3l9 7.5M5.5 9v12h5v-7h3v7h5V9',
 music:'M3 10v4M7.5 6v12M12 2v20m4.5-16v12M21 9v6',
 color:'m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6',
 web:'m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16',
 library:'M5 4h14v17l-7-4-7 4V4ZM8 1h8',
 search:'M16 16l5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
 up:'M12 20V4m-6 6 6-6 6 6',down:'M12 4v16m-6-6 6 6 6-6',arrow:'M4 12h15m-6-6 6 6-6 6',back:'M20 12H5m6-6-6 6 6 6',external:'M7 17 19 5M7 5h12v12',
 play:'m8 4 13 8-13 8V4Z',pause:'M7 4v16M17 4v16',stop:'M5 5h14v14H5Z',
 plus:'M12 4v16M4 12h16',check:'m4 12 5 5L20 6',close:'m5 5 14 14M19 5 5 19',
 download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',copy:'M9 8h12v13H9V8ZM4 16H3V3h12v1',
 save:'M5 3h12l4 4v14H3V3h2Zm2 0v6h10V3M7 21v-8h10v8',
 mic:'M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5Zm-3 6v1a6 6 0 0 0 12 0v-1M12 18v4M8 22h8',
 trash:'M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7',
 refresh:'M20 8a9 9 0 0 0-16-2M4 2v4h4M4 16a9 9 0 0 0 16 2m0 4v-4h-4',
 grid:'M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z',
 info:'M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z'
};
function icon(key){const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.classList.add('atlas-ui-icon');svg.dataset.icon=key;const path=document.createElementNS(NS,'path');path.setAttribute('d',paths[key]||paths.grid);svg.append(path);return svg}
function putIcon(node,key){if(node.querySelector(':scope > .atlas-ui-icon'))return;node.prepend(icon(key));node.classList.add('ui-has-icon')}
const hero=document.querySelector('.hero');const emblem=document.createElementNS(NS,'svg');emblem.setAttribute('viewBox','0 0 300 300');emblem.setAttribute('aria-hidden','true');emblem.classList.add('hero-emblem');emblem.innerHTML='<g fill="none" stroke="#69758d" stroke-width=".7"><circle cx="150" cy="150" r="122"/><circle cx="150" cy="150" r="108"/><path d="M150 10v28m0 224v28M10 150h28m224 0h28M64 64l13 13m146 146 13 13M64 236l13-13M223 77l13-13"/><ellipse cx="150" cy="150" rx="72" ry="122" transform="rotate(32 150 150)"/></g><image href="assets/brand/atlas-symbol-light-v4.svg" x="58" y="58" width="184" height="184"/><path d="M120 240h60" stroke="#93a8ec" stroke-width="2"/>';
hero.append(emblem);document.querySelector('.edition').textContent='CREATIVE SYSTEM / 03';
const topSearch=document.createElement('button');topSearch.type='button';topSearch.className='top-search';topSearch.style.display='none';topSearch.setAttribute('aria-label','まとめて検索');topSearch.append(icon('search'));topSearch.onclick=()=>document.querySelector('.nav>button:last-child:not([data-page])')?.click();document.querySelector('.top').append(topSearch);
for(const b of document.querySelectorAll('.nav [data-page]'))putIcon(b,b.dataset.page);
for(const b of document.querySelectorAll('.bottom-nav [data-page]')){const wrap=b.querySelector('.nav-icon');if(wrap)wrap.replaceChildren(icon(b.dataset.page));}
const back=document.getElementById('appBack');back.replaceChildren(icon('back'),document.createTextNode('戻る'));back.classList.add('ui-has-icon');document.getElementById('appHome').replaceChildren(icon('home'));
const navSearch=document.querySelector('.nav>button:last-child:not([data-page])');if(navSearch){navSearch.replaceChildren(icon('search'),document.createTextNode('まとめて検索'));navSearch.classList.add('ui-has-icon')}for(const b of document.querySelectorAll('.mobile-context button'))if(b.textContent.trim()==='⌕'){b.replaceChildren(icon('search'));b.setAttribute('aria-label','まとめて検索')}
const home=document.getElementById('homePage'),dashboard=home.querySelector('.workbench-dashboard'),quick=home.querySelector('.beginner-start');
const section=document.createElement('div');section.className='home-section-label';const heading=document.createElement('h2');heading.textContent='制作をはじめる';const sub=document.createElement('span');sub.textContent='THREE WORKSPACES';section.append(heading,sub);dashboard.before(section);if(quick)dashboard.after(quick);const glossary=document.querySelector('.beginner-glossary');const placeGlossary=()=>{if(!glossary)return;if(document.body.dataset.currentPage==='home'&&quick)quick.after(glossary);else hero.after(glossary)};const previousPage=showPage;showPage=function(p,record=true){previousPage(p,record);placeGlossary()};placeGlossary();
const arts={
 music:'<rect width="340" height="110" rx="6" fill="#eef0f5"/><g stroke="#465a86" stroke-width="3">'+Array.from({length:42},(_,i)=>{const h=12+Math.round((.5+.5*Math.sin(i*.51))*42*(.4+.6*Math.sin(i*.09)));return '<path d="M'+(15+i*7.55)+' '+(55-h)+'v'+(h*2)+'"/>'}).join('')+'</g><path d="M15 55h310" stroke="#8c9bb6" stroke-width=".5"/>',
 color:'<rect width="340" height="110" rx="6" fill="#f1f0ed"/><circle cx="118" cy="55" r="43" fill="#2c3447"/><circle cx="170" cy="55" r="43" fill="#a0adc6"/><circle cx="222" cy="55" r="43" fill="#d5d9df"/><path d="M170 12a43 43 0 0 1 0 86 43 43 0 0 1 0-86" fill="none" stroke="#fff" stroke-width=".8"/>',
 web:'<rect width="340" height="110" rx="6" fill="#252a35"/><g fill="#7684a1"><circle cx="17" cy="14" r="2"/><circle cx="26" cy="14" r="2"/><circle cx="35" cy="14" r="2"/></g><path d="M0 25h340" stroke="#3b4354"/><g fill="none" stroke-width="3" stroke-linecap="round"><path d="M24 44h36m11 0h77M37 60h50m11 0h90M37 76h34m11 0h64M24 92h36" stroke="#9cafd9"/><path d="M159 44h30M200 60h45M157 76h57" stroke="#e2e6ef"/></g>'};
for(const card of dashboard.children){const key=card.classList.contains('music')?'music':card.classList.contains('color')?'color':'web';const art=card.querySelector('.workbench-art'),svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 340 110');svg.setAttribute('aria-hidden','true');svg.innerHTML=arts[key];art.replaceChildren(svg);const corner=document.createElement('span');corner.className='card-corner';corner.append(icon(key));card.append(corner);const open=card.querySelector('.workbench-open');open.replaceChildren(document.createTextNode('スタジオを開く'),icon('external'));}
// Replace decorative glyphs on application controls, preserving text, handlers and educational examples.
function decorate(b){if(b.closest('[class^="desk-"],[class*=" desk-"]'))return;if(b.closest('.workbench-dashboard,.bottom-nav,.nav,.mobile-context,.top-search,iframe,.identity,.mockup')||b.querySelector(':scope > .atlas-ui-icon')||b.matches('.tabs button'))return;
 const text=b.textContent.trim();if(!text)return;let key;
 if(/^[↑]$/.test(text))key='up';else if(/^[↓]$/.test(text))key='down';else if(/^[↻↺]/.test(text))key='refresh';else if(/^[×]$/.test(text))key='close';else if(/^[✓✔]/.test(text))key='check';else if(/^[▶►]/.test(text))key='play';else if(/^[■⏹]/.test(text))key='stop';else if(/^[⏸Ⅱ]/.test(text))key='pause';else if(/^[⌕🔍]/.test(text))key='search';else if(/録音|マイク/.test(text))key='mic';else if(/コピー/.test(text))key='copy';else if(/ダウンロード|書き出|エクスポート|バックアップ/.test(text))key='download';else if(/削除/.test(text))key='trash';else if(/保存/.test(text))key='save';else if(/^[＋+]/.test(text))key='plus';else if(/^[←]/.test(text))key='back';else if(/[↗]$/.test(text))key='external';else if(/[→]$/.test(text))key='arrow';
 if(!key)return;if(!b.getAttribute('aria-label')&&/^[✓✔▶►■⏹⏸Ⅱ⌕🔍＋+←↗→×↑↓↻↺]+$/.test(text))b.setAttribute('aria-label',({check:'完了',play:'再生',stop:'停止',pause:'一時停止',search:'検索',plus:'追加',back:'戻る',external:'開く',arrow:'進む',up:'上へ移動',down:'下へ移動',close:'閉じる',refresh:'繰り返す'})[key]||text);
 for(const n of b.childNodes)if(n.nodeType===Node.TEXT_NODE)n.textContent=n.textContent.replace(/^\s*[✓✔▶►■⏹⏸Ⅱ⌕🔍＋+←↑↓↻↺×]\s*/,'').replace(/\s*[↗→]\s*$/,'');putIcon(b,key);
}
function scan(root){if(root.nodeType!==1)return;if(root.matches('button'))decorate(root);root.querySelectorAll('button').forEach(decorate)}scan(document.body);
const pending=new Set();let queued=false;const observer=new MutationObserver(entries=>{for(const e of entries){if(e.target.closest?.('svg'))continue;if(e.target.matches?.('button'))pending.add(e.target);for(const node of e.addedNodes)if(node.nodeType===1&&!node.matches('svg,.atlas-ui-icon'))pending.add(node)}if(pending.size&&!queued){queued=true;queueMicrotask(()=>{queued=false;const nodes=[...pending];pending.clear();nodes.forEach(scan)})}});observer.observe(document.body,{childList:true,subtree:true});
})();
