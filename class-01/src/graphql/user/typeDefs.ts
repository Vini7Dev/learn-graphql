import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(user_id: ID!): UserResult!
    users(input: ApiFiltersInput): [User]!
  }

  union UserResult = UserNotFoundError | User

  type UserNotFoundError {
    statusCode: Int!
    message: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }
`;
