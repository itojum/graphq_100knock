import { users } from "../../models/data.ts";
import { BaseUserType } from "../../models/types.ts";

export const BaseUser = {
  __resolveType(user: BaseUserType) {
    if (user.role === "ADMIN") {
      return "Admin";
    }
    return "RegularUser";
  },

  followers(user: BaseUserType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    })
  },

  followerCount(user: BaseUserType) {
    return users.filter((follower) => {
      return follower.followingUserIds.includes(user.userId);
    }).length;
  }
}