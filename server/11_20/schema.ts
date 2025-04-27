import { createPost, createUser, getPostById, getUserById, posts, postsByAuthor, users } from "./data.ts";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    authorId: ID!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
    post(id: ID!): Post
    posts: [Post!]!
    postsByAuthor(authorId: ID!): [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
  }
`;

type argType = {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

const resolvers = {
  Query: {
    user: (_parent: any, arg: argType) => {
      return getUserById(arg.id);
    },
    users: () => {
      
      return users;
    },
    post: (_parent: any, arg: argType) => { 

      return getPostById(arg.id);
    },
    posts: () => {
      
      return posts;
    },
    postsByAuthor: (_parent: any, arg: argType) => {
      
      return postsByAuthor(arg.authorId);
    }
  },
  Mutation: {
    
    createUser: (_parent: any, arg: argType) => {
      const { name, email } = arg;
      return createUser(name, email);
    },
    createPost: (_parent: any, arg: argType) => {
      const { title, content, authorId } = arg;
      return createPost(title, content, authorId);
    }
  }
};

export { typeDefs, resolvers };