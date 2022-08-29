import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';

const SERVER_PORT = 4003;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server
  .listen(SERVER_PORT)
  .then(({ url }) => {
    console.log(`===> Server listening on url ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
