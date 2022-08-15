import { ApolloServer, gql } from 'apollo-server';

const SERVER_PORT = 4003;

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      username: String
    }
  `,
  resolvers: {
    Query: {
      user: () => ({
        id: 'g5fd43',
        username: 'JohnDoe',
      }),
      users: () => [{ id: 'g5fd43', username: 'JohnDoe' }],
    },
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
