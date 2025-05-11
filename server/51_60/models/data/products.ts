import { ProductType, BookType, ClothingType, ElectronicType } from "../types.ts";

export const products: (ProductType | BookType | ClothingType | ElectronicType)[] = [
  {
    productId: "a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d",
    name: "GraphQL入門",
    description: "GraphQLの基礎から応用まで学べる本",
    price: 2800,
    categoryId: "05010770-f32f-8e5d-5fcc-d85831f128ec",
    author: "山田太郎",
    isbn: "978-4-1234-5678-9",
    pageCount: 320,
    publisher: "技術評論社"
  },
  {
    productId: "b2c3d4e5-f6a7-5b6c-9d8e-0f1a2b3c4d5e",
    name: "TypeScript完全ガイド",
    description: "TypeScriptの全てが分かる本",
    price: 3500,
    categoryId: "05010770-f32f-8e5d-5fcc-d85831f128ec",
    author: "鈴木一郎",
    isbn: "978-4-2345-6789-0",
    pageCount: 450,
    publisher: "翔泳社"
  },
  {
    productId: "c3d4e5f6-a7b8-6c7d-0e9f-1a2b3c4d5e6f",
    name: "メンズコットンTシャツ",
    description: "着心地の良い100%コットンTシャツ",
    price: 2500,
    categoryId: "9cb32472-201a-9d4e-64a8-0947537814ee",
    size: "M",
    color: "ホワイト",
    material: "コットン",
    gender: "メンズ"
  },
  {
    productId: "d4e5f6a7-b8c9-7d8e-1f0a-2b3c4d5e6f7a",
    name: "レディースデニムジャケット",
    description: "クラシックなデザインのデニムジャケット",
    price: 8900,
    categoryId: "9cb32472-201a-9d4e-64a8-0947537814ee",
    size: "S",
    color: "ブルー",
    material: "デニム",
    gender: "レディース"
  },
  {
    productId: "e5f6a7b8-c9d0-8e9f-2a1b-3c4d5e6f7a8b",
    name: "MacBook Pro",
    description: "最新のM2チップ搭載ノートPC",
    price: 198000,
    categoryId: "98c9bca9-2538-662f-e7bb-fda2d62dcc8d",
    brand: "Apple",
    model: "M2 Pro 14インチ",
    warranty: 12,
    specifications: ["M2 Pro", "16GB RAM", "512GB SSD"]
  },
  {
    productId: "f6a7b8c9-d0e1-9f0a-3b2c-4d5e6f7a8b9c",
    name: "ワイヤレスイヤホン",
    description: "ノイズキャンセリング機能付き",
    price: 25000,
    categoryId: "98c9bca9-2538-662f-e7bb-fda2d62dcc8d",
    brand: "Sony",
    model: "WH-1000XM5",
    warranty: 24,
    specifications: ["ノイズキャンセリング", "30時間バッテリー", "Bluetooth 5.2"]
  },
  {
    productId: "a7b8c9d0-e1f2-0a1b-4c3d-5e6f7a8b9c0d",
    name: "React.js実践入門",
    description: "React.jsを使ったアプリケーション開発の教科書",
    price: 3200,
    categoryId: "05010770-f32f-8e5d-5fcc-d85831f128ec",
    author: "佐藤次郎",
    isbn: "978-4-3456-7890-1",
    pageCount: 380,
    publisher: "オライリー・ジャパン"
  },
  {
    productId: "b8c9d0e1-f2a3-1b2c-5d4e-6f7a8b9c0d1e",
    name: "メンズウールコート",
    description: "冬の防寒に最適なウールコート",
    price: 45000,
    categoryId: "9cb32472-201a-9d4e-64a8-0947537814ee",
    size: "L",
    color: "ネイビー",
    material: "ウール",
    gender: "メンズ"
  },
  {
    productId: "c9d0e1f2-a3b4-2c3d-6e5f-7a8b9c0d1e2f",
    name: "スマートウォッチ",
    description: "健康管理と通知機能付き",
    price: 35000,
    categoryId: "98c9bca9-2538-662f-e7bb-fda2d62dcc8d",
    brand: "Fitbit",
    model: "Sense 2",
    warranty: 12,
    specifications: ["心拍数モニター", "睡眠トラッキング", "GPS"]
  },
  {
    productId: "d0e1f2a3-b4c5-3d4e-7f6a-8b9c0d1e2f3a",
    name: "Node.jsプログラミング",
    description: "サーバーサイドJavaScriptの実践書",
    price: 2900,
    categoryId: "05010770-f32f-8e5d-5fcc-d85831f128ec",
    author: "田中三郎",
    isbn: "978-4-4567-8901-2",
    pageCount: 420,
    publisher: "技術評論社"
  },
  {
    productId: "e1f2a3b4-c5d6-4e5f-8a7b-9c0d1e2f3a4b",
    name: "レディースカジュアルパンツ",
    description: "通勤に最適なストレッチ素材",
    price: 5800,
    categoryId: "9cb32472-201a-9d4e-64a8-0947537814ee",
    size: "M",
    color: "ブラック",
    material: "ポリエステル",
    gender: "レディース"
  },
  {
    productId: "f2a3b4c5-d6e7-5f6a-9b8c-0d1e2f3a4b5c",
    name: "デジタルカメラ",
    description: "高画質な写真撮影が可能",
    price: 85000,
    categoryId: "98c9bca9-2538-662f-e7bb-fda2d62dcc8d",
    brand: "Canon",
    model: "EOS R6",
    warranty: 24,
    specifications: ["フルフレーム", "4K動画", "手ブレ補正"]
  },
  {
    productId: "a3b4c5d6-e7f8-6a7b-0c9d-1e2f3a4b5c6d",
    name: "Docker入門",
    description: "コンテナ技術の基礎から応用まで",
    price: 3100,
    categoryId: "05010770-f32f-8e5d-5fcc-d85831f128ec",
    author: "伊藤四郎",
    isbn: "978-4-5678-9012-3",
    pageCount: 350,
    publisher: "翔泳社"
  },
  {
    productId: "b4c5d6e7-f8a9-7b8c-1d0e-2f3a4b5c6d7e",
    name: "メンズスニーカー",
    description: "軽量で快適な日常使いスニーカー",
    price: 12000,
    categoryId: "9cb32472-201a-9d4e-64a8-0947537814ee",
    size: "27cm",
    color: "グレー",
    material: "メッシュ",
    gender: "メンズ"
  },
  {
    productId: "c5d6e7f8-a9b0-8c9d-2e1f-3a4b5c6d7e8f",
    name: "ワイヤレス充電器",
    description: "高速充電対応のQi充電器",
    price: 4500,
    categoryId: "98c9bca9-2538-662f-e7bb-fda2d62dcc8d",
    brand: "Anker",
    model: "PowerWave",
    warranty: 18,
    specifications: ["15W出力", "複数デバイス対応", "過充電保護"]
  }
];
