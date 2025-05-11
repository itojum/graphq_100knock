export type UUID = string;

export type BaseUserType = {
  userId: UUID;
  name: string;
  email: string;
  role: UserRole;
  followingUserIds: UUID[];
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
  categoryId: UUID;
};

export type BookType = ProductType & {
  author: string;
  isbn: string;
  pageCount: number;
  publisher: string;
};

export type ClothingType = ProductType & {
  size: string;
  color: string;
  material: string;
  gender: string;
};

export type ElectronicType = ProductType & {
  brand: string;
  model: string;
  warranty: number;
  specifications: string[];
};

export type CategoryType = {
  categoryId: UUID;
  name: string;
  type: CategoryTypeEnum;
};

export type CategoryTypeEnum = "BOOK" | "CLOTHING" | "ELECTRONIC";



export type SearchResultType = ProductType | BaseUserType;

export type NodeType = {
  nodeId: UUID;
  createdAt: Date;
  authorId: UUID;
}

export type PostType = NodeType & {
  title: string;
  content: string;
}

export type CommentType = NodeType & {
  text: string;
  postId: UUID;
};


export type argType = {
  [key: string]: any;
};
