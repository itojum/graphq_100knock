import { favorites, follows, products, reviews, users } from "../../models/data.ts";
import { UserType } from '../../models/types.ts';

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
  },


  /**
   * @description ユーザーをフォローしているユーザーを取得する
   * @param {User} user ユーザー
   */
  followers: (user: UserType) => {
    const userFollowers = follows.filter(follow => follow.followingId === user.id);
    if (userFollowers.length === 0) return [];

    return users.filter(user =>
      userFollowers.find(follow => follow.userId === user.id)
    );
  },

  /**
   * @description フォローしているユーザーを取得する
   * @param {User} user ユーザー
   */
  following: (user: UserType) => {
    const userFollowing = follows.filter(follow => follow.userId === user.id);
    if (userFollowing.length === 0) return [];

    return users.filter(user =>
      userFollowing.find(follow => follow.followingId === user.id)
    );
  },

  /**
   * @description フォロワー数を取得する
   * @param {User} user ユーザー
   */
  followerCount: (user: UserType) => {
    return follows.filter(follow => follow.followingId === user.id).length;
  },

  /**
   * @description フォローしているユーザー数を取得する
   * @param {User} user ユーザー
   */
  followingCount: (user: UserType) => {
    return follows.filter(follow => follow.userId === user.id).length;
  },
}