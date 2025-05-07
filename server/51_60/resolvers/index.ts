import { Query } from "./queryResolvers.ts";
import { Admin } from "./types/Admin.ts";
import { Comment } from "./types/Comment.ts";
import { BaseUser } from "./types/BaseUser.ts";
import { SearchResult } from "./types/SearchResult.ts";
import { Post } from "./types/Post.ts";
import { Node } from "./types/Node.ts";


export const resolvers = {
  Query,
  Admin,
  BaseUser,
  Node,
  Comment,
  Post,
  SearchResult,
};
