# 📚 GraphQL100本ノック
## ルール
### スキーマについて
- スキーマの更新（フィールド追加・型追加）はいつでも可能。
- 更新は既存の問題（ノック）に影響を与えない範囲で行うこと。
- 例：フィールド追加はOK、フィールド削除や仕様変更はNG。

- 10問ごとにスキーマを一新してよい。

- 1〜10問目と、11〜20問目以降ではスキーマに連続性は必要ない。

- 新しい10問のために、過去と無関係な新スキーマを自由に定義できる。

### 出題について
- 問題は、現在有効なスキーマを前提に出題される。
- 必要があれば、追加・変更したスキーマ部分のみ簡潔に提示する。
- フルスキーマの再掲は原則不要（適宜まとめる場合もある）。

### ヒントについて
- ヒントは適宜出すが、具体的な解答例（コード）や答えそのものは書かない。

### 進め方
- ユーザーが「次！」と指示したら、すぐ次の問題を出題する。
- 質問・指示があれば都度ルールをすり合わせる。

## 100本ノックまとめ
### 1〜10本目
#### 使用スキーマ
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  company: Company
}

type Company {
  id: ID!
  name: String!
}

type Query {
  user(id: ID!): User
  users: [User!]
  usersByCompany(companyId: ID!): [User!]!
}

type Mutation {
  createUser(name: String!, email: String!, companyId: ID!): User!
  updateUserName(id: ID!, name: String!): User!
  deleteUser(id: ID!): Boolean!
}
```
#### 出題内容
1.	特定のユーザーをid指定で取得するクエリ
2.	全ユーザーを一覧取得するクエリ
3.	特定の会社に所属するユーザー一覧を取得するクエリ
4.	Mutationで新しいユーザーを作成する
5.	Mutationで既存ユーザーの名前を更新する
6.	Mutationで既存ユーザーを削除する
7.	エイリアスを使って複数のユーザーを同時に取得する
8.	エイリアスを使って取得したフィールド名を変更する
9.	エイリアスを使って異なるユーザーを同時に取得する
10.	usersByCompanyで取得したユーザーと、その所属会社名をネストして取得するクエリ

### 11〜20本目
#### 使用スキーマ
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
  posts: [Post!]!
  postsByAuthor(authorId: ID!): [Post!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
  createPost(title: String!, content: String!, authorId: ID!): Post!
  updatePost(id: ID!, title: String!, content: String!): Post!
}
```
#### 出題内容
11. 新しいPostを作成せよ - `createPost` Mutationで投稿を作成する
12. 特定のPostを取得せよ（author込み） - `post(id)`で取得、authorもネストして取得
13. 全ユーザーとその投稿一覧を取得せよ - `users`から各`user`の`posts`も取る
14. 特定ユーザーとその投稿一覧を取得せよ - `user(id)`で取得、`posts`もネストする
15. 特定投稿と作者＋作者の他投稿を取得せよ - `post→author→posts`と2段階ネスト
16. すべての投稿のタイトルだけ取得せよ - `posts`クエリ、`title`のみ取得
17. すべての投稿とその作者名を取得せよ - `posts`クエリ、各`post`の`author.name`も取る
18. 特定ユーザーの投稿件数を取得せよ - `user(id)→posts`取得、件数カウント（クライアント側）
19. すべての投稿タイトルを昇順取得せよ - `posts`クエリ、クライアント側でソート
20. 特定投稿のタイトルと本文を更新せよ - `updatePost` Mutationで更新