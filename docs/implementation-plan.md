# Maison Neko React LP 実装計画

## 目的

事前生成した Maison Neko の画像をリファレンス兼実素材として使い、React + Tailwind CSS で高級ホテルラウンジ調のLPを再構築する。白い余白、細い罫線、Champagne Goldのアクセント、猫の気配を抑制的に扱う。

## 技術方針

- React: CDN版Reactを `index.html` から読み込み、Babel Standaloneで `src/content.js`、`src/App.jsx`、`src/main.jsx` の順に実行する。
- Tailwind CSS: CDN版Tailwindを使用し、`tailwind.config` で Maison Neko の色とフォントを拡張する。
- 追加CSS: Tailwindで表現しにくいアニメーション、画像の微細な動き、モーション軽減対応のみ `src/styles.css` に分離する。
- 画像: 既存生成画像 `assets/hero-maison-neko-v2.png`、`assets/service-maison-neko-v2.png`、`assets/reservation-lounge.png` を主要ビジュアルに使用する。
- アイコン: 画像アイコンは使わず、細い罫線・文字・CSSの抽象マークで再現する。透過処理が必要なアイコン利用は避ける。
- ローカル確認: `npm run dev` で `scripts/static-server.cjs` を起動できる。Browser Useでは `file://` 表示でも動作確認済み。

## 再現基準

- ヒーロー: 白いホテルラウンジ写真を全面背景にし、左側に黒文字、ゴールドの細線、控えめなCTAを配置する。
- 余白: セクション上下は広め、カードは影ではなく罫線で構成する。
- 色: 指定パレット `#F8F7F3`, `#FFFFFF`, `#1F2423`, `#777C78`, `#B89B5E`, `#31433A`, `#7C4E4A`, `#E6E2DA` をTailwindトークンとして使用する。
- タイポ: 見出しはセリフ体、本文はサンセリフ。日本語見出しは細め、大きめ、字間ゆったり。
- アニメーション: ヒーローのゆるいズーム、スクロール前提のフェード/ライズ、ゴールドラインの微細な光、サービス画像の穏やかな揺れを入れる。
- レスポンシブ: Tailwindのレスポンシブクラスで、狭い画面ではグリッドを1列化し、見出しは折り返し可能にする。

## TODO

- [x] 1. React + Tailwind CDN の実行基盤を作る
- [x] 2. Maison Neko LP コンポーネントを実装する
- [x] 3. アニメーション、レスポンシブ、アクセシビリティを仕上げる
- [x] 4. Browser Useで表示確認し、必要修正を反映する
- [x] 5. 計画書とTODOを実装結果に合わせて更新する

## Worker分担と結果

- Worker A: React/Tailwind基盤。`index.html`, `src/main.jsx`, `src/styles.css`, `package.json` を担当。Babelの実行順とアニメーション定義を修正済み。
- Worker B: LPコンポーネント。`src/App.jsx`, `src/content.js` を担当。画像パス、ヒーロー見出し、フォーム送信フィードバックを修正済み。
- Worker C: QA補助。`docs/qa-checklist.md` を担当。Browser Useチェック項目を作成済み。

## Browser Use QA結果

- ファーストビュー: 生成画像、猫、ラウンジ空間、ブランド見出し、CTA表示を確認済み。
- 修正済み課題: 画像パスが `/assets/...` で `file://` 表示時に壊れていたため、相対パスへ修正。
- 修正済み課題: ヒーロー見出しがデスクトップで2行に割れていたため、レイアウト幅と見出しクラスを調整。
- フォーム: Name、Email、Date入力と送信確認メッセージを確認済み。
- コンソール: Browser Useでエラーログなしを確認済み。
