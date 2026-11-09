(()=>{'use strict';
const clamp=(n,max=1)=>Math.max(0,Math.min(max,Number(n)||0)),rgb=v=>v.slice(0,3).map(x=>Math.round(clamp(x,255))),cmyk=v=>v.slice(0,4).map(x=>clamp(x,100));
function toRGB(v){const[c,m,y,k]=cmyk(v).map(x=>x/100);return rgb([255*(1-c)*(1-k),255*(1-m)*(1-k),255*(1-y)*(1-k)])}
function toCMYK(v){const[r,g,b]=rgb(v).map(x=>x/255),k=1-Math.max(r,g,b);return k>=1?[0,0,0,100]:[(1-r-k)/(1-k)*100,(1-g-k)/(1-k)*100,(1-b-k)/(1-k)*100,k*100].map(x=>Math.round(clamp(x,100)))}
const hex=v=>'#'+rgb(v).map(x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();
function parse(s){return /^#[0-9a-f]{6}$/i.test(s)?[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)):null}
const linear=x=>{x=clamp(x,255)/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)},encoded=x=>255*(x<=.0031308?12.92*x:1.055*Math.pow(x,1/2.4)-.055);
function add(a,b,amountA=100,amountB=100){return rgb(a.map((v,i)=>encoded(clamp(linear(v)*clamp(amountA,100)/100+linear(b[i])*clamp(amountB,100)/100))))}
function average(a,b,share=50){const p=clamp(share,100)/100;return rgb(a.map((v,i)=>v*p+b[i]*(1-p)))}
function overprint(a,b,amountA=100,amountB=100){return cmyk(a).map((v,i)=>Math.round(100*(1-(1-v*clamp(amountA,100)/10000)*(1-clamp(b[i],100)*clamp(amountB,100)/10000))))}
function cmykAt(index,step=25,k=0){const n=100/step+1,total=n**3;if(!Number.isInteger(n)||index<0||index>=total)throw Error('一覧の範囲外です');return[Math.floor(index/(n*n))*step,Math.floor(index/n)%n*step,index%n*step,k]}
function textColor(v){const x=rgb(v).map(linear),l=.2126*x[0]+.7152*x[1]+.0722*x[2];return(1.05/(l+.05))>=((l+.05)/.05)?'#ffffff':'#172331'}
window.AtlasPrintColor={clamp,rgb,cmyk,toRGB,toCMYK,hex,parse,add,average,overprint,cmykAt,textColor};
})();
