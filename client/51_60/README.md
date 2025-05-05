# 51-60本目：Fragment、Interface、Unionによる型の再利用と拡張

このセクションでは、GraphQLの型システムの高度な機能を学びます。特に、Fragmentによるクエリの再利用、InterfaceとUnionを使用した型の拡張方法について理解を深めていきます。

## 51本目：Fragmentの基本を学ぶ

### お題

ユーザー情報を取得する際に、同じフィールドの組み合わせを複数回使用するケースを想定し、Fragmentを使って再利用可能な形でクエリを記述してください。

### 前提条件

- User型に以下のフィールドが定義されていること
  - id: ID
  - name: String
  - email: String
  - bio: String
  - registeredAt: String
  - followerCount: Int
  - followingCount: Int

### 要件

1. ユーザーの基本情報（id, name, email）をまとめたFragmentを定義すること
2. 上記Fragmentを利用して以下の2つのクエリを作成すること
   - 単一のユーザー情報を取得するクエリ
   - 複数のユーザー情報を一度に取得するクエリ
3. クエリ内で同じFragmentを複数回再利用すること

### ヒント

- Fragment名は意味のある名前をつけること
- Fragmentは特定の型に対して定義されること
- スプレッド構文（...）を使ってFragmentを展開すること

## 52本目：型による分岐を含むFragmentを学ぶ

### お題

User型をAdmin型とRegularUser型に分けた際に、型に応じて異なるフィールドを取得するクエリを実装してください。

### 前提条件

- 以下の型が定義されていること：
  ```graphql
  interface BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
  }

  type Admin implements BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
    adminLevel: Int!
    subordinateUsers: [BaseUser!]!
  }

  type RegularUser implements BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
  }

  enum UserRole {
    ADMIN
    USER
  }

  type Query {
    users: [BaseUser!]!
    user(id: ID!): BaseUser
  }
  ```

### 要件

1. BaseUserの共通フィールドをまとめたFragmentを定義すること
2. インラインフラグメント（... on
   Type）を使用して、Admin型とRegularUser型それぞれに応じたフィールドを取得すること
3. 単一のクエリでAdmin型とRegularUser型の情報を適切に取得できること

### 期待される結果

- BaseUser型のフィールドは常に取得される
- Admin型の場合は adminLevel と subordinateUsers も取得される
- RegularUser型の場合は共通フィールドのみ取得される

### ヒント

- インラインフラグメントは型による分岐を行う際に使用します
- ... on Type の形式で特定の型に対するフィールドを指定できます
- Fragmentは他のFragmentを含むことができます
