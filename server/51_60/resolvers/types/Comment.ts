import { users } from "../../models/data.ts";
import { posts } from "../../models/data/posts.ts";
import { CommentType } from "../../models/types.ts";

export const Comment = {
  /**
   * コメントの著者を取得する
   * @param comment コメント
   * @returns コメントの著者
   * */
  author(comment: CommentType) {
    return users.find((user) => user.userId === comment.authorId);
  },


  /**
   * コメントの投稿を取得する
   * @param comment コメント
   * @returns コメントの投稿
   * */
  post(comment: CommentType) {
    return posts.find((post) => post.nodeId === comment.postId);
  }
}