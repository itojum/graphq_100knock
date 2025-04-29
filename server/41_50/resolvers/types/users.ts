import { favorites, products, reviews } from "../../models/data.ts";
import { ReviewType, UserType } from '../../models/types.ts';

export const User = {
  /**
   * ユーザーが書いたレビューを取得する
   * @param {User} user ユーザー
   * @returns {ReviewType[]} レビュー
   * */
  reviews: (user: UserType) => {
    return reviews.filter(review => review.userId === user.id);
  },

  /**
   * お気に入りの商品を取得する
   * @param {User} user ユーザー
   * @returns {ProductType[]} 商品
   * */
  favorites: (user: UserType) => {
    const userFavorites = favorites.filter(favorite => favorite.userId === user.id);
    if (userFavorites.length === 0) return [];

    return products.filter(product =>
      userFavorites.some(favorite => favorite.productId === product.id)
    );
  },

  /**
   * お気に入りの商品数を取得する
   * @param {User} user ユーザー
   * @returns {number} 商品数
   * */
  favoriteProductCount: (user: UserType) => {
    return favorites.filter(favorite => favorite.userId === user.id).length;
  }
}