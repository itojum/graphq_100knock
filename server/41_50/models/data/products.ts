import { ProductType } from "../types.ts";

export const products: ProductType[] = [
  {
    id: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d",
    name: "スマートフォン XS",
    description: "最新の5G対応スマートフォン。高性能カメラと長時間バッテリー搭載。",
    price: 89800,
    categoryId: "e8f3c211-19c2-49c9-84b8-87ae8c455145"  // 電子機器
  },
  {
    id: "8a8c71c3-5746-494d-9ad9-59f5ec090e4a",
    name: "タブレット Pro",
    description: "11インチディスプレイ搭載の高性能タブレット。クリエイティブワークに最適。",
    price: 75000,
    categoryId: "e8f3c211-19c2-49c9-84b8-87ae8c455145"  // 電子機器
  },
  {
    id: "f29c2e0c-5e7b-48f0-9c21-d4933c340d61",
    name: "ワイヤレスイヤホン",
    description: "ノイズキャンセリング機能付きの完全ワイヤレスイヤホン。防水仕様。",
    price: 22000,
    categoryId: "e8f3c211-19c2-49c9-84b8-87ae8c455145"  // 電子機器
  },
  {
    id: "19c5720f-7a13-4107-a22e-4986d8e8b5c5",
    name: "スマートウォッチ",
    description: "健康管理機能と通知機能を搭載したスマートウォッチ。バッテリー持ち1週間。",
    price: 32000,
    categoryId: "e8f3c211-19c2-49c9-84b8-87ae8c455145"  // 電子機器
  },
  {
    id: "c6b6f538-da0b-4a35-9c98-234d9cde2c19",
    name: "ソファ 3人掛け",
    description: "北欧デザインの3人掛けソファ。ファブリック素材で手入れが簡単。",
    price: 85000,
    categoryId: "a7d7b945-bd12-48a1-a47d-1b1fc0dddc48"  // 家具
  },
  {
    id: "e4b8f639-29ba-4324-ac7d-12e9f5f7d245",
    name: "ダイニングテーブル",
    description: "オーク材を使用したシンプルなダイニングテーブル。4人用。",
    price: 65000,
    categoryId: "a7d7b945-bd12-48a1-a47d-1b1fc0dddc48"  // 家具
  },
  {
    id: "ed21037c-64a5-4a0a-b472-b93539e7a6ab",
    name: "デスクチェア",
    description: "長時間座っても疲れにくい人間工学設計のオフィスチェア。",
    price: 45000,
    categoryId: "a7d7b945-bd12-48a1-a47d-1b1fc0dddc48"  // 家具
  },
  {
    id: "0d0b2f71-8b9d-40e1-a73f-5b9b4e892613",
    name: "ベッドフレーム クイーン",
    description: "クイーンサイズのシンプルなベッドフレーム。収納スペース付き。",
    price: 78000,
    categoryId: "a7d7b945-bd12-48a1-a47d-1b1fc0dddc48"  // 家具
  },
  {
    id: "9f72345c-d04e-4b3b-a897-d695326c6c06",
    name: "メンズジャケット",
    description: "オールシーズン着用できる軽量ジャケット。撥水加工済み。",
    price: 12800,
    categoryId: "c2e90710-d70c-49bc-9e9d-5d4178a61513"  // 衣類
  },
  {
    id: "7a3a7f94-0c51-47f3-b461-68c81ebcf210",
    name: "レディースワンピース",
    description: "シンプルなデザインのワンピース。オフィスからカジュアルまで対応。",
    price: 8900,
    categoryId: "c2e90710-d70c-49bc-9e9d-5d4178a61513"  // 衣類
  },
  {
    id: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17",
    name: "スニーカー ユニセックス",
    description: "履き心地の良いカジュアルスニーカー。様々なコーディネートに合わせやすい。",
    price: 7500,
    categoryId: "c2e90710-d70c-49bc-9e9d-5d4178a61513"  // 衣類
  },
  {
    id: "3a14e25d-a1a2-4c81-9254-307721182d94",
    name: "バックパック",
    description: "13インチノートPC収納可能な多機能バックパック。防水素材使用。",
    price: 8200,
    categoryId: "c2e90710-d70c-49bc-9e9d-5d4178a61513"  // 衣類
  },
  {
    id: "4f6e342a-6c8d-4c1f-b48e-3c7809f5e491",
    name: "オーガニックコーヒー豆",
    description: "エチオピア産の有機栽培コーヒー豆。中煎り。250g入り。",
    price: 1800,
    categoryId: "f7240b96-4392-4838-9573-95ab0d2e8fe2"  // 食品
  },
  {
    id: "ab4f67e9-d212-48f5-bc1e-1c0a17289ef2",
    name: "プレミアムオリーブオイル",
    description: "イタリア産エキストラバージンオリーブオイル。500ml。",
    price: 2500,
    categoryId: "f7240b96-4392-4838-9573-95ab0d2e8fe2"  // 食品
  },
  {
    id: "c893e5d6-a5ce-4a1f-8c3d-5b695c7a41b3",
    name: "オーガニックハチミツ",
    description: "無添加の天然ハチミツ。アカシア花蜜由来。300g。",
    price: 1200,
    categoryId: "f7240b96-4392-4838-9573-95ab0d2e8fe2"  // 食品
  },
  {
    id: "f2a5f951-89d4-4a9b-8c3e-6a7fc9e5d6b8",
    name: "ドライフルーツアソート",
    description: "砂糖不使用のミックスドライフルーツ。500g入り。",
    price: 1900,
    categoryId: "f7240b96-4392-4838-9573-95ab0d2e8fe2"  // 食品
  },
  {
    id: "e78f3c21-b9a8-4d1e-9c5f-8d7a6b5c4d3e",
    name: "プログラミング入門書",
    description: "初心者向けのプログラミング解説書。実践的な例題多数。",
    price: 2800,
    categoryId: "b0e5a612-cf2c-44d9-a15a-e9e4c88f5bd7"  // 書籍
  },
  {
    id: "d1a2b3c4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    name: "ビジネス戦略の基本",
    description: "現代のビジネス環境に適応するための戦略立案ガイド。",
    price: 3200,
    categoryId: "b0e5a612-cf2c-44d9-a15a-e9e4c88f5bd7"  // 書籍
  },
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    name: "SF小説コレクション",
    description: "受賞歴のある短編SF小説をまとめた一冊。限定版。",
    price: 3800,
    categoryId: "b0e5a612-cf2c-44d9-a15a-e9e4c88f5bd7"  // 書籍
  },
  {
    id: "f1e2d3c4-b5a6-7987-6543-210fedcba987",
    name: "料理レシピ本",
    description: "簡単に作れる世界各国の家庭料理レシピ集。初心者向け。",
    price: 2400,
    categoryId: "b0e5a612-cf2c-44d9-a15a-e9e4c88f5bd7"  // 書籍
  }
]