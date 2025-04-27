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

## #24: すべてのカテゴリ名とその商品数を取得せよ

### お題
すべてのカテゴリ（Category）を取得し、それぞれが持っている商品の数を取得してください。

### 要件
- `categories`クエリを使う
- 取得するフィールドは
  - `id`
  - `name`
  - `products`（ここから商品数をカウントする）
- productsのリストは中身までは不要（数だけ必要）

### ヒント
- GraphQL自体には直接「件数だけ取得する」仕組みはないので、products配列の長さは**クライアント側でカウント**すること。
- クエリではproductsのリストそのものを取得するだけでよい（たとえば`products { id }`みたいな軽いフィールドだけ取ると良い）。

## #25: 特定カテゴリに属する商品の名前と価格を取得せよ

### お題
特定のカテゴリに属する商品の一覧を取得し、それぞれの名前と価格を表示するクエリを書いてください。

### 要件
- `productsByCategory(categoryId: ID!)`クエリを使う
- 取得するフィールドは
  - `id`
  - `name`
  - `price`
- 変数 `$categoryId` を使用する

### ヒント
- `productsByCategory`は、categoryIdを引数にとって、そのカテゴリに紐づく商品リストを返す。
- リストなので、各商品ごとに必要なフィールドを指定するのを忘れないように。


## #26: 商品の価格を更新せよ

### お題
特定の商品（Product）の価格を更新するMutationを書いてください。

### 要件
- `updateProduct` Mutationを使う
- 更新するのは`price`のみ
- 返すフィールドは
  - `id`
  - `name`
  - `price`
- 変数 `$productId`, `$price` を使用する

### ヒント
- `updateProduct`では、変更したいフィールドだけ引数に渡せばよい（他は省略可）。
- 価格だけ変更する場合、`name`や`description`は送らなくてOK。
