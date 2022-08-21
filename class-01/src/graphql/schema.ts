import { gql } from 'apollo-server';

import { apiFiltersTypeDefs } from './apiFilters/typeDefs'
import { apiFiltersResolvers } from './apiFilters/resolvers';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typeDefs';
import { postResolvers } from './post/resolvers';

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

export const typeDefs = [rootTypeDefs, apiFiltersTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, apiFiltersResolvers, userResolvers, postResolvers];
