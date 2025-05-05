import { GraphQLResolveInfo } from "graphql";
import { users } from "../models/data.ts";
import { argType } from "../models/types.ts";
import { products } from "../models/data/products.ts";

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
    return users.find(user => user.userId === arg.id);
  },


  /**
   * 検索クエリを実行する
   * @param _parent 親の引数
   * @param arg.query 検索クエリ
   * @returns 検索結果
   */
  search: (_parent: any, arg: argType) => {
    const query = arg.query.toLowerCase();

    const filteredProducts = products.filter(product => {
      return (
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
      );
    });
    const filteredUsers = users.filter(user => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });

    return [
      ...filteredProducts,
      ...filteredUsers,
    ];
  }
};