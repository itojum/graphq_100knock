import { GraphQLError } from "graphql";
import { categories, favorites, follows, products, reviews } from "../models/data.ts";
import { argType, FavoriteType } from "../models/types.ts";
import { validateReview } from "../utils/validates/review.ts";

export const Mutation = {
  /** 
   * @description カテゴリを作成する
   * @param {string} arg.name カテゴリ名
   * @returns {Category} 作成したカテゴリ
  */
  createCategory: (_parent: any, arg: argType) => {
    const { name } = arg;
    const newCategory = {
      id: crypto.randomUUID(),
      name
    };
    categories.push(newCategory);
    return newCategory;
  },

  /** 
   * @description 商品を作成する
   * @param {string} arg.name 商品名
   * @param {string} arg.description 商品説明
   * @param {number} arg.price 商品価格
   * @param {string} arg.categoryId カテゴリID
   * @returns {Product} 作成した商品
  */
  createProduct: (_parent: any, arg: argType) => {
    const { name, description, price, categoryId } = arg;
    const newProduct = {
      id: crypto.randomUUID(),
      name,
      description,
      price,
      categoryId
    };
    products.push(newProduct);
    return newProduct;
  },

  /** 
   * @description 商品を更新する
   * @param {string} arg.id 商品ID
   * @param {string} arg.name 商品名
   * @param {string} arg.description 商品説明
   * @param {number} arg.price 商品価格
   * @returns {Product} 更新した商品
  */
  updateProduct: (_parent: any, arg: argType) => {
    const { id, name, description, price } = arg;
    const product = products.find(product => product.id === id);
    if (product) {
      if (name) product.name = name;
      if (description) product.description = description;
      if (price) product.price = price;
    }
    return product;
  },

  /**
   * @description 商品レビューを作成する
   * @param {string} arg.content レビュー内容
   * @param {number} arg.rating レビュー評価 (1-5)
   * @param {string} arg.productId 商品ID
   * @param {string} arg.userId ユーザーID
   * @returns {Review} 作成したレビュー
   * */
  createReview: (_parent: any, arg: argType) => {
    const { content, rating, productId, userId } = arg;

    const newReview = {
      id: crypto.randomUUID(),
      content,
      rating,
      productId,
      userId
    };

    validateReview(newReview);

    if(reviews.find(review => review.userId === userId && review.productId === productId)) {
      throw new GraphQLError("この商品に対するレビューは既に存在します。");
    }

    reviews.push(newReview);
    return newReview;
  },

  /**
     
    * @description 商品をお気に入りに追加する
    * @param {string} arg.userId ユーザーID
    * @param {string} arg.productId 商品ID
    * @returns {Favorite} 作成したお気に入り
    * */
  addFavorite: (_parent: any, arg: argType) => {
    const { userId, productId } = arg;

    const newFavorite: FavoriteType = {
      userId,
      productId
    };

    if (favorites.find(favorite => favorite.userId === userId && favorite.productId === productId)) {
      throw new GraphQLError("この商品は既にお気に入りに追加されています。");
    }

    favorites.push(newFavorite);
    return newFavorite;
  },

  /**
   * @description 商品のお気に入りを削除する
   * @returns {boolean} 削除成功フラグ
   **/
  removeFavorite: (_parent: any, arg: argType) => {
    const { userId, productId } = arg;

    const favoriteIndex = favorites.findIndex(favorite => favorite.userId === userId && favorite.productId === productId);
    if (favoriteIndex === -1) {
      throw new GraphQLError("この商品はお気に入りに追加されていません。");
    }

    favorites.splice(favoriteIndex, 1);
    return true;
  },

  /**
   * @description ユーザーをフォローする
   * @param {string} arg.userId フォローユーザーID
   * @param {string} arg.followingId フォロイングユーザーID
   * @returns {Follow} 作成したフォロー
   */
  followUser: (_parent: any, arg: argType) => {
    const { userId, followingId } = arg;

    const newFollow = {
      id: crypto.randomUUID(),
      userId,
      followingId
    };

    if(userId === followingId) {
      throw new GraphQLError("自分自身をフォローすることはできません。");
    }

    if (follows.find(follows => follows.userId === userId && follows.followingId === followingId)) {
      throw new GraphQLError("このユーザーは既にフォローされています。");
    }

    follows.push(newFollow);
    return newFollow;
  },

  /**
   * @description フォローを解除する
   * @param {string} arg.userId フォローユーザーID
   * @param {string} arg.followingId フォロイングユーザーID
   * @returns {boolean} 削除成功フラグ
  **/
  unfollowUser: (_parent: any, arg: argType) => {
    const { userId, followingId } = arg;

    const followIndex = follows.findIndex(follow => follow.userId === userId && follow.followingId === followingId);
    if (followIndex === -1) {
      throw new GraphQLError("このユーザーはフォローされていません。");
    }

    follows.splice(followIndex, 1);
    return true;
  }
}