export const typeDefs = `#graphql
  interface BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
  }

  type Admin implements BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
    adminLevel: Int!
    subordinateUsers: [BaseUser!]!
  }

  type RegularUser implements BaseUser {
    userId: ID!
    name: String!
    email: String!
    role: UserRole!
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

  type Query {
    users: [BaseUser!]!
    user(userId: ID!): BaseUser
    search(query: String!): [SearchResult!]!
  }
`;
