(()=>{'use strict';const S=AtlasStudio,{el,button}=S,E=AtlasFreeQuestionEngine;
for(const domain of Object.keys(E.names)){
 const key='freequestion-'+domain;AtlasDesk.tools[domain].push([key,'自由な質問','文章・箇条書きからChatGPT用の質問文を作る']);
 const pane=S.register(domain,key,'自由な質問');pane.dataset.deskRetained='true';pane.classList.add('free-question');pane.replaceChildren();
 const intro=el('p',E.names[domain]+'について、聞きたいことを自由に書いてください。複数の疑問やコードも、そのまま入力できます。','note');
 const form=el('form'),input=el('textarea');input.id='free-question-input-'+domain;input.rows=8;input.maxLength=12000;input.required=true;input.placeholder=({music:'例：\n・キーとスケールはどう違う？\n・切ないサビのコード進行を知りたい',color:'例：\n・ポスターの背景と文字の配色を考えたい\n・印刷すると色が暗くなる理由は？',web:'例：\n・marginとpaddingは何が違う？\n・divを中央に置きたい。どこにCSSを書けばいい？'})[domain];
 const label=el('label','聞きたいこと（文章・箇条書き）');label.htmlFor=input.id;const hint=el('p','最大12,000文字。入力内容はこの画面で質問文に整えます。','hint');hint.id=input.id+'-hint';input.setAttribute('aria-describedby',hint.id);
 const generate=button('質問用プロンプトを生成',()=>{},'primary');generate.type='submit';const status=el('p','','free-question-status');status.setAttribute('role','status');
 const result=el('section',undefined,'free-question-result');result.hidden=true;const output=el('textarea');output.id='free-question-output-'+domain;output.rows=13;output.readOnly=true;const outputLabel=el('label','生成したプロンプト');outputLabel.htmlFor=output.id;const copy=button('プロンプトをコピー',async()=>{try{await AtlasChatGPTHelp.copyQuestion(output.value);status.textContent='コピーしました。ChatGPTを開き、貼り付けて送信してください。'}catch{status.textContent='自動コピーができませんでした。下のプロンプトを選択してコピーしてください。';output.focus();output.select();output.setSelectionRange(0,output.value.length)}});
 const links=el('div',undefined,'chatgpt-open-actions');for(const[text,url,newTab]of [['ChatGPTを開く','https://chatgpt.com/#native',false],['ブラウザ版を開く','https://chatgpt.com/?no_universal_links=1',true]]){const a=el('a',text,newTab?'chatgpt-open-web':'chatgpt-open-primary');a.href=url;if(newTab){a.target='_blank';a.rel='noopener noreferrer'}links.append(a)}
 result.append(outputLabel,output,copy,el('p','①プロンプトをコピー → ②ChatGPTを開く → ③貼り付けて送信','hint'),links);
 form.append(label,input,hint,generate);pane.append(intro,form,status,result);
 input.addEventListener('input',()=>{if(!result.hidden){result.hidden=true;status.textContent='質問を変更しました。もう一度生成してください。'}else status.textContent=''});
 window.addEventListener('atlasQuestionDetailChanged',()=>{if(!result.hidden){result.hidden=true;status.textContent='回答の詳しさが変更されました。もう一度生成してください。'}});
 form.onsubmit=e=>{e.preventDefault();try{output.value=E.generate(domain,input.value);result.hidden=false;status.textContent='プロンプトを生成しました。内容を確認してコピーしてください。'}catch(err){status.textContent=err.message;input.focus()}};
 AtlasGlobalSearch.index.push({domain,title:'自由な質問',text:E.names[domain]+' 質問 箇条書き ChatGPT プロンプト',open:()=>AtlasDesk.go(domain,key)});
}
AtlasDesk.refreshNavigation();})();
