(()=>{'use strict';const U=AtlasEase,S=AtlasStudio,{el,button}=S,labels={music:'音楽',color:'デザイン',web:'コーディング'};
function home(){const host=document.getElementById('easeHome');host.replaceChildren();const prefs=U.prefs(),settings=el('details',undefined,'home-interests');settings.append(el('summary','表示する分野を変更'));const row=el('div',undefined,'ease-row');for(const d of Object.keys(labels)){const box=el('input');box.type='checkbox';box.checked=prefs.domains.includes(d);box.onchange=()=>{if(!box.checked&&prefs.domains.length===1){box.checked=true;return atlasToast('分野を1つ以上選んでください')}prefs.domains=box.checked?[...prefs.domains,d]:prefs.domains.filter(v=>v!==d);S.save('atlas-ease-preferences-v1',prefs);U.refresh();home()};row.append(S.field(labels[d],box))}settings.append(row);host.append(settings);const original=document.querySelector('.workbench-dashboard');if(original){const cards=original.cloneNode(true);cards.hidden=false;cards.classList.add('classic-home-cards');for(const d of Object.keys(labels)){const card=cards.querySelector('.workbench-card.'+d);if(!card)continue;card.classList.remove('ease-hidden-domain');card.hidden=!prefs.domains.includes(d);card.onclick=()=>U.go(d,{music:'partprogressions',color:'identity',web:'css'}[d]);const heading=card.querySelector('h2');if(heading)heading.textContent=labels[d]}host.append(cards)}host.append(el('h2','よく使う項目'));const quick=el('div',undefined,'classic-quick');for(const[d,k,t]of [['music','chord','コード辞典'],['music','partprogressions','パート別のコード進行'],['color','palette','配色をつくる'],['color','fonts','フォント一覧'],['web','css','CSS一覧'],['web','elements','HTML一覧']])if(prefs.domains.includes(d))quick.append(button(t,()=>U.go(d,k)));host.append(quick)}
const oldRefresh=U.refresh;U.refresh=function(){oldRefresh();home()};const oldShow=showPage;showPage=function(p,r=true){oldShow(p,r);if(p==='home')home()};window.addEventListener('atlasInterestsChanged',home);home();
// Keep the list short: an entry shows its name and purpose; details expand below it.
const cards=document.getElementById('webCards');
function compact(){for(const card of [...cards.children]){
if(card.dataset.readable||!card.matches('article'))continue;
card.dataset.readable='true';
const h=card.querySelector('h3'),purpose=card.querySelector('p');if(!h)continue;
const title=h.textContent,entry=el('details',undefined,'catalog-entry code-catalog-entry'),summary=el('summary'),body=el('div',undefined,'catalog-body');
summary.setAttribute('aria-label',title+'の詳細');
const overview=el('div',undefined,'catalog-overview');overview.append(h,el('p',(purpose?.textContent||'').split('。')[0]+'。'));summary.append(overview);
let code=card.querySelector('pre');
if(card.dataset.webKind==='css'){
const source=card.querySelector('.usage-code-block:last-of-type pre')||card.querySelector('.usage-code-block pre');
if(source)code=source;
}
if(code){const excerpt=AtlasCatalogUI.excerpt(code.textContent),snippet=el('pre',excerpt.text,'catalog-code-snippet');summary.append(snippet);if(excerpt.truncated){const note=el('small','コードの一部を表示しています。タップで全文を開く','catalog-excerpt-note');summary.append(note)}window.AtlasCodeColors?.paint(snippet,card.dataset.webKind==='css'?'css':'html')}
const hint=el('span','タップ・クリックで詳細','catalog-toggle-hint');summary.append(hint);

if(card.dataset.webKind==='css'){
const guide=card.querySelector('.code-usage-guide'),supplement=guide?.querySelector(':scope > .catalog-supplement');
if(supplement){const replacement=card.querySelector('.replacement-guide > summary');if(replacement)replacement.textContent='書き換えの具体例（値・class・リンクなど）';for(const child of [...card.children]){if(child===guide||child.classList.contains('web-actions')||child===purpose)continue;if(child.tagName==='STRONG'&&child.textContent==='何に使う？'){child.remove();continue}supplement.append(child)}
const explanation=supplement.querySelector(':scope > details:not(.replacement-guide):not(.usage-more-explanation):not(.usage-tag-alternative)');if(explanation){const heading=el('h4','使い方・注意点');explanation.querySelector(':scope > summary')?.remove();explanation.replaceWith(heading,...explanation.childNodes)}
}
}
for(const n of [...card.childNodes])body.append(n);
AtlasCatalogUI.closeControl(entry,body);
entry.append(summary,body);entry.addEventListener('toggle',()=>{hint.textContent=entry.open?'詳細を閉じる':'タップ・クリックで詳細'});card.append(entry);
}}

new MutationObserver(compact).observe(cards,{childList:true});compact();
const filter=el('div',undefined,'catalog-filters'),topics=[['すべて',''],['文字','文字'],['配置','配置'],['余白','余白'],['色・背景','色'],['画像','画像'],['枠・影','border'],['スマホ対応','レスポンシブ']];for(const[t,q]of topics)filter.append(button(t,()=>{const search=document.getElementById('webSearch');search.value=q;search.dispatchEvent(new Event('input',{bubbles:true}));filter.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.textContent===t)))}));document.getElementById('webSearch').after(filter);document.querySelectorAll('[data-web]').forEach(b=>b.addEventListener('click',()=>filter.hidden=b.dataset.web!=='css'));filter.hidden=!document.querySelector('[data-web="css"]').classList.contains('active');
})();
