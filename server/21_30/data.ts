import { Category, Product } from "./types.ts";

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

export { categories, products }