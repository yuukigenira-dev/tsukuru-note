(()=>{
'use strict';
const quarters={whole:4,half:2,quarter:1,eighth:.5,sixteenth:.25};
function timing(bpm,meter,rhythm){const q=60/Math.min(240,Math.max(30,Number(bpm)||90));return{quarter:q,bar:q*(Number(meter)===6?3:Number(meter)||4),step:q*(quarters[rhythm]||1)}}
function plan(notes,bpm,meter,style,rhythm){const t=timing(bpm,meter,rhythm),ordered=style==='descending'?[...notes].reverse():[...notes],events=[];for(let i=0;i*t.step<t.bar-1e-8;i++){const offset=i*t.step,duration=Math.min(t.step,t.bar-offset)*.86;events.push({offset,duration,notes:style==='block'?[...notes]:[ordered[i%ordered.length]]})}return{...t,events}}
window.AtlasRhythm={timing,plan};
})();
