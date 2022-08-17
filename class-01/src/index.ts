import { ApolloServer } from 'apollo-server';
import fetch from 'node-fetch';

import { typeDefs, resolvers } from './graphql/schema';

const SERVER_PORT = 4003;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server
  .listen(SERVER_PORT)
  .then(({ url }) => {
    console.log(`===> Server listening on url ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
