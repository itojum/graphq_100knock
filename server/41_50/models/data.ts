import { CategoryType, FavoriteType, FollowType, ProductType, ReviewType, UserType } from "./types.ts";

const categories: CategoryType[] = [
  {
    id: "e8f3c211-19c2-49c9-84b8-87ae8c455145",
    name: "電子機器"
  },
  {
    id: "a7d7b945-bd12-48a1-a47d-1b1fc0dddc48",
    name: "家具"
  },
  {
    id: "c2e90710-d70c-49bc-9e9d-5d4178a61513",
    name: "衣類"
  },
  {
    id: "f7240b96-4392-4838-9573-95ab0d2e8fe2",
    name: "食品"
  },
  {
    id: "b0e5a612-cf2c-44d9-a15a-e9e4c88f5bd7",
    name: "書籍"
  }
]

const products: ProductType[] = [
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

const reviews: ReviewType[] = [
  {
    id: "a0b1c2d3-e4f5-a6b7-c8d9-e0f1a2b3c4d5",
    content: "期待以上の性能です。カメラ品質が特に優れています。バッテリーの持ちも良く、日常使いに最適です。",
    rating: 5,
    productId: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2"
  },
  {
    id: "b1c2d3e4-f5a6-b7c8-d9e0-f1a2b3c4d5e6",
    content: "この価格でこの性能は大満足です。操作性も良く、以前の機種からの乗り換えもスムーズでした。",
    rating: 4,
    productId: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3"
  },
  {
    id: "c2d3e4f5-a6b7-c8d9-e0f1-a2b3c4d5e6f7",
    content: "画面が美しく、動作も軽快です。クリエイティブな作業がはかどります。バッテリー持ちが若干気になります。",
    rating: 4,
    productId: "8a8c71c3-5746-494d-9ad9-59f5ec090e4a",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4"
  },
  {
    id: "d3e4f5a6-b7c8-d9e0-f1a2-b3c4d5e6f7a8",
    content: "仕事用に購入しましたが、持ち運びも楽で便利です。画面が大きく作業効率が上がりました。",
    rating: 5,
    productId: "8a8c71c3-5746-494d-9ad9-59f5ec090e4a",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5"
  },
  {
    id: "e4f5a6b7-c8d9-e0f1-a2b3-c4d5e6f7a8b9",
    content: "ノイズキャンセリングが効果的で、電車内でも快適に音楽を楽しめます。フィット感も良いです。",
    rating: 5,
    productId: "f29c2e0c-5e7b-48f0-9c21-d4933c340d61",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6"
  },
  {
    id: "f5a6b7c8-d9e0-f1a2-b3c4-d5e6f7a8b9c0",
    content: "音質は良いですが、長時間使用すると耳が少し痛くなります。防水機能は便利です。",
    rating: 3,
    productId: "f29c2e0c-5e7b-48f0-9c21-d4933c340d61",
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7"
  },
  {
    id: "a6b7c8d9-e0f1-a2b3-c4d5-e6f7a8b9c0d1",
    content: "健康管理機能が充実していて、毎日の活動量を把握するのに役立っています。通知機能も便利です。",
    rating: 4,
    productId: "19c5720f-7a13-4107-a22e-4986d8e8b5c5",
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8"
  },
  {
    id: "b7c8d9e0-f1a2-b3c4-d5e6-f7a8b9c0d1e2",
    content: "バッテリーが長持ちして、充電の手間が少なくて済みます。デザインもシンプルで気に入っています。",
    rating: 5,
    productId: "19c5720f-7a13-4107-a22e-4986d8e8b5c5",
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9"
  },
  {
    id: "c8d9e0f1-a2b3-c4d5-e6f7-a8b9c0d1e2f3",
    content: "座り心地が良く、リビングの雰囲気も良くなりました。組み立ても簡単でした。",
    rating: 5,
    productId: "c6b6f538-da0b-4a35-9c98-234d9cde2c19",
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0"
  },
  {
    id: "d9e0f1a2-b3c4-d5e6-f7a8-b9c0d1e2f3a4",
    content: "想像よりも少し小さく感じましたが、クッション性は良いです。色合いも部屋に合います。",
    rating: 4,
    productId: "c6b6f538-da0b-4a35-9c98-234d9cde2c19",
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1"
  },
  {
    id: "e0f1a2b3-c4d5-e6f7-a8b9-c0d1e2f3a4b5",
    content: "丈夫な作りで安定感があります。家族での食事が楽しくなりました。",
    rating: 5,
    productId: "e4b8f639-29ba-4324-ac7d-12e9f5f7d245",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2"
  },
  {
    id: "f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6",
    content: "デザインは良いのですが、組み立てが少し難しかったです。使用感は満足しています。",
    rating: 3,
    productId: "e4b8f639-29ba-4324-ac7d-12e9f5f7d245",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3"
  },
  {
    id: "a2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7",
    content: "長時間座っても疲れにくいです。腰痛持ちの私には最適な椅子でした。",
    rating: 5,
    productId: "ed21037c-64a5-4a0a-b472-b93539e7a6ab",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4"
  },
  {
    id: "b3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8",
    content: "調整機能が多く、自分に合った設定ができて快適です。組み立ては少し時間がかかりました。",
    rating: 4,
    productId: "ed21037c-64a5-4a0a-b472-b93539e7a6ab",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5"
  },
  {
    id: "c4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9",
    content: "収納スペースが便利で、部屋がすっきりしました。マットレスもぴったり合います。",
    rating: 5,
    productId: "0d0b2f71-8b9d-40e1-a73f-5b9b4e892613",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6"
  },
  {
    id: "d5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0",
    content: "組み立ては2人で行うことをお勧めします。完成品は丈夫で使いやすいです。",
    rating: 4,
    productId: "0d0b2f71-8b9d-40e1-a73f-5b9b4e892613",
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7"
  },
  {
    id: "e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1",
    content: "素材が良く、着心地が最高です。撥水加工も効果的で雨の日も安心です。",
    rating: 5,
    productId: "9f72345c-d04e-4b3b-a897-d695326c6c06",
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8"
  },
  {
    id: "f7a8b9c0-d1e2-f3a4-b5c6-d7e8f9a0b1c2",
    content: "デザインはシンプルで使いやすいですが、サイズが少し大きめです。質感は良いです。",
    rating: 4,
    productId: "9f72345c-d04e-4b3b-a897-d695326c6c06",
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9"
  },
  {
    id: "a8b9c0d1-e2f3-a4b5-c6d7-e8f9a0b1c2d3",
    content: "オフィスでも違和感なく着られるデザインで重宝しています。洗濯後の乾きも早いです。",
    rating: 5,
    productId: "7a3a7f94-0c51-47f3-b461-68c81ebcf210",
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0"
  },
  {
    id: "b9c0d1e2-f3a4-b5c6-d7e8-f9a0b1c2d3e4",
    content: "生地が少し薄いように感じましたが、デザインは気に入っています。",
    rating: 3,
    productId: "7a3a7f94-0c51-47f3-b461-68c81ebcf210",
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1"
  },
  {
    id: "c0d1e2f3-a4b5-c6d7-e8f9-a0b1c2d3e4f5",
    content: "履き心地が良く、長時間歩いても疲れません。デザインもシンプルで合わせやすいです。",
    rating: 5,
    productId: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2"
  },
  {
    id: "d1e2f3a4-b5c6-d7e8-f9a0-b1c2d3e4f5a6",
    content: "サイズ感が少し小さめなので、ワンサイズ上をお勧めします。品質は良いです。",
    rating: 4,
    productId: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3"
  },
  {
    id: "e2f3a4b5-c6d7-e8f9-a0b1-c2d3e4f5a6b7",
    content: "収納力があり、PCも安全に持ち運べます。防水性能も信頼できます。",
    rating: 5,
    productId: "3a14e25d-a1a2-4c81-9254-307721182d94",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4"
  },
  {
    id: "f3a4b5c6-d7e8-f9a0-b1c2-d3e4f5a6b7c8",
    content: "デザインがシンプルで使いやすいですが、肩紐のクッション性がもう少しあると良いと思います。",
    rating: 4,
    productId: "3a14e25d-a1a2-4c81-9254-307721182d94",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5"
  },
  {
    id: "a4b5c6d7-e8f9-a0b1-c2d3-e4f5a6b7c8d9",
    content: "香りが豊かで、朝の一杯が格別です。エチオピア特有のフルーティーさが感じられます。",
    rating: 5,
    productId: "4f6e342a-6c8d-4c1f-b48e-3c7809f5e491",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6"
  },
  {
    id: "b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0",
    content: "品質は良いですが、個人的には少し酸味が強く感じました。焙煎度合いの好みの問題かもしれません。",
    rating: 3,
    productId: "4f6e342a-6c8d-4c1f-b48e-3c7809f5e491",
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7"
  },
  {
    id: "c6d7e8f9-a0b1-c2d3-e4f5-a6b7c8d9e0f1",
    content: "料理の風味が格段に上がりました。本場イタリアの味を家庭で楽しめます。",
    rating: 5,
    productId: "ab4f67e9-d212-48f5-bc1e-1c0a17289ef2",
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8"
  },
  {
    id: "d7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2",
    content: "コスパが良く、日常使いに最適です。パンに付けても美味しいです。",
    rating: 4,
    productId: "ab4f67e9-d212-48f5-bc1e-1c0a17289ef2",
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9"
  },
  {
    id: "e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1a2b3",
    content: "初心者にもわかりやすく解説されています。実践的な例題が多いので、すぐに活用できます。",
    rating: 5,
    productId: "e78f3c21-b9a8-4d1e-9c5f-8d7a6b5c4d3e",
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0"
  },
  {
    id: "f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1a2b3c4",
    content: "豊富なレシピが掲載されていて、毎日の料理が楽しくなりました。写真も美しく参考になります。",
    rating: 5,
    productId: "f1e2d3c4-b5a6-7987-6543-210fedcba987",
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1"
  }
]

const users: UserType[] = [
  {
    id: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    name: "佐藤太郎",
    email: "taro.sato@example.com"
  },
  {
    id: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    name: "鈴木花子",
    email: "hanako.suzuki@example.com"
  },
  {
    id: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    name: "田中一郎",
    email: "ichiro.tanaka@example.com"
  },
  {
    id: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    name: "伊藤美咲",
    email: "misaki.ito@example.com"
  },
  {
    id: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6",
    name: "渡辺健太",
    email: "kenta.watanabe@example.com"
  },
  {
    id: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7",
    name: "山本結衣",
    email: "yui.yamamoto@example.com"
  },
  {
    id: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    name: "中村大輔",
    email: "daisuke.nakamura@example.com"
  },
  {
    id: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    name: "小林さくら",
    email: "sakura.kobayashi@example.com"
  },
  {
    id: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    name: "加藤雄一",
    email: "yuichi.kato@example.com"
  },
  {
    id: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    name: "吉田麻衣",
    email: "mai.yoshida@example.com"
  }
]

const favorites: FavoriteType[] = [
  {
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    productId: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d"
  },
  {
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    productId: "e4b8f639-29ba-4324-ac7d-12e9f5f7d245"
  },
  {
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
    productId: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17"
  },
  {
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    productId: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d"
  },
  {
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    productId: "e4b8f639-29ba-4324-ac7d-12e9f5f7d245"
  },
  {
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3",
    productId: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17"
  },
  {
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    productId: "8a8c71c3-5746-494d-9ad9-59f5ec090e4a"
  },
  {
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    productId: "ed21037c-64a5-4a0a-b472-b93539e7a6ab"
  },
  {
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4",
    productId: "3a14e25d-a1a2-4c81-9254-307721182d94"
  },
  {
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    productId: "8a8c71c3-5746-494d-9ad9-59f5ec090e4a"
  },
  {
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    productId: "ed21037c-64a5-4a0a-b472-b93539e7a6ab"
  },
  {
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5",
    productId: "3a14e25d-a1a2-4c81-9254-307721182d94"
  },
  {
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6",
    productId: "f29c2e0c-5e7b-48f0-9c21-d4933c340d61"
  },
  {
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6",
    productId: "4f6e342a-6c8d-4c1f-b48e-3c7809f5e491"
  },
  {
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7",
    productId: "f29c2e0c-5e7b-48f0-9c21-d4933c340d61"
  },
  {
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7",
    productId: "0d0b2f71-8b9d-40e1-a73f-5b9b4e892613"
  },
  {
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    productId: "19c5720f-7a13-4107-a22e-4986d8e8b5c5"
  },
  {
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    productId: "9f72345c-d04e-4b3b-a897-d695326c6c06"
  },
  {
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8",
    productId: "ab4f67e9-d212-48f5-bc1e-1c0a17289ef2"
  },
  {
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    productId: "19c5720f-7a13-4107-a22e-4986d8e8b5c5"
  },
  {
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    productId: "652e95b3-d5c3-4c9b-a7ce-585e89d92b17"
  },
  {
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9",
    productId: "ab4f67e9-d212-48f5-bc1e-1c0a17289ef2"
  },
  {
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    productId: "c6b6f538-da0b-4a35-9c98-234d9cde2c19"
  },
  {
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    productId: "7a3a7f94-0c51-47f3-b461-68c81ebcf210"
  },
  {
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0",
    productId: "e78f3c21-b9a8-4d1e-9c5f-8d7a6b5c4d3e"
  },
  {
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    productId: "c6b6f538-da0b-4a35-9c98-234d9cde2c19"
  },
  {
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    productId: "7a3a7f94-0c51-47f3-b461-68c81ebcf210"
  },
  {
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1",
    productId: "f1e2d3c4-b5a6-7987-6543-210fedcba987"
  }
]

const follows: FollowType[] = [
  {
    id: "f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2", // 佐藤太郎
    followingId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3" // 鈴木花子
  },
  {
    id: "a2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2", // 佐藤太郎
    followingId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4" // 田中一郎
  },
  {
    id: "b3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8",
    userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2", // 佐藤太郎
    followingId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5" // 伊藤美咲
  },
  {
    id: "c4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3", // 鈴木花子
    followingId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2" // 佐藤太郎
  },
  {
    id: "d5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3", // 鈴木花子
    followingId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5" // 伊藤美咲
  },
  {
    id: "e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1",
    userId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3", // 鈴木花子
    followingId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6" // 渡辺健太
  },
  {
    id: "f7a8b9c0-d1e2-f3a4-b5c6-d7e8f9a0b1c2",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4", // 田中一郎
    followingId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2" // 佐藤太郎
  },
  {
    id: "a8b9c0d1-e2f3-a4b5-c6d7-e8f9a0b1c2d3",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4", // 田中一郎
    followingId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7" // 山本結衣
  },
  {
    id: "b9c0d1e2-f3a4-b5c6-d7e8-f9a0b1c2d3e4",
    userId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4", // 田中一郎
    followingId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8" // 中村大輔
  },
  {
    id: "c0d1e2f3-a4b5-c6d7-e8f9-a0b1c2d3e4f5",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5", // 伊藤美咲
    followingId: "b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3" // 鈴木花子
  },
  {
    id: "d1e2f3a4-b5c6-d7e8-f9a0-b1c2d3e4f5a6",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5", // 伊藤美咲
    followingId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9" // 小林さくら
  },
  {
    id: "e2f3a4b5-c6d7-e8f9-a0b1-c2d3e4f5a6b7",
    userId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5", // 伊藤美咲
    followingId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0" // 加藤雄一
  },
  {
    id: "f3a4b5c6-d7e8-f9a0-b1c2-d3e4f5a6b7c8",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6", // 渡辺健太
    followingId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7" // 山本結衣
  },
  {
    id: "a4b5c6d7-e8f9-a0b1-c2d3-e4f5a6b7c8d9",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6", // 渡辺健太
    followingId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0" // 加藤雄一
  },
  {
    id: "b5c6d7e8-f9a0-b1c2-d3e4-f5a6b7c8d9e0",
    userId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6", // 渡辺健太
    followingId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1" // 吉田麻衣
  },
  {
    id: "c6d7e8f9-a0b1-c2d3-e4f5-a6b7c8d9e0f1",
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7", // 山本結衣
    followingId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6" // 渡辺健太
  },
  {
    id: "d7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2",
    userId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7", // 山本結衣
    followingId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1" // 吉田麻衣
  },
  {
    id: "e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1a2b3",
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8", // 中村大輔
    followingId: "c9d0e1f2-a3b4-c5d6-e7f8-a9b0c1d2e3f4" // 田中一郎
  },
  {
    id: "f9a0b1c2-d3e4-f5a6-b7c8-d9e0f1a2b3c4",
    userId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8", // 中村大輔
    followingId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0" // 加藤雄一
  },
  {
    id: "a0b1c2d3-e4f5-a6b7-c8d9-e0f1a2b3c4d5",
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9", // 小林さくら
    followingId: "d0e1f2a3-b4c5-d6e7-f8a9-b0c1d2e3f4a5" // 伊藤美咲
  },
  {
    id: "b1c2d3e4-f5a6-b7c8-d9e0-f1a2b3c4d5e6",
    userId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9", // 小林さくら
    followingId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1" // 吉田麻衣
  },
  {
    id: "c2d3e4f5-a6b7-c8d9-e0f1-a2b3c4d5e6f7",
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0", // 加藤雄一
    followingId: "a3b4c5d6-e7f8-a9b0-c1d2-e3f4a5b6c7d8" // 中村大輔
  },
  {
    id: "d3e4f5a6-b7c8-d9e0-f1a2-b3c4d5e6f7a8",
    userId: "c5d6e7f8-a9b0-c1d2-e3f4-a5b6c7d8e9f0", // 加藤雄一
    followingId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6" // 渡辺健太
  },
  {
    id: "e4f5a6b7-c8d9-e0f1-a2b3-c4d5e6f7a8b9",
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1", // 吉田麻衣
    followingId: "f2a3b4c5-d6e7-f8a9-b0c1-d2e3f4a5b6c7" // 山本結衣
  },
  {
    id: "f5a6b7c8-d9e0-f1a2-b3c4-d5e6f7a8b9c0",
    userId: "d6e7f8a9-b0c1-d2e3-f4a5-b6c7d8e9f0a1", // 吉田麻衣
    followingId: "b4c5d6e7-f8a9-b0c1-d2e3-f4a5b6c7d8e9" // 小林さくら
  }
]

export { categories, products, reviews, users, favorites, follows }