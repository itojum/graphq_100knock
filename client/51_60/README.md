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

## 53本目：Union型を使った検索結果の実装

### お題

商品とユーザーを横断的に検索できる機能を実装してください。検索結果は商品とユーザーの両方を含む可能性があります。

### 前提条件

以下の型が定義されていること：

```graphql
type Product {
  id: UUID!
  name: String!
  description: String
  price: Float!
}

type User {
  id: UUID!
  name: String!
  email: String!
}

union SearchResult = Product | User

type Query {
  search(query: String!): [SearchResult!]!
}
```

### 要件

1. 商品特有のフィールド（description, price）を取得するFragmentを定義すること
2. ユーザー特有のフィールド（email）を取得するFragmentを定義すること
3. Union型に対してインラインフラグメントを使用して、型に応じて適切なフィールドを取得すること

### 期待される結果

- 検索結果には商品とユーザーの両方が含まれる
- 商品の場合は商品特有のフィールドが取得される
- ユーザーの場合はユーザー特有のフィールドが取得される
- 共通フィールドは両方の型で取得される

### ヒント

- Union型に対するクエリでは必ずインラインフラグメントを使用する必要があります
- Union型では共通フィールドに直接アクセスすることはできません
- `__typename` フィールドを使って型を判別できます

## 54本目：Interfaceを使った共通フィールドの扱い

### お題

複数の型に共通するフィールドをInterfaceで定義し、Interface型を返すクエリを実装してください。

### 前提条件

以下の型が定義されていること：

```graphql
interface Node {
  nodeId: ID!
  createdAt: String!
  author: User!
}

type Post implements Node {
  nodeId: ID!
  createdAt: String!
  title: String!
  content: String
  comments: [Comment!]!
}

type Comment implements Node {
  nodeId: ID!
  createdAt: String!
  text: String!
  post: Post!
}

type Query {
  nodes: [Node!]!
}
```

### 要件

1. Nodeの共通フィールド（nodeId, createdAt, author）をまとめたFragmentを定義すること
2. インラインフラグメント（... on Post / ... on
   Comment）を使用して、型に応じたフィールド（Post: title, content / Comment:
   text）を取得すること
3. 単一のクエリでPostとCommentの両方の情報を適切に取得できること

### 期待される結果

- Node共通のフィールドは常に取得される
- Post型の場合はtitle, contentも取得される
- Comment型の場合はtextも取得される

### ヒント

- Interfaceに対してFragmentを定義することができます
- inline fragmentは型による分岐に使用します（... on Type）
- `__typename` フィールドで結果の型を判別できます

## 55本目：ユーザーのフォロワー情報を取得する

### お題

ユーザーのフォロワー情報を取得するクエリを実装してください。特に、フォロワーの基本情報とフォロワー数を含めて取得します。

### 前提条件

- User型に以下のフィールドが定義されていること
  - id: ID
  - name: String
  - email: String
  - followerCount: Int
  - followers: [User!]

### 要件

1. ユーザーの基本情報（id, name, email）をまとめたFragmentを定義すること
2. フォロワー情報を取得するクエリを作成し、フォロワーの基本情報とフォロワー数を含めること
3. クエリ内で同じFragmentを再利用すること

### 期待される結果

- ユーザーの基本情報とフォロワー数が取得される
- フォロワーの基本情報も取得される

### ヒント

- Fragmentは特定の型に対して定義されること
- スプレッド構文（...）を使ってFragmentを展開すること
