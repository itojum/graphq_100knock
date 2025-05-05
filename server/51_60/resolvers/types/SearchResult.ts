export const SearchResult = {
  __resolveType(obj: any) {
    if (obj.productId) {
      return "Product";
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