import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';
import { UsersApi } from './graphql/user/datasources';

const SERVER_PORT = 4003;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postsApi: new PostsApi(),
      usersApi: new UsersApi(),
    }
  }
});

server
  .listen(SERVER_PORT)
  .then(({ url }) => {
    console.log(`===> Server listening on url ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
