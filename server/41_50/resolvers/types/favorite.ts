import { products, users } from "../../models/data.ts";
import { FavoriteType } from "../../models/types.ts";

export const Favorite = {
  /**
   * ユーザーを取得する
   * @param {Favorite} favorite お気に入り
   * @returns {User} ユーザー
   */
  user: (favorite: FavoriteType) => {
    return users.find(user => user.id === favorite.userId);
  },

  /**
   * 商品を取得する
   * @param {Favorite} favorite お気に入り
   * @returns {Product} 商品
   */
  product: (favorite: FavoriteType) => {
    return products.find(product => product.id === favorite.productId);
  }
};