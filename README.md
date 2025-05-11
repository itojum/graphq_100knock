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

### 41〜50本目
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
  favoritedBy: [User!]!
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
  bio: String
  location: String
  website: String
  registeredAt: String!
  reviews: [Review!]!
  favorites: [Product!]!
  favoriteProductCount: Int!
  followers: [User!]!
  following: [User!]!
  followerCount: Int!
  followingCount: Int!
}

type Favorite {
  user: User!
  product: Product!
}

type Follow {
  user: User!
  following: [User!]!
}

type ProductConnection {
  items: [Product!]!
  pageInfo: PageInfo!
}

type PageInfo {
  totalCount: Int!
  totalPages: Int!
  currentPage: Int!
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
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
  searchUsers(query: String!): [User!]!
  paginatedProducts(page: Int!, limit: Int!): ProductConnection!
}

type Mutation {
  createCategory(name: String!): Category!
  createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
  updateProduct(id: ID!, name: String, description: String, price: Float): Product!
  createReview(content: String!, rating: Int!, productId: ID!, userId: ID!): Review!
  addFavorite(userId: ID!, productId: ID!): Favorite!
  removeFavorite(userId: ID!, productId: ID!): Boolean!
  followUser(userId: ID!, followingId: ID!): Follow!
  unfollowUser(userId: ID!, followingId: ID!): Boolean!
  updateUserProfile(userId: ID!, bio: String, location: String, website: String): User!
}
```

#### 出題内容
41. 不正なレビューをブロックせよ - `createReview`にバリデーションを追加し、不正データを防ぐ
42. 同一商品の重複レビューを防げ - 同じユーザーが同じ商品に複数レビューできないようにする
43. お気に入り商品機能を追加せよ - ユーザーが商品をお気に入り登録・解除できる機能を実装
44. お気に入り商品件数を取得せよ - `User`型に`favoriteProductCount`フィールドを追加
45. ユーザーフォロー機能を実装せよ - ユーザー間のフォロー関係を表現する基本機能を実装
46. フォロー/フォロワー情報を拡張せよ - フォロー中一覧とフォロワー数・フォロー数の取得機能
47. フォロー解除機能を実装せよ - `unfollowUser`ミューテーションでフォロー関係を解除する
48. ユーザープロフィールを拡張せよ - ユーザーの自己紹介・居住地・ウェブサイト等の情報を追加
49. ユーザー検索機能を実装せよ - 名前・自己紹介・居住地を対象とした検索機能を追加
50. ページネーション機能を実装せよ - 大量データを効率的に取得するためのページ分割機能

### 51〜60本目：Fragment、Interface、Unionによる型の再利用と拡張
#### 出題内容
51. Fragmentの基本を学ぶ - ユーザー情報を取得する際に、同じフィールドの組み合わせを複数回使用するケースを想定し、Fragmentを使って再利用可能な形でクエリを記述する
52. 型による分岐を含むFragmentを学ぶ - User型をAdmin型とRegularUser型に分けた際に、型に応じて異なるフィールドを取得するクエリを実装する
53. Union型を使った検索結果の実装 - 商品とユーザーを横断的に検索できる機能を実装する
54. Interfaceを使った共通フィールドの扱い - 複数の型に共通するフィールドをInterfaceで定義し、Interface型を返すクエリを実装する
55. ユーザーのフォロワー情報を取得する - ユーザーのフォロワー情報を取得するクエリを実装する
56. 複数の型を組み合わせたクエリの実装 - ユーザーとその投稿、さらに投稿に対するコメントを一度に取得するクエリを実装する
57. Fragmentを使った条件付きフィールド取得 - 特定の条件下でのみフィールドを取得するクエリを実装する

### 61〜70本目：Subscriptionとリアルタイム機能
#### 出題内容
1. Subscriptionの基本を実装する - リアルタイムデータ取得の仕組み
2. メッセージングのリアルタイム更新を実装する - 新着メッセージの受信
3. 複数条件によるSubscriptionのフィルタリング - 特定の条件に合致する更新のみ受信
4. Argumentを使ったSubscriptionの実装 - 引数によるリアルタイムデータのフィルタリング
5. 新しい投稿の通知システムを実装する - フォロー中ユーザーの投稿通知
6. リアルタイムいいね・コメント更新を実装する - 投稿へのリアクション通知
7. オンラインステータスの監視システムを実装する - ユーザーのオンライン状態更新
8. Subscription Resolverの高度な実装 - 複雑なビジネスロジックとの連携
9. 認証付きSubscriptionの実装 - 認証ユーザーのみアクセス可能なリアルタイムデータ
10. スケーラブルなSubscription設計 - 大規模アプリケーションに対応するパターン

### 71〜80本目：高度なArgument活用とカスタムディレクティブ
#### 出題内容
1. 複雑なArgumentの設計と実装 - ネストした引数構造の活用
2. 動的フィルタリング用のArgumentシステム - 柔軟な検索条件の構築
3. Enumを活用した引数の制限 - 入力値を制御する方法
4. デフォルト値を持つArgument - 省略可能な引数の設計
5. 相互依存するArgumentの検証 - 複数引数間の関係性の検証
6. カスタムディレクティブの基本 - 独自のディレクティブ定義と使用法
7. 認可用ディレクティブの実装 - `@auth`ディレクティブによるアクセス制御
8. フォーマット変換ディレクティブの実装 - 出力形式を変更するディレクティブ
9. バリデーションディレクティブの実装 - 入力値の検証を行うディレクティブ
10. スキーマ全体に適用するディレクティブ - グローバルな振る舞いを変更する方法

### 81〜90本目：認証・認可とパフォーマンス最適化
#### 出題内容
1. JWTによる認証システムの実装 - トークンベースの認証基盤
2. ロールベースのアクセス制御 - ユーザー権限に基づくアクセス制限
3. DataLoaderによるN+1問題の解決 - バッチ処理による最適化
4. キャッシュ戦略の実装 - 効率的なデータアクセス
5. 複雑度ベースのレート制限 - クエリの複雑さに応じた制限
6. フィールドレベルのアクセス制御 - 詳細な権限管理
7. スキーマ設計によるパフォーマンス最適化 - 効率的な型設計
8. トレーシングとモニタリングの実装 - パフォーマンス計測と分析
9. バッチ処理ミューテーションの実装 - 複数操作の一括処理
10. コンテキストベースの認可システム - リクエスト情報に基づく柔軟な制御

### 91〜100本目：統合と実践的アプリケーション
#### 出題内容
1. ファイルアップロード機能の実装 - マルチパートリクエスト処理
2. 多言語対応（i18n）の実装 - 国際化対応API
3. バージョニングと後方互換性の維持 - APIの進化
4. フェデレーションの基本 - 分散GraphQLサービス
5. マイクロサービスアーキテクチャでのGraphQL - サービス間連携
6. エラーハンドリングとリカバリー戦略 - 堅牢なAPI設計
7. 全文検索機能の統合 - 高度な検索APIの実装
8. ユーザー体験を考慮したAPI設計 - フロントエンド視点のAPI
9. CI/CDとテスト自動化 - 継続的なAPI開発
10. 本番環境に対応したGraphQLサーバーの設計と実装 - まとめと実践