## #1: シンプルなQueryを作成しよう
### お題：
以下のスキーマを前提に、user という単一のユーザー情報を取得するGraphQLクエリを書いてください。

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  user(id: ID!): User
}
```
### 要件：
- ユーザーのIDを指定して、nameとemailを取得するクエリを書く
- 変数（$id）を使ってパラメータを渡すスタイルにする

### ヒント：
GraphQLでは、クエリ本体と一緒に、引数（variables）を宣言できます。