window.AtlasSelectorsData=[
  {
    "category": "タイプセレクター",
    "name": "h2",
    "meaning": "タイプセレクター（要素名）。h2要素を選びます。タグ名にはドットを付けません。"
  },
  {
    "category": "クラスセレクター",
    "name": ".heading",
    "meaning": "クラスセレクター。class=\"heading\"を付けた要素を選びます。HTMLの名前と揃えます。"
  },
  {
    "category": "IDセレクター",
    "name": "#profile",
    "meaning": "IDセレクター。id=\"profile\"の要素を選びます。同じidはページ内で重複させません。"
  },
  {
    "category": "全称セレクター",
    "name": "*",
    "meaning": "全称セレクター。すべての要素を選びます。"
  },
  {
    "category": "セレクターリスト",
    "name": "h2, p",
    "meaning": "セレクターリスト。h2とpをそれぞれ選びます。カンマは「または」です。"
  },
  {
    "category": "複合セレクター",
    "name": "h2.heading",
    "meaning": "複合セレクター。h2で、かつclass=\"heading\"を持つ要素を選びます。"
  },
  {
    "category": "親子・兄弟",
    "name": "article p",
    "meaning": "articleの内側にあるpを選ぶ。子孫が対象。"
  },
  {
    "category": "親子・兄弟",
    "name": "article > p",
    "meaning": "articleのすぐ内側のpだけを選ぶ。"
  },
  {
    "category": "親子・兄弟",
    "name": "h2 + p",
    "meaning": "h2の直後にある同じ親のpを選ぶ。"
  },
  {
    "category": "親子・兄弟",
    "name": "h2 ~ p",
    "meaning": "h2より後にある同じ親のpをすべて選ぶ。"
  },
  {
    "category": "属性",
    "name": "[disabled]",
    "meaning": "disabled属性がある要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[type=\"email\"]",
    "meaning": "typeの値がemailと完全一致する要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[class~=\"card\"]",
    "meaning": "空白区切りのclass値にcardがある要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[lang|=\"en\"]",
    "meaning": "langがen、またはen-から始まる要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[href^=\"https:\"]",
    "meaning": "hrefの値がhttps:で始まる要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[href$=\".pdf\"]",
    "meaning": "hrefの値が.pdfで終わる要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[href*=\"example\"]",
    "meaning": "hrefの値の途中にexampleを含む要素を選ぶ。"
  },
  {
    "category": "属性",
    "name": "[type=\"EMAIL\" i]",
    "meaning": "ASCIIの大文字・小文字を区別せず属性値を照合する。"
  },
  {
    "category": "属性",
    "name": "[type=\"email\" s]",
    "meaning": "属性値の照合で大文字・小文字を区別する指定。対応確認が必要。"
  },
  {
    "category": "特殊な構文",
    "name": "&",
    "meaning": "入れ子のCSSで外側のセレクターを参照する。"
  },
  {
    "category": "特殊な構文",
    "name": "svg|a",
    "meaning": "名前空間付きの要素指定。@namespaceでsvgという接頭辞を定義する。"
  },
  {
    "category": "特殊な構文",
    "name": "*|a",
    "meaning": "名前空間に関係なくaという要素を指定する。"
  },
  {
    "category": "擬似クラス",
    "name": ":active",
    "meaning": "押している最中など、操作が実行されている要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":hover",
    "meaning": "ホバー：マウスポインターが重なっている要素。タッチでは同じ操作にならない場合がある。"
  },
  {
    "category": "擬似クラス",
    "name": ":focus",
    "meaning": "入力やキーボード操作の対象となるフォーカスを持つ要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":focus-visible",
    "meaning": "ブラウザーがフォーカスを見えるように示す必要があると判断した要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":focus-within",
    "meaning": "自身または内側の要素がフォーカスを持つ要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":link",
    "meaning": "まだ訪問していないリンク。"
  },
  {
    "category": "擬似クラス",
    "name": ":visited",
    "meaning": "訪問済みリンク。履歴保護のため指定できる見た目には制約がある。"
  },
  {
    "category": "擬似クラス",
    "name": ":any-link",
    "meaning": "訪問済みかどうかに関係なく、リンク先を持つリンク。"
  },
  {
    "category": "擬似クラス",
    "name": ":local-link",
    "meaning": "現在の文書と同じURLを指すリンク。仕様・対応状況を確認する。"
  },
  {
    "category": "擬似クラス",
    "name": ":target",
    "meaning": "URLの#名前が指すidを持つ要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":root",
    "meaning": "文書の根となる要素。HTMLでは通常html。"
  },
  {
    "category": "擬似クラス",
    "name": ":scope",
    "meaning": "セレクターを照合する際の基準となる要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":empty",
    "meaning": "子の内容を持たない要素。空白だけの場合の扱いは仕様・実装差に注意。"
  },
  {
    "category": "擬似クラス",
    "name": ":first-child",
    "meaning": "同じ親の子要素の中で最初の要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":last-child",
    "meaning": "同じ親の子要素の中で最後の要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":only-child",
    "meaning": "同じ親にほかの子要素がない要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":nth-child()",
    "meaning": "同じ親の子要素を先頭から数えて選ぶ。oddは奇数、evenは偶数、2n+1なども使う。"
  },
  {
    "category": "擬似クラス",
    "name": ":nth-last-child()",
    "meaning": "同じ親の子要素を末尾から数えて選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":first-of-type",
    "meaning": "同じ親にある同じタグの中で最初の要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":last-of-type",
    "meaning": "同じ親にある同じタグの中で最後の要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":only-of-type",
    "meaning": "同じ親にある同じタグが自身だけの要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":nth-of-type()",
    "meaning": "同じ親にある同じタグを先頭から数えて選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":nth-last-of-type()",
    "meaning": "同じ親にある同じタグを末尾から数えて選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":is()",
    "meaning": "括弧内の条件のいずれかに一致する要素。詳細度は条件の影響を受ける。"
  },
  {
    "category": "擬似クラス",
    "name": ":where()",
    "meaning": "括弧内の条件に一致する要素。where自身と引数による詳細度は0。"
  },
  {
    "category": "擬似クラス",
    "name": ":not()",
    "meaning": "括弧内の条件に一致しない要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":has()",
    "meaning": "括弧内の相対的な条件を満たす子孫や兄弟などがある要素。親側の選択にも使える。"
  },
  {
    "category": "擬似クラス",
    "name": ":enabled",
    "meaning": "操作可能なフォーム部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":disabled",
    "meaning": "無効に設定されたフォーム部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":checked",
    "meaning": "チェック済みのチェックボックスやラジオボタン、選択済みのoption。"
  },
  {
    "category": "擬似クラス",
    "name": ":indeterminate",
    "meaning": "チェック状態などが不確定なフォーム部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":default",
    "meaning": "フォーム部品のグループで既定になっているもの。"
  },
  {
    "category": "擬似クラス",
    "name": ":required",
    "meaning": "入力が必須のフォーム部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":optional",
    "meaning": "入力が必須ではないフォーム部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":valid",
    "meaning": "入力値がその部品の検証条件を満たす状態。必須でなければ空でも該当する場合がある。"
  },
  {
    "category": "擬似クラス",
    "name": ":invalid",
    "meaning": "入力値がその部品の検証条件を満たさない状態。"
  },
  {
    "category": "擬似クラス",
    "name": ":user-valid",
    "meaning": "利用者の操作後に、入力が有効と判断される部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":user-invalid",
    "meaning": "利用者の操作後に、入力が無効と判断される部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":in-range",
    "meaning": "数値などが指定された許容範囲内の部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":out-of-range",
    "meaning": "数値などが指定された許容範囲外の部品。"
  },
  {
    "category": "擬似クラス",
    "name": ":read-only",
    "meaning": "利用者が内容を編集できない要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":read-write",
    "meaning": "利用者が内容を編集できる要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":placeholder-shown",
    "meaning": "入力欄にplaceholderの案内文字が表示されている状態。"
  },
  {
    "category": "擬似クラス",
    "name": ":autofill",
    "meaning": "ブラウザーの自動入力によって値が入った入力欄。"
  },
  {
    "category": "擬似クラス",
    "name": ":blank（入力欄）",
    "meaning": "未入力のフォーム部品を表す提案。通常の制作では実装状況を確認する。"
  },
  {
    "category": "擬似クラス",
    "name": ":lang()",
    "meaning": "文章の言語によって選ぶ。lang属性を引き継いだ場合も対象となる。"
  },
  {
    "category": "擬似クラス",
    "name": ":dir()",
    "meaning": "文章の方向によって選ぶ。ltrは左から右、rtlは右から左。"
  },
  {
    "category": "擬似クラス",
    "name": ":defined",
    "meaning": "定義済みの要素。カスタム要素の定義前後の区別にも使う。"
  },
  {
    "category": "擬似クラス",
    "name": ":heading",
    "meaning": "h1からh6の見出し要素をまとめて選ぶ。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":heading()",
    "meaning": "指定したレベルの見出しを選ぶ。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":open",
    "meaning": "開閉可能な要素が開いている状態。"
  },
  {
    "category": "擬似クラス",
    "name": ":popover-open",
    "meaning": "popoverが表示されている状態。"
  },
  {
    "category": "擬似クラス",
    "name": ":modal",
    "meaning": "showModalなどで、外側の操作を制限するモーダル状態になった要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":fullscreen",
    "meaning": "全画面表示になっている要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":picture-in-picture",
    "meaning": "ピクチャーインピクチャーで表示中のメディア要素。"
  },
  {
    "category": "擬似クラス",
    "name": ":host",
    "meaning": "Shadow DOM内から、そのShadow DOMを持つホスト要素を選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":host()",
    "meaning": "Shadow DOMのホストのうち、括弧内の条件に合うものを選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":host-context()",
    "meaning": "ホスト自身や祖先側の条件に応じてShadow DOM内の指定を切り替える。互換性確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":has-slotted",
    "meaning": "slotに割り当てられた内容がある状態。"
  },
  {
    "category": "擬似クラス",
    "name": ":state()",
    "meaning": "カスタム要素が公開する独自の状態を選ぶ。内部実装側の設定が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":playing",
    "meaning": "再生中のメディア要素。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":paused",
    "meaning": "一時停止中のメディア要素。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":seeking",
    "meaning": "再生位置を探しているメディア要素。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":buffering",
    "meaning": "データの準備待ちで再生が進まない状態。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":stalled",
    "meaning": "データを取得できず再生が止まっている状態。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":muted",
    "meaning": "音声がミュートされたメディア要素。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":volume-locked",
    "meaning": "音量変更がロックされているメディア要素。対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":current",
    "meaning": "時間に沿って表示する字幕などで、現在の時点に対応する部分。"
  },
  {
    "category": "擬似クラス",
    "name": ":past",
    "meaning": "時間に沿う内容で、現在より前にあたる部分。"
  },
  {
    "category": "擬似クラス",
    "name": ":future",
    "meaning": "時間に沿う内容で、現在より後にあたる部分。"
  },
  {
    "category": "擬似クラス",
    "name": ":left",
    "meaning": "@pageの中で、印刷物の左ページを指定する。"
  },
  {
    "category": "擬似クラス",
    "name": ":right",
    "meaning": "@pageの中で、印刷物の右ページを指定する。"
  },
  {
    "category": "擬似クラス",
    "name": ":first",
    "meaning": "@pageの中で、印刷物の最初のページを指定する。"
  },
  {
    "category": "擬似クラス",
    "name": ":blank（印刷）",
    "meaning": "@pageの中で、印刷時の空白ページを指定する。入力欄のblankとは別の文脈。"
  },
  {
    "category": "擬似クラス",
    "name": ":active-view-transition",
    "meaning": "画面遷移アニメーションの実行中にルート要素を選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":active-view-transition-type()",
    "meaning": "指定した種類の画面遷移アニメーションの実行中にルート要素を選ぶ。"
  },
  {
    "category": "擬似クラス",
    "name": ":target-current",
    "meaning": "スクロールマーカーのうち、現在のスクロール先に対応するもの。"
  },
  {
    "category": "擬似クラス",
    "name": ":target-before",
    "meaning": "現在のスクロール先より前にあるスクロールマーカー。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":target-after",
    "meaning": "現在のスクロール先より後にあるスクロールマーカー。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":interest-source",
    "meaning": "関心を示す操作の起点となる要素。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":interest-target",
    "meaning": "関心を示す操作の対象となる要素。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似クラス",
    "name": ":xr-overlay",
    "meaning": "AR・VRの没入セッションでDOMオーバーレイになっている要素。"
  },
  {
    "category": "擬似要素",
    "name": "::before",
    "meaning": "要素の内容より前に装飾用の部分を作る。通常はcontentの指定も必要。"
  },
  {
    "category": "擬似要素",
    "name": "::after",
    "meaning": "要素の内容より後に装飾用の部分を作る。通常はcontentの指定も必要。"
  },
  {
    "category": "擬似要素",
    "name": "::first-letter",
    "meaning": "文章の先頭の文字の部分。"
  },
  {
    "category": "擬似要素",
    "name": "::first-line",
    "meaning": "文章の最初の表示行。画面幅によって対象の文字数が変わる。"
  },
  {
    "category": "擬似要素",
    "name": "::selection",
    "meaning": "利用者が選択した文字などの部分。"
  },
  {
    "category": "擬似要素",
    "name": "::marker",
    "meaning": "リストの丸や番号などのマーカー部分。"
  },
  {
    "category": "擬似要素",
    "name": "::placeholder",
    "meaning": "入力欄のplaceholderの案内文字部分。"
  },
  {
    "category": "擬似要素",
    "name": "::file-selector-button",
    "meaning": "ファイル選択用inputの選択ボタン部分。"
  },
  {
    "category": "擬似要素",
    "name": "::backdrop",
    "meaning": "モーダルや全画面表示など、最前面に出た要素の背後の幕。"
  },
  {
    "category": "擬似要素",
    "name": "::details-content",
    "meaning": "detailsの開閉される内容部分。"
  },
  {
    "category": "擬似要素",
    "name": "::part()",
    "meaning": "Shadow DOM側がpart属性で公開した内部の部分。"
  },
  {
    "category": "擬似要素",
    "name": "::slotted()",
    "meaning": "Shadow DOMのslotに割り当てられた要素。"
  },
  {
    "category": "擬似要素",
    "name": "::cue",
    "meaning": "動画などのWebVTT字幕部分。字幕トラックが必要。"
  },
  {
    "category": "擬似要素",
    "name": "::cue()",
    "meaning": "条件に合うWebVTT字幕内の部分。"
  },
  {
    "category": "擬似要素",
    "name": "::highlight()",
    "meaning": "Highlight APIで登録した名前付きの強調範囲。"
  },
  {
    "category": "擬似要素",
    "name": "::spelling-error",
    "meaning": "ブラウザーがスペルミスと判断した文字範囲。"
  },
  {
    "category": "擬似要素",
    "name": "::grammar-error",
    "meaning": "ブラウザーが文法ミスと判断した文字範囲。"
  },
  {
    "category": "擬似要素",
    "name": "::target-text",
    "meaning": "テキストフラグメントによって移動先になった文字範囲。"
  },
  {
    "category": "擬似要素",
    "name": "::search-text",
    "meaning": "ページ内検索の一致部分。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似要素",
    "name": "::picker()",
    "meaning": "カスタマイズ可能なフォーム部品の選択パネル部分。"
  },
  {
    "category": "擬似要素",
    "name": "::picker-icon",
    "meaning": "カスタマイズ可能な選択部品の開閉アイコン。"
  },
  {
    "category": "擬似要素",
    "name": "::checkmark",
    "meaning": "カスタマイズ可能な選択部品で、選択済みoptionに付く印。"
  },
  {
    "category": "擬似要素",
    "name": "::column",
    "meaning": "複数段組みの各列に対応する部分。新しい仕様のため対応確認が必要。"
  },
  {
    "category": "擬似要素",
    "name": "::scroll-button()",
    "meaning": "スクロール用のボタン部分。専用の設定と対応確認が必要。"
  },
  {
    "category": "擬似要素",
    "name": "::scroll-marker",
    "meaning": "スクロール先を表すマーカー部分。専用の設定と対応確認が必要。"
  },
  {
    "category": "擬似要素",
    "name": "::scroll-marker-group",
    "meaning": "スクロールマーカーをまとめる部分。専用の設定と対応確認が必要。"
  },
  {
    "category": "擬似要素",
    "name": "::view-transition",
    "meaning": "画面遷移アニメーション全体のオーバーレイ。"
  },
  {
    "category": "擬似要素",
    "name": "::view-transition-group()",
    "meaning": "名前付きの画面遷移グループ。"
  },
  {
    "category": "擬似要素",
    "name": "::view-transition-image-pair()",
    "meaning": "画面遷移の変更前と変更後の画像をまとめる部分。"
  },
  {
    "category": "擬似要素",
    "name": "::view-transition-old()",
    "meaning": "画面遷移に使う変更前の画像。"
  },
  {
    "category": "擬似要素",
    "name": "::view-transition-new()",
    "meaning": "画面遷移に使う変更後の画像。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-color-swatch",
    "meaning": "色選択部品の色見本を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-focus-inner",
    "meaning": "フォーム部品の内側のフォーカス領域を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-list-bullet",
    "meaning": "リストの丸いマーカーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-list-number",
    "meaning": "リストの番号を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-meter-bar",
    "meaning": "meterの値のバーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-progress-bar",
    "meaning": "progressの進行バーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-range-progress",
    "meaning": "rangeの選択済み側のトラックを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-range-thumb",
    "meaning": "rangeのつまみを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-moz-range-track",
    "meaning": "rangeのトラックを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-inner-spin-button",
    "meaning": "数値入力の増減ボタンを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-meter-bar",
    "meaning": "meterのバーの土台を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-meter-even-less-good-value",
    "meaning": "meterで不適切と分類された値のバーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-meter-inner-element",
    "meaning": "meterの内部領域を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-meter-optimum-value",
    "meaning": "meterで適正と分類された値のバーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-meter-suboptimum-value",
    "meaning": "meterで次善と分類された値のバーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-progress-bar",
    "meaning": "progressのバーの土台を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-progress-inner-element",
    "meaning": "progressの内部領域を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-progress-value",
    "meaning": "progressの進行済み領域を対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-scrollbar",
    "meaning": "スクロールバーを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-search-cancel-button",
    "meaning": "検索欄の消去ボタンを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-search-results-button",
    "meaning": "検索欄の検索結果ボタンを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-slider-runnable-track",
    "meaning": "rangeのトラックを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": "::-webkit-slider-thumb",
    "meaning": "rangeのつまみを対象とするブラウザー専用の指定。標準の代わりとして共通対応を前提にしない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-broken",
    "meaning": "画像などを表示できない状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-drag-over",
    "meaning": "ドラッグ中に重なった対象を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-first-node",
    "meaning": "最初の内容ノードを表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-handler-blocked",
    "meaning": "処理がブロックされた状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-handler-crashed",
    "meaning": "処理がクラッシュした状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-handler-disabled",
    "meaning": "処理が無効な状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-last-node",
    "meaning": "最後の内容ノードを表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-loading",
    "meaning": "読み込み中の状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-locale-dir(ltr)",
    "meaning": "利用環境の文字方向が左から右を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-locale-dir(rtl)",
    "meaning": "利用環境の文字方向が右から左を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-only-whitespace",
    "meaning": "内容が空白だけの状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-submit-invalid",
    "meaning": "無効なフォームを送信しようとした状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-suppressed",
    "meaning": "表示が抑制された状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-user-disabled",
    "meaning": "利用者が機能を無効にした状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  },
  {
    "category": "非標準・ブラウザー専用",
    "name": ":-moz-window-inactive",
    "meaning": "ウィンドウが非アクティブな状態を表すFirefox系の専用指定。古い内部用途を含み、新規制作での使用は推奨しない。"
  }
];
