import { users } from "../../models/data.ts";
import { AdminType } from '../../models/types.ts';

export const Admin = {
  /**
   * ユーザーの部下を取得する
   * @param user ユーザー
   * @returns ユーザーの部下
   * */
  subordinateUsers: (user: AdminType) => {
    const subordinateUserIds = user.subordinateUserIds;
    return users.filter((subordinateUser) =>
      subordinateUserIds.includes(subordinateUser.id)
    );
  },
}