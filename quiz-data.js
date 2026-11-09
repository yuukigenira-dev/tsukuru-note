/* Parameterized question generation. No external AI service or user data is used. */
(()=>{'use strict';
const shuffle=(a,r)=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,r)=>a[Math.floor(r()*a.length)];
const tones=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
const musicTermQuestions=[['ルート音','コードの基準となり、通常はコード名の先頭の音名で示される音。','C/Eの根音はC、最低音はEです。'],['音程','二つの音の高さの隔たり。','CからEは長3度です。'],['転回形','和音の構成音を保ち、根音以外の構成音を最低音に置いた形。','Cの第1転回形ではEが最低音です。'],['ボイシング','和音の構成音を、音域・間隔・重複などで具体的に配置すること。','同じCの和音でもC3・G3・E4などに配置できます。'],['アルペジオ','和音の構成音を同時ではなく順番に鳴らす奏法。','C・E・Gを一音ずつ鳴らします。'],['BPM','指定した拍の単位で、1分間の拍数を表す値。','4分音符基準の120 BPMなら4分音符は0.5秒です。'],['オクターブ','12平均律では12半音に相当する音程。','C4からC5は1オクターブです。'],['ダイアトニックコード','ある調の基本となる音階の音から構成される和音群。','Cメジャーの三和音にはC・Dm・Em・F・G・Am・Bdimがあります。']];
const colorTermQuestions=[['色相','赤・黄・緑・青など、色みの違いを表す属性。','HSLではHの角度で色相を指定します。'],['彩度','色の鮮やかさの度合いを表す属性。','HSLではSを下げると無彩色に近づきます。'],['CMYK','シアン・マゼンタ・イエロー・ブラックの成分で色を扱う方式。','印刷の指定などに使い、画面のRGBとは区別します。'],['RGB','赤・緑・青の光の成分で色を扱う方式。','rgb(255,0,0)は赤です。'],['補色','このアプリのHSL色相環で、基準から180度反対側の色。','H=30度に対してH=210度です。'],['トライアド','色相環を3等分する位置の3色による配色。','基準から120度と240度離れた色を組み合わせます。'],['類似色','色相環で近い位置の色を組み合わせる配色。','近い色みでも文字と背景の明暗差は別に確認します。'],['アクセントカラー','広い背景などに対して、小さな面積で注目させたい箇所に使う色。','主要ボタンなどの強調に使います。']];
const qualities=[['メジャー',[0,4,7]],['マイナー',[0,3,7]],['ディミニッシュ',[0,3,6]],['オーギュメント',[0,4,8]]];
const intervalNames=[[2,'長2度'],[3,'短3度'],[4,'長3度'],[7,'完全5度'],[12,'完全8度（オクターブ）']];
function question(type,prompt,labels,correct,explanation,extra={}){return {type,prompt,options:labels.map((label,i)=>({id:String(i),label:String(label)})),correct:String(correct),explanation,...extra}}
function term(rows,r,type){const row=pick(rows,r),others=shuffle(rows.filter(x=>x[0]!==row[0]),r).slice(0,3);return question(type,'次の説明に当てはまる用語は？\n「'+row[1]+'」',[row,...others].map(x=>x[0]),0,row[0]+'：'+row[1]+' 例：'+row[2],{hint:'辞典での役割・定義を思い出してみましょう。',optionFeedback:[row,...others].map(x=>x[0]+'：'+x[1])})}
function numeric(type,prompt,value,unit,explanation,offsets=[1,2,-1]){return question(type,prompt,[value,...offsets.map(n=>value+n)].map(n=>n+unit),0,explanation)}
const music=(r,terms)=>[
 ()=>term(musicTermQuestions,r,'用語'),()=>term(musicTermQuestions,r,'用語'),
 ()=>{const q=pick(qualities,r),root=48+Math.floor(r()*12);return question('聴き取り','音を聴いて、三和音の種類を選んでください。',qualities.map(x=>x[0]),qualities.indexOf(q),q[0]+'は根音から'+q[1].join('・')+'半音。今回の構成音は'+q[1].map(x=>tones[(root+x)%12]).join('・')+'です。',{audio:[{notes:q[1].map(x=>root+x),at:0,duration:1.6}],hint:'同時に鳴る3音の響きに注目。繰り返し聴けます。'})},
 ()=>{const iv=pick(intervalNames,r),root=55+Math.floor(r()*12),choices=shuffle(intervalNames.filter(x=>x!==iv),r).slice(0,3);return question('聴き取り','順番に鳴る2音の、上行する音程は？',[iv,...choices].map(x=>x[1]),0,iv[1]+'は'+iv[0]+'半音の隔たりです。今回は'+tones[root%12]+'から'+tones[(root+iv[0])%12]+'へ上行しました。',{audio:[{notes:[root],at:0,duration:.65},{notes:[root+iv[0]],at:.9,duration:.9}],hint:'絶対的な音名ではなく、2音の間隔を聴き比べます。'})},
 ()=>{const q=pick(qualities,r),root=Math.floor(r()*12),labels=qualities.map(x=>x[1].map(n=>tones[(root+n)%12]).join('・'));return question('構成音',tones[root]+'を根音とする'+q[0]+'三和音の構成音は？',labels,qualities.indexOf(q),'根音から'+q[1].join('・')+'半音なので、'+labels[qualities.indexOf(q)]+'です。異名同音は♯に統一しています。')},
 ()=>{const bpm=pick([60,75,80,90,100,120,150,180,200,240],r),value=60000/bpm;return question('テンポ','4分音符を1拍とするBPM '+bpm+'。4分音符1つの長さは？',[1,2,.5,4].map(x=>(value*x/1000).toFixed(3)+'秒'),0,'1拍は60÷BPM秒。60÷'+bpm+' ≒ '+(value/1000).toFixed(3)+'秒です（小数第3位まで）。')},
 ()=>{const n=pick([2,4,8,16],r);return question('リズム','4/4拍子の1小節を、'+n+'分音符だけで隙間なく埋めると何個？',[n,n*2,n/2,n+1].map(x=>x+'個'),0,'4/4拍子の1小節は全音符1個分。'+n+'分音符なら'+n+'個です。')},
 ()=>{const n=pick([1,2],r),base=[60,64,67],notes=[...base.slice(n),...base.slice(0,n).map(x=>x+12)];return question('転回形','Cメジャーの構成音が、低い順に '+notes.map(x=>tones[x%12]+(Math.floor(x/12)-1)).join('・')+'。どの形？',['基本形','第1転回形','第2転回形','第3転回形'],n,'最低音が'+tones[notes[0]%12]+'なので第'+n+'転回形。三和音の転回形は第2までで、第3転回形はありません。')},
 ()=>question('音階','琉球音階の代表的な5音を、主音Cで表すと？',['C・E・F・G・B','C・D・E・G・A','C・E♭・F・G・B♭','C・D・F・G・B♭'],0,'ここで扱う代表形の琉球音階は1・3・4・5・7、C・E・F・G・B。実際の民謡の旋律はこの5音だけに限るとは限りません。'),
 ()=>{const iv=pick(intervalNames,r);return numeric('音程',iv[1]+'は何半音の隔たり？',iv[0],'半音',iv[1]+'は'+iv[0]+'半音です。',[1,2,-1])}
];
const hsl=(h,s=75,l=50)=>'hsl('+h+' '+s+'% '+l+'%)';
const color=(r,terms)=>[
 ()=>term(colorTermQuestions,r,'用語'),()=>term(colorTermQuestions,r,'用語'),
 ()=>{const facts=[['文字の行と行の間隔を調整する項目は？',['行間','字間','カーニング','ベースライン'],0,'行間は行どうしの間隔。字間は文字全体の間隔、カーニングは特定の文字ペア間の調整、ベースラインは文字の基準線です。'],['要素の端や文字の開始位置を共通の線にそろえる原則は？',['整列','近接','反復','トリミング'],0,'整列は位置を共通の線にそろえること。近接は関連する要素を近くに置くこと、反復は同じ表現を繰り返すことです。'],['関連する情報を近くに置き、同じグループだと伝える原則は？',['近接','整列','反復','カーニング'],0,'近接によって情報のまとまりを示します。整列は位置をそろえ、反復は表現を繰り返します。'],['見出し・本文の大きさや太さに差をつけ、読む順序や重要度を示す考え方は？',['視覚的階層','カーニング','減法混色','トリミング'],0,'視覚的階層はサイズ・太さ・配置・色などで情報の重要度や読む順番を示す考え方です。']];return question('レイアウト・文字',...pick(facts,r))},
 ()=>{const h=Math.floor(r()*360),answer=(h+180)%360,hs=[answer,(h+90)%360,(h+30)%360,h];return question('色相・色','HSL色相環で、基準色 H='+h+'° の補色は？',hs.map(x=>'H='+x+'°'),0,'HSL色相環で補色は180°反対側。('+h+'+180) mod 360 = '+answer+'°です。',{swatch:hsl(h),swatchLabel:'基準色 H='+h+'°, S=75%, L=50%',optionColors:hs.map(x=>hsl(x))})},
 ()=>{const h=Math.floor(r()*360),ls=shuffle([20,40,60,80],r);return question('明度・色','同じ色相・彩度の4色です。HSLの明度 L が最も高いのは？',ls.map(x=>'L='+x+'%'),ls.indexOf(80),'明度Lの数値が最も大きい80%が正解です。HSLのLと知覚的な明るさは同一ではありません。',{optionColors:ls.map(x=>hsl(h,65,x))})},
 ()=>{const h=Math.floor(r()*360),ss=shuffle([0,25,60,100],r);return question('彩度・色','同じ色相・明度で、HSLの彩度 S が最も低いのは？',ss.map(x=>'S='+x+'%'),ss.indexOf(0),'S=0%は無彩色。この条件では他の色よりHSLの彩度が低くなります。',{optionColors:ss.map(x=>hsl(h,x,50))})},
 ()=>{const white=r()<.5;return question('コントラスト','背景 '+(white?'#FFFFFF':'#000000')+' に対して、WCAGのコントラスト比が最も高い文字色は？',white?['#000000','#555555','#AAAAAA','#FFFFFF']:['#FFFFFF','#AAAAAA','#555555','#000000'],0,'黒と白の組み合わせが最大の21:1です。今回の選択肢は無彩色で、背景との相対輝度の差が最大になる色が正解です。',{swatch:white?'#FFFFFF':'#000000',swatchLabel:'背景 '+(white?'#FFFFFF':'#000000'),optionColors:white?['#000000','#555555','#AAAAAA','#FFFFFF']:['#FFFFFF','#AAAAAA','#555555','#000000']})},
 ()=>{const combos=[['赤＋緑','黄'],['緑＋青','シアン'],['青＋赤','マゼンタ']],c=pick(combos,r);return question('色の仕組み','RGBの光を加法混色します。'+c[0]+'（両方最大値）の結果は？',['黄','シアン','マゼンタ','黒'],['黄','シアン','マゼンタ','黒'].indexOf(c[1]),'RGBの光では'+c[0]+'で'+c[1]+'。絵の具などの減法混色とは区別します。')},
 ()=>question('アクセシビリティ','WCAG 2.x レベルAAで、ロゴや非アクティブな表示などの例外を除く、通常サイズの本文に必要なコントラスト比の下限は？',['4.5:1','3:1','2:1','1:1'],0,'通常サイズの文字は4.5:1以上。大きな文字は3:1以上です。これはAAの文字のコントラスト基準です。'),
 ()=>{const h=Math.floor(r()*360);return question('配色','HSL色相環のトライアド。H='+h+'° と組み合わせる2色は？',[[120,240],[30,60],[90,180],[150,210]].map(ds=>ds.map(d=>'H='+((h+d)%360)+'°').join(' / ')),0,'トライアドは色相環を3等分する配色。基準から120°と240°離れた色を選びます。',{swatch:hsl(h),swatchLabel:'基準 H='+h+'°'})}
];
const webFacts=[
 ['別ページへのリンクを作るHTML要素は？',['a','p','div','span'],0,'a要素にhref属性を指定してリンク先を設定します。'],
 ['画像の代替テキストを記述する属性は？',['alt','src','href','class'],0,'imgのaltに画像の役割を伝える代替テキストを書きます。srcは画像のURLです。'],
 ['フォームで、複数行のテキストを入力する要素は？',['textarea','input','select','button'],0,'textareaは複数行の入力欄。inputは種類に応じた単一の入力コントロールです。'],
 ['外側の余白を指定するCSSプロパティは？',['margin','padding','border','gap'],0,'marginはボックス外側の余白、paddingは内容と枠線の間。gapはグリッドやフレックス項目などの間隔です。'],
 ['class属性にcardという名前を含む要素を指定する、クラスセレクターは？',['.card','#card','card','*'],0,'クラスはドットで .card。IDは #card、cardだけなら要素型セレクターです。'],
 ['id="hero"を指定する、IDセレクターは？',['#hero','.hero','hero','[class="hero"]'],0,'IDセレクターは # を付けます。classとは異なります。'],
 ['HTMLのdisabledのような真偽属性について正しいのは？',['属性が存在すれば真として扱う','disabled="false" なら有効になる','値は必ずtrueと書く','CSSでしか指定できない'],0,'真偽属性は存在自体で真になります。disabled="false" でも無効なので、有効にするには属性を取り除きます。'],
 ['子要素を1次元の行または列に並べる基本のCSSレイアウトは？',['Flexbox','position: absolute','float','z-index'],0,'Flexboxは行または列の1次元の配置を扱います。2次元の行・列の配置にはGridが適しています。'],
 ['画像を縦横比を保ち、領域全体を埋めてはみ出す部分を切り取る object-fit の値は？',['cover','contain','fill','none'],0,'coverは縦横比を維持して領域全体を覆います。containは画像全体が収まるようにします。'],
 ['文書の主な内容を表すHTML要素は？',['main','footer','nav','aside'],0,'mainは文書の主要な内容。navは主要なナビゲーション、asideは補足的な内容、footerはフッターです。']
];
function web(r,rows){const fact=()=>{const f=pick(webFacts,r);return question('HTML・CSS',...f)};const reference=()=>{const row=pick(rows,r),others=shuffle(rows.filter(x=>x.kind===row.kind&&x.name!==row.name),r).slice(0,3);return question(row.kind==='css'?'CSS辞典':row.kind==='attributes'?'HTML属性':'HTML要素','この用途に対応する項目は？\n「'+row.desc+'」',[row,...others].map(x=>x.name),0,row.name+'：'+row.desc+'\n使用例：'+row.example,{optionFeedback:[row,...others].map(x=>x.name+'：'+x.desc)})};return [fact,fact,fact,fact,fact,fact,fact,
 ()=>{const w=pick([100,160,200,240,300],r),p=pick([8,12,16,20],r),b=pick([1,2,4],r),border=r()<.5,total=border?w:w+2*p+2*b;return question('ボックスモデル','width: '+w+'px; padding: '+p+'px; border: '+b+'px solid; box-sizing: '+(border?'border-box':'content-box')+';\n通常のブロック要素で、左右のmarginを除く枠線までの全幅は？',[total,total+20,total+40,total+60].map(x=>x+'px'),0,border?'border-boxではwidthに左右のpaddingとborderを含むため、全幅は'+w+'pxです。':'content-boxではwidthは内容幅。'+w+' + '+p+'×2 + '+b+'×2 = '+total+'pxです。')},
 ()=>{const n=pick([2,3,4,5],r);return question('Grid','grid-template-columns: repeat('+n+', 1fr);\nこの指定で明示的に定義する列の数は？',[n,n+1,n+2,1].map(x=>x+'列'),0,'repeat('+n+', 1fr)は1frの列を'+n+'回並べます。')},
 ()=>{const p=pick([8,12,16,20],r),q=pick([4,6,10,24],r);return question('CSSの読み方','padding: '+p+'px '+q+'px;\n左右のpaddingはそれぞれ何px？',[q,p,p+q,p+q+10].map(x=>x+'px'),0,'値が2つのときは「上下・左右」の順。左右はそれぞれ'+q+'pxです。')}
]}
function generate(domain,context={},r=Math.random){let factories=domain==='music'?music(r,context.terms||[]):domain==='color'?color(r,context.terms||[]):web(r,context.rows||[]);const qs=[];let used=new Set();for(const f of factories){let q;for(let i=0;i<50;i++){q=f();if(!used.has(q.prompt))break}if(used.has(q.prompt))continue;if(!q.options.some(o=>o.id===q.correct)||new Set(q.options.map(o=>o.label)).size!==q.options.length)throw Error('Invalid quiz options');used.add(q.prompt);q.options=shuffle(q.options.map((o,i)=>({...o,feedback:q.optionFeedback?.[i]})),r);delete q.optionFeedback;qs.push(q)}return shuffle(qs,r)}
function grade(questions,answers){const correct=questions.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0);return {correct,total:questions.length,score:questions.length?Math.round(correct/questions.length*100):0,unanswered:questions.reduce((n,q,i)=>n+(answers[i]==null?1:0),0)}}
window.AtlasQuizData={generate,grade,webFacts};
})();
