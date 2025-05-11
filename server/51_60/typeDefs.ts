export const typeDefs = `#graphql
  interface BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    followerCount: Int!
    followers: [BaseUser!]
    posts: [Post!]!
  }

  type Admin implements BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    adminLevel: Int!
    subordinateUsers: [BaseUser!]!
    followerCount: Int!
    followers: [BaseUser!]
    posts: [Post!]!
  }

  type RegularUser implements BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    followerCount: Int!
    followers: [BaseUser!]
    posts: [Post!]!
  }

  enum UserRole {
    ADMIN
    USER
  }

  interface Product {
    productId: ID!
    name: String!
    price: Float!
    description: String
    category: Category!
  }

  type Book implements Product {
    productId: ID!
    name: String!
    price: Float!
    description: String
    category: Category!
    author: String!
    isbn: String!
    pageCount: Int!
    publisher: String!
  }

  type Clothing implements Product {
    productId: ID!
    name: String!
    price: Float!
    description: String
    category: Category!
    size: String!
    color: String!
    material: String!
    gender: String!
  }

  type Electronic implements Product {
    productId: ID!
    name: String!
    price: Float!
    description: String
    category: Category!
    brand: String!
    model: String!
    warranty: Int!
    specifications: [String!]!
  }

  type Category {
    categoryId: ID!
    name: String!
    type: CategoryType!
  }

  enum CategoryType {
    BOOK
    CLOTHING
    ELECTRONIC
  }

  union SearchResult = Book | Clothing | Electronic | Admin | RegularUser

  interface Node {
    nodeId: ID!
    createdAt: String!
    author: BaseUser!
  }

  type Post implements Node {
    nodeId: ID!
    createdAt: String!
    title: String!
    content: String
    author: BaseUser!
    comments: [Comment!]!
  }

  type Comment implements Node {
    nodeId: ID!
    createdAt: String!
    text: String!
    author: BaseUser!
    post: Post!
  }

  type Query {
    users: [BaseUser!]!
    user(userId: ID!): BaseUser
    products: [Product!]!
    product(productId: ID!): Product
    search(query: String!): [SearchResult!]!
    nodes: [Node!]!
  }
`;
