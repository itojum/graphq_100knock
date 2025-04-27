import { ApolloServer } from "apollo-server";

const knockDirectory = Deno.args[0];
import(`./${knockDirectory}/schema.ts`).then((module) => {
  const typeDefs = module.typeDefs;
  const resolvers = module.resolvers;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen({ host: "localhost", port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
  
})