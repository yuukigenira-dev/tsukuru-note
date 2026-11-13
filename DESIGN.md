# DESIGN メモ

## ワイヤーフレーム（wireframe.js）
- 配置計算 `layout(wf)` → 描画部品 `prims()` の1本道。SVGプレビューとPNG（canvas）は同じ部品リストから描くので見た目が一致します。
- 見た目はグレーボックス。色は `wireframe.css` の `--wf-bg`／`--wf-block`／`--wf-inner`／`--wf-place`／`--wf-line`／`--wf-text`（ダークは `[data-atlas-theme="dark"]` で上書き）。
- 枠タブは `role="tablist"`／`aria-selected`、←→キーで切替。高さ・幅・位置は `role="radiogroup"` のボタン（`aria-checked`）。
- タップ対象は 44px 以上（`--tn-tap`）。ボタンの記号（＋・削除・保存など）は既存の atlas-chic.js が自動でアイコン化します。
- Web・スマホ⇄ゲームの切替時、ブロックがあれば白紙に戻します（部品の種類が違うため）。Web⇄スマホは同じブロックのまま。

## 実表示・単体HTML（2026-11）
- `wireframe-real.js` は `wireframe.js` より先にロード。既存の辞典・学習処理は変更しない。CSSはiframeに隔離。
- 配置の入口は引き続き `layout(wf)`。入れ子もそこで計算し、SVG／PNGは同じ `rects → prims()` を通す。実表示／HTMLは `layout(wf).rects` のトップレベル順序とその子構造を受け取る同じ `TsukuruReal.documentHTML()`／埋め込みCSSを使う。実ページは固定ボックス高さではなく内容に合わせた自然な高さ。
- `columns` は `cols:2..4` と `children: Block[][]`、`section` は `children: Block[]`。列を減らすと、削除対象列の子を最後の列へ移して保持する。カラムは600px以下で縦積み、実表示の半幅ブロックもスマホでは全幅。ワイヤー／PNGの既存の幅・高さ指定は維持する。
- 保存キー `tsukuru-wireframe-v1` を維持。`content:{text,level,image,alt,href,buttonText}` を追加。読み込み時に既存 `label` から移行し、保存済み作品も保持する。元ラベルはワイヤー用にも同期する。
- 選択中のブロックだけ型別の内容編集欄を表示。入れ子は各列／セクション内の「子ブロックを追加」で操作する。タップ対象44px以上。枠タブのtablist／aria-selectedを維持し、表示・列数などのradiogroupはaria-checked／矢印キー／ロービングtabindex。書き出しはネイティブdialog＋ラベル＋フォーカス復帰。
- 実表示iframeはsandbox（allow-same-originのみ、スクリプト不可）。内部クリックは編集選択に使いリンク遷移しない。書き出しHTMLのリンクは通常動作する。コンテンツのリサイズをResizeObserverで追従する。1画面目の線・PNGはワイヤー専用。
- HTMLにユーザー文字列を直接挿入しない（escape）。リンクはhttp(s)／mailto／tel／フラグメント／明示的な相対パスのみ。画像はhttp(s)またはラスタ画像のdata URI。最初の見出しはh1、以降は一度に1階層まで、2個目以降のh1はh2に補正。
- ローカル画像はcanvasで長辺1600px以下・WebP品質0.82に縮小（非対応環境はcanvasのPNGフォールバック）。PNG/JPEG/WebP/GIF対応、GIFは静止画、SVG/AVIFは非対応。容量上限30MB。localStorage失敗は消えないalertで通知し、成功扱いにしない。
- URL画像は書き出し時にCORS fetch（認証情報なし、10秒上限）→同じ縮小処理。埋め込めない場合は自動ダウンロードせず、外部URLが残る旨とオフライン不可を表示し、明示的な再操作で継続。完全単体HTMLが必要なら端末画像に置き換える。警告なしの場合は画像をdata URI化して単体で開ける。
- フォームは見本のみ、送信しない。静的HTMLにサーバー処理は含めない。ゲームは従来のWeb⇄ゲーム切替時の白紙化を維持（先に名前を付けて保存）。

## ヘッダーのメニュー（2026-11-09）
- `header` ブロックに `content.menu`（文字列、1行1項目、`ラベル | URL`。URL省略時は `#`）を追加。解析は `TsukuruReal.menuItems()` に一本化し、ワイヤー（`prims()`）・実表示・書き出し・HTML骨組みすべてで同じ結果を使う。
- ワイヤーは入力した項目数だけ右側に枠＋ラベルを描く。空なら枠なし。
- 移行：`content.menu` が無い旧ヘッダー（v1／v2保存とも）は `ホーム／作品／お問い合わせ`（従来の3枠と同じ見た目）を補う。新規ヘッダーも同じ初期値。
- 実表示／書き出し：`<header>` 内にサイト名 `<p class="site-title">` ＋ `<nav aria-label="メイン"><ul class="menu"><li><a>`。リンクは既存の `linkURL()` 安全判定を通す（`javascript:` などは `#`）。
- レスポンシブ：PCは横並び（はみ出しは折り返し）。600px以下はサイト名の下にメニューを2列前後のグリッドで並べ、各リンクは44px以上。JSのハンバーガーは使わない。
- 独立した `nav` ブロックも `<nav><ul>` で出力。複数navの `aria-label` は1つ目「メイン」、以降「メニュー2」…で重複しない。

## HTMLコード表示（2026-11-13）
- プレビューの表示切替（`role="radiogroup"`、aria-checked、矢印キー、ロービングtabindex）に「HTMLコード」を追加。選択は `tsukuru-wireframe-view-v1` に保存する（ワイヤー／実表示／HTMLコード、画像省略、HTML/CSSタブ）。
- ソースは `TsukuruReal.documentHTML()` と同じ生成器。`layout(wf)` → `prims()` の経路は変更しない。ブロック編集に追従して更新する。
- 表示は等幅フォント、行番号、スマホでは横スクロール（ページ幅は崩さない）。タグ／属性／文字列を簡易色分け（外部ライブラリなし）。ライト／ダークは既存テーマに追従。
- 「画像データを省略」（既定オン）で長い data URI を `data:image/jpeg;base64,…(123KB)` のように短縮。コピー内容は注記どおり：オフのときは書き出しHTMLと同一、オンのときは省略した表示用コード。
- 「コードをコピー」は clipboard API、失敗時は textarea + execCommand。結果は `aria-live` の「コピーしました」で伝える。「HTMLで書き出す」はそのまま使える。
- コード表示内で HTML / CSS を切替。HTMLタブではページ骨格を見やすくするため `<style>` の中身を省略し、タグを改行・インデントして表示する（コピーは書き出しと同じく未整形のまま）。CSSタブは埋め込みスタイルを改行して示す。コピーは常にページ全体のHTML（CSS全文付き。画像は省略設定に従う）。
- タップ対象は 44px 以上。1画面目の線はコード表示では出さない（ワイヤー専用）。

## キービジュアル／画像の高さ（2026-11-13）
- 対象は `hero`（キービジュアル）、`image`（画像）、ゲームの `char`（立ち絵）。高さは枠ごと（`heights.web` / `heights.phone` / `heights.game`、px）に保存する。無い場合は従来の S/M/L 自動値（移行互換）。
- Web とスマホは独立。一方だけ指定した場合、実表示・書き出しではもう一方のブレイクポイントにも同じ値を使う。両方あるときは 600px 超が Web、600px 以下がスマホ。
- 配置は `layout(wf)` が `blockH()` を使う。`prims()` の経路は変えない。
- ワイヤー選択時、下辺に高さハンドル（見た目は細いバー、タップ領域は 44px、`touch-action:none`、`role="slider"`、`aria-valuenow`）。ドラッグはポインター（マウス／タッチ）、移動量はプレビューの縮小率で設計pxに換算し、8px 刻み（120〜2000px）。矢印キーは ±8、Shift で ±40。
- 編集欄の「高さ（px）」と「自動に戻す」。S/M/L を選ぶとその枠のカスタム高さを消して既定値に戻す。
- 実表示／HTMLコード／書き出しは同じ生成器。画像（キービジュアル内の画像を含む）に `height` と `object-fit:cover` を付ける。未指定時は従来どおり内容に合わせた自然な高さ。
