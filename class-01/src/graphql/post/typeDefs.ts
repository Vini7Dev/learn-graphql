import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(post_id: ID!): Post
    posts: [Post]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    createdAt: String!
    # user: User!
  }
`;
