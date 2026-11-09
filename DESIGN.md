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
