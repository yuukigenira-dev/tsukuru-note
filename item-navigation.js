(()=>{'use strict';
// The desk owns navigation; suppress the legacy page-only history entries.
const previous=showPage;showPage=function(page){return previous(page,false)};
let restoring=false,pending=false;
function sync(){pending=false;if(restoring)return;const route=window.AtlasDeskRoute;if(!route)return;document.title=route.title+' | つくるノート';if(location.hash!==route.hash)history.pushState({atlasDesk:true,hash:route.hash},'',route.hash)}
window.addEventListener('atlasDeskRoute',()=>{if(!pending&&!restoring){pending=true;queueMicrotask(sync)}});
function restore(hash){restoring=true;try{AtlasDesk.restoreRoute(hash);document.title=(window.AtlasDeskRoute?.title||'ホーム')+' | つくるノート';history.replaceState({atlasDesk:true,hash:window.AtlasDeskRoute?.hash||'#home'},'',window.AtlasDeskRoute?.hash||'#home')}finally{restoring=false}}
window.addEventListener('popstate',e=>{e.stopImmediatePropagation();restore(e.state?.hash||location.hash)},true);

window.addEventListener('hashchange',()=>{if(location.hash!==window.AtlasDeskRoute?.hash)restore(location.hash)});
const initial=window.atlasStartupHash;if(initial&&initial!=='#home')restore(initial);else{history.replaceState({atlasDesk:true,hash:'#home'},'','#home');document.title='つくるノート — 音楽・デザイン・コーディング'}
})();
