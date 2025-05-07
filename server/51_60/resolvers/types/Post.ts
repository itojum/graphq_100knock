import { users } from "../../models/data.ts";
import { comments } from "../../models/data/comments.ts";
import { PostType } from "../../models/types.ts";

export const Post = {

  /**
   * 投稿の著者を取得する
   * @param post 投稿
   * @returns 投稿の著者
   * */
  author(post: PostType) {
    return users.find((user) => user.userId === post.authorId);
  },

  /**
   * コメントを取得する
   * @param post 投稿
   * @returns 投稿に関連するコメントの配列
   * */
  comments(post: PostType) {
    return comments.filter((comment) => comment.postId === post.nodeId);
  }
}