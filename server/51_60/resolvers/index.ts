import { Mutation } from "./mutationResolvers.ts";
import { Query } from "./queryResolvers.ts";
import { Admin } from "./types/Admin.ts";
import { BaseUser } from "./types/BaseUser.ts";


export const resolvers = {
  Query,
  Admin,
  BaseUser
};
