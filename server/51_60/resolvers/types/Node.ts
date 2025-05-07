import { NodeType } from "../../models/types.ts";

export const Node = {
  __resolveType(node: NodeType) {
    if ("title" in node && "content" in node) {
      return "Post";
    }
    if ("text" in node && "postId" in node) {
      return "Comment";
    }
    return null;
  }
}