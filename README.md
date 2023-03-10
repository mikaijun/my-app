## create-next-app コマンド

```js
~ % npx create-next-app@latest
Need to install the following packages:
  create-next-app@latest
// 続行していいか？の確認なのでy
Ok to proceed? (y)
// アプリの名前を決める。好きな名前でOK
? What is your project named? › my-app
// TypeScriptを使うか？Yes
? Would you like to use TypeScript with this project? › Yes
// ESLintを使うか？Yes
? Would you like to use ESLint with this project? › Yes
// pagesとstylesをsrcの中に入れるか？入れたいのでYes
Would you like to use `src/` directory with this project? › Yes
// appディレクトリを使うか？今回は使わなためNo
? Would you like to use experimental `app/` directory with this project? › No
// インポート エイリアスを設定。一旦デフォルトで後で変える
What import alias would you like configured? › @/*
```

## Eslint と Prettier

下記の記事を参考に導入。導入すれば`yarn format`で整形される

https://zenn.dev/akino/articles/96ae4136447433#eslint%E3%81%AE%E5%B0%8E%E5%85%A5

.eslintrc.jsonは[こちら](https://github.com/mikaijun/my-app/blob/master/.eslintrc.json)

## ファイル保存・ペーストしたら自動整形されるようにする(任意)

VSCode の settings.json を開く。
コマンドパレットを開く
ショートカットキー command + shift + P または F1 でコマンドパレットを表示
検索ワードを入れる
settings と入力
開いた settings.json に自動フォーマット設定を追記します。

```js
{
  // formatter
  "editor.formatOnSave": true, // ファイル保存時の自動フォーマット有効
  "editor.formatOnPaste": true, // ペーストした文字の自動フォーマット有効
  "editor.formatOnType": true, // 文字入力行の自動フォーマット有効
  "editor.defaultFormatter": "esbenp.prettier-vscode", // デフォルトフォーマッターをPrettierに指定
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // ファイル保存時に ESLint でフォーマット
  },
}
```

ここまでで ESLint/Prettier と VSCode の設定は完了です。

## StoryBook の導入

### インストール

```
npx sb init
```

途中で表示される`Do you want to run the 'eslintPlugin' migration on your project?`は n を選択。
これは ESLint の eslint-plugin-storybook に関するメッセージで上記で`.eslintrc.json`ファイルを作成したので不要(だと思われる)。

### src/stories の削除

```
rm -rf src/stories
```

初期の状態だと src の直下に stories が作られている。
下記 URL のようにコンポーネントの実装、storybook、テストの位置を一緒にしたいためである。

https://qiita.com/takano-h/items/c1796c05247ac3ae9964

### stories の適用箇所の修正

上記の通りコンポーネントの中に storybook とテストを入れる予定なので`.storybook/main.js`の stories を以下のように変える。

```
stories: ['../src/components/**/stories.@(js|jsx|ts|tsx|mdx)'],
```

### テストコード導入
[こちら](https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args)を参考に導入。
テストコードは下記サンプルコンポーネントで実装して見ました。

### サンプルコンポーネントの作成

[index.tsx](https://github.com/mikaijun/my-app/blob/master/src/components/atoms/Button/index.tsx)

[stories.tsx](https://github.com/mikaijun/my-app/blob/master/src/components/atoms/Button/stories.tsx)

を作成した上で`yarn storybook`で作成したコンポーネントが見れる

## TODO

- コンポーネントテストの実装(jest など)
- 使用する CSS
  - styled-components、 scss、 Tailwind などの CSS フレームワーク
- storybook をデプロイしたい
  - [Chromatic](https://zenn.dev/keitakn/articles/storybook-deploy-to-chromatic)使えば無料で簡単にできる。
  - [こんな感じ](https://63def1ebc49738e3f8edb768-xjvpgjxyla.chromatic.com/?path=/story/layouts-worrylayout--primary)で github アカウントとかあれば見れます

## ディレクトリ構成の基盤

```
.
├── README.md
├── components
│   ├── Layouts(以下はatomeと同じ)
│   ├── atoms
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── stories.tsx
│   ├── molecules(以下はatomeと同じ)
│   └── organisms(以下はatomeと同じ)
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── [id]
│   │   └── index.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── graphql.ts
│   ├── index.tsx
├── public
│   └── favicon.ico
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```
