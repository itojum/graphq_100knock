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


