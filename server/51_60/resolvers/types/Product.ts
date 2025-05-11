import { categories } from "../../models/data.ts";
import { ProductType, BookType, ClothingType, ElectronicType } from "../../models/types.ts";

export const Product = {
  __resolveType(product: ProductType) {
    const category = categories.find((c) => c.categoryId === product.categoryId);
    if (category?.type === "BOOK") {
      return "Book";
    }
    if (category?.type === "CLOTHING") {
      return "Clothing";
    }
    if (category?.type === "ELECTRONIC") {
      return "Electronic";
    }
    return "Product";
  }
}

const category = (product: ProductType) => {
  return categories.find((c) => c.categoryId === product.categoryId);
}

export const Book = {

  category: (book: BookType) => {
    return category(book);
  }
}

export const Clothing = {

  category: (clothing: ClothingType) => {
    return category(clothing);
  }
}

export const Electronic = {

  category: (electronic: ElectronicType) => {
    return category(electronic);
  }
}