import { gql } from 'apollo-server';

import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: null,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
