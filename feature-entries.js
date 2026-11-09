(()=>{'use strict';
// Restore standalone design utilities; retain retired editors without deleting data.
const rows=[
 ['accessibility','色覚による見え方の近似','色だけに依存しない配色を確認'],
 ['layoutgrid','レイアウトグリッド','段組・余白・ガターを図で確認'],
 ['gradient','グラデーション・2色変換','色の変化を確認・CSSや画像を保存'],
 ['imagepractice','画像の切り抜き・画質比較','範囲・寸法・形式・容量を比較'],
 ['batchimages','画像の一括変換','複数画像の寸法・形式をまとめて変更']
];
for(const row of rows){const [key,title,text]=row,entry=AtlasStudio.tabs.color.get(key);if(!entry||AtlasDesk.allowed('color',key))continue;AtlasDesk.tools.color.push(row);entry.pane.dataset.deskRetained='true';entry.button.textContent=title;AtlasGlobalSearch.index.push({domain:'color',title,text,open:()=>AtlasDesk.go('color',key)});}
for(const b of document.querySelectorAll('#studio-imagepractice button'))if(b.textContent==='画像一括変換へ')b.hidden=false;
// The previous studio is intentionally retired; use currently editable colors instead.
const a=document.getElementById('studio-accessibility'),b=[...a.querySelectorAll('button')].find(n=>n.textContent==='スタジオの配色で確認');if(b){b.textContent='現在の配色で確認';b.onclick=()=>{const inputs=a.querySelectorAll('input[type=color]'),colors=[...palette];inputs[0].value=document.getElementById('hexInput').value;inputs[1].value=colors[1]||document.getElementById('bg').value;inputs[0].dispatchEvent(new Event('input',{bubbles:true}));};}
AtlasDesk.tools.color.push(['impressions','色の印象・配色例','用途や文脈で変わる色の印象と参考パレット']);AtlasGlobalSearch.index.push({domain:'color',title:'色の印象・配色例',text:'印象 パレット 類似色 補色 和風 レトロ',open:()=>AtlasDesk.go('color','impressions')});
AtlasDesk.refreshNavigation();
})();
