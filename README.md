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
1. 特定ユーザー取得 - `user(id: ID!)`で特定のユーザーを取得する
2. 全ユーザー一覧取得 - `users`クエリで全ユーザーを一覧表示する
3. 会社別ユーザー一覧取得 - `usersByCompany`で特定会社の所属ユーザー一覧を取得する
4. ユーザー新規作成 - `createUser` Mutationで新規ユーザーを作成する
5. ユーザー名更新 - `updateUserName` Mutationで既存ユーザーの名前を更新する
6. ユーザー削除 - `deleteUser` Mutationでユーザーを削除する
7. 複数ユーザー同時取得 - エイリアスを使用して複数ユーザーを一度に取得する
8. フィールド名変更 - エイリアスでフィールド名を変更して取得する
9. 異なるユーザー同時取得 - エイリアスで複数の異なるユーザーを同時に取得する
10. ネスト情報取得 - `usersByCompany`でユーザーと所属会社情報をネストして取得する

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

### 21〜30本目
#### 使用スキーマ
```graphql
type Category {
  id: ID!
  name: String!
  products: [Product!]!
}

type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  category: Category!
}

type Query {
  category(id: ID!): Category
  categories: [Category!]!
  product(id: ID!): Product
  products: [Product!]!
  productsByCategory(categoryId: ID!): [Product!]!
}

type Mutation {
  createCategory(name: String!): Category!
  createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
  updateProduct(id: ID!, name: String, description: String, price: Float): Product!
}

```

#### 出題内容
21. 特定のカテゴリに属する商品一覧を取得せよ - `category(id: ID!)`クエリで特定カテゴリの商品を取得
22. 商品を新規登録せよ - `createProduct` Mutationで新商品を登録する
23. 商品詳細を取得せよ - `product(id: ID!)`クエリで商品詳細とカテゴリ名を取得
24. すべてのカテゴリ名とその商品数を取得せよ - `categories`クエリで全カテゴリとそれぞれの商品数を取得
25. 特定カテゴリに属する商品の名前と価格を取得せよ - `productsByCategory`クエリで特定カテゴリの商品を取得
26. 商品の価格を更新せよ - `updateProduct` Mutationで商品価格のみ更新する
27. カテゴリごとに商品名だけ一覧取得せよ - `categories`クエリでカテゴリと各商品名のみを取得
28. 商品詳細取得時にカテゴリIDも取得せよ - `product(id)`で商品情報とカテゴリID・名前も取得
29. 商品リストを価格の高い順に取得せよ - `products`クエリで全商品取得し、クライアント側でソート
30. 商品とカテゴリをまとめて新規登録せよ - `createCategory`と`createProduct`を1リクエストで連続実行


### 31〜40本目
#### 使用スキーマ
```graphql
type Category {
  id: ID!
  name: String!
  products(filter: ProductFilterInput): [Product!]!
}
type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  category: Category!
  reviews(filter: ReviewFilterInput, sortBy: ReviewsSortBy): [Review!]!
  reviewCount: Int!
  averageRating: Float
}
type Review {
  id: ID!
  content: String!
  rating: Int!
  product: Product!
  user: User!
}
type User {
  id: ID!
  name: String!
  email: String!
  reviews: [Review!]!
}
input ProductFilterInput {
  minPrice: Float
  maxPrice: Float
}
input ReviewFilterInput {
  minRating: Int
}
enum ReviewsSortBy {
  RATING_ASC
  RATING_DESC
}
type Query {
  category(id: ID!): Category
  categories: [Category!]!
  product(id: ID!): Product
  products(filter: ProductFilterInput): [Product!]!
  reviews(filter: ReviewFilterInput): [Review!]!
  user(id: ID!): User
  users: [User!]!
}
type Mutation {
  createCategory(name: String!): Category!
  createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
  updateProduct(id: ID!, name: String, description: String, price: Float): Product!
  createReview(content: String!, rating: Int!, productId: ID!, userId: ID!): Review!
}
```

#### 出題内容
31. 商品レビューの追加 - `createReview` Mutationでレビューを投稿する（商品に紐づける）
32. 商品のレビュー取得 - `product(id)`クエリで商品情報＋そのレビュー一覧を取得する
33. 商品の価格絞り込み - `products`クエリに価格範囲（minPrice, maxPrice）で絞り込み機能を追加
34. レビューのバリデーション - `createReview`で評価（rating）が1〜5の範囲外ならエラーを返す
35. レビューのフィルタリング - `product.reviews`に`minRating`引数を追加し条件付き取得を実装
36. レビューのソート機能 - レビュー取得時に評価順（昇順/降順）でソートする機能を追加
37. ユーザーとレビューのネスト取得 - `user(id)`でユーザーの書いたレビュー一覧＋商品情報を取得
38. 商品ごとのレビュー件数 - `Product`型に`reviewCount`フィールドを追加して件数を取得
39. 高評価レビューとレビュアー - `reviews(minRating)`で高評価レビュー＋その投稿者情報を取得
40. 商品の平均評価 - `Product`型に`averageRating`フィールドを追加して平均評価を計算
