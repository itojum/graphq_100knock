import { categories, favorites, products, reviews, users } from "../models/data.ts";
import { argType } from "../models/types.ts";
import { filterProducts, filterReviews } from "../utils/filters.ts";

export const Query = {
  /**
   * カテゴリーをIDで取得する
   * @param _parent 親の引数
   * @param arg.id カテゴリーID
   * @returns カテゴリー
  */
  category: (_parent: any, arg: argType) => {
    return categories.find(category => category.id === arg.id);
  },
  /**
   * すべてのカテゴリーを取得する
   * @returns すべてのカテゴリー
   */
  categories: () => categories,
  /**
   * 商品をIDで取得する
   * @param _parent 親の引数
   * @param arg.id 商品ID
   * @returns 商品
  */
  product: (_parent: any, arg: argType) => { 
    return products.find(product => product.id === arg.id);
  },
  /**
   * すべての商品を取得する
   * @param _parent 親の引数
   * @param arg.filter フィルター条件
   * @returns すべての商品
  */
  products: (_parent: any, arg: argType) => {
    const { filter } = arg;

    return filterProducts(products, filter);
  },
  /**
   * 全てのレビューを取得する
   * @param _parent 親の引数
   * @param arg.filter フィルター条件
   * @returns 全てのレビュー
   * */
  reviews: (_parent: any, arg: argType) => {
    const { filter } = arg;
    return filterReviews(reviews, filter);
  },

  /**
   * 全てのユーザーを取得する
   * @returns 全てのユーザー
   */
  users: () => users,

  /**
   * ユーザーをIDで取得する
   * @param _parent 親の引数
   * @param arg.id ユーザーID
   * @returns ユーザー
  */
  user: (_parent: any, arg: argType) => {
    return users.find(user => user.id === arg.id);
  },

  /**
   * ユーザーを名前と自己紹介、場所で検索する
   * @param _parent 親の引数
   * @param arg.query 検索クエリ
   * @returns 検索結果
   * */
  searchUsers: (_parent: any, arg: argType) => {
    const { query } = arg;
    if(!query) return users;

    const lowerCaseQuery = query.toLowerCase();

    return users.filter(user => 
      user.name.toLocaleLowerCase().includes(lowerCaseQuery) 
      || user.bio.toLocaleLowerCase().includes(lowerCaseQuery)
      || user.location.toLocaleLowerCase().includes(lowerCaseQuery)
    );
  }
};