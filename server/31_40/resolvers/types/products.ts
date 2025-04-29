import { categories, reviews } from "../../models/data.ts";
import { argType, Product as ProductType } from '../../models/types.ts';
import { filterReviews } from "../../utils/filters.ts";

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
    const { filter } = arg;
    const productReviews = reviews.filter(review => review.productId === product.id);
    
    return filterReviews(productReviews, filter);
  }
}