## #21: 特定のカテゴリに属する商品一覧を取得せよ

### お題
特定のカテゴリ（Category）に属する商品（Product）を一覧で取得するクエリを書いてください。

### 要件
- `category(id: ID!)`クエリを使う
- 取得するProductのフィールドは
  - `id`
  - `name`
  - `price`
- 変数 `$categoryId` を使用する

### ヒント
- categoryからproductsをたどるネスト構造になる。
- 必要なのはcategory自体ではなく、その中のproducts。
- productsはリストなので、リストに対してフィールド指定するのを忘れずに。
はい、続けます！


## #22: 商品を新規登録せよ

### お題
新しい商品（Product）を登録するMutationを書いてください。

### 要件
- `createProduct` Mutationを使う
- 引数に必要なのは
  - `name: String!`
  - `description: String!`
  - `price: Float!`
  - `categoryId: ID!`
- 返すフィールドは
  - `id`
  - `name`
  - `price`
- 変数 `$name`, `$description`, `$price`, `$categoryId` を使用する

### ヒント
- Mutationは通常のQueryと似ているが、先頭を`mutation`にする。
- 変数を定義して、それを引数として渡す。
- 必要最低限のフィールドだけ返すのが基本スタイル。

## #23: 商品詳細（名前・説明・価格・カテゴリ名）を取得せよ

### お題
特定の商品（Product）について、詳細情報を取得するクエリを書いてください。

### 要件
- `product(id: ID!)`クエリを使う
- 取得するフィールドは
  - `id`
  - `name`
  - `description`
  - `price`
  - `category.name`
- 変数 `$productId` を使用する

### ヒント
- `category`フィールドはProduct型に存在するので、そこからさらに`name`をネストして取得する。
- ネスト取得でも、最小限のフィールドだけ指定することを意識しよう。
