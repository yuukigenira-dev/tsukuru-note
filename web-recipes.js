(()=>{'use strict';
const rows=[
['中央揃え：文字・インライン要素','文字やリンク、inline-blockの子要素を左右中央に揃えます。揃えたい内容を囲む親要素に指定します。ブロック要素そのものを中央へ移動する指定ではありません。','.parent {\n  text-align: center;\n}','text-align','文字を真ん中 テキストの中央寄せ 横方向 中央揃え'],
['中央揃え：幅を指定したブロック要素','widthやmax-widthなどで、要素の幅が親より狭くなるよう指定したブロック要素に使います。通常のブロック配置で左右の余白を均等にします。上下中央にはなりません。','.box {\n  width: 320px;\n  max-width: 100%;\n  margin: 0 auto;\n}','margin','要素を真ん中 ボックスの中央寄せ 横方向 中央揃え width'],
['中央揃え：Flexboxで上下左右','親をFlexboxにし、子要素を上下左右の中央に配置します。縦方向の中央位置を確認するには、親に高さやmin-heightなどで余裕を持たせます。row方向の場合の指定です。','.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 240px;\n}','justify-content','縦横中央 真ん中に置く 上下中央 左右中央 中央揃え'],
['中央揃え：Gridで上下左右','親をGridにして子を中央へ配置します。複数の子がある場合、それぞれが各グリッド領域内で中央になります。親の高さも指定すると上下中央を確認できます。','.parent {\n  display: grid;\n  place-items: center;\n  min-height: 240px;\n}','place-items','縦横中央 真ん中に置く 上下中央 左右中央 中央揃え'],
['文字を太字にする','font-weightで文字の太さを指定します。700は一般的にboldに相当します。書体が700を持たない場合、ブラウザが擬似的に太くすることがあります。','.text {\n  font-weight: 700;\n}','font-weight','太字 太くする ボールド bold'],
['emの斜体を標準に戻す','em要素の見た目を通常の立体に戻します。HTMLの「強調」という意味は残ります。通常ウェイトにもしたい場合はfont-weight: 400を追加します。','em {\n  font-style: normal;\n}','font-style','斜体をやめる イタリック解除 em 標準 通常'],
['行間を広げる','line-heightの単位なしの値は文字サイズに対する倍率です。1.8ならフォントサイズの1.8倍の行ボックスになります。段落同士の余白にはmarginも使います。','.text {\n  line-height: 1.8;\n}','line-height','行間 行の間隔 行間を空ける 行を離す'],
['文字にアンダーラインを付ける','text-decorationで文字に下線を付けます。リンク以外にも使えます。下線を外す場合はtext-decoration: noneです。','.text {\n  text-decoration: underline;\n  text-underline-offset: 0.2em;\n}','text-decoration','下線 アンダーライン 線を引く'],
['フォントをゴシック体に変更する','使用できる書体を左から優先します。端末にない書体は次へ進みます。指定のWebフォントを使う場合は、そのフォントファイルの読み込みも必要です。','body {\n  font-family: "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif;\n}','font-family','フォント変更 書体 字体 ゴシック サンセリフ'],
['リンクにホバー効果を付ける','マウスを重ねたときとキーボードでフォーカスしたときに色と下線を変えます。スマホではホバーを前提にせず、通常時もリンクと分かる見た目にしてください。','a {\n  color: #245a42;\n  transition: color 0.2s;\n}\na:hover, a:focus-visible {\n  color: #934724;\n  text-decoration: underline;\n}',':hover','リンク ホバー マウスを乗せる 色を変える'],
['箇条書きの黒丸を四角にする','順序なしリストのマーカーを四角へ変えます。list-style-positionは省略時outsideで、マーカーは本文の外側に配置されます。','ul {\n  list-style-type: square;\n  padding-left: 1.5em;\n}','list-style-type','リスト 黒丸 四角 四角いマーカー 順序なし 箇条書き'],
['要素を横並びにする','親をFlexboxにすると子要素が標準で横方向に並びます。gapで間隔、flex-wrapで折り返しを指定できます。','.parent {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}','display','横並び 横に並べる 横ならび Flexbox'],
['画像を親幅に合わせて縮小する','元の画像より大きくせず、親幅を超えるときに縮小します。height: autoで縦横比を保ちます。display: blockは画像の下に出る行の隙間を抑えます。','img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}','max-width','画像 サイズ 縮小 はみ出し レスポンシブ 縦横比'],
['角を丸くする','border-radiusで角丸を指定します。画像やボタン、カードにも使えます。子要素のはみ出しも切りたい場合はoverflow: hiddenを必要に応じて追加します。','.card {\n  border-radius: 12px;\n}','border-radius','角丸 かどまる 角を丸く'],
['余白を付ける：外側と内側','marginは枠線の外側、paddingは枠線と内容の間です。両者を使い分けて、要素同士の間隔と内容周囲の余白を調整します。','.box {\n  margin: 24px;\n  padding: 16px;\n}','padding','余白 マージン パディング 間隔 スペース']
];
window.atlasCSSRecipes=rows.map(([name,desc,example,property,keywords])=>({kind:'css',group:'目的から探すCSS',name,desc,example,attrs:keywords,recipe:true,url:'https://developer.mozilla.org/en-US/docs/Web/CSS/'+property}));window.atlasWebData.push(...window.atlasCSSRecipes);
})();
