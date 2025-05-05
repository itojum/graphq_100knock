export const typeDefs = `#graphql
  interface BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
  }

  type Admin implements BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
    adminLevel: Int!
    subordinateUsers: [BaseUser!]!
  }

  type RegularUser implements BaseUser {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
  }

  enum UserRole {
    ADMIN
    USER
  }

  type Query {
    users: [BaseUser!]!
    user(id: ID!): BaseUser
  }
`;
