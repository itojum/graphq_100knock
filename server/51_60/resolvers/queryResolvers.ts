import { GraphQLResolveInfo } from "graphql";
import { categories, users } from "../models/data.ts";
import { argType } from "../models/types.ts";
import { products } from "../models/data/products.ts";
import { posts } from "../models/data/posts.ts";
import { comments } from "../models/data/comments.ts";

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
    return users.find(user => user.userId === arg.userId);
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
  },

  /**
   * 投稿とコメントを取得する
   * @param _parent 親の引数
   * @param _args 引数
   * @param _context コンテキスト
   * @param info GraphQLの情報
   * @returns 投稿とコメントの配列
   * */
  nodes: (_parent: any, _args: any, _context: any, info: GraphQLResolveInfo) => {
    // クエリのフラグメントを解析
    const fragments = info.fieldNodes[0].selectionSet?.selections
      .filter((selection) => selection.kind === 'InlineFragment')
      .map((fragment: any) => fragment.typeCondition.name.value);

      const nodes = [...posts, ...comments];

      if (fragments) {
        return nodes.filter(node => {
          if (fragments.includes('Post')) return true;
          if (fragments.includes('Comment')) return true;
          return false;
        })
      }

      return nodes;
  },

  /**
   * 商品を取得する
   * @param _parent 親の引数
   * @param _args 引数
   * @param _context コンテキスト
   * @param info GraphQLの情報
   * @returns 商品
   * */
  products: (_parent: any, _args: any, _context: any, info: GraphQLResolveInfo) => {
    const fragments = info.fieldNodes[0].selectionSet?.selections
      .filter((selection) => selection.kind === 'InlineFragment')
      .map((fragment: any) => fragment.typeCondition.name.value);

    if (fragments) {
      const filteredProducts = products.filter(product => {
        const category = categories.find((c) => c.categoryId === product.categoryId);

        if (fragments.includes('Book') && category?.type === "BOOK") return true;
        if (fragments.includes('Clothing') && category?.type === "CLOTHING") return true;
        if (fragments.includes('Electronic') && category?.type === "ELECTRONIC") return true;
      });
      
      return filteredProducts;
    }

    return products;
  },

  /**
   * 商品をIDで取得する
   * @param _parent 親の引数
   * @param arg.id 商品ID
   * @returns 商品
   * */
  product: (_parent: any, arg: argType) => {
    return products.find(product => product.productId === arg.productId);
  },
};