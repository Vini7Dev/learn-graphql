import { ApolloServer, gql } from 'apollo-server';

const SERVER_PORT = 4003;

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String!
      age: Int
      hight: Float
      married: Boolean
      pointsArray: [Int!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 'g4fd34354',
      name: () => 'John Doe',
      age: () => 20,
      hight: () => 1.71,
      married: () => false,
      pointsArray: () => [10, 8, 9],
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
