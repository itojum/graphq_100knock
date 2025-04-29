import { reviews } from "../../models/data.ts";
import { UserType } from '../../models/types.ts';

export const User = {
  /**
   * ユーザーが書いたレビューを取得する
   * @param {User} user ユーザー
   * @returns {Review[]} レビュー
   * */
  reviews: (user: UserType) => {
    return reviews.filter(review => review.userId === user.id);
  }
}