const post = () => ({ id: '32123gfd', title: 'Post Title', text: 'Post text' });

const posts = () => [
  { id: '32123gfd', title: 'Post Title', text: 'Post text' },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
