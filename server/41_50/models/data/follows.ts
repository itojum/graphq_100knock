import { FollowType } from "../types.ts";

export const follows: FollowType[] = [
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