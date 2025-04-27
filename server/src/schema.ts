import { createUser, getUserById, getUsersByCompanyId, users } from "./data/users.ts";

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

  type Mutation {
    createUser(name: String!, email: String!, companyId: ID!): User!
  }
`;

type argType = {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

const resolvers = {
  Query: {
    user: (_parent: any, arg: argType) => {
      return getUserById(arg.id)
    },
    users: () => {
      return users
    },
    usersByCompany: (_parent: any, arg: argType) => {
      return getUsersByCompanyId(arg.companyId)
    }
  },
  Mutation: {
    createUser: (_parent: any, arg: argType) => {
      console.log(arg);
      const { name, email, companyId } = arg;
      return createUser(name, email, companyId);
    }
  }
};

export { typeDefs, resolvers };