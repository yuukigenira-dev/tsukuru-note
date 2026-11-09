(()=>{'use strict';window.AtlasCodingTerms=[
  {
    "domain": "web",
    "group": "基本の用語",
    "title": "HTML",
    "intro": "見出し・段落・リンクなど、ページの内容と意味・構造を記述する言語。",
    "code": "<h2>お知らせ</h2>\n<p>本文です。</p>",
    "pitfalls": [
      "見出しの大きさや色などの見た目はCSSで調整します。"
    ],
    "related": [
      "HTML要素",
      "タグ",
      "CSS"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "見出しの大きさや色などの見た目はCSSで調整します。",
        "<h2>お知らせ</h2>\n<p>本文です。</p>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "基本の用語",
    "title": "CSS",
    "intro": "HTMLの文字色・余白・配置など、見た目を指定する言語。",
    "code": "h2 {\n  color: #245a78;\n}",
    "pitfalls": [
      "h2が対象、colorがプロパティ、#245a78が値です。"
    ],
    "related": [
      "セレクター",
      "プロパティ",
      "値",
      "HTML"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "h2が対象、colorがプロパティ、#245a78が値です。",
        "h2 {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "基本の用語",
    "title": "JavaScript",
    "intro": "クリックへの反応やデータの更新など、ページの動作を記述する言語。",
    "code": "const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  button.textContent = \"完了\";\n});",
    "pitfalls": [
      "button要素が存在してから実行する例です。HTML・CSSとは役割が異なります。"
    ],
    "related": [
      "DOM",
      "イベント",
      "変数",
      "関数"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "button要素が存在してから実行する例です。HTML・CSSとは役割が異なります。",
        "const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  button.textContent = \"完了\";\n});"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "HTML要素",
    "intro": "見出しや段落など、文書内の意味を持つ単位。通常はタグと内容から成ります。",
    "code": "<p>お知らせの本文</p>",
    "pitfalls": [
      "pは段落の要素。imgなど、終了タグや内容を持たない空要素もあります。"
    ],
    "related": [
      "タグ",
      "空要素",
      "属性"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "pは段落の要素。imgなど、終了タグや内容を持たない空要素もあります。",
        "<p>お知らせの本文</p>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "タグ",
    "intro": "HTML要素の始まりや終わりを記す記号付きの書き方。",
    "code": "<h2>見出し</h2>",
    "pitfalls": [
      "<h2>は開始タグ、</h2>は終了タグ。見出し全体はh2要素です。"
    ],
    "related": [
      "HTML要素",
      "入れ子"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "<h2>は開始タグ、</h2>は終了タグ。見出し全体はh2要素です。",
        "<h2>見出し</h2>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "空要素",
    "intro": "HTMLで内容と終了タグを持たない要素。",
    "code": "<img src=\"photo.jpg\" alt=\"青い花\">\n<br>",
    "pitfalls": [
      "imgやbrに終了タグは書きません。すべての要素がこの書き方になるわけではありません。"
    ],
    "related": [
      "HTML要素",
      "属性",
      "代替テキスト"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "imgやbrに終了タグは書きません。すべての要素がこの書き方になるわけではありません。",
        "<img src=\"photo.jpg\" alt=\"青い花\">\n<br>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "属性",
    "intro": "HTMLの開始タグに書く、要素への追加情報。",
    "code": "<a href=\"guide.html\">使い方</a>",
    "pitfalls": [
      "hrefが属性名、guide.htmlが属性値です。"
    ],
    "related": [
      "属性値",
      "class属性",
      "id属性"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "hrefが属性名、guide.htmlが属性値です。",
        "<a href=\"guide.html\">使い方</a>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "属性値",
    "intro": "属性がどの内容・状態を指定するかを表す部分。",
    "code": "<th scope=\"row\">担当者</th>",
    "pitfalls": [
      "scopeの値rowは行の見出しを表します。値には決まった選択肢と自由に付ける名前があります。"
    ],
    "related": [
      "属性",
      "row・col",
      "値"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "scopeの値rowは行の見出しを表します。値には決まった選択肢と自由に付ける名前があります。",
        "<th scope=\"row\">担当者</th>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "class属性",
    "intro": "同じ装飾や処理をまとめて適用するための、要素の分類名。",
    "code": "<p class=\"notice\">お知らせ</p>",
    "pitfalls": [
      "noticeは自分で付けた名前。HTMLではドットを付けず、CSSでは.noticeと指定します。"
    ],
    "related": [
      "クラスセレクター",
      "id属性"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "noticeは自分で付けた名前。HTMLではドットを付けず、CSSでは.noticeと指定します。",
        "<p class=\"notice\">お知らせ</p>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "id属性",
    "intro": "同じ文書の中で一つの要素を識別するための名前。",
    "code": "<section id=\"guide\">案内</section>",
    "pitfalls": [
      "同じidを文書内で重複させません。CSSでは#guide、ページ内リンクではhref=\"#guide\"です。"
    ],
    "related": [
      "IDセレクター",
      "class属性"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "同じidを文書内で重複させません。CSSでは#guide、ページ内リンクではhref=\"#guide\"です。",
        "<section id=\"guide\">案内</section>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "入れ子",
    "intro": "ある要素の内側に、別の要素を配置する構造。",
    "code": "<article>\n  <h2>見出し</h2>\n  <p>本文</p>\n</article>",
    "pitfalls": [
      "内側から順に閉じます。どの要素でも自由に組み合わせられるわけではありません。"
    ],
    "related": [
      "親要素・子要素",
      "子孫要素",
      "兄弟要素"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "内側から順に閉じます。どの要素でも自由に組み合わせられるわけではありません。",
        "<article>\n  <h2>見出し</h2>\n  <p>本文</p>\n</article>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "親要素・子要素",
    "intro": "直接一段外側にある要素が親、その直下の要素が子。",
    "code": "<article>\n  <p>本文</p>\n</article>",
    "pitfalls": [
      "articleはpの親、pはarticleの子です。h1やpという名前自体が「親」を意味するわけではありません。"
    ],
    "related": [
      "入れ子",
      "子孫要素",
      "結合子"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "articleはpの親、pはarticleの子です。h1やpという名前自体が「親」を意味するわけではありません。",
        "<article>\n  <p>本文</p>\n</article>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "子孫要素",
    "intro": "子・孫など、ある要素の内側に含まれる要素。",
    "code": "<article>\n  <div>\n    <p>本文</p>\n  </div>\n</article>",
    "pitfalls": [
      "pはarticleの子孫ですが、直接の子ではありません。article pとarticle > pの対象は異なります。"
    ],
    "related": [
      "親要素・子要素",
      "結合子"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "pはarticleの子孫ですが、直接の子ではありません。article pとarticle > pの対象は異なります。",
        "<article>\n  <div>\n    <p>本文</p>\n  </div>\n</article>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "兄弟要素",
    "intro": "同じ親を持つ要素同士の関係。",
    "code": "<article>\n  <h2>見出し</h2>\n  <p>本文</p>\n</article>",
    "pitfalls": [
      "h2とpは兄弟。h2 + pは直後のp、h2 ~ pは後ろの兄弟のpを対象にします。"
    ],
    "related": [
      "結合子",
      "親要素・子要素"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "h2とpは兄弟。h2 + pは直後のp、h2 ~ pは後ろの兄弟のpを対象にします。",
        "<article>\n  <h2>見出し</h2>\n  <p>本文</p>\n</article>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "セマンティクス",
    "intro": "文書の中で、要素が持つ意味や役割。",
    "code": "<button type=\"button\">保存</button>",
    "pitfalls": [
      "操作にはbutton、移動にはaなど、見た目だけでなく役割で選びます。"
    ],
    "related": [
      "HTML要素",
      "アクセシビリティ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "操作にはbutton、移動にはaなど、見た目だけでなく役割で選びます。",
        "<button type=\"button\">保存</button>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "代替テキスト",
    "intro": "画像を見られない場合などに、画像の意味を伝えるテキスト。",
    "code": "<img src=\"chart.png\" alt=\"売上が4月から6月に増加したグラフ\">",
    "pitfalls": [
      "alt属性で指定。装飾だけの画像はalt=\"\"にするなど、画像の役割で内容を決めます。"
    ],
    "related": [
      "属性",
      "アクセシビリティ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "alt属性で指定。装飾だけの画像はalt=\"\"にするなど、画像の役割で内容を決めます。",
        "<img src=\"chart.png\" alt=\"売上が4月から6月に増加したグラフ\">"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "row・col",
    "intro": "表でrowは行、colは列を表す値や名前。",
    "code": "<th scope=\"row\">担当者</th>\n<th scope=\"col\">氏名</th>",
    "pitfalls": [
      "scope=\"row\"は行見出し、scope=\"col\"は列見出し。CSSのflex-direction: rowは並ぶ方向であり別の用途です。"
    ],
    "related": [
      "属性値",
      "HTML要素"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "scope=\"row\"は行見出し、scope=\"col\"は列見出し。CSSのflex-direction: rowは並ぶ方向であり別の用途です。",
        "<th scope=\"row\">担当者</th>\n<th scope=\"col\">氏名</th>"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "セレクター",
    "intro": "CSSをどの要素に適用するかを指定する部分。",
    "code": "h2 {\n  color: #245a78;\n}",
    "pitfalls": [
      "この例ではh2がセレクターです。h2要素を選ぶとき、.h2とは書きません。"
    ],
    "related": [
      "タイプセレクター",
      "クラスセレクター",
      "擬似クラス",
      "プロパティ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "この例ではh2がセレクターです。h2要素を選ぶとき、.h2とは書きません。",
        "h2 {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "タイプセレクター",
    "intro": "HTMLの要素名で対象を選ぶセレクター。",
    "code": "p {\n  line-height: 1.8;\n}",
    "pitfalls": [
      "pはすべてのp要素を選びます。.pはclass=\"p\"を選ぶ別の指定です。"
    ],
    "related": [
      "セレクター",
      "クラスセレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "pはすべてのp要素を選びます。.pはclass=\"p\"を選ぶ別の指定です。",
        "p {\n  line-height: 1.8;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "クラスセレクター",
    "intro": "class属性の名前にドットを付けて対象を選ぶ指定。",
    "code": "<p class=\"notice\">お知らせ</p>\n\n.notice {\n  color: #245a78;\n}",
    "pitfalls": [
      "noticeは好きな名前に置き換えられます。HTMLとCSSの両方を同じ名前に変更します。"
    ],
    "related": [
      "class属性",
      "タイプセレクター",
      "IDセレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "noticeは好きな名前に置き換えられます。HTMLとCSSの両方を同じ名前に変更します。",
        "<p class=\"notice\">お知らせ</p>\n\n.notice {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "IDセレクター",
    "intro": "id属性の名前に#を付けて対象を選ぶ指定。",
    "code": "#guide {\n  padding: 16px;\n}",
    "pitfalls": [
      "#guideはid=\"guide\"の要素。色の#245a78とは、書く場所と役割が異なります。"
    ],
    "related": [
      "id属性",
      "詳細度",
      "HEX"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "#guideはid=\"guide\"の要素。色の#245a78とは、書く場所と役割が異なります。",
        "#guide {\n  padding: 16px;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "属性セレクター",
    "intro": "属性があるか、その値は何か、という条件で要素を選ぶ指定。",
    "code": "input[type=\"email\"] {\n  border: 1px solid #cccccc;\n}",
    "pitfalls": [
      "type=\"email\"を持つinputだけが対象です。"
    ],
    "related": [
      "属性",
      "属性値",
      "セレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "type=\"email\"を持つinputだけが対象です。",
        "input[type=\"email\"] {\n  border: 1px solid #cccccc;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "結合子",
    "intro": "要素同士の関係を使い、セレクターの対象を絞る記号や空白。",
    "code": "article > p {\n  color: #245a78;\n}",
    "pitfalls": [
      ">は直下の子、空白は子孫、+は直後の兄弟、~は後続の兄弟を表します。"
    ],
    "related": [
      "親要素・子要素",
      "子孫要素",
      "兄弟要素"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        ">は直下の子、空白は子孫、+は直後の兄弟、~は後続の兄弟を表します。",
        "article > p {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "擬似クラス",
    "intro": "操作中・選択済み・何番目など、要素の状態や条件を指定するもの。",
    "code": "button:hover {\n  background-color: #dce8ef;\n}",
    "pitfalls": [
      ":hoverはポインターが乗った状態。コロンは一つです。"
    ],
    "related": [
      "ホバー",
      "フォーカス",
      "擬似要素",
      "セレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        ":hoverはポインターが乗った状態。コロンは一つです。",
        "button:hover {\n  background-color: #dce8ef;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "擬似要素",
    "intro": "要素の一部や生成した内容などを対象にする指定。",
    "code": "p::first-letter {\n  font-size: 2em;\n}",
    "pitfalls": [
      "::first-letterは最初の文字を対象にします。通常はコロンを二つ書きます。"
    ],
    "related": [
      "擬似クラス",
      "セレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "::first-letterは最初の文字を対象にします。通常はコロンを二つ書きます。",
        "p::first-letter {\n  font-size: 2em;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ホバー",
    "intro": "マウスポインターなどが要素の上に乗っている状態。",
    "code": "a:hover {\n  color: #245a78;\n}",
    "pitfalls": [
      "スマホでは同じ操作ができない場合があります。ホバーだけに必要な情報を隠さないようにします。"
    ],
    "related": [
      "擬似クラス",
      "フォーカス"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "スマホでは同じ操作ができない場合があります。ホバーだけに必要な情報を隠さないようにします。",
        "a:hover {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "フォーカス",
    "intro": "キーボード入力などの操作対象が、ある要素に合っている状態。",
    "code": "button:focus-visible {\n  outline: 2px solid #245a78;\n}",
    "pitfalls": [
      "Tabキーで移動して確認します。フォーカスの目印を消すと操作位置が分かりにくくなります。"
    ],
    "related": [
      "擬似クラス",
      "アクセシビリティ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "Tabキーで移動して確認します。フォーカスの目印を消すと操作位置が分かりにくくなります。",
        "button:focus-visible {\n  outline: 2px solid #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "プロパティ",
    "intro": "CSSで何を変更するかを表す項目名。",
    "code": "p {\n  color: #245a78;\n  font-weight: 700;\n}",
    "pitfalls": [
      "colorは文字色、font-weightは太さを指定するプロパティです。"
    ],
    "related": [
      "値",
      "宣言",
      "color"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "colorは文字色、font-weightは太さを指定するプロパティです。",
        "p {\n  color: #245a78;\n  font-weight: 700;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "値",
    "intro": "プロパティに対して、どの状態・大きさ・色にするかを指定する部分。",
    "code": "p {\n  color: #245a78;\n  margin: 16px;\n}",
    "pitfalls": [
      "#245a78と16pxが値。使える値や単位はプロパティごとに異なります。"
    ],
    "related": [
      "プロパティ",
      "属性値",
      "単位",
      "HEX"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "#245a78と16pxが値。使える値や単位はプロパティごとに異なります。",
        "p {\n  color: #245a78;\n  margin: 16px;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "宣言",
    "intro": "プロパティと値をコロンでつなぎ、一つの指定にしたもの。",
    "code": "color: #245a78;",
    "pitfalls": [
      "colorがプロパティ、#245a78が値。次の宣言と区切るため末尾にセミコロンを書きます。"
    ],
    "related": [
      "プロパティ",
      "値",
      "宣言ブロック"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "colorがプロパティ、#245a78が値。次の宣言と区切るため末尾にセミコロンを書きます。",
        "color: #245a78;"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "宣言ブロック",
    "intro": "CSSの波括弧{ }の内側にある、宣言のまとまり。",
    "code": "h2 {\n  color: #245a78;\n  font-weight: 700;\n}",
    "pitfalls": [
      "{ }の中が宣言ブロック。複数の宣言を縦に並べると読みやすくなります。"
    ],
    "related": [
      "宣言",
      "CSSルール"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "{ }の中が宣言ブロック。複数の宣言を縦に並べると読みやすくなります。",
        "h2 {\n  color: #245a78;\n  font-weight: 700;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "CSSルール",
    "intro": "セレクターと宣言ブロックを組み合わせた、CSSの指定のまとまり。",
    "code": "h2 {\n  color: #245a78;\n}",
    "pitfalls": [
      "h2を対象に文字色を変える、という一つのルールです。"
    ],
    "related": [
      "セレクター",
      "宣言ブロック"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "h2を対象に文字色を変える、という一つのルールです。",
        "h2 {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "カスケード",
    "intro": "同じ要素の同じプロパティに複数の指定があるとき、採用する指定を決める仕組み。",
    "code": "p {\n  color: navy;\n}\np {\n  color: teal;\n}",
    "pitfalls": [
      "同じ出所・重要度・レイヤー・詳細度などの条件なら、後の指定が優先されます。"
    ],
    "related": [
      "詳細度",
      "継承"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "同じ出所・重要度・レイヤー・詳細度などの条件なら、後の指定が優先されます。",
        "p {\n  color: navy;\n}\np {\n  color: teal;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "詳細度",
    "intro": "詳細度（特異性 / specificity）は、同じ優先グループでCSSが競合する時に使うセレクターの強さ。ID・class等・要素等の3列を左から比べます。",
    "code": "p {\n  color: navy;\n}\n.notice {\n  color: teal;\n}",
    "pitfalls": [
      "同じ出所・重要度・レイヤーなどの条件なら、classは0-1-0、要素名は0-0-1。左の列から比べるためclassが優先されます。!importantは詳細度を増やすものではありません。"
    ],
    "related": [
      "カスケード",
      "クラスセレクター",
      "IDセレクター"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "同じ出所・重要度・レイヤーなどの条件なら、classは0-1-0、要素名は0-0-1。左の列から比べるためclassが優先されます。!importantは詳細度を増やすものではありません。",
        "p {\n  color: navy;\n}\n.notice {\n  color: teal;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "継承",
    "intro": "親要素のプロパティの値が、子要素へ引き継がれる仕組み。",
    "code": "article {\n  color: #245a78;\n}",
    "pitfalls": [
      "文字色などは通常継承されます。borderやmarginなど、すべてが継承されるわけではありません。"
    ],
    "related": [
      "親要素・子要素",
      "プロパティ",
      "カスケード"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "文字色などは通常継承されます。borderやmarginなど、すべてが継承されるわけではありません。",
        "article {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ボックスモデル",
    "intro": "要素の領域を、内容・内側の余白・枠線・外側の余白として捉える考え方。",
    "code": "p {\n  padding: 16px;\n  border: 1px solid #cccccc;\n  margin: 24px;\n}",
    "pitfalls": [
      "paddingは枠の内側、marginは外側。指定幅に何が含まれるかはbox-sizingでも変わります。"
    ],
    "related": [
      "余白",
      "Flexbox",
      "Grid"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "paddingは枠の内側、marginは外側。指定幅に何が含まれるかはbox-sizingでも変わります。",
        "p {\n  padding: 16px;\n  border: 1px solid #cccccc;\n  margin: 24px;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "余白",
    "intro": "内容や要素同士の間にある空間。CSSでは内側と外側を区別して指定します。",
    "code": "p {\n  padding: 16px;\n  margin-bottom: 24px;\n}",
    "pitfalls": [
      "背景色が付く内側の余白がpadding。隣の要素との外側の間隔にはmarginやgapを使います。"
    ],
    "related": [
      "ボックスモデル",
      "値"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "背景色が付く内側の余白がpadding。隣の要素との外側の間隔にはmarginやgapを使います。",
        "p {\n  padding: 16px;\n  margin-bottom: 24px;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "Flexbox",
    "intro": "要素を主に一方向へ並べ、間隔や揃え方を指定するレイアウト方式。",
    "code": "nav {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}",
    "pitfalls": [
      "親にdisplay: flexを指定すると、直下の子がフレックスアイテムになります。"
    ],
    "related": [
      "Grid",
      "親要素・子要素",
      "レスポンシブ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "親にdisplay: flexを指定すると、直下の子がフレックスアイテムになります。",
        "nav {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "Grid",
    "intro": "行と列を使い、要素を二次元に配置するレイアウト方式。",
    "code": "main {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}",
    "pitfalls": [
      "この例は同じ比率の2列。内容の最小幅によっては追加のはみ出し対策が必要です。"
    ],
    "related": [
      "Flexbox",
      "単位",
      "レスポンシブ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "この例は同じ比率の2列。内容の最小幅によっては追加のはみ出し対策が必要です。",
        "main {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "レスポンシブ",
    "intro": "画面幅などに合わせて、読みやすい配置やサイズへ調整する設計。",
    "code": "img {\n  max-width: 100%;\n  height: auto;\n}",
    "pitfalls": [
      "列数だけでなく、文字の折り返し・画像・操作のしやすさも確認します。"
    ],
    "related": [
      "メディアクエリ",
      "ビューポート",
      "ブレークポイント"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "列数だけでなく、文字の折り返し・画像・操作のしやすさも確認します。",
        "img {\n  max-width: 100%;\n  height: auto;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "メディアクエリ",
    "intro": "画面幅などの条件に応じて、CSSを適用する仕組み。",
    "code": "@media (max-width: 600px) {\n  main {\n    display: block;\n  }\n}",
    "pitfalls": [
      "この例はビューポート幅600 CSS px以下で適用。600pxは用途に合わせて変える例の数値です。"
    ],
    "related": [
      "レスポンシブ",
      "ブレークポイント",
      "ビューポート"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "この例はビューポート幅600 CSS px以下で適用。600pxは用途に合わせて変える例の数値です。",
        "@media (max-width: 600px) {\n  main {\n    display: block;\n  }\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ブレークポイント",
    "intro": "画面幅などに応じて、レイアウトを切り替える境目。",
    "code": "@media (max-width: 600px) {\n  nav {\n    flex-direction: column;\n  }\n}",
    "pitfalls": [
      "機種名だけで決めず、文字や内容が窮屈になる位置を目安にします。"
    ],
    "related": [
      "メディアクエリ",
      "レスポンシブ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "機種名だけで決めず、文字や内容が窮屈になる位置を目安にします。",
        "@media (max-width: 600px) {\n  nav {\n    flex-direction: column;\n  }\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ビューポート",
    "intro": "ブラウザーがWebページを表示する領域。",
    "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
    "pitfalls": [
      "このmetaはhead内に書きます。画面全体の物理ピクセル数とは区別します。"
    ],
    "related": [
      "レスポンシブ",
      "メディアクエリ",
      "単位"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "このmetaはhead内に書きます。画面全体の物理ピクセル数とは区別します。",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "単位",
    "intro": "CSSの数値が何を基準にした量かを示すもの。",
    "code": "p {\n  font-size: 1rem;\n  padding: 16px;\n  width: 80%;\n}",
    "pitfalls": [
      "pxはCSSピクセル、remはルートの文字サイズ基準、emは用途により自身や親の文字サイズ基準。%の基準はプロパティによります。"
    ],
    "related": [
      "値",
      "ビューポート"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "pxはCSSピクセル、remはルートの文字サイズ基準、emは用途により自身や親の文字サイズ基準。%の基準はプロパティによります。",
        "p {\n  font-size: 1rem;\n  padding: 16px;\n  width: 80%;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "HEX",
    "intro": "RGBの色成分を16進数で表す色コードの書き方。",
    "code": "p {\n  color: #245a78;\n}",
    "pitfalls": [
      "6桁の#RRGGBBでは赤24・緑5a・青78をそれぞれ16進数で指定。#から始まるIDセレクターとは別です。"
    ],
    "related": [
      "RGB",
      "color",
      "値"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "6桁の#RRGGBBでは赤24・緑5a・青78をそれぞれ16進数で指定。#から始まるIDセレクターとは別です。",
        "p {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "RGB",
    "intro": "赤・緑・青の光の組み合わせで色を表す方式。",
    "code": "p {\n  color: rgb(36, 90, 120);\n}",
    "pitfalls": [
      "この数値は#245a78と同じsRGB色。印刷用のCMYKとは方式が異なります。"
    ],
    "related": [
      "HEX",
      "color"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "この数値は#245a78と同じsRGB色。印刷用のCMYKとは方式が異なります。",
        "p {\n  color: rgb(36, 90, 120);\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "変数",
    "intro": "値に名前を付け、あとから参照できるようにするもの。",
    "code": "let count = 0;\ncount = count + 1;",
    "pitfalls": [
      "letは再代入できます。constは同じ変数への再代入を禁止しますが、オブジェクトの中身まで固定しません。"
    ],
    "related": [
      "データ型",
      "関数"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "letは再代入できます。constは同じ変数への再代入を禁止しますが、オブジェクトの中身まで固定しません。",
        "let count = 0;\ncount = count + 1;"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "データ型",
    "intro": "文字列・数値・真偽値など、データの種類。",
    "code": "const label = \"保存\";\nconst count = 3;\nconst isOpen = true;",
    "pitfalls": [
      "\"3\"は文字列、3は数値です。見た目が同じでも計算などの結果が異なることがあります。"
    ],
    "related": [
      "変数",
      "配列・オブジェクト"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "\"3\"は文字列、3は数値です。見た目が同じでも計算などの結果が異なることがあります。",
        "const label = \"保存\";\nconst count = 3;\nconst isOpen = true;"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "関数",
    "intro": "処理に名前を付けたり、一まとまりにして呼び出せるようにしたもの。",
    "code": "function double(number) {\n  return number * 2;\n}\nconst result = double(3);",
    "pitfalls": [
      "numberは引数を受け取る名前、returnは返す値。resultは6です。"
    ],
    "related": [
      "変数",
      "引数・戻り値",
      "イベント"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "numberは引数を受け取る名前、returnは返す値。resultは6です。",
        "function double(number) {\n  return number * 2;\n}\nconst result = double(3);"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "引数・戻り値",
    "intro": "関数に渡すデータが引数、関数から返されるデータが戻り値。",
    "code": "function greet(name) {\n  return \"こんにちは、\" + name;\n}\nconst message = greet(\"太郎\");",
    "pitfalls": [
      "\"太郎\"が渡す引数、\"こんにちは、太郎\"が戻り値です。"
    ],
    "related": [
      "関数",
      "データ型"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "\"太郎\"が渡す引数、\"こんにちは、太郎\"が戻り値です。",
        "function greet(name) {\n  return \"こんにちは、\" + name;\n}\nconst message = greet(\"太郎\");"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "配列・オブジェクト",
    "intro": "配列は順序付きのデータの集まり、オブジェクトは名前と値の組を持つデータ。",
    "code": "const colors = [\"青\", \"白\"];\nconst user = { name: \"太郎\", age: 20 };",
    "pitfalls": [
      "colors[0]は\"青\"、user.nameは\"太郎\"。配列の添字は0から始まります。"
    ],
    "related": [
      "データ型",
      "変数"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "colors[0]は\"青\"、user.nameは\"太郎\"。配列の添字は0から始まります。",
        "const colors = [\"青\", \"白\"];\nconst user = { name: \"太郎\", age: 20 };"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "条件分岐・ループ",
    "intro": "条件で処理を分ける仕組みと、処理を繰り返す仕組み。",
    "code": "for (let i = 0; i < 3; i++) {\n  if (i === 1) {\n    console.log(\"二つ目\");\n  }\n}",
    "pitfalls": [
      "forはi=0,1,2の3回。ifの条件が成立するi=1のときだけ出力します。"
    ],
    "related": [
      "変数",
      "デバッグ"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "forはi=0,1,2の3回。ifの条件が成立するi=1のときだけ出力します。",
        "for (let i = 0; i < 3; i++) {\n  if (i === 1) {\n    console.log(\"二つ目\");\n  }\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "DOM",
    "intro": "HTML文書を、JavaScriptなどから参照・変更できるツリー構造として扱う仕組み。",
    "code": "const heading = document.querySelector(\"h2\");\nheading.textContent = \"新しい見出し\";",
    "pitfalls": [
      "この例はh2が存在してから実行します。見つからない場合はnullとなり、後の処理でエラーになります。"
    ],
    "related": [
      "HTML要素",
      "JavaScript",
      "イベント"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "この例はh2が存在してから実行します。見つからない場合はnullとなり、後の処理でエラーになります。",
        "const heading = document.querySelector(\"h2\");\nheading.textContent = \"新しい見出し\";"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "イベント",
    "intro": "クリック・入力・読み込みなど、ブラウザーで起きる出来事。",
    "code": "button.addEventListener(\"click\", () => {\n  console.log(\"押されました\");\n});",
    "pitfalls": [
      "buttonには取得済みのbutton要素が入っている前提です。clickがイベント名です。"
    ],
    "related": [
      "DOM",
      "関数",
      "JavaScript"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "buttonには取得済みのbutton要素が入っている前提です。clickがイベント名です。",
        "button.addEventListener(\"click\", () => {\n  console.log(\"押されました\");\n});"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "JavaScriptの用語",
    "title": "非同期処理",
    "intro": "通信などの完了を待つ間にも、ほかの処理を進められるようにする仕組み。",
    "code": "async function loadData() {\n  const response = await fetch(\"/data.json\");\n  if (!response.ok) throw new Error(\"取得失敗\");\n  return response.json();\n}",
    "pitfalls": [
      "awaitはこのasync関数内の続きの処理を待ちます。通信失敗の処理も必要です。"
    ],
    "related": [
      "API",
      "JSON",
      "関数"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "awaitはこのasync関数内の続きの処理を待ちます。通信失敗の処理も必要です。",
        "async function loadData() {\n  const response = await fetch(\"/data.json\");\n  if (!response.ok) throw new Error(\"取得失敗\");\n  return response.json();\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "ファイルパス",
    "intro": "ファイルがどこにあるかを示す書き方。",
    "code": "<link rel=\"stylesheet\" href=\"./styles.css\">",
    "pitfalls": [
      "./は現在の基準位置、../は一つ上。HTMLの相対URLは通常文書URL、CSS内のurl()はCSSファイルのURLを基準にします。"
    ],
    "related": [
      "HTML",
      "CSS",
      "URL"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "./は現在の基準位置、../は一つ上。HTMLの相対URLは通常文書URL、CSS内のurl()はCSSファイルのURLを基準にします。",
        "<link rel=\"stylesheet\" href=\"./styles.css\">"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "URL",
    "intro": "Web上のページやファイルなどの場所を表す文字列。",
    "code": "https://example.com/guide.html#intro",
    "pitfalls": [
      "httpsが方式、example.comがホスト、/guide.htmlがパス、#introが文書内の場所を示すフラグメントです。"
    ],
    "related": [
      "ファイルパス",
      "HTTP",
      "id属性"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "httpsが方式、example.comがホスト、/guide.htmlがパス、#introが文書内の場所を示すフラグメントです。",
        "https://example.com/guide.html#intro"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "HTTP",
    "intro": "ブラウザーとサーバーなどが、リクエストとレスポンスをやり取りするための通信の決まり。",
    "code": "200 OK\n404 Not Found",
    "pitfalls": [
      "200は成功、404は対象が見つからない応答の例。HTTPSはTLSで通信を保護します。"
    ],
    "related": [
      "URL",
      "API",
      "フロントエンド・バックエンド"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "200は成功、404は対象が見つからない応答の例。HTTPSはTLSで通信を保護します。",
        "200 OK\n404 Not Found"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "API",
    "intro": "ソフトウェアの機能やデータを利用するための窓口・呼び出しの決まり。",
    "code": "fetch(\"/api/items\")",
    "pitfalls": [
      "Web APIは一例。URLを呼ぶだけでなく、使える操作・送受信の形式・認証などの取り決めがあります。"
    ],
    "related": [
      "HTTP",
      "JSON",
      "非同期処理"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "Web APIは一例。URLを呼ぶだけでなく、使える操作・送受信の形式・認証などの取り決めがあります。",
        "fetch(\"/api/items\")"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "JSON",
    "intro": "文字列・数値・配列などを、決まった書式で表すデータ形式。",
    "code": "{\n  \"name\": \"太郎\",\n  \"isActive\": true\n}",
    "pitfalls": [
      "キーと文字列は二重引用符。コメントや末尾のカンマは書けません。JavaScriptのオブジェクト記法と完全には同じではありません。"
    ],
    "related": [
      "API",
      "配列・オブジェクト"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "キーと文字列は二重引用符。コメントや末尾のカンマは書けません。JavaScriptのオブジェクト記法と完全には同じではありません。",
        "{\n  \"name\": \"太郎\",\n  \"isActive\": true\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "フロントエンド・バックエンド",
    "intro": "ブラウザー側の表示・操作を担う部分と、サーバー側で処理やデータ管理を担う部分。",
    "code": "ブラウザー → リクエスト → サーバー\nブラウザー ← レスポンス ← サーバー",
    "pitfalls": [
      "HTML・CSS・JavaScriptはフロントエンドの基本。APIなどを通じてバックエンドと連携します。"
    ],
    "related": [
      "HTML",
      "CSS",
      "JavaScript",
      "API"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "HTML・CSS・JavaScriptはフロントエンドの基本。APIなどを通じてバックエンドと連携します。",
        "ブラウザー → リクエスト → サーバー\nブラウザー ← レスポンス ← サーバー"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "アクセシビリティ",
    "intro": "障害や利用環境などによらず、情報や機能を利用できるようにすること。",
    "code": "<label for=\"email\">メールアドレス</label>\n<input id=\"email\" type=\"email\">",
    "pitfalls": [
      "名前が分かる入力欄、キーボード操作、十分なコントラストなどを確認します。"
    ],
    "related": [
      "セマンティクス",
      "代替テキスト",
      "フォーカス"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "名前が分かる入力欄、キーボード操作、十分なコントラストなどを確認します。",
        "<label for=\"email\">メールアドレス</label>\n<input id=\"email\" type=\"email\">"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "デバッグ",
    "intro": "不具合の原因を調べ、修正して動作を確かめる作業。",
    "code": "console.log(\"現在の値:\", count);",
    "pitfalls": [
      "countが定義済みの例。再現手順を絞り、ConsoleのエラーやElementsの適用CSSを確認します。"
    ],
    "related": [
      "開発者ツール",
      "構文エラー",
      "変数"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "countが定義済みの例。再現手順を絞り、ConsoleのエラーやElementsの適用CSSを確認します。",
        "console.log(\"現在の値:\", count);"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "開発者ツール",
    "intro": "ブラウザーに備わる、HTML・CSS・通信・エラーなどを調べる道具。",
    "code": "Elements：要素と適用CSS\nConsole：エラーとログ\nNetwork：ファイルや通信",
    "pitfalls": [
      "ここでCSSを変更しても通常は元のファイルに保存されません。確認後はソースへ反映します。"
    ],
    "related": [
      "デバッグ",
      "DOM",
      "HTTP"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "ここでCSSを変更しても通常は元のファイルに保存されません。確認後はソースへ反映します。",
        "Elements：要素と適用CSS\nConsole：エラーとログ\nNetwork：ファイルや通信"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "構文エラー",
    "intro": "括弧や引用符の閉じ忘れなど、言語の書き方の規則に反する誤り。",
    "code": "p {\n  color: #245a78;\n}",
    "pitfalls": [
      "括弧・コロン・セミコロン・引用符を確認します。JavaScriptはSyntaxError、CSSは不正な宣言などを無視する場合があります。"
    ],
    "related": [
      "デバッグ",
      "宣言",
      "CSSルール"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "括弧・コロン・セミコロン・引用符を確認します。JavaScriptはSyntaxError、CSSは不正な宣言などを無視する場合があります。",
        "p {\n  color: #245a78;\n}"
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "Git・コミット",
    "intro": "Gitは変更履歴を管理する仕組み、コミットは変更のまとまりを履歴へ記録する操作。",
    "code": "git status\ngit add index.html\ngit commit -m \"見出しを修正\"",
    "pitfalls": [
      "ローカルのコミットと、外部サービスへのpush、サイトへの公開はそれぞれ別の操作です。"
    ],
    "related": [
      "デバッグ",
      "ファイルパス"
    ],
    "glossary": true,
    "steps": [
      "まず意味を読み、例のどの部分を指しているか確認します。"
    ],
    "cases": [
      [
        "例の読み方",
        "ローカルのコミットと、外部サービスへのpush、サイトへの公開はそれぞれ別の操作です。",
        "git status\ngit add index.html\ngit commit -m \"見出しを修正\""
      ]
    ],
    "exercise": "例の対象や値を一つ変えて、意味と表示の変化を確認しましょう。"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "!important",
    "intro": "インポータント。CSS宣言を重要な宣言として扱う指定。詳細度とは別の、重要度の段階で比較されます。",
    "code": "p {\n  color: #245a78 !important;\n}",
    "pitfalls": [
      "!importantは値の後、セミコロンの前に書きます。プロパティごとの指定で、ルール内のすべてを強くする命令ではありません。",
      "同じ作成者では通常のstyle属性より優先されます。重要な宣言同士ではレイヤー・詳細度・記述順なども確認します。",
      "利用者やブラウザーの重要な宣言、実行中のトランジションより常に強いわけではありません。効かない理由を確認してから使います。"
    ],
    "related": [
      "宣言",
      "詳細度",
      "カスケード",
      "カスケードレイヤー"
    ],
    "glossary": true
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "インラインスタイル",
    "intro": "HTMLのstyle属性へ直接書くCSS。styleタグにまとめて書く方法とは別です。",
    "code": "<p style=\"color: #245a78;\">お知らせ</p>",
    "pitfalls": [
      "同じ作成者の通常宣言では、style属性への指定はスタイルシートの通常宣言より優先されます。通常のstyle属性は!important付きの指定で上書きされます。",
      "タグに直接指定したから必ず最優先、という意味ではありません。style属性にも!importantがある場合は、その重要度で比較します。"
    ],
    "related": [
      "属性",
      "CSS",
      "!important",
      "カスケード"
    ],
    "glossary": true
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "カスケードレイヤー",
    "intro": "@layerでCSSを優先順位の層に分ける仕組み。詳細度を比較するより先に、所属する層を比べます。",
    "code": "@layer base, theme;\n\n@layer base {\n  p {\n    color: #245a78;\n  }\n}\n\n@layer theme {\n  p {\n    color: #9a4c18;\n  }\n}",
    "pitfalls": [
      "同じ出所の通常宣言では、後に宣言したレイヤーが優先されます。この例はthemeの色になります。レイヤー外の通常宣言はレイヤー内より優先されます。",
      "!important付き同士ではレイヤーの順が逆です。先のレイヤーが後のレイヤーより優先され、レイヤー内はレイヤー外の重要な宣言より優先されます。"
    ],
    "related": [
      "カスケード",
      "詳細度",
      "!important"
    ],
    "glossary": true
  },
  {
    "domain": "web",
    "group": "CSS設計・名前の付け方",
    "title": "CSS設計",
    "intro": "CSSが増えても、探しやすく直しやすい状態を保つための、名前の付け方・役割分担・書き方の決め方。",
    "code": "/* ボタンの共通の見た目 */\n.button {\n  padding: 12px 20px;\n}\n\n/* 色の違うボタン */\n.button--primary {\n  background-color: #245a78;\n  color: #ffffff;\n}",
    "pitfalls": [
      "たとえば同じボタンをページごとに書き直さず、共通の指定と違いを分けます。変更した時に、ほかの場所まで予想外に変わることを減らすための工夫です。",
      "BEMは名前や部品の考え方、FLOCSSはCSSの役割分担の方法の一つです。CSS自体に新しい命令を追加するものではありません。",
      "最初から大きな仕組みにする必要はありません。小さな制作では、分かるclass名を付け、同じ指定の重複や広すぎる指定を減らすところから始めます。"
    ],
    "related": [
      "BEM",
      "FLOCSS",
      "クラスセレクター",
      "詳細度"
    ],
    "glossary": true,
    "source": null
  },
  {
    "domain": "web",
    "group": "CSS設計・名前の付け方",
    "title": "BEM",
    "intro": "ベム。画面の部品を「部品全体・その一部・種類や状態の違い」に分け、class名に役割を表す考え方。",
    "code": "<!-- card：部品全体 -->\n<article class=\"card card--featured\">\n  <h2 class=\"card__title\">おすすめ作品</h2>\n</article>\n\n.card {\n  padding: 16px;\n}\n\n.card__title {\n  font-size: 20px;\n}\n\n.card--featured {\n  border: 2px solid #245a78;\n}",
    "pitfalls": [
      "Block（ブロック）は独立した部品全体。この例ではcardがカード全体です。Element（エレメント）はその部品の一部。card__titleはカードの見出しです。",
      "Modifier（モディファイア）は種類や状態の違い。card--featuredは「強調するカード」です。基本のcardと一緒に付けています。",
      "ここではよく使われるblock__element--modifier形式を紹介しています。BEMには別の命名形式もあります。__や--はclass名の一部で、ブラウザーに特別な動作をさせる記号ではありません。",
      "Elementという名前は、HTML要素そのものや、直下の子要素という意味とは別です。class名を決めた後は、その名前に対応するCSSを書きます。"
    ],
    "related": [
      "CSS設計",
      "class属性",
      "クラスセレクター",
      "FLOCSS"
    ],
    "glossary": true,
    "source": "https://getbem.com/naming/"
  },
  {
    "domain": "web",
    "group": "CSS設計・名前の付け方",
    "title": "FLOCSS",
    "intro": "フロックス。CSSを「土台・ページの大きな枠・見た目の部品」に役割分けし、増えても整理しやすくする構成の考え方。",
    "code": "/* Layout：共通の大きな枠 */\n.l-header {\n  padding: 24px;\n}\n\n/* Component：繰り返し使う小さな部品 */\n.c-button {\n  padding: 12px 20px;\n}\n\n/* Project：このサイト特有のまとまり */\n.p-gallery {\n  display: grid;\n  gap: 16px;\n}\n\n/* Utility：小さな調整 */\n.u-mt16 {\n  margin-top: 16px;\n}",
    "pitfalls": [
      "Foundation（ファウンデーション）は土台です。文字の基本設定や、ブラウザーごとの初期表示を整える指定などを置きます。",
      "Layout（レイアウト）は共通の大きな枠です。ヘッダー・メイン領域などを分けます。例のl-headerのl-はLayoutを示す目印です。",
      "Object（オブジェクト）は見た目の部品です。さらにComponent（何度も使う小さな部品：c-）、Project（サイト特有のまとまり：p-）、Utility（少しだけ調整する指定：u-）に分けます。",
      "l-・c-・p-・u-はclass名の付け方です。CSSの特別な命令ではありません。FLOCSSの役割の層と、CSSの@layerは別のものです。",
      "FLOCSSではBEMを基にした名前の付け方も使えます。小さなページで最初からすべての分類やファイルを用意する必要はなく、制作規模やチームの決め方に合わせて取り入れます。"
    ],
    "related": [
      "CSS設計",
      "BEM",
      "クラスセレクター",
      "カスケードレイヤー"
    ],
    "glossary": true,
    "source": "https://github.com/hiloki/flocss"
  },
  {
    "title": "ブロックレベル要素",
    "intro": "通常の文書の流れで、横書きなら前後で行を分けて配置される要素の呼び方。「ブロック要素」とも呼びます。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>表示方法の例</title>\n  <style>\n.box {\n  display: block;\n  width: 160px;\n  padding: 8px;\n  border: 1px solid #357363;\n}\n  </style>\n</head>\n<body>\n<div class=\"box\">ブロックA</div>\n<div class=\"box\">ブロックB</div>\n</body>\n</html>",
    "pitfalls": [
      "div・p・h1などはブラウザーの初期スタイルで通常ブロックとして表示されます。CSSで表示方法を変えられるので、タグ固有の不変な性質ではありません。",
      "通常フローの横書きでは、widthがautoのブロックは原則として利用できる横幅を使います。widthを小さくしても、それだけで次のブロックが横に並ぶわけではありません。",
      "ここでの説明は通常フローが前提です。親がFlexboxやGridの場合などは、子の並び方の規則が異なります。",
      "HTML 4ではブロックレベル・インラインという要素の分類が使われました。現行HTMLではフロー・フレージングなどの内容の分類を使います。ここではCSSの表示方法としてのblockを学び、HTMLの分類とは区別します。たとえばpの中にdivを置いてよいかどうかはdisplayで変わりません。"
    ],
    "related": [
      "インライン要素",
      "インラインブロック（inline-block）",
      "display",
      "ボックスモデル"
    ],
    "domain": "web",
    "group": "CSSの用語",
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/display",
    "exampleHTML": "<div class=\"box\">ブロックA</div>\n<div class=\"box\">ブロックB</div>",
    "exampleCSS": ".box {\n  display: block;\n  width: 160px;\n  padding: 8px;\n  border: 1px solid #357363;\n}"
  },
  {
    "title": "インライン要素",
    "intro": "通常の文書の流れで、文章と同じ行の中に配置される要素の呼び方。spanやaなどが通常この表示になります。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>表示方法の例</title>\n  <style>\n.mark {\n  display: inline;\n  color: #245a78;\n  background: #e3ecf7;\n}\n  </style>\n</head>\n<body>\n<p>文章の中に<span class=\"mark\">インラインA</span>と<span class=\"mark\">インラインB</span>があります。</p>\n</body>\n</html>",
    "pitfalls": [
      "通常の非置換インライン要素（spanなど）にはwidthとheightを指定しても適用されません。画像imgなどの置換要素は別の規則です。",
      "横に並ぶとは、必ず1行に収まるという意味ではありません。行の幅が足りなければ文章の流れに従って折り返します。",
      "spanなどの非置換インライン要素では上下のmarginは通常のブロックと同じようには働きません。上下のpaddingやborderが描かれても行の高さがその分だけ広がるわけではなく、重なる場合があります。",
      "インライン要素とインラインスタイルは別の言葉です。前者は表示の分類、後者はstyle属性にCSSを書く方法です。"
    ],
    "related": [
      "ブロックレベル要素",
      "インラインブロック（inline-block）",
      "display",
      "インラインスタイル"
    ],
    "domain": "web",
    "group": "CSSの用語",
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/display",
    "exampleHTML": "<p>文章の中に<span class=\"mark\">インラインA</span>と<span class=\"mark\">インラインB</span>があります。</p>",
    "exampleCSS": ".mark {\n  display: inline;\n  color: #245a78;\n  background: #e3ecf7;\n}"
  },
  {
    "title": "インラインブロック（inline-block）",
    "intro": "行の中に一つの箱として置きながら、幅・高さや上下の余白も指定できるCSSの表示方法。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>表示方法の例</title>\n  <style>\n.link {\n  display: inline-block;\n  width: 160px;\n  padding: 8px;\n  margin: 4px;\n  border: 1px solid #357363;\n  text-align: center;\n}\n  </style>\n</head>\n<body>\n<a class=\"link\" href=\"#works\">作品を見る</a>\n<a class=\"link\" href=\"#contact\">お問い合わせ</a>\n<section id=\"works\"><h2>作品</h2></section>\n<section id=\"contact\"><h2>お問い合わせ</h2></section>\n</body>\n</html>",
    "pitfalls": [
      "inline-blockはHTMLタグの名前ではなく、displayプロパティに指定する値です。",
      "行内ではひとまとまりの箱として扱われ、収まらなければ箱ごと次の行へ送られます。中の文章は箱の幅に応じて折り返せます。",
      "HTMLの要素間の空白や改行が、画面上の隙間になる場合があります。通常は文字のベースラインが揃い、必要ならvertical-alignで調整します。",
      "text-align: centerはこの例ではリンクの箱の中の文字を中央にします。箱自体を親の中央へ置きたいなら、通常フローでは親にtext-align: centerなどを指定します。",
      "hrefの#works・#contactに対応するidを移動先に用意します。class名は変更できますが、HTMLとCSSの両方を一致させます。"
    ],
    "related": [
      "インライン要素",
      "ブロックレベル要素",
      "display",
      "ボックスモデル"
    ],
    "domain": "web",
    "group": "CSSの用語",
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/display",
    "exampleHTML": "<a class=\"link\" href=\"#works\">作品を見る</a>\n<a class=\"link\" href=\"#contact\">お問い合わせ</a>\n<section id=\"works\"><h2>作品</h2></section>\n<section id=\"contact\"><h2>お問い合わせ</h2></section>",
    "exampleCSS": ".link {\n  display: inline-block;\n  width: 160px;\n  padding: 8px;\n  margin: 4px;\n  border: 1px solid #357363;\n  text-align: center;\n}"
  },
  {
    "title": "display",
    "intro": "要素がどのような箱を作り、周囲や内側の内容をどう配置するかを指定するCSSプロパティ。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>表示方法の例</title>\n  <style>\n.label {\n  display: block;\n}\n  </style>\n</head>\n<body>\n<span class=\"label\">作品の一覧</span>\n</body>\n</html>",
    "pitfalls": [
      "block・inline・inline-blockはdisplayに使う決まった値です。自分で好きな単語に置き換えることはできません。",
      "displayは見た目の配置方法を変えます。spanをblock表示にしても見出しの意味は付かず、HTMLの内容や入れ子のルールも変わりません。",
      "display: flexとdisplay: gridは主に子の並べ方を指定します。display: noneは要素とその子孫の箱を表示せず、レイアウト上の場所も空けません。",
      "blockの説明は通常フローが前提です。Flexbox・Gridの子や絶対配置などでは、同じdisplay値だけで並び方を判断できません。"
    ],
    "related": [
      "ブロックレベル要素",
      "インライン要素",
      "インラインブロック（inline-block）",
      "Flexbox",
      "Grid"
    ],
    "domain": "web",
    "group": "CSSの用語",
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/display",
    "exampleHTML": "<span class=\"label\">作品の一覧</span>",
    "exampleCSS": ".label {\n  display: block;\n}"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "通常フロー",
    "intro": "要素を特別な位置指定などで流れから外さず、文書の順序と表示方法に沿って配置する基本の仕組み。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\ndiv { margin: 8px 0; }\n</style>\n</head>\n<body>\n<div>ブロックA</div>\n<div>ブロックB <span>行内の文字</span></div>\n</body>\n</html>",
    "pitfalls": [
      "通常フローは「必ずすべて縦に並ぶ」という意味ではありません。ブロックとインラインでは配置のされ方が異なります。",
      "absoluteやfixedは通常フローから外れます。relativeやstickyは元の配置場所が保たれます。"
    ],
    "related": [
      "ブロックレベル要素",
      "インライン要素",
      "相対配置",
      "絶対配置"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout",
    "exampleHTML": "<div>ブロックA</div>\n<div>ブロックB <span>行内の文字</span></div>",
    "exampleCSS": "div { margin: 8px 0; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "包含ブロック",
    "intro": "要素の位置やパーセント指定の寸法を計算するときに、基準になる長方形の領域。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.frame { position: relative; height: 120px; }\n.badge { position: absolute; top: 0; right: 0; }\n</style>\n</head>\n<body>\n<div class=\"frame\"><span class=\"badge\">右上</span></div>\n</body>\n</html>",
    "pitfalls": [
      "包含ブロックが常に直接の親になるわけではありません。positionやtransformなど、祖先の指定で基準が変わります。",
      "パーセント値はプロパティごとに計算規則があります。「すべて親の同じ方向の長さの何%」とは限りません。"
    ],
    "related": [
      "親要素・子要素",
      "絶対配置",
      "固定配置"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Display/Containing_block",
    "exampleHTML": "<div class=\"frame\"><span class=\"badge\">右上</span></div>",
    "exampleCSS": ".frame { position: relative; height: 120px; }\n.badge { position: absolute; top: 0; right: 0; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "置換要素",
    "intro": "画像など、要素の内容の描画をCSSの通常の文字組みとは別の仕組みで扱う要素。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.photo { width: 160px; height: auto; }\n</style>\n</head>\n<body>\n<img class=\"photo\" src=\"photo.jpg\" alt=\"青い花\">\n</body>\n</html>",
    "pitfalls": [
      "インライン要素には幅を指定できない、という説明には例外があります。非置換のspanと、置換要素のimgを区別します。",
      "画像がないと例の写真は表示されません。displayを変更しても、imgが画像を表示する要素であることは変わりません。"
    ],
    "related": [
      "インライン要素",
      "HTML要素",
      "代替テキスト"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties",
    "exampleHTML": "<img class=\"photo\" src=\"photo.jpg\" alt=\"青い花\">",
    "exampleCSS": ".photo { width: 160px; height: auto; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ボックスサイジング",
    "intro": "widthやheightで指定した寸法に、内側余白と枠線を含めるかを決める考え方。CSSではbox-sizingで指定します。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid #357363; }\n</style>\n</head>\n<body>\n<div class=\"box\">幅200pxの箱</div>\n</body>\n</html>",
    "pitfalls": [
      "content-boxなら同じ指定で枠線まで244pxです。marginはどちらの指定幅にも含まれません。",
      "widthが適用されない通常の非置換インライン要素などでは、この幅の例をそのまま当てはめられません。"
    ],
    "related": [
      "ボックスモデル",
      "余白",
      "インライン要素"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/box-sizing",
    "exampleHTML": "<div class=\"box\">幅200pxの箱</div>",
    "exampleCSS": ".box { box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid #357363; }",
    "preview": {
      "title": "同じwidth:200pxの違い",
      "html": "<div class=\"content\">content-box</div><div class=\"border\">border-box</div>",
      "css": ".content,.border{width:200px;padding:20px;border:2px solid #357363;background:#e4f2ec;margin:12px 0}.content{box-sizing:content-box}.border{box-sizing:border-box}",
      "note": "枠線までの幅は上244px、下200px。marginはどちらの指定幅にも含まれません。",
      "height": 230
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "マージン相殺",
    "intro": "通常のブロック配置で、条件を満たす上下のmarginが一つの余白としてまとまる仕組み。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.a { margin-bottom: 20px; }\n.b { margin-top: 30px; }\n</style>\n</head>\n<body>\n<div class=\"a\">A</div>\n<div class=\"b\">B</div>\n</body>\n</html>",
    "pitfalls": [
      "正のmargin同士は大きい方になります。負のmarginを含む場合は別の計算になるため、常に大きい方というわけではありません。",
      "親子や空のブロックでも条件次第で相殺します。左右のmargin、FlexboxやGridのアイテム同士では同じ相殺は起きません。"
    ],
    "related": [
      "余白",
      "通常フロー",
      "Flexbox",
      "Grid"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing",
    "exampleHTML": "<div class=\"a\">A</div>\n<div class=\"b\">B</div>",
    "exampleCSS": ".a { margin-bottom: 20px; }\n.b { margin-top: 30px; }",
    "preview": {
      "title": "上下のmargin：20px＋30pxが30pxになる例",
      "html": "<div class=\"a\">A：下margin 20px</div><div class=\"b\">B：上margin 30px</div>",
      "css": ".a,.b{background:#e3ecf7;border:1px solid #849aaf;padding:8px}.a{margin-bottom:20px}.b{margin-top:30px}",
      "note": "通常フローの兄弟ブロックの例。AとBの枠線間は30pxです。",
      "height": 220
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "主軸・交差軸",
    "intro": "Flexboxで、アイテムを並べる方向が主軸、その主軸と交わる方向が交差軸です。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.list { display: flex; flex-direction: column; gap: 8px; }\n</style>\n</head>\n<body>\n<div class=\"list\"><span>A</span><span>B</span></div>\n</body>\n</html>",
    "pitfalls": [
      "主軸が常に横、交差軸が常に縦というわけではありません。flex-directionや書字方向で変わります。",
      "中央揃えを判断するときは、親の利用できる幅・高さと、軸の方向も確認します。"
    ],
    "related": [
      "Flexbox",
      "フレックスコンテナー・アイテム"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts",
    "exampleHTML": "<div class=\"list\"><span>A</span><span>B</span></div>",
    "exampleCSS": ".list { display: flex; flex-direction: column; gap: 8px; }",
    "preview": {
      "title": "同じ2つの子をrowとcolumnで比較",
      "html": "<h4>row：横書きでは主軸は横 →</h4><div class=\"row\"><span>A</span><span>B</span></div><h4>column：横書きでは主軸は縦 ↓</h4><div class=\"column\"><span>A</span><span>B</span></div>",
      "css": "h4{font-size:14px;margin:8px 0}.row,.column{display:flex;gap:8px;border:1px dashed #849aaf;padding:8px}.column{flex-direction:column}span{background:#e4f2ec;border:1px solid #357363;padding:6px}",
      "note": "flex-directionで主軸の方向が変わります。justify-contentを常に横方向と覚えないようにします。",
      "height": 290
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "フレックスコンテナー・アイテム",
    "intro": "display: flexなどを指定した親の箱がコンテナー、そのレイアウトに参加する直下の子の箱がアイテムです。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.list { display: flex; gap: 12px; }\n.list > div { flex: 1; }\n</style>\n</head>\n<body>\n<div class=\"list\"><div>A</div><div>B</div></div>\n</body>\n</html>",
    "pitfalls": [
      "孫要素まで自動で同じコンテナーのアイテムになるわけではありません。直下に文字がある場合は匿名のアイテムになることもあります。",
      "親に指定する性質とアイテムに指定する性質を区別します。"
    ],
    "related": [
      "Flexbox",
      "主軸・交差軸",
      "親要素・子要素"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts",
    "exampleHTML": "<div class=\"list\"><div>A</div><div>B</div></div>",
    "exampleCSS": ".list { display: flex; gap: 12px; }\n.list > div { flex: 1; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "グリッドコンテナー・アイテム",
    "intro": "display: gridなどを指定した親の箱がコンテナー、そのグリッド配置に参加する直下の子の箱がアイテムです。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }\n</style>\n</head>\n<body>\n<div class=\"grid\"><div>A</div><div>B</div><div>C</div></div>\n</body>\n</html>",
    "pitfalls": [
      "列の指定は通常、並べたい子を囲む親に書きます。子へgrid-template-columnsを書いても親の列数は変わりません。",
      "トラックは列や行の帯、グリッド線はその境界です。孫は通常、外側のグリッドの直接のアイテムにはなりません。"
    ],
    "related": [
      "Grid",
      "親要素・子要素",
      "Flexbox"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts",
    "exampleHTML": "<div class=\"grid\"><div>A</div><div>B</div><div>C</div></div>",
    "exampleCSS": ".grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "相対配置",
    "intro": "position: relativeで、通常の配置場所を残したまま、その場所を基準に表示位置をずらす方法。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.box { position: relative; top: 10px; left: 20px; }\n</style>\n</head>\n<body>\n<div class=\"box\">少しずらす</div>\n<p>次の段落</p>\n</body>\n</html>",
    "pitfalls": [
      "ずれた要素が周囲の要素を押しのけるわけではなく、重なることがあります。",
      "topなどを指定しなくても、relativeを付けた要素はabsoluteの子の配置基準を作れます。"
    ],
    "related": [
      "通常フロー",
      "絶対配置",
      "包含ブロック"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/position",
    "exampleHTML": "<div class=\"box\">少しずらす</div>\n<p>次の段落</p>",
    "exampleCSS": ".box { position: relative; top: 10px; left: 20px; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "絶対配置",
    "intro": "position: absoluteで通常フローから外し、包含ブロックを基準に位置を指定する方法。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.card { position: relative; min-height: 100px; }\n.badge { position: absolute; top: 8px; right: 8px; }\n</style>\n</head>\n<body>\n<div class=\"card\">カード<span class=\"badge\">NEW</span></div>\n</body>\n</html>",
    "pitfalls": [
      "常に画面や直接の親が基準になるわけではありません。祖先のposition・transformなどを確認します。",
      "absoluteの子だけでは親の通常フロー上の高さを作れません。この例では親にmin-heightを付けています。"
    ],
    "related": [
      "包含ブロック",
      "相対配置",
      "通常フロー"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/position",
    "exampleHTML": "<div class=\"card\">カード<span class=\"badge\">NEW</span></div>",
    "exampleCSS": ".card { position: relative; min-height: 100px; }\n.badge { position: absolute; top: 8px; right: 8px; }",
    "preview": {
      "title": "relativeの親とabsoluteの子",
      "html": "<div class=\"card\">親のカード<span class=\"badge\">NEW</span></div>",
      "css": ".card{position:relative;min-height:130px;background:#e3ecf7;border:2px solid #849aaf;padding:10px}.badge{position:absolute;top:8px;right:8px;padding:6px;background:#357363;color:white}",
      "note": "NEWは親の上・右から8pxに配置されます。",
      "height": 200
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "固定配置",
    "intro": "position: fixedで通常フローから外し、通常はビューポートを基準に位置を固定する方法。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.notice { position: fixed; right: 16px; bottom: 16px; }\n</style>\n</head>\n<body>\n<div class=\"notice\">固定のお知らせ</div>\n</body>\n</html>",
    "pitfalls": [
      "transformなどの指定がある祖先が基準を作る場合があり、必ず画面基準とは限りません。",
      "通常フローの場所を取らないため、本文や操作ボタンを覆わないかスマホでも確認します。"
    ],
    "related": [
      "ビューポート",
      "包含ブロック",
      "絶対配置"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/position",
    "exampleHTML": "<div class=\"notice\">固定のお知らせ</div>",
    "exampleCSS": ".notice { position: fixed; right: 16px; bottom: 16px; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "粘着配置（sticky）",
    "intro": "position: stickyで通常の配置場所を保ち、スクロール中に指定した端へ張り付くよう配置する方法。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.scroll { height: 160px; overflow: auto; }\n.heading { position: sticky; top: 0; margin: 0; background: white; }\n.content { height: 360px; }\n</style>\n</head>\n<body>\n<div class=\"scroll\"><h3 class=\"heading\">見出し</h3><div class=\"content\">スクロールする内容</div></div>\n</body>\n</html>",
    "pitfalls": [
      "張り付かせる軸ではtop: 0など、auto以外のしきい値が必要です。",
      "祖先のoverflowや利用できるスクロール距離、要素と親の高さで動作が変わります。fixedのように無制限に画面へ固定されるわけではありません。"
    ],
    "related": [
      "固定配置",
      "通常フロー",
      "オーバーフロー"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/position",
    "exampleHTML": "<div class=\"scroll\"><h3 class=\"heading\">見出し</h3><div class=\"content\">スクロールする内容</div></div>",
    "exampleCSS": ".scroll { height: 160px; overflow: auto; }\n.heading { position: sticky; top: 0; margin: 0; background: white; }\n.content { height: 360px; }",
    "preview": {
      "title": "スクロールしてstickyを確認",
      "html": "<div class=\"scroll\"><h3 class=\"heading\">上端に張り付く見出し</h3><div class=\"content\">この枠の中をスクロールしてください。</div></div>",
      "css": ".scroll{height:160px;overflow:auto;border:1px solid #849aaf}.heading{position:sticky;top:0;margin:0;background:#357363;color:white;padding:6px;font-size:15px}.content{height:360px;padding:8px;background:linear-gradient(white,#e3ecf7)}",
      "note": "この枠の中だけがスクロール領域です。top:0が張り付くしきい値です。",
      "height": 220
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "重ね合わせコンテキスト",
    "intro": "要素の前後の重なり順を、ひとまとまりのグループとして扱う仕組み。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.group { position: relative; z-index: 1; }\n.badge { position: absolute; z-index: 999; }\n</style>\n</head>\n<body>\n<div class=\"group\"><span class=\"badge\">グループ内の要素</span></div>\n</body>\n</html>",
    "pitfalls": [
      "z-indexはページ全体で単純に最大の数字が勝つ規則ではありません。祖先のグループの関係も見ます。",
      "fixed・sticky、1未満のopacity、transformなどでもコンテキストが作られます。z-indexは配置要素のほかFlexbox・Gridアイテムなどにも適用されます。"
    ],
    "related": [
      "絶対配置",
      "相対配置",
      "固定配置"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context",
    "exampleHTML": "<div class=\"group\"><span class=\"badge\">グループ内の要素</span></div>",
    "exampleCSS": ".group { position: relative; z-index: 1; }\n.badge { position: absolute; z-index: 999; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "オーバーフロー",
    "intro": "文字や画像などの内容が、箱に収まらずにはみ出すこと。overflowで扱い方を指定します。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.box { height: 64px; overflow: auto; border: 1px solid #357363; }\n</style>\n</head>\n<body>\n<div class=\"box\">長い文章です。<br>2行目です。<br>3行目です。<br>4行目です。</div>\n</body>\n</html>",
    "pitfalls": [
      "hiddenはあふれた部分を隠します。scrollは内容が少なくてもスクロール用の仕組みを用意しますが、バーの見え方はOS設定にもよります。",
      "overflowは幅や高さなどの制約との組合せで確認します。はみ出しの原因自体が直るとは限りません。"
    ],
    "related": [
      "ボックスモデル",
      "粘着配置（sticky）"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/overflow",
    "exampleHTML": "<div class=\"box\">長い文章です。<br>2行目です。<br>3行目です。<br>4行目です。</div>",
    "exampleCSS": ".box { height: 64px; overflow: auto; border: 1px solid #357363; }",
    "preview": {
      "title": "小さな箱の中をスクロールする",
      "html": "<div class=\"box\">1行目<br>2行目<br>3行目<br>4行目<br>5行目<br>6行目</div>",
      "css": ".box{height:72px;overflow:auto;border:2px solid #357363;padding:4px}",
      "note": "高さ72pxの表示領域に収まらない内容をスクロールして確認できます。",
      "height": 150
    }
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ベースライン",
    "intro": "文字を行内にそろえるときの基準線。箱の下端とは区別します。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.tag { display: inline-block; font-size: 28px; vertical-align: baseline; }\n</style>\n</head>\n<body>\n<span>文字</span> <span class=\"tag\">ABC</span>\n</body>\n</html>",
    "pitfalls": [
      "インライン画像の下に小さな隙間ができるのは、行のベースラインなどが関係している場合があります。",
      "vertical-alignは通常の行内要素や表のセルなどで使います。一般のブロック全体を上下中央にする万能な指定ではありません。"
    ],
    "related": [
      "インライン要素",
      "インラインブロック（inline-block）"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/vertical-align",
    "exampleHTML": "<span>文字</span> <span class=\"tag\">ABC</span>",
    "exampleCSS": ".tag { display: inline-block; font-size: 28px; vertical-align: baseline; }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "ショートハンド",
    "intro": "関連する複数のCSSプロパティを、一つの宣言にまとめて指定する書き方。",
    "code": "/* 上下16px・左右24px */\n.box { margin: 16px 24px; }",
    "pitfalls": [
      "省略した項目がそのまま維持されるとは限りません。たとえばbackgroundやfontなどのショートハンドは、省略した関連値を初期値へ戻す場合があります。",
      "プロパティにより値の順序や省略規則は違います。marginの順序をすべてに当てはめません。"
    ],
    "related": [
      "宣言",
      "プロパティ",
      "余白"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "CSSカスタムプロパティ",
    "intro": "--から始まる名前でCSSの値を保存し、var()で参照する仕組み。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n:root { --accent: #245a78; }\n.note { color: var(--accent, #333333); }\n</style>\n</head>\n<body>\n<p class=\"note\">お知らせ</p>\n</body>\n</html>",
    "pitfalls": [
      "JavaScriptの変数とは別の仕組みです。通常の--で定義したカスタムプロパティはカスケードし、既定で子へ継承されます。",
      "var()の第2引数は万能な型の検査ではありません。たとえば--accentが16pxなら、colorに不適切でも単純に第2引数へ切り替わるわけではありません。"
    ],
    "related": [
      "変数",
      "カスケード",
      "継承",
      "フォールバック"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties",
    "exampleHTML": "<p class=\"note\">お知らせ</p>",
    "exampleCSS": ":root { --accent: #245a78; }\n.note { color: var(--accent, #333333); }"
  },
  {
    "domain": "web",
    "group": "CSSの用語",
    "title": "フォールバック",
    "intro": "最初の指定が使えないときのために用意する代替の値や処理。何を代替できるかは仕組みごとに異なります。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>用語の例</title>\n<style>\n.text { font-family: \"Example Font\", sans-serif; }\n</style>\n</head>\n<body>\n<p class=\"text\">文字の見本</p>\n</body>\n</html>",
    "pitfalls": [
      "フォールバックがあるから常に同じ見た目になるわけではありません。利用できるフォントや表示幅は環境によって異なります。",
      "font-familyの候補、var()の第2引数などでは、代替を使う条件が異なります。"
    ],
    "related": [
      "CSSカスタムプロパティ",
      "値"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/font-family",
    "exampleHTML": "<p class=\"text\">文字の見本</p>",
    "exampleCSS": ".text { font-family: \"Example Font\", sans-serif; }"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "文書型宣言（DOCTYPE）",
    "intro": "HTML文書の先頭に書き、ブラウザーが標準モードで表示するための手掛かりにする宣言。",
    "code": "<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>ページ名</title>\n</head>\n<body>本文</body>\n</html>",
    "pitfalls": [
      "DOCTYPEはCSSファイルを読み込む命令ではありません。CSSの読み込みにはlink要素などを使います。",
      "DOCTYPEがないと互換モードになり、寸法計算などが意図と異なる場合があります。"
    ],
    "related": [
      "HTML",
      "HTML要素",
      "外部CSS・内部CSS"
    ],
    "glossary": true,
    "source": "https://html.spec.whatwg.org/multipage/syntax.html"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "文字エンコーディング（UTF-8）",
    "intro": "文字をファイルや通信のバイト列として表すための方式。UTF-8はその方式の一つです。",
    "code": "<!-- HTMLのhead内へ記述 -->\n<meta charset=\"utf-8\">",
    "pitfalls": [
      "宣言だけ変えても、ファイルの実際の保存方式は変わりません。食い違うと文字化けの原因になります。",
      "文字コードの指定と、表示フォントやHTMLのlang属性は役割が違います。宣言はheadの先頭近く、ファイルの最初の1024バイト以内へ置きます。"
    ],
    "related": [
      "HTML",
      "文書型宣言（DOCTYPE）",
      "属性値"
    ],
    "glossary": true,
    "source": "https://html.spec.whatwg.org/multipage/semantics.html#charset"
  },
  {
    "domain": "web",
    "group": "HTMLの用語",
    "title": "文字参照（エンティティ）",
    "intro": "HTMLで、特別な記号などを&から始まる書き方で文字として表す仕組み。",
    "code": "<p>&lt;p&gt; は段落のタグです。</p>\n<p>A &amp; B</p>",
    "pitfalls": [
      "HTMLの本文に書いた<はタグの始まりと解釈されることがあるため、説明文として記号を出す場合に文字参照を使います。",
      "HTMLの文字参照と、JavaScriptの文字列のエスケープやURLエンコードは別の仕組みです。"
    ],
    "related": [
      "HTML",
      "タグ",
      "属性値"
    ],
    "glossary": true,
    "source": "https://html.spec.whatwg.org/multipage/syntax.html"
  },
  {
    "domain": "web",
    "group": "基本の用語",
    "title": "コメント",
    "intro": "コードの説明やメモを、実行や通常表示の対象から外して書く仕組み。言語ごとに記法が異なります。",
    "code": "<!-- HTMLのコメント：本文には表示されません -->\n<p>表示される本文</p>",
    "pitfalls": [
      "コメントはソースを見れば読めるため、パスワードや秘密の情報を書かないでください。",
      "CSSの/* */コメントは入れ子にできません。HTMLでもコメント内の書き方に制約があり、コメントを入れ子にして隠す使い方は避けます。"
    ],
    "related": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "glossary": true,
    "source": "https://html.spec.whatwg.org/multipage/syntax.html"
  },
  {
    "domain": "web",
    "group": "制作・確認の用語",
    "title": "相対パス・絶対パス",
    "intro": "ファイルの場所を、基準からの位置関係で示すか、先頭からの場所で示すかの違い。WebではURLの基準も確認します。",
    "code": "<img src=\"images/photo.jpg\" alt=\"青い花\">\n<a href=\"../index.html\">一つ上の階層へ</a>\n<a href=\"/works/\">サイトのルートから指定</a>\n<a href=\"https://example.com/works/\">完全なURLで指定</a>",
    "pitfalls": [
      "外部CSSのurl()に書く相対URLは通常、そのCSSファイルのURLが基準です。常にHTMLの保存場所が基準になるとは限りません。",
      "HTMLのbase要素があると相対URLの基準が変わります。/はMacのファイル先頭を直接指す指定とは別に、Webではサイトのルートから解決されます。"
    ],
    "related": [
      "ファイルパス",
      "URL",
      "外部CSS・内部CSS"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links"
  },
  {
    "domain": "web",
    "group": "基本の用語",
    "title": "外部CSS・内部CSS",
    "intro": "CSSを別ファイルとして読み込む方法と、HTMLのstyle要素内に書く方法。style属性へ直接書く方法とも区別します。",
    "code": "<!-- 外部CSS：HTMLのhead内 -->\n<link rel=\"stylesheet\" href=\"style.css\">\n\n<!-- 内部CSS：HTMLのhead内。下は別の書き方の例 -->\n<style>\n  p { color: #245a78; }\n</style>",
    "pitfalls": [
      "外部CSSだから内部CSSより優先される、という規則はありません。出所・重要度・レイヤー・詳細度などと、同条件なら記述順で判断します。",
      "style属性へ書くインラインスタイルは、style要素を使う内部CSSとは別の形式です。CSSファイルの中へ<style>タグは書きません。"
    ],
    "related": [
      "CSS",
      "インラインスタイル",
      "カスケード",
      "相対パス・絶対パス"
    ],
    "glossary": true,
    "source": "https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started"
  },
  {
    "domain": "web",
    "title": "静的配置（static）",
    "intro": "positionの初期値。通常の文書の流れに従って配置する方法。",
    "group": "CSSの用語",
    "code": ".box { position: static; top: 20px; }",
    "pitfalls": [
      "staticでもmarginやFlexbox・Gridなどによるレイアウトは働きます。「すべての配置指定が無効」という意味ではありません。",
      "通常のstatic要素とは異なり、FlexboxやGridのアイテムではpositionがstaticでもz-indexが適用される場合があります。"
    ],
    "related": [
      "通常フロー",
      "相対配置",
      "重ね合わせコンテキスト"
    ],
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/position",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "ブラウザー既定スタイル・CSSリセット",
    "intro": "ブラウザーが初めから適用する表示指定と、その差や余白などを制作側で整えるためのCSS。",
    "group": "CSSの用語",
    "code": "body { margin: 0; }",
    "pitfalls": [
      "HTMLタグに何もCSSを書いていなくても、見出しの太さ・段落の余白などは既定スタイルで表示されます。",
      "何でも0にすればよいわけではありません。フォーカスの目印など、操作に必要な表示を消さないようにします。"
    ],
    "related": [
      "CSS",
      "カスケード",
      "ボックスモデル"
    ],
    "source": "https://html.spec.whatwg.org/multipage/rendering.html",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "マークアップ",
    "intro": "文章や画像などに、タグを使って意味や構造を付けること。",
    "group": "HTMLの用語",
    "code": "<h2>作品紹介</h2>\n<p>作品の説明です。</p>",
    "pitfalls": [
      "見た目が同じでも、見出し・段落・リンクなどの意味が異なれば適切なHTMLも変わります。",
      "レイアウトのための箱と、文書上の意味を持つ要素を目的に合わせて使い分けます。"
    ],
    "related": [
      "HTML",
      "タグ",
      "セマンティクス"
    ],
    "source": "https://html.spec.whatwg.org/multipage/semantics.html",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "コンテンツモデル",
    "intro": "HTMLの各要素の中に、どのような内容を置けるかを定めるルール。",
    "group": "HTMLの用語",
    "code": "<p>文章の<span>一部分</span>です。</p>",
    "pitfalls": [
      "pの中にdivを置いてからdisplay: inlineにしても、そのHTMLが正しい入れ子になるわけではありません。",
      "昔の「ブロック要素・インライン要素」という分け方だけでは、現行HTMLの入れ子の可否を判断できません。"
    ],
    "related": [
      "HTML要素",
      "入れ子",
      "ブロックレベル要素",
      "display"
    ],
    "source": "https://html.spec.whatwg.org/multipage/dom.html#content-models",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "グローバル属性",
    "intro": "classやidなど、多くのHTML要素で共通して使うために定義されている属性。",
    "group": "HTMLの用語",
    "code": "<p id=\"notice\" class=\"text\" lang=\"ja\">お知らせ</p>",
    "pitfalls": [
      "どの属性でもどの要素に書けるわけではありません。たとえばhrefは段落pのリンク先を作る属性ではありません。",
      "グローバル属性にも値の規則があり、idは同じ文書内で重複させません。"
    ],
    "related": [
      "属性",
      "class属性",
      "id属性"
    ],
    "source": "https://html.spec.whatwg.org/multipage/dom.html#global-attributes",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "真偽値属性",
    "intro": "HTMLで、属性があるかないかで真・偽を表す種類の属性。",
    "group": "HTMLの用語",
    "code": "<button type=\"button\" disabled>操作できません</button>\n<button type=\"button\">操作できます</button>",
    "pitfalls": [
      "disabled=\"false\"でも属性自体があるため無効になります。無効にしないならdisabled属性を取り除きます。",
      "すべての属性がこの方式ではありません。aria-hidden=\"false\"などは文字列の値が意味を持ち、同じ判断をしません。"
    ],
    "related": [
      "属性",
      "属性値",
      "データ型"
    ],
    "source": "https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "カスタムデータ属性（data-*）",
    "intro": "HTMLの要素に、そのページ独自の補足データを持たせるための属性。",
    "group": "HTMLの用語",
    "code": "<button type=\"button\" data-action=\"save\">保存</button>",
    "pitfalls": [
      "data-action=\"save\"と書いただけで保存処理は動きません。必要な動作はJavaScriptなどで実装します。",
      "data-*の値はソースや開発者ツールから見られるため、秘密の保存場所には使えません。"
    ],
    "related": [
      "属性",
      "属性セレクター",
      "JavaScript",
      "DOM"
    ],
    "source": "https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute",
    "glossary": true
  },
  {
    "domain": "web",
    "title": "initial・inherit・unset",
    "intro": "CSSで、初期値に戻す・親から継承する・継承する性質かどうかで戻し方を切り替えるための共通の値。",
    "group": "CSSの用語",
    "code": ".child { color: inherit; margin: initial; padding: unset; }",
    "pitfalls": [
      "initialはブラウザーがそのタグに付ける既定スタイルへ戻す意味ではありません。仕様上の初期値を使います。",
      "unsetは継承するプロパティならinherit、それ以外ならinitialとして働きます。revertやrevert-layerは別の戻し方です。"
    ],
    "related": [
      "継承",
      "カスケード",
      "プロパティ",
      "ブラウザー既定スタイル・CSSリセット"
    ],
    "source": "https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Values/unset",
    "glossary": true
  }
];})();
