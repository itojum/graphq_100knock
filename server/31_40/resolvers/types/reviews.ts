import { products } from "../../models/data.ts";
import { Review as ReviewType } from '../../models/types.ts';

export const Review = {
  /**
   * 商品を取得する
   * @param review レビュー
   * @returns 商品
   */
  product: (review: ReviewType) => {
    return products.find(product => product.id === review.productId);
  }
}