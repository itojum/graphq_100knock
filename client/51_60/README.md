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
