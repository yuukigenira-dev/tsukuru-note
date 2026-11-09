(function(root){'use strict';const P=typeof module==='object'&&module.exports?require('./question-policy.js'):root.AtlasQuestionPolicy;const names=P.names;
function generate(domain,question,options={}){if(!names[domain])throw Error('分野を選んでください。');if(typeof question!=='string'||!question.trim())throw Error('聞きたいことを入力してください。');if(question.length>12000)throw Error('質問は12,000文字以内で入力してください。');return P.build({domain,question,detail:options.detail})}
const api={generate,names};if(typeof module==='object'&&module.exports)module.exports=api;else root.AtlasFreeQuestionEngine=api;
})(typeof window==='object'?window:globalThis);
