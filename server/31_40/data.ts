import { Category, Product, Review } from "./types.ts";

const categories: Category[] = [
  {
    id: "1",
    name: "電子機器"
  },
  {
    id: "2",
    name: "家具"
  },
  {
    id: "3",
    name: "衣類"
  },
  {
    id: "4",
    name: "食品"
  },
  {
    id: "5",
    name: "書籍"
  }
]

const products: Product[] = [
  {
    id: "1",
    name: "スマートフォン XS",
    description: "最新の5G対応スマートフォン。高性能カメラと長時間バッテリー搭載。",
    price: 89800,
    categoryId: "1"  // 電子機器
  },
  {
    id: "2",
    name: "タブレット Pro",
    description: "11インチディスプレイ搭載の高性能タブレット。クリエイティブワークに最適。",
    price: 75000,
    categoryId: "1"  // 電子機器
  },
  {
    id: "3",
    name: "ワイヤレスイヤホン",
    description: "ノイズキャンセリング機能付きの完全ワイヤレスイヤホン。防水仕様。",
    price: 22000,
    categoryId: "1"  // 電子機器
  },
  {
    id: "4",
    name: "スマートウォッチ",
    description: "健康管理機能と通知機能を搭載したスマートウォッチ。バッテリー持ち1週間。",
    price: 32000,
    categoryId: "1"  // 電子機器
  },
  {
    id: "5",
    name: "ソファ 3人掛け",
    description: "北欧デザインの3人掛けソファ。ファブリック素材で手入れが簡単。",
    price: 85000,
    categoryId: "2"  // 家具
  },
  {
    id: "6",
    name: "ダイニングテーブル",
    description: "オーク材を使用したシンプルなダイニングテーブル。4人用。",
    price: 65000,
    categoryId: "2"  // 家具
  },
  {
    id: "7",
    name: "デスクチェア",
    description: "長時間座っても疲れにくい人間工学設計のオフィスチェア。",
    price: 45000,
    categoryId: "2"  // 家具
  },
  {
    id: "8",
    name: "ベッドフレーム クイーン",
    description: "クイーンサイズのシンプルなベッドフレーム。収納スペース付き。",
    price: 78000,
    categoryId: "2"  // 家具
  },
  {
    id: "9",
    name: "メンズジャケット",
    description: "オールシーズン着用できる軽量ジャケット。撥水加工済み。",
    price: 12800,
    categoryId: "3"  // 衣類
  },
  {
    id: "10",
    name: "レディースワンピース",
    description: "シンプルなデザインのワンピース。オフィスからカジュアルまで対応。",
    price: 8900,
    categoryId: "3"  // 衣類
  },
  {
    id: "11",
    name: "スニーカー ユニセックス",
    description: "履き心地の良いカジュアルスニーカー。様々なコーディネートに合わせやすい。",
    price: 7500,
    categoryId: "3"  // 衣類
  },
  {
    id: "12",
    name: "バックパック",
    description: "13インチノートPC収納可能な多機能バックパック。防水素材使用。",
    price: 8200,
    categoryId: "3"  // 衣類
  },
  {
    id: "13",
    name: "オーガニックコーヒー豆",
    description: "エチオピア産の有機栽培コーヒー豆。中煎り。250g入り。",
    price: 1800,
    categoryId: "4"  // 食品
  },
  {
    id: "14",
    name: "プレミアムオリーブオイル",
    description: "イタリア産エキストラバージンオリーブオイル。500ml。",
    price: 2500,
    categoryId: "4"  // 食品
  },
  {
    id: "15",
    name: "オーガニックハチミツ",
    description: "無添加の天然ハチミツ。アカシア花蜜由来。300g。",
    price: 1200,
    categoryId: "4"  // 食品
  },
  {
    id: "16",
    name: "ドライフルーツアソート",
    description: "砂糖不使用のミックスドライフルーツ。500g入り。",
    price: 1900,
    categoryId: "4"  // 食品
  },
  {
    id: "17",
    name: "プログラミング入門書",
    description: "初心者向けのプログラミング解説書。実践的な例題多数。",
    price: 2800,
    categoryId: "5"  // 書籍
  },
  {
    id: "18",
    name: "ビジネス戦略の基本",
    description: "現代のビジネス環境に適応するための戦略立案ガイド。",
    price: 3200,
    categoryId: "5"  // 書籍
  },
  {
    id: "19",
    name: "SF小説コレクション",
    description: "受賞歴のある短編SF小説をまとめた一冊。限定版。",
    price: 3800,
    categoryId: "5"  // 書籍
  },
  {
    id: "20",
    name: "料理レシピ本",
    description: "簡単に作れる世界各国の家庭料理レシピ集。初心者向け。",
    price: 2400,
    categoryId: "5"  // 書籍
  }
]

const reviews: Review[] = [
  {
    id: "1",
    content: "期待以上の性能です。カメラ品質が特に優れています。バッテリーの持ちも良く、日常使いに最適です。",
    rating: 5,
    productId: "1"
  },
  {
    id: "2",
    content: "この価格でこの性能は大満足です。操作性も良く、以前の機種からの乗り換えもスムーズでした。",
    rating: 4,
    productId: "1"
  },
  {
    id: "3",
    content: "画面が美しく、動作も軽快です。クリエイティブな作業がはかどります。バッテリー持ちが若干気になります。",
    rating: 4,
    productId: "2"
  },
  {
    id: "4",
    content: "仕事用に購入しましたが、持ち運びも楽で便利です。画面が大きく作業効率が上がりました。",
    rating: 5,
    productId: "2"
  },
  {
    id: "5",
    content: "ノイズキャンセリングが効果的で、電車内でも快適に音楽を楽しめます。フィット感も良いです。",
    rating: 5,
    productId: "3"
  },
  {
    id: "6",
    content: "音質は良いですが、長時間使用すると耳が少し痛くなります。防水機能は便利です。",
    rating: 3,
    productId: "3"
  },
  {
    id: "7",
    content: "健康管理機能が充実していて、毎日の活動量を把握するのに役立っています。通知機能も便利です。",
    rating: 4,
    productId: "4"
  },
  {
    id: "8",
    content: "バッテリーが長持ちして、充電の手間が少なくて済みます。デザインもシンプルで気に入っています。",
    rating: 5,
    productId: "4"
  },
  {
    id: "9",
    content: "座り心地が良く、リビングの雰囲気も良くなりました。組み立ても簡単でした。",
    rating: 5,
    productId: "5"
  },
  {
    id: "10",
    content: "想像よりも少し小さく感じましたが、クッション性は良いです。色合いも部屋に合います。",
    rating: 4,
    productId: "5"
  },
  {
    id: "11",
    content: "丈夫な作りで安定感があります。家族での食事が楽しくなりました。",
    rating: 5,
    productId: "6"
  },
  {
    id: "12",
    content: "デザインは良いのですが、組み立てが少し難しかったです。使用感は満足しています。",
    rating: 3,
    productId: "6"
  },
  {
    id: "13",
    content: "長時間座っても疲れにくいです。腰痛持ちの私には最適な椅子でした。",
    rating: 5,
    productId: "7"
  },
  {
    id: "14",
    content: "調整機能が多く、自分に合った設定ができて快適です。組み立ては少し時間がかかりました。",
    rating: 4,
    productId: "7"
  },
  {
    id: "15",
    content: "収納スペースが便利で、部屋がすっきりしました。マットレスもぴったり合います。",
    rating: 5,
    productId: "8"
  },
  {
    id: "16",
    content: "組み立ては2人で行うことをお勧めします。完成品は丈夫で使いやすいです。",
    rating: 4,
    productId: "8"
  },
  {
    id: "17",
    content: "素材が良く、着心地が最高です。撥水加工も効果的で雨の日も安心です。",
    rating: 5,
    productId: "9"
  },
  {
    id: "18",
    content: "デザインはシンプルで使いやすいですが、サイズが少し大きめです。質感は良いです。",
    rating: 4,
    productId: "9"
  },
  {
    id: "19",
    content: "オフィスでも違和感なく着られるデザインで重宝しています。洗濯後の乾きも早いです。",
    rating: 5,
    productId: "10"
  },
  {
    id: "20",
    content: "生地が少し薄いように感じましたが、デザインは気に入っています。",
    rating: 3,
    productId: "10"
  },
  {
    id: "21",
    content: "履き心地が良く、長時間歩いても疲れません。デザインもシンプルで合わせやすいです。",
    rating: 5,
    productId: "11"
  },
  {
    id: "22",
    content: "サイズ感が少し小さめなので、ワンサイズ上をお勧めします。品質は良いです。",
    rating: 4,
    productId: "11"
  },
  {
    id: "23",
    content: "収納力があり、PCも安全に持ち運べます。防水性能も信頼できます。",
    rating: 5,
    productId: "12"
  },
  {
    id: "24",
    content: "デザインがシンプルで使いやすいですが、肩紐のクッション性がもう少しあると良いと思います。",
    rating: 4,
    productId: "12"
  },
  {
    id: "25",
    content: "香りが豊かで、朝の一杯が格別です。エチオピア特有のフルーティーさが感じられます。",
    rating: 5,
    productId: "13"
  },
  {
    id: "26",
    content: "品質は良いですが、個人的には少し酸味が強く感じました。焙煎度合いの好みの問題かもしれません。",
    rating: 3,
    productId: "13"
  },
  {
    id: "27",
    content: "料理の風味が格段に上がりました。本場イタリアの味を家庭で楽しめます。",
    rating: 5,
    productId: "14"
  },
  {
    id: "28",
    content: "コスパが良く、日常使いに最適です。パンに付けても美味しいです。",
    rating: 4,
    productId: "14"
  },
  {
    id: "29",
    content: "初心者にもわかりやすく解説されています。実践的な例題が多いので、すぐに活用できます。",
    rating: 5,
    productId: "17"
  },
  {
    id: "30",
    content: "豊富なレシピが掲載されていて、毎日の料理が楽しくなりました。写真も美しく参考になります。",
    rating: 5,
    productId: "20"
  }
]

export { categories, products, reviews }