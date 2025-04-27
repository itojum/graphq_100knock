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

## #2: リストを取得してみよう

### お題：
以下のスキーマを前提に、すべてのユーザー情報を取得するクエリを書いてください。

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  users: [User!]!
}
```
### 要件：
- usersフィールドを使って、全ユーザーのid、name、emailをすべて取得する
- 変数は不要（シンプルな固定クエリでOK）

### ヒント：
リスト（配列）になって返ってくるから、配列を意識して！

## #3: ネストされたオブジェクトを取得しよう

### お題：
以下のスキーマを前提に、ユーザーとその所属している会社情報を取得するクエリを書いてください。

```graphql
type Company {
  id: ID!
  name: String!
}

type User {
  id: ID!
  name: String!
  email: String!
  company: Company!
}

type Query {
  users: [User!]!
}
```
### 要件：

- usersクエリを使って、
  - ユーザーのid、name、email
  - さらにそのユーザーのcompanyのidとname
- を取得するクエリを書く
- ネスト（入れ子）に気をつける！

### ヒント：
GraphQLでは、必要なフィールドだけを深掘りしてリクエストできるよ。

## #4: 引数付きリスト取得をしてみよう

### お題：
以下のスキーマを前提に、特定の会社に所属するユーザー一覧を取得するクエリを書いてください。

```graphql
type Company {
  id: ID!
  name: String!
}

type User {
  id: ID!
  name: String!
  email: String!
  company: Company!
}

type Query {
  usersByCompany(companyId: ID!): [User!]!
}
```
### 要件：
- usersByCompanyクエリを使って、特定のcompanyIdを指定してユーザー一覧を取得
- 取得する情報は、ユーザーのid、name

- 変数（$companyId）を使う形式でクエリを書くこと！

### ヒント：
変数付きのリクエストの練習にもぴったりな問題！

## #5: Mutationでデータを作成しよう

### お題：
以下のスキーマを前提に、新しいユーザーを作成するMutationを書いてください。

```graphql
type Company {
  id: ID!
  name: String!
}

type User {
  id: ID!
  name: String!
  email: String!
  company: Company!
}

type Mutation {
  createUser(name: String!, email: String!, companyId: ID!): User!
}
```
### 要件：
- createUserミューテーションを使って、新しいユーザーを作成
- 作成後に、返ってきたユーザーのid、name、email, companyを取得
- 変数（$name、$email、$companyId）を使った書き方にする

### ヒント：
Mutationはmutationキーワードから始まるよ！Queryとは違うので注意！