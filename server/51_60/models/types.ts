export type UUID = string;

export type BaseUserType = {
  userId: UUID;
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

export type ProductType = {
  productId: UUID;
  name: string;
  description: string;
  price: number;
};

export type SearchResultType = ProductType | BaseUserType;

export type argType = {
  [key: string]: any;
};
