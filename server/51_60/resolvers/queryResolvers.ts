import { GraphQLResolveInfo } from "graphql";
import { users } from "../models/data.ts";
import { argType } from "../models/types.ts";

export const Query = {
  /**
   * 全てのユーザーを取得する
   * @returns 全てのユーザー
   */
  users: (_parent: any, _args: any, _context: any, info: GraphQLResolveInfo) => {
    // クエリのフラグメントを解析
    const fragments = info.fieldNodes[0].selectionSet?.selections
      .filter((selection) => selection.kind === 'InlineFragment')
      .map((fragment: any) => fragment.typeCondition.name.value);

    // フラグメントに基づいてフィルタリング
    if (fragments) {
      return users.filter(user => {
        if (fragments.includes('Admin') && user.role === 'ADMIN') return true;
        if (fragments.includes('RegularUser') && user.role !== 'ADMIN') return true;
        return false;
      });
    }

    return users;
  },

  /**
   * ユーザーをIDで取得する
   * @param _parent 親の引数
   * @param arg.id ユーザーID
   * @returns ユーザー
  */
  user: (_parent: any, arg: argType) => {
    return users.find(user => user.id === arg.id);
  },
};