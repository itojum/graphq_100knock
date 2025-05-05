export type UUID = string;

export type BaseUserType = {
  id: UUID;
  name: string;
  email: string;
  role: UserRole;
};

export type AdminType = BaseUserType & {
  adminLevel: number;
  subordinateUserIds: UUID[];
};
export type RegularUserType = BaseUserType;

type UserRole = "ADMIN" | "USER";

export type argType = {
  [key: string]: any;
};
