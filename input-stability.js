(()=>{'use strict';
// Keep incomplete number drafts editable. Normalize only on commit, before tool handlers run.
function valueOf(raw,min=-Infinity,max=Infinity,fallback=0){const text=String(raw).trim(),n=text===''?NaN:Number(text);return Math.max(min,Math.min(max,Number.isFinite(n)?n:fallback))}
const states=new WeakMap(),number=n=>n instanceof HTMLInputElement&&n.type==='number'&&!n.disabled&&!n.readOnly&&!!n.closest('.shell');
function bounds(n){return[n.min===''?-Infinity:Number(n.min),n.max===''?Infinity:Number(n.max)]}
function state(n){if(!states.has(n)){const[min,max]=bounds(n);states.set(n,{last:valueOf(n.value,min,max,Math.max(0,Number.isFinite(min)?min:0))})}return states.get(n)}
function draft(n){const[min,max]=bounds(n),v=n.value.trim()===''?NaN:Number(n.value);return Number.isFinite(v)&&v>=min&&v<=max?v:null}
function commit(n,emit){const s=state(n),[min,max]=bounds(n),v=valueOf(n.value,min,max,s.last),changed=n.value!==String(v);s.last=v;if(changed){n.value=String(v);if(emit){n.dispatchEvent(new Event('input',{bubbles:true}));if(emit===true)n.dispatchEvent(new Event('change',{bubbles:true}))}}}
document.addEventListener('focusin',e=>{if(number(e.target))state(e.target)},true);
document.addEventListener('input',e=>{const n=e.target;if(!number(n))return;const s=state(n),v=draft(n);if(v===null){e.stopImmediatePropagation();return}s.last=v},true);
document.addEventListener('change',e=>{if(number(e.target))commit(e.target,'input')},true);
document.addEventListener('blur',e=>{if(number(e.target))commit(e.target,true)},true);
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&number(e.target))commit(e.target,true)},true);
window.AtlasInputStability={valueOf};
})();
