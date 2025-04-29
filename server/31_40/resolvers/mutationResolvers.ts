import { categories, products, reviews } from "../models/data.ts";
import { argType } from "../models/types.ts";

export const Mutation = {
  /** 
   * @description カテゴリを作成する
   * @param {string} arg.name カテゴリ名
   * @returns {Category} 作成したカテゴリ
  */
  createCategory: (_parent: any, arg: argType) => {
    const { name } = arg;
    const newCategory = {
      id: (categories.length + 1).toString(),
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
      id: (products.length + 1).toString(),
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
   * @returns {Review} 作成したレビュー
   * */
  createReview: (_parent: any, arg: argType) => {
    const { content, rating, productId } = arg;

    if (rating < 1 || rating > 5) {
      throw new Error("評価は1から5の間で指定してください。");
    }

    const newReview = {
      id: (reviews.length + 1).toString(),
      content,
      rating,
      productId
    };
    reviews.push(newReview);
    return newReview;
  }
}