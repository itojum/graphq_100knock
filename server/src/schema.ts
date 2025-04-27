import { getUserById, users } from "./data/users.ts";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User!]
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
    }
  },
};

export { typeDefs, resolvers };