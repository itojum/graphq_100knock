import { PostType } from "../types.ts";

export const posts: PostType[] = [
    {
        nodeId: "123e4567-e89b-12d3-a456-426614174100",
        createdAt: new Date("2025-05-01T09:00:00Z"),
        authorId: "123e4567-e89b-12d3-a456-426614174003",
        title: "GraphQL入門",
        content: "GraphQLの基本について学びます。",
    },
    {
        nodeId: "123e4567-e89b-12d3-a456-426614174101",
        createdAt: new Date("2025-05-02T10:30:00Z"),
        authorId: "123e4567-e89b-12d3-a456-426614174004",
        title: "DenoとTypeScript",
        content: "DenoとTypeScriptを使った開発環境を構築しました。",
    },
    {
        nodeId: "123e4567-e89b-12d3-a456-426614174102",
        createdAt: new Date("2025-05-03T14:15:00Z"),
        authorId: "123e4567-e89b-12d3-a456-426614174005",
        title: "クエリの最適化",
        content: "GraphQLクエリのパフォーマンスを改善する方法について。",
    },
    {
        nodeId: "123e4567-e89b-12d3-a456-426614174103",
        createdAt: new Date("2025-05-04T16:45:00Z"),
        authorId: "123e4567-e89b-12d3-a456-426614174006",
        title: "スキーマデザインのベストプラクティス",
        content: "メンテナブルなスキーマ設計について。",
    },
    {
        nodeId: "123e4567-e89b-12d3-a456-426614174104",
        createdAt: new Date("2025-05-05T08:20:00Z"),
        authorId: "123e4567-e89b-12d3-a456-426614174007",
        title: "エラー処理",
        content: "GraphQLサーバーでのエラー処理方法を解説します。",
    },
]