window.AtlasCodingBookData=[
  {
    "id": "structure",
    "title": "HTMLとCSSの役割",
    "intro": "HTMLで内容の意味と順序を作り、CSSで見た目を整えます。",
    "paragraphs": [
      "HTMLは見出し・段落・リンクなどをタグで区別します。見出しはh1〜h6、段落はpです。文字を大きくするためだけに見出しを選ばず、内容の階層に合わせます。",
      "CSSはHTMLの指定先を選び、文字色や余白などを付けます。この例では同じHTMLのh2にだけ色を付けています。pの内容は変わりません。",
      "実際の制作ではHTMLをindex.html、CSSをstyle.cssなどに分け、HTMLのhead内に <link rel=\"stylesheet\" href=\"style.css\"> と書いて読み込みます。hrefには実際の保存場所を書きます。"
    ],
    "html": "<h2>作品紹介</h2>\n<p>制作した作品を紹介します。</p>",
    "css": "h2 {\n  color: #245a78;\n}",
    "notes": [
      "linkは外部ファイルとの関係を示す要素、rel=\"stylesheet\"はCSSとして読む指定、hrefはファイルへのパスです。HTMLのheadはページ設定、bodyは表示する内容を書く場所です。"
    ],
    "question": "pの文章も青くなりますか？",
    "answer": "この例ではなりません。h2セレクターでh2だけを選んでいます。",
    "related": [
      "HTML",
      "CSS",
      "HTML要素",
      "セレクター"
    ],
    "wide": false
  },
  {
    "id": "attributes",
    "title": "要素・属性・値の読み方",
    "intro": "要素はHTMLの構成単位です。タグで種類や範囲を示し、属性で設定を加え、その内容を値に書きます。",
    "paragraphs": [
      "タグは <a> や </a> のような記述で、aはタグ名です。通常、開始タグ・内容・終了タグを合わせて要素と呼びます。imgなど、終了タグを持たない要素もあります。",
      "この例のaはリンクを表す要素です。hrefがリンク先を指定する属性、#worksが属性の値です。#worksは同じページのid=\"works\"が付いた場所を指します。",
      "classはCSSなどから要素を選ぶための目印です。class=\"link\"とCSSの.linkを同じ名前にします。名前を変える場合は両方を揃えます。",
      "属性には書ける要素や値の決まりがあります。disabledのように、存在するだけで有効になる属性もあります。見慣れない属性は属性一覧、値の意味は属性の値一覧から確認できます。"
    ],
    "html": "<a class=\"link\" href=\"#works\">作品を見る</a>\n<section id=\"works\">\n  <h2>作品</h2>\n</section>",
    "css": ".link {\n  font-weight: 700;\n}",
    "notes": [
      "class名は自由ですが、役割が分かる名前を付けます。.linkのドットはCSSの記号なので、HTMLのclassの値には入れません。"
    ],
    "question": "href=\"#works\"のworksを変えるとき、ほかに何を揃えますか？",
    "answer": "移動先のid=\"works\"も同じ名前に変えます。CSSで#worksを使っていれば、その指定も揃えます。",
    "related": [
      "属性",
      "属性値",
      "class属性",
      "id属性"
    ],
    "wide": false
  },
  {
    "id": "document",
    "title": "HTML文書の基本構造とCSSの読み込み",
    "intro": "文書の設定はhead、表示する内容はbodyへ書きます。CSSファイルはlinkで読み込みます。",
    "paragraphs": [
      "<!doctype html>はHTML文書の宣言です。html要素が文書のルートで、lang=\"ja\"は主な言語が日本語であることを示します。",
      "headには文字コード、ページのタイトル、CSSの読み込みなどを書きます。titleはブラウザーのタブなどで使われ、本文の見出しとは別です。",
      "linkのrel=\"stylesheet\"はスタイルシートという関係、href=\"style.css\"は読み込むCSSの場所です。この例ではHTMLとstyle.cssを同じフォルダーに置きます。",
      "bodyには見出し・段落など、ページの内容を書きます。meta viewportはスマートフォンなどの表示領域の扱いを指定します。"
    ],
    "html": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>作品紹介</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>作品紹介</h1>\n  <p>制作した作品を紹介します。</p>\n</body>\n</html>",
    "css": "h1 {\n  color: #245a78;\n}",
    "notes": [
      "このアプリの表示例では、下記CSSをプレビューへ組み込んでいます。自分でファイルを作る場合はstyle.cssを用意し、hrefと保存場所を一致させてください。",
      "head要素・header要素・見出しのh1は用途が異なります。"
    ],
    "question": "titleとh1は同じ場所に表示されますか？",
    "answer": "同じではありません。titleは文書のタイトルとしてタブなどで使われ、h1はbody内の見出しです。",
    "related": [
      "HTML",
      "head",
      "body",
      "link"
    ],
    "wide": false
  },
  {
    "id": "syntax",
    "title": "CSSの書き方と作用先",
    "intro": "CSSは「どこに・何を・どの値で」を書きます。",
    "paragraphs": [
      ".noticeが指定先を選ぶセレクター、colorが変更する項目を表すプロパティ、#245a78が値です。プロパティと値を:でつなぎ、宣言の終わりに;を付けます。",
      "{ }の内側には複数の宣言を縦に並べられます。この例は同じ段落に文字色と太さを指定します。font-weight: 700は一般的に太字の指定です。",
      "HTMLのclass=\"notice\"とCSSの.noticeは対応しています。h2だけならすべてのh2、.noticeならそのclassが付いた要素を選びます。要素名にドットは付けません。"
    ],
    "html": "<p class=\"notice\">受付は明日までです。</p>",
    "css": ".notice {\n  color: #245a78;\n  font-weight: 700;\n}",
    "notes": [
      "全角のコロンや波括弧、綴り間違い、閉じ忘れに注意します。値の形式はプロパティごとに違います。"
    ],
    "question": "HTMLが<h2>だけの時、.h2で選べますか？",
    "answer": "選べません。.h2はclass=\"h2\"を選ぶ指定です。h2要素そのものはh2で選びます。",
    "related": [
      "セレクター",
      "プロパティ",
      "値",
      "クラスセレクター"
    ],
    "wide": false
  },
  {
    "id": "type",
    "title": "文字・色・単位",
    "intro": "文字サイズ・行間・色は、それぞれ別のプロパティで指定します。",
    "paragraphs": [
      "font-sizeは文字サイズ、font-weightは太さ、line-heightは行の高さ、colorは文字色です。読みやすさは一つの値だけで決まらず、行の長さや背景との明るさの差も関係します。",
      "pxはCSS上の長さの単位、remはルート要素の文字サイズを基準にした単位です。line-heightの単位なしの1.8は、その要素の文字サイズに対する倍率です。",
      "HEXの#245a78はRGBの色を16進数で表した値です。色一覧から選んでコピーできます。背景色はbackground-colorで指定します。"
    ],
    "html": "<p class=\"text\">文章が読みやすくなるように、文字の大きさと行間を整えます。長い説明でも、行間があると追いやすくなります。</p>",
    "css": ".text {\n  font-size: 1rem;\n  line-height: 1.8;\n  color: #245a78;\n}",
    "notes": [
      ".textはこの段落のclass名です。別の名前にするなら、HTMLとCSSを同時に変更します。"
    ],
    "question": "line-height: 1.8は1.8pxですか？",
    "answer": "違います。単位なしの場合は、その要素の文字サイズの1.8倍の行ボックスを作ります。",
    "related": [
      "単位",
      "単位",
      "color",
      "line-height"
    ],
    "wide": false
  },
  {
    "id": "box",
    "title": "余白とボックスモデル",
    "intro": "要素の箱は、内容・padding・border・marginで考えます。",
    "paragraphs": [
      "paddingは内容と枠の間の内側の余白、borderは枠線、marginは枠の外の余白です。文字を枠から離すならpadding、隣の箱から離すならmarginを使います。",
      "背景色は通常paddingの部分にも付きますが、marginには付きません。プレビューは同じ2つの箱で、余白を付ける前と後を比べています。",
      "box-sizing: border-boxではwidthにpaddingとborderを含めます。marginは幅に含めません。通常のブロック配置では上下のmarginが相殺される場合があります。"
    ],
    "html": "<div class=\"card\">一つ目の箱</div>\n<div class=\"card\">二つ目の箱</div>",
    "css": ".card {\n  box-sizing: border-box;\n  background-color: #dce8ef;\n  border: 1px solid #6b879b;\n  padding: 20px;\n  margin-bottom: 16px;\n}",
    "notes": [
      "divは意味を限定しないまとまりです。余白の位置を確認するため、同じclassのdivを2つ並べています。"
    ],
    "question": "箱の背景色を付けたまま、文字と枠の間を広げるのは？",
    "answer": "paddingです。marginは枠の外側で、その箱の背景色は付きません。",
    "related": [
      "ボックスモデル",
      "padding",
      "margin",
      "box-sizing"
    ],
    "wide": false,
    "extraTerms": [
      [
        "ボックスモデル",
        "要素をcontent・padding・border・marginの領域で捉える考え方。見た目の枠と、周囲に確保される余白を区別します。"
      ],
      [
        "コンテンツボックス",
        "文字や画像等の内容が入る領域。content-boxの場合はwidth・heightがこの領域の寸法です。"
      ],
      [
        "パディングボックス",
        "内容にpaddingを加えた領域。背景は通常この内側にも描かれます。"
      ],
      [
        "ボーダーボックス",
        "paddingまでの領域にborderを加えた領域。border-boxの場合のwidth・heightの基準です。"
      ],
      [
        "マージンボックス",
        "borderの外側にmarginを含めた領域。通常の要素のボックスモデルでの意味です。印刷用@pageでヘッダー等を置く「ページマージンボックス」とは文脈が違います。"
      ],
      [
        "padding / margin",
        "paddingは内容と枠の間、marginは枠の外。箱の背景色が付く範囲や、周囲との距離が違います。"
      ],
      [
        "marginの相殺",
        "通常のブロック配置で接する上下のmarginは、条件により重なり合います。たとえば正の20pxと30pxなら50pxではなく30pxになる場合があります。Flex/Gridの子同士のmarginはこのようには相殺されません。"
      ],
      [
        "border / outline",
        "borderは箱の寸法に関係する枠線。outlineは通常レイアウトの寸法を増やさず外側に描く輪郭で、フォーカス表示にも使います。"
      ],
      [
        "セレクター",
        "CSSを適用する相手の指定。.cardはclass=\"card\"、#infoはid=\"info\"。違う名前では同じ対象を選べません。"
      ],
      [
        "親要素 / 子要素",
        "HTMLで囲む側が親、そのすぐ内側が子です。display:flex等は並べたい子を囲む親に書きます。"
      ],
      [
        "ブロック / インライン",
        "通常のブロックは新しい行を作り、インラインは文章の流れに入ります。通常のインラインにはwidth・heightがそのまま作用しない場合があるため、対象のdisplayも確認します。"
      ],
      [
        "継承 / 詳細度",
        "color等は親から引き継がれる場合があります。複数のCSSが当たるときは、重要度・詳細度・書かれた順などから使う指定が決まります。"
      ],
      [
        "ビューポート / ブレークポイント",
        "ビューポートはページを表示する領域。ブレークポイントは表示幅等に応じて指定を切り替える境目。スマホ機種名そのものの判定ではありません。"
      ],
      [
        "px / rem / %",
        "pxはCSS上の長さの単位、remはルートの文字サイズが基準、%は指定するプロパティに応じた基準値への割合。常に画面全体の割合とは限りません。"
      ]
    ]
  },
  {
    "id": "selectors",
    "title": "セレクターの種類",
    "intro": "要素名・class・id・親子関係・状態で、指定先を選べます。",
    "paragraphs": [
      "h2はタイプセレクターで、h2要素を選びます。.noticeはクラスセレクターで、class=\"notice\"が付いた要素を選びます。#introはIDセレクターで、id=\"intro\"を選びます。",
      ".card > h2の>は直下の子要素を選ぶ結合子です。.card h2のように空白でつなぐと、子孫にあるh2を選びます。",
      ":hoverなどの擬似クラスは状態、::beforeなどの擬似要素は要素の一部分などを対象にします。すべての指定はセレクター一覧から、意味・書き方・詳細度を確認できます。"
    ],
    "html": "<article class=\"card\">\n  <h2>お知らせ</h2>\n  <p>本文です。</p>\n</article>",
    "css": ".card > h2 {\n  border-bottom: 2px solid #245a78;\n}",
    "notes": [
      "この例のarticleは独立した記事のまとまりです。class=\"card\"は付けた目印で、cardというHTML要素があるわけではありません。"
    ],
    "question": ".card > h2は、.cardの中のpも選びますか？",
    "answer": "選びません。.cardの直下にあるh2だけを選びます。",
    "related": [
      "タイプセレクター",
      "クラスセレクター",
      "擬似クラス",
      "擬似要素"
    ],
    "wide": false
  },
  {
    "id": "flex",
    "title": "Flexboxで一方向に並べる",
    "intro": "Flexboxは横または縦に部品を並べたい時に使います。",
    "paragraphs": [
      "並べる子要素を囲む親にdisplay: flexを指定します。既定のflex-direction: rowでは、横書きの通常の場合、横方向に並びます。",
      "gapは子要素同士の間隔、justify-contentは主軸方向の配置、align-itemsは交差軸方向の配置です。rowとcolumnで軸が変わるので、常に横・縦と覚えないようにします。",
      "中央配置を使うとき、親に余った空間が必要です。幅が足りない場合はflex-wrap: wrapで折り返すなど、狭い画面の並び方も決めます。"
    ],
    "html": "<div class=\"actions\">\n  <button type=\"button\">戻る</button>\n  <button type=\"button\">次へ</button>\n</div>",
    "css": ".actions {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  min-height: 120px;\n}",
    "notes": [
      "buttonは操作用のボタン、type=\"button\"は送信をしない通常のボタンです。このプレビューには実行する処理を付けていません。"
    ],
    "question": "display: flexは並べたいボタン自身に付けますか？",
    "answer": "この例では2つのボタンを囲む親の.actionsに付けます。",
    "related": [
      "Flexbox",
      "親要素・子要素",
      "gap",
      "display"
    ],
    "wide": false
  },
  {
    "id": "grid",
    "title": "Gridで行と列を作る",
    "intro": "Gridはカード一覧など、行と列を揃える配置に向いています。",
    "paragraphs": [
      "親要素にdisplay: gridを指定し、grid-template-columnsで列の構成を決めます。repeat(2, minmax(0, 1fr))は、同じ幅の列を2本作る例です。",
      "1frは使える余った幅を分ける単位です。gapは列・行の間隔です。minmax(0, 1fr)は列の最小幅を0にし、長い内容によるはみ出しを抑える指定ですが、内容自体の折り返しも必要です。",
      "FlexboxとGridは組み合わせられます。一方向の部品配置にはFlexbox、行と列を揃えたい一覧にはGridという目的から選びます。"
    ],
    "html": "<div class=\"cards\">\n  <div>作品1</div>\n  <div>作品2</div>\n  <div>作品3</div>\n  <div>作品4</div>\n</div>",
    "css": ".cards {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.cards > div {\n  padding: 16px;\n  background-color: #dce8ef;\n}",
    "notes": [
      "repeat・minmaxはCSSの関数です。>は直下の子を選びます。役割が違うので、単語をまとめて一つの命令として覚えないようにします。"
    ],
    "question": "grid-template-columnsは何を決めますか？",
    "answer": "列の本数と幅の構成を決めます。行の指定はgrid-template-rowsです。",
    "related": [
      "Grid",
      "Flexbox",
      "関数",
      "gap"
    ],
    "wide": false
  },
  {
    "id": "responsive",
    "title": "スマホ対応とメディアクエリ",
    "intro": "同じHTMLでも、表示幅に合わせてCSSを切り替えられます。",
    "paragraphs": [
      "@media (max-width: 600px)の内側の指定は、表示領域が600 CSSピクセル以下の時に適用します。この例は通常3列、狭い画面では1列です。",
      "下の2つは同じHTML・CSSを375pxと768pxの表示領域で表示した例です。左右を比較するための表示なので、コードを編集する操作はありません。",
      "HTMLのheadには <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> を書きます。nameは設定名、contentは内容で、端末の幅を表示幅として扱うための指定です。",
      "切り替える幅は端末名ではなく、内容が読みにくくなる位置から決めます。文字を折り返す、画像にmax-width: 100%を付けるなども確認します。"
    ],
    "html": "<div class=\"cards\">\n  <div>作品1</div>\n  <div>作品2</div>\n  <div>作品3</div>\n</div>",
    "css": ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.cards > div {\n  padding: 16px;\n  background-color: #dce8ef;\n}\n\n@media (max-width: 600px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n}",
    "notes": [
      "これは画面幅による違いなので、変更前後ではなく「375px / 768px」で表示します。"
    ],
    "question": "max-width: 600pxの指定は幅768pxでも適用されますか？",
    "answer": "適用されません。600px以下が条件です。375pxには適用されます。",
    "related": [
      "レスポンシブ",
      "メディアクエリ",
      "ビューポート",
      "Grid"
    ],
    "wide": true
  },
  {
    "id": "decoration",
    "title": "枠線・角丸・影・変形",
    "intro": "装飾は、部品の境界や状態を伝えるために使います。",
    "paragraphs": [
      "borderは枠の太さ・種類・色をまとめて書けます。border-radiusは角丸、box-shadowは影です。この例の影は横0・縦4px・ぼかし12px・黒の15%です。",
      "変形はtransformを使い、translateは移動、rotateは回転、scaleは拡大縮小です。たとえばtransform: translateY(-2px)は見た目を上へ2px移動します。",
      "transformは通常のレイアウトで確保する領域を動かしません。周囲との間隔を作るならmarginやgapを使います。装飾を増やす前に文字の読みやすさを確認します。"
    ],
    "html": "<div class=\"card\">作品カード</div>",
    "css": ".card {\n  padding: 20px;\n  border: 1px solid #6b879b;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);\n  transform: translateY(-2px);\n}",
    "notes": [
      "影は枠の外にも描かれます。近くの文字やボタンと重ならないよう、余白を確保します。"
    ],
    "question": "カードと隣のカードの間を広げる時、transformで移動するのが基本ですか？",
    "answer": "基本はmarginや親のgapで領域を確保します。transformは見た目の位置だけが変わるため、重なりに注意します。",
    "related": [
      "border",
      "border-radius",
      "box-shadow",
      "transform"
    ],
    "wide": false
  },
  {
    "id": "cascade",
    "title": "CSSの優先順位と継承",
    "intro": "CSSが重なった時は、プロパティごとに採用する値が決まります。",
    "paragraphs": [
      "同じ要素のcolorに複数の指定がある場合、出所・!important・レイヤーなどを先に比べ、その条件が同じなら詳細度を比べます。詳細度はID、classなど、要素などの3列を左から比べます。",
      "この例は同じclassなので詳細度も同じです。ほかの条件も同じなので後に書いた文字色が採用されます。文字色が上書きされても、先に書いたfont-weightは残ります。",
      "継承は、子自身に値が決まらない場合に親の値を受け継ぐ仕組みです。colorなどは継承しますが、marginなどは通常継承しません。!importantは得点に足すものではありません。",
      "詳しい例と得点表は「CSSの優先順位・詳細度」で確認できます。計算機は実際のセレクターを入力し、詳細度を調べるための補助です。"
    ],
    "html": "<p class=\"notice\">受付は明日までです。</p>",
    "css": ".notice {\n  color: #245a78;\n  font-weight: 700;\n}\n\n.notice {\n  color: #9a4c18;\n}",
    "notes": [
      "この章は静止した表示例です。アニメーション、実行中のトランジション、利用者スタイルなどの詳細は優先順位の補足を参照してください。"
    ],
    "question": "後のcolorで上書きされたら、先のfont-weightも消えますか？",
    "answer": "消えません。採用はプロパティごとに決まり、後に競合するfont-weightがなければ先の指定が残ります。",
    "related": [
      "カスケード",
      "詳細度",
      "継承",
      "!important"
    ],
    "wide": false
  },
  {
    "id": "architecture",
    "title": "CSS設計・BEM・FLOCSS",
    "intro": "CSSが増えても探しやすく直しやすいよう、名前と役割を揃えます。",
    "paragraphs": [
      "CSS設計は、class名や共通部分のまとめ方を決めることです。小さなページでは、役割が分かる名前を使い、同じ指定の重複を減らすところから始めます。",
      "BEMは部品全体（Block）、その一部（Element）、種類や状態（Modifier）で考えます。この例のcardが全体、card__titleが一部、card--featuredが強調という違いです。",
      "FLOCSSは土台（Foundation）、大きな枠（Layout）、見た目の部品（Object）に役割を分けます。Objectは小さな共通部品・サイト特有のまとまり・微調整に分けます。詳しい名前の例は用語一覧で読めます。",
      "これらはCSSの新しい命令ではなく整理の方法です。最初からすべての分類やファイルを用意する必要はありません。制作規模とチームの方針に合わせます。"
    ],
    "html": "<article class=\"card card--featured\">\n  <h2 class=\"card__title\">おすすめ作品</h2>\n  <p>作品の紹介文です。</p>\n</article>",
    "css": ".card {\n  padding: 16px;\n}\n\n.card__title {\n  font-size: 20px;\n}\n\n.card--featured {\n  border: 2px solid #245a78;\n}",
    "notes": [
      "__や--はclass名の一部です。名前を付けただけで装飾が付くわけではなく、その名前に対応するCSSを書きます。"
    ],
    "question": "card--featuredというclassを付けるだけで枠線が付きますか？",
    "answer": "付きません。.card--featuredにborderなどのCSSを書く必要があります。",
    "related": [
      "CSS設計",
      "BEM",
      "FLOCSS",
      "クラスセレクター"
    ],
    "wide": false
  }
];
