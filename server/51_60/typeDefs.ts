export const typeDefs = `#graphql
  interface BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    followerCount: Int!
    followers: [BaseUser!]
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
  }

  type RegularUser implements BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    followerCount: Int!
    followers: [BaseUser!]
  }

  enum UserRole {
    ADMIN
    USER
  }

  type Product {
    productId: ID!
    name: String!
    description: String
    price: Float!
  }

  union SearchResult = Product | Admin | RegularUser

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
    search(query: String!): [SearchResult!]!
    nodes: [Node!]!
  }
`;
