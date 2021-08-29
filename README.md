# 初期設定
```
cd /path/to/your/project

// expo へのログイン確認
$ expo whoami

// expo ログイン
$ expo login

// expo プロジェクト新規作成
$ expo init
```
# 開発

```
// expo プロジェクトスタート
$ expo start
```

# エミュレータ起動

```
// iOS エミュレータ起動
$ expo start 後の管理画面 `Run on Ios simulator` から起動

// Android エミュレータ起動
$ emulator @Pixel_5_API_29 -dns-server 8.8.8.8
```


# expo アプリの共有

```
expo publish
```

※ 確認したい端末で expo アプリをインストールしている必要あり  
※ iOS の場合、同じexpoアカウントでないと確認できない   
→ クライアント確認の場合は、それ専用のアカウントを取る必要がある。  
※ app.json に "privacy": "unlisted" を追加することで、非公開状態となる


# React Native メモ

- ブロック要素は dispaly: flex; がデフォルトとなっている
- flex-derection: column; （縦組み）がデフォルトとなっている
