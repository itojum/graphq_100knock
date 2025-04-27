import { createPost, createUser, getPostById, getUserById, posts, postsByAuthor, updatePost, users } from "./data.ts";
import { Post, User } from "./types.ts";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
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
    updatePost(id: ID!, title: String!, content: String!): Post!
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
    users: () => users,
    post: (_parent: any, arg: argType) => { 

      return getPostById(arg.id);
    },
    posts: () => posts,
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
    },
    updatePost: (_parent: any, arg: argType) => {
      const { id, title, content } = arg;
      console.log(id, title, content);
      return updatePost(id, title, content);
    }
  },
  User: {
    posts: (user: User) => {
      return posts.filter(post => post.authorId === user.id);
    }
  },
  Post: {
    author: (post: Post) => {
      return users.find(user => user.id === post.authorId);
    },
  },
};

export { typeDefs, resolvers };