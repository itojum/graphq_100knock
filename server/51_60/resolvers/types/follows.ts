import { users } from "../../models/data.ts";
import { FollowType } from "../../models/types.ts";

export const Follow = {
  /**
   * ユーザーを取得する
   * @param follow お気に入り
   * @returns ユーザー
   */
  user: (follow: FollowType) => {
    return users.find(user => user.id === follow.userId);
  },

  /**
   * 商品を取得する
   * @param follow お気に入り
   * @returns 商品
   */
  following: (follow: FollowType) => {
    return users.filter(user => user.id === follow.followingId);
  }
}