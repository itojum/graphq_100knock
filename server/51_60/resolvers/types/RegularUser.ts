import { RegularUserType } from "../../models/types.ts";
import { users } from "../../models/data/users.ts";
import { posts } from "../../models/data/posts.ts";

export const RegularUser = {
  /**
   * ユーザーのフォロワーを取得する
   * @param user ユーザー
   * @returns ユーザーのフォロワー
   * */
  followers(user: RegularUserType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    })
  },

  /**
   * ユーザーのフォロワー数を取得する
   * @param user ユーザー
   * @returns ユーザーのフォロワー数
   * */
  followerCount(user: RegularUserType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    }).length;
  },

  /**
   * ユーザーの投稿を取得する
   * @param user ユーザー
   * @returns ユーザーの投稿
   * */
  posts(user: RegularUserType) {
    return posts.filter((post) => {
      return post.authorId === user.userId;
    })
  }
}