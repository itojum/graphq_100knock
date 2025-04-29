import { categories, reviews } from "../../models/data.ts";
import { argType, ProductType } from '../../models/types.ts';
import { filterReviews } from "../../utils/filters.ts";
import { sortByRating } from "../../utils/sorts.ts";

export const Product = {
  /** 
   * @description 商品のカテゴリを取得する
   * @param {Product} product 商品
   * @returns {Category} カテゴリ
  */
  category: (product: ProductType) => {
    return categories.find(category => category.id === product.categoryId);
  },
  /**
   * @description 商品のレビューを取得する
   * @param {Product} product 商品
   * @param {argType} arg.filter フィルター条件
   * @returns {Review[]} レビュー
  */
  reviews: (product: ProductType, arg: argType) => {
    const { filter, sortBy } = arg;
    const productReviews = reviews.filter(review => review.productId === product.id);

    const filteredReviews = filterReviews(productReviews, filter);

    if (!sortBy) return filteredReviews;
    
    return sortByRating(filteredReviews, sortBy);
  },

  /**
   * @description 商品のレビュー数を取得する
   * @param {Product} product 商品
   * @returns {number} レビュー数
  */
  reviewCount: (product: ProductType) => {
    return reviews.filter(review => review.productId === product.id).length;
  },

  /**
   * @description レビューの平均スコアを取得する
   * @param {Product} product 商品
   * @returns {number} 平均スコア
   */
  averageRating: (product: ProductType) => {
    const productReviews = reviews.filter(review => review.productId === product.id);
    if (productReviews.length === 0) return null;
    
    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / productReviews.length;
  }
}