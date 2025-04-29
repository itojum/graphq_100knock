import { products } from "../../models/data.ts";
import { argType, CategoryType } from '../../models/types.ts';
import { filterProducts } from "../../utils/filters.ts";

export const Category = {
  /**
   * @description カテゴリに属する商品を取得する
   * @param {Category} category カテゴリ
   * @param {argType} arg.filter フィルター条件
   * @returns {Product[]} 商品
   */
  products : (category: CategoryType, arg: argType) => {
    const { filter } = arg;
    const categoryProducts = products.filter(product => product.categoryId === category.id);
    
    return filterProducts(categoryProducts, filter);
  }
}