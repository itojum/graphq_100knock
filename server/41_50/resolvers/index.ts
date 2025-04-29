import { Mutation } from "./mutationResolvers.ts";
import { Query } from "./queryResolvers.ts";
import { Category } from "./types/categories.ts";
import { Product } from "./types/products.ts";
import { Review } from "./types/reviews.ts";
import { User } from "./types/users.ts";


export const resolvers = {
  Query,
  Mutation,
  Category,
  Product,
  Review,
  User
};
