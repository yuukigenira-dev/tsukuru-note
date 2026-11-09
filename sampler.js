(()=>{
'use strict';
const banks={},pending={};
function loadScript(inst){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=window.ATLAS_SAMPLE_MAPS[inst].script;let settled=false;const finish=(error)=>{if(settled)return;settled=true;clearTimeout(timeout);script.remove();error?reject(error):resolve()};const timeout=setTimeout(()=>finish(new Error('音源の読み込みがタイムアウトしました')),45000);script.onload=()=>finish();script.onerror=()=>finish(new Error('音源ファイルを読み込めませんでした'));document.head.append(script)})}
async function ready(inst,ac,progress=()=>{}){
 if(inst==='synth')return;
 if(banks[inst]){progress(1,1);return}
 if(pending[inst])return pending[inst];
 pending[inst]=(async()=>{await loadScript(inst);const encoded=window.ATLAS_SAMPLE_DATA?.[inst];if(!encoded)throw new Error('音源が見つかりません');const entries=Object.entries(encoded),decoded={};let index=0,completed=0;
 async function worker(){while(index<entries.length){const [n,b64]=entries[index++];const binary=atob(b64),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);const buffer=await ac.decodeAudioData(bytes.buffer);if(!buffer.length||!Number.isFinite(buffer.duration)||buffer.duration<=0)throw new Error('音源を再生用に変換できませんでした');decoded[n]=buffer;progress(++completed,entries.length)}}
 await Promise.all(Array.from({length:3},()=>worker()));banks[inst]=decoded;delete window.ATLAS_SAMPLE_DATA[inst];
 })().finally(()=>{delete pending[inst]});return pending[inst];
}
function play(inst,m,at,duration,ac,destination,onended){
 const bank=banks[inst];if(!bank)throw new Error('音源の準備ができていません');const nearest=Object.keys(bank).map(Number).reduce((best,n)=>Math.abs(n-m)<Math.abs(best-m)?n:best);
 const source=ac.createBufferSource(),gain=ac.createGain();source.buffer=bank[nearest];const rate=2**((m-nearest)/12);source.playbackRate.setValueAtTime(rate,at);
 const release=inst==='piano'?Math.min(.45,Math.max(.015,duration*.3)):Math.min(.22,Math.max(.015,duration*.22)),level=inst==='piano'?.40:.42;const end=at+Math.max(.025,duration);
 gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(level,at+.003);gain.gain.setValueAtTime(level,end);gain.gain.exponentialRampToValueAtTime(.0001,end+release);
 source.atlasStop=()=>{const now=ac.currentTime;gain.gain.cancelScheduledValues(now);gain.gain.setTargetAtTime(0,now,.008);source.stop(now+.035)};source.connect(gain).connect(destination);source.start(at);source.stop(Math.min(end+release+.025,at+source.buffer.duration/rate+.01));source.onended=()=>{source.disconnect();gain.disconnect();onended?.(source)};return source;
}
window.AtlasSamples={ready,play};
})();
