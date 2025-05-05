import { BaseUserType } from "../../models/types.ts";

export const BaseUser = {
    __resolveType(user: BaseUserType) {
        if(user.role === "ADMIN") {
            return "Admin";
        }
        return "RegularUser";
    }
}