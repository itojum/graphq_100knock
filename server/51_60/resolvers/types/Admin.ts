import { users } from "../../models/data.ts";
import { posts } from "../../models/data/posts.ts";
import { AdminType } from '../../models/types.ts';

export const Admin = {
  /**
   * ユーザーの部下を取得する
   * @param user ユーザー
   * @returns ユーザーの部下
   * */
  subordinateUsers: (user: AdminType) => {
    const subordinateUserIds = user.subordinateUserIds;
    return users.filter((subordinateUser) =>
      subordinateUserIds.includes(subordinateUser.userId)
    );
  },

  /**
   * ユーザーのフォロワーを取得する
   * @param user ユーザー
   * @returns ユーザーのフォロワー
   * */
  followers(user: AdminType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    })
  },

  /**
   * ユーザーのフォロワー数を取得する
   * @param user ユーザー
   * @returns ユーザーのフォロワー数
   * */
  followerCount(user: AdminType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    }).length;
  },

  /**
   * ユーザーの投稿を取得する
   * @param user ユーザー
   * @returns ユーザーの投稿
   * */
  posts(user: AdminType) {
    return posts.filter((post) => {
      return post.authorId === user.userId;
    })
  }
}