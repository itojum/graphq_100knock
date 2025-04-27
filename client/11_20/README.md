## #11: ユーザーとそのユーザーに紐づく投稿一覧
特定のユーザー（author）に紐づく投稿一覧を取得するクエリを書いてください。

### 要件
- postsByAuthor(authorId: ID!)を使うこと
- Postからはid, title, contentを取得すること

- 変数（$authorId）を使うこと

### ヒント
postsはリストで返ってきます。

authorIdはUser.idと一致している必要があります。

## #12: 投稿とその投稿のauthor情報
特定の投稿（Post）を取得し、その投稿のauthor（User情報）も合わせて取得するクエリを書いてください。

### 要件
- post(id: ID!) を使う
- 取得するフィールド
  - postのid, title, content
  - postの中のauthorからid, name, email
- 変数（$postId）を使う

### ヒント
Postの中にネストされたUser情報を、一発で取るイメージ

変数は $postId だけあればOK！

## #13: 全ユーザーとその投稿一覧を取得せよ
### お題
全てのユーザー（User）を取得し、それぞれのユーザーに紐づく投稿（Post）の一覧も一緒に取得するクエリを書いてください。

### 要件
- usersクエリを使う
- Userのid, name, email を取得する
- 各Userに対して、関連するPostをリストで取得し、各Postのid, title, content を取る
- users → posts というネスト構造になる

- 変数不要

### ヒント
- GraphQLでは、配列（users）の各要素に対してさらにサブフィールド（posts）を掘ることができる。
- User型にpostsフィールドが存在しない場合、自前でリレーションを設計する必要がある（が、今回は仮に存在している想定で書いてよい）。