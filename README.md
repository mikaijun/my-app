## create-next-appコマンド
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

## 作成直後のtsconfig.json
特段編集はしない
```ts
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## EslintとPrettier
下記の記事を参考に導入
https://zenn.dev/akino/articles/96ae4136447433#eslint%E3%81%AE%E5%B0%8E%E5%85%A5
