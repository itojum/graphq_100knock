import { getUserById, getUsersByCompanyId, users } from "./data/users.ts";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    company: Company
  }
  
  type Company {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
    users: [User!]
    usersByCompany(companyId: ID!): [User!]!
  }
`;

type argType = {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

const resolvers = {
  Query: {
    // deno-lint-ignore no-explicit-any
    user: (_parent: any, arg: argType) => {
      return getUserById(arg.id)
    },
    users: () => {
      return users
    },
    // deno-lint-ignore no-explicit-any
    usersByCompany: (_parent: any, arg: argType) => {
      return getUsersByCompanyId(arg.companyId)
    }
  },
};

export { typeDefs, resolvers };