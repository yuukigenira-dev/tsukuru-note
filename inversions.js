(()=>{
const field=document.createElement('label');field.className='field';field.id='inversionField';field.innerHTML='転回形<select id="inversion" aria-label="コードの転回形"><option value="0">基本形</option></select>';
document.getElementById('qualityField').after(field);
const actual=document.createElement('p');actual.className='actual-notes';actual.id='actualNotes';document.getElementById('musicNotes').after(actual);
const originalNotes=currentNotes,originalLabel=currentLabel,originalRender=renderMusic;
currentNotes=function(){const notes=originalNotes();if(mtab==='scale')return notes;const inversion=Number(document.getElementById('inversion').value)||0;for(let i=0;i<inversion;i++){let n=notes.shift();while(n<=notes[notes.length-1])n+=12;notes.push(n)}return notes};
currentLabel=function(){const label=originalLabel();return mtab==='scale'||!Number(document.getElementById('inversion').value)?label:label+'/'+noteName(currentNotes()[0])};
renderMusic=function(){const select=document.getElementById('inversion'),n=originalNotes().length;const old=Number(select.value)||0;select.replaceChildren();for(let i=0;i<n;i++)select.add(new Option(i===0?'基本形':'第'+i+'転回形',i));select.value=String(Math.min(old,n-1));field.classList.toggle('hidden',mtab==='scale');originalRender();actual.textContent='試聴する音：'+currentNotes().map(m=>noteName(m)+(Math.floor(m/12)-1)).join(' · ')+(mtab!=='scale'?'　｜ 最低音 '+noteName(currentNotes()[0])+(Math.floor(currentNotes()[0]/12)-1):'');};
document.getElementById('inversion').onchange=()=>{window.atlasStopAudio();renderMusic()};
const oldQuality=document.getElementById('quality').onchange;document.getElementById('quality').onchange=()=>{document.getElementById('inversion').value='0';oldQuality()};renderMusic();
})();
