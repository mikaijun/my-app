## 導入からコード整形まで

### create-next-appコマンド
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

### EslintとPrettier
下記の記事を参考に導入

https://zenn.dev/akino/articles/96ae4136447433#eslint%E3%81%AE%E5%B0%8E%E5%85%A5

## ファイル保存・ペーストしたら自動整形されるようにする(任意)
VSCodeのsettings.json を開く。
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


## 導入からコード整形まで
