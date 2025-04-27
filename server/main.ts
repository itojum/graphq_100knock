import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/schema.ts";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ host: "localhost", port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
