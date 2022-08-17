const post = () => ({ id: '32123gfd', title: 'Post Title', body: 'Post body' });

const posts = () => [
  { id: '32123gfd', title: 'Post Title', body: 'Post body' },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
