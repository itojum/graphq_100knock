## #11
特定のユーザー（author）に紐づく投稿一覧を取得するクエリを書いてください。

### 要件
- postsByAuthor(authorId: ID!)を使うこと
- Postからはid, title, contentを取得すること

- 変数（$authorId）を使うこと

### ヒント
postsはリストで返ってきます。

authorIdはUser.idと一致している必要があります。