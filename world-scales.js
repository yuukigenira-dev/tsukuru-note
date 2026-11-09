(()=>{
'use strict';
const japan='https://www2.ntj.jac.go.jp/dglib/contents/learn/edc29/shiru/shikumi/onkai/goon/';
const om='https://openmusictheory.github.io/scales2';
const blues='https://www.jazzguitar.be/blog/blues-scales/';
const rows=[
{key:'ryukyu',name:'琉球音階',family:'japan',notes:[0,4,5,7,11],degrees:['1','3','4','5','7'],solfege:'ド・ミ・ファ・ソ・シ',desc:'沖縄の音楽を理解するための代表的な五音音階。「てぃんさぐぬ花」などの構成音として紹介されます。沖縄の全楽曲がこの音階だけで作られるわけではありません。',source:japan},
{key:'ritsu',name:'律音階',family:'japan',notes:[0,2,5,7,9],degrees:['1','2','4','5','6'],solfege:'ド・レ・ファ・ソ・ラ',desc:'小泉文夫の分類に基づく五音音階。完全4度の枠組みを2組重ねた形で確認できます。',source:japan},
{key:'miyakobushi',name:'都節音階',family:'japan',notes:[0,1,5,7,8],degrees:['1','♭2','4','5','♭6'],solfege:'ド・レ♭・ファ・ソ・ラ♭',desc:'小泉文夫の分類に基づく五音音階。半音の隔たりを含みます。実際の旋律では核となる音や音の進み方も重要です。',source:japan},
{key:'minyo',name:'民謡音階',family:'japan',notes:[0,3,5,7,10],degrees:['1','♭3','4','5','♭7'],solfege:'ド・ミ♭・ファ・ソ・シ♭',desc:'小泉文夫の分類に基づく五音音階。ここでの音の並びはマイナーペンタトニックと一致しますが、伝統音楽としての旋律の扱いまで同じという意味ではありません。',source:japan},
{key:'yaman',name:'ヤマン / Yaman（構成音）',family:'india',notes:[0,2,4,6,7,9,11],degrees:['1','2','3','♯4','5','6','7'],solfege:'Sa・Re・Ga・tivra Ma・Pa・Dha・Ni',desc:'北インド音楽のラーガ。上げた第4音（tivra Ma）を用います。平均律の音集合はLydianと一致しますが、ヤマンには固有の旋律や音の動きがあります。',source:'https://darbar.org/raga/yaman/'},
{key:'bhairav',name:'バイラヴ / Bhairav（構成音）',family:'india',notes:[0,1,4,5,7,8,11],degrees:['1','♭2','3','4','5','♭6','7'],solfege:'Sa・komal Re・Ga・Ma・Pa・komal Dha・Ni',desc:'北インド音楽のラーガ。低いReとDhaが特徴です。実演での音の揺れ（andolan）は、この固定音高の試聴には含まれません。',source:'https://darbar.org/raga/bhairav/'},
{key:'bhairavi',name:'バイラヴィ / Bhairavi（構成音）',family:'india',notes:[0,1,3,5,7,8,10],degrees:['1','♭2','♭3','4','5','♭6','♭7'],solfege:'Sa・komal Re・komal Ga・Ma・Pa・komal Dha・komal Ni',desc:'北インドのBhairaviの基本構成音。平均律ではPhrygianと同じ音集合になります。Bhairavとは別のラーガです。演奏の種類によって外の音も扱います。',source:'https://darbar.org/raga/bhairavi/'},
{key:'bhupali',name:'ブーパリ / Bhupali（構成音）',family:'india',notes:[0,2,4,7,9],degrees:['1','2','3','5','6'],solfege:'Sa・Re・Ga・Pa・Dha',desc:'北インド音楽の五音のラーガ。平均律の音集合はメジャーペンタトニックと一致します。ラーガ固有の旋律を学ぶには構成音以外も確認してください。',source:'https://ragajunglism.org/ragas/bhupali/'},
{key:'minorBlues',name:'マイナー・ブルース',family:'other',notes:[0,3,5,6,7,10],degrees:['1','♭3','4','♭5','5','♭7'],solfege:'ド・ミ♭・ファ・ソ♭・ソ・シ♭',desc:'マイナーペンタトニックに♭5を加えた六音の形。ブルースの音の揺れやすべてのフレーズを、この6音だけで説明できるわけではありません。',source:blues},
{key:'majorBlues',name:'メジャー・ブルース',family:'other',notes:[0,2,3,4,7,9],degrees:['1','2','♭3','3','5','6'],solfege:'ド・レ・ミ♭・ミ・ソ・ラ',desc:'メジャーペンタトニックに♭3を加えた六音の形。長3度と短3度の対比を確認できます。',source:blues},
{key:'wholeTone',name:'全音音階 / Whole tone',family:'other',notes:[0,2,4,6,8,10],degrees:['1','2','3','♯4','♯5','♭7'],solfege:'ド・レ・ミ・ファ♯・ソ♯・シ♭',desc:'全音だけで区切った六音の音階。半音を含まない対称的な並びです。',source:om},
{key:'octHalfWhole',name:'ディミニッシュ（半音→全音）',family:'other',notes:[0,1,3,4,6,7,9,10],degrees:['1','♭2','♭3','3','♯4','5','6','♭7'],solfege:'ド・レ♭・ミ♭・ミ・ファ♯・ソ・ラ・シ♭',desc:'半音と全音を交互に並べる八音音階。オクタトニック音階の一つで、半音から始まる形です。',source:om},
{key:'octWholeHalf',name:'ディミニッシュ（全音→半音）',family:'other',notes:[0,2,3,5,6,8,9,11],degrees:['1','2','♭3','4','♭5','♭6','6','7'],solfege:'ド・レ・ミ♭・ファ・ソ♭・ラ♭・ラ・シ',desc:'全音と半音を交互に並べる八音音階。同じ主音の半音始まりとは構成音が変わります。',source:om},
{key:'chromatic',name:'半音階 / Chromatic',family:'other',notes:[0,1,2,3,4,5,6,7,8,9,10,11],degrees:['0','1','2','3','4','5','6','7','8','9','10','11'],solfege:'1オクターブ内の12音すべて',desc:'すべての半音を並べた音階。構成音カードの小さい数字は、この音階では主音からの半音数を示します。',source:'https://musictheory.pugetsound.edu/mt21c/MusicTheory.html'},
{key:'phrygianDominant',name:'フリジアン・ドミナント',family:'other',notes:[0,1,4,5,7,8,10],degrees:['1','♭2','3','4','5','♭6','♭7'],solfege:'ド・レ♭・ミ・ファ・ソ・ラ♭・シ♭',desc:'和声的短音階の第5モード。♭2と長3度の隔たりが特徴です。中東音楽のマカーム全体と同一の仕組みとして扱うことはできません。',source:'https://www.learnjazzstandards.com/blog/phrygian-dominant-scale/'}
];
window.atlasWorldScales=rows;
for(const r of rows)scales[r.key]=r.notes;
const select=document.getElementById('scaleType');
const basic=[...select.options].map(o=>({key:o.value,name:o.textContent,family:'basic'}));
const families={all:'すべて',basic:'基本・モード',japan:'日本・沖縄',india:'インド（構成音）',other:'ブルース・その他'};
const category=document.createElement('label');category.className='field hidden';category.id='scaleFamilyField';category.innerHTML='地域・系統<select id="scaleFamily" aria-label="音階の地域・系統"></select>';
for(const [v,n] of Object.entries(families))category.querySelector('select').add(new Option(n,v));document.getElementById('scaleField').before(category);
const all=[...basic,...rows];
function populate(family,keep){select.replaceChildren();for(const [f,label] of Object.entries(families)){if(f==='all'||family!=='all'&&f!==family)continue;const group=document.createElement('optgroup');group.label=label;all.filter(r=>r.family===f).forEach(r=>group.append(new Option(r.name,r.key)));if(group.children.length)select.append(group)}if(all.some(r=>r.key===keep&&(family==='all'||r.family===family)))select.value=keep;}
populate('all',select.value||'major');
const info=document.createElement('div');info.id='scaleContext';info.className='scale-context hidden';info.setAttribute('aria-live','polite');document.getElementById('musicCommon').append(info);
const defaultDegrees={major:['1','2','3','4','5','6','7'],naturalMinor:['1','2','♭3','4','5','♭6','♭7'],harmonicMinor:['1','2','♭3','4','5','♭6','7'],melodicMinor:['1','2','♭3','4','5','6','7'],majorPent:['1','2','3','5','6'],minorPent:['1','♭3','4','5','♭7'],dorian:['1','2','♭3','4','5','6','♭7'],phrygian:['1','♭2','♭3','4','5','♭6','♭7'],lydian:['1','2','3','♯4','5','6','7'],mixolydian:['1','2','3','4','5','6','♭7'],locrian:['1','♭2','♭3','4','♭5','♭6','♭7']};
function context(){const isScale=mtab==='scale';category.classList.toggle('hidden',!isScale);info.classList.toggle('hidden',!isScale);if(!isScale)return;const r=rows.find(r=>r.key===select.value);const degrees=r?.degrees||defaultDegrees[select.value];document.querySelectorAll('#musicNotes small').forEach((s,i)=>s.textContent=degrees?.[i]||String(i+1));info.replaceChildren();const controls=document.createElement('div');controls.className='controls';for(const [label,direction] of [['↑ 上行を聴く','up'],['↓ 下行を聴く','down']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=()=>window.atlasPlayScale(currentNotes(),direction);controls.append(b)}info.append(controls);const h=document.createElement('h3');h.textContent=r?r.name:'音階の聴き方';info.append(h);const p=document.createElement('p');p.textContent=r?r.desc:'構成音を主音から順に試聴できます。上行・下行は1オクターブ上の主音を含めて再生します。';info.append(p);if(r){const notation=document.createElement('p');notation.className='scale-formula';notation.textContent=(r.family==='india'?'インド音名：':'ドを主音とした例：')+r.solfege;info.append(notation);const d=document.createElement('p');d.textContent=(r.key==='chromatic'?'主音からの半音数：':'主音からの度数：')+r.degrees.join(' · ');info.append(d);if(r.family==='india'){const caveat=document.createElement('p');caveat.textContent='この試聴は12平均律による構成音の確認です。ラーガの上行・下行の規則、特徴的なフレーズ、微細な音程、装飾は再現していません。';caveat.className='scale-caution';info.append(caveat)}const a=document.createElement('a');a.href=r.source;a.textContent='音階の参照資料を読む ↗';a.target='_blank';a.rel='noopener noreferrer';info.append(a)}}
const render=renderMusic;renderMusic=function(){render();context()};
const switchTab=switchMtab;switchMtab=function(t){switchTab(t);context()};
category.querySelector('select').onchange=()=>{window.atlasStopAudio();populate(category.querySelector('select').value,select.value);renderMusic()};
select.onchange=()=>{window.atlasStopAudio();renderMusic()};
const play=document.getElementById('playNotes').onclick;document.getElementById('playNotes').onclick=()=>mtab==='scale'?window.atlasPlayScale(currentNotes(),'up'):play();
const singleLoop=[...document.querySelectorAll('#musicCommon button')].find(b=>b.textContent==='↻ この音をループ');if(singleLoop){const old=singleLoop.onclick;singleLoop.onclick=()=>mtab==='scale'?window.atlasPlayScale(currentNotes(),'up',true):old()}
const badge=document.createElement('span');badge.innerHTML='<strong>'+Object.keys(scales).length+'</strong>スケール';window.atlasHomeMeta.append(badge);
context();
})();
