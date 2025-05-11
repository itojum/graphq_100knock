import { categories } from "../../models/data.ts";

export const SearchResult = {
  __resolveType(obj: any) {
    if (obj.productId) {
      const category = categories.find((c) => c.categoryId === obj.categoryId);
      if (category?.type === "BOOK") {
        return "Book";
      }
      if (category?.type === "CLOTHING") {
        return "Clothing";
      }
      if (category?.type === "ELECTRONIC") {
        return "Electronic";
      }
    }
    if (obj.role === "ADMIN") {
      return "Admin";
    }
    if (obj.role === "USER") {
      return "RegularUser";
    }
    return null;
  }
}