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

## #6: Mutationでデータを更新しよう

### お題：
以下のスキーマを前提に、既存のユーザーの名前を更新するMutationを書いてください。

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Mutation {
  updateUserName(id: ID!, name: String!): User!
}
```
### 要件：
- updateUserNameミューテーションを使って、特定のユーザーのnameを更新
- 更新後に、返ってきたユーザーのidと新しいnameを取得

- 変数（$id、$name）を使ったクエリにする

### ヒント：
Mutationでは更新内容をリクエスト内で柔軟に指定できるよ！

## #7: Mutationでデータを削除しよう

### お題：
以下のスキーマを前提に、特定のユーザーを削除するMutationを書いてください。

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Mutation {
  deleteUser(id: ID!): Boolean!
}
```
### 要件：
- deleteUserミューテーションを使って、特定のidのユーザーを削除
- 削除できたらtrueが返る想定

- 変数（$id）を使ったクエリにする

### ヒント：
返り値がBoolean!だから、trueかfalseだけ返るよ！

## #8: エイリアスを使ってフィールド名を変えて取得しよう

### お題：
以下のスキーマを前提に、ユーザーの情報を、エイリアス（別名）を使って取得するクエリを書いてください。

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
- userクエリを使って、idを指定して1人のユーザーを取得
- nameフィールドを、レスポンス側で「username」という名前にして受け取る

- 変数（$id）を使う形でクエリを書く

### ヒント：
エイリアスは 新しい名前: 取得するフィールド の形で書くよ！

## #9: エイリアスを使って複数のフィールドを取得しよう
### お題：
エイリアスを使って、異なるユーザー2人を同時に取得するクエリを作成してください。

### 要件：
- user(id: ID!)を2回呼び、それぞれエイリアス（例：user1、user2）をつけること
- 取得するフィールドはidとname

- 変数（$id1と$id2）を使用すること

### ヒント：
同じフィールドを複数回呼び出すとき、エイリアスが役立ちます。

