const post = async (
  _: any,
  { post_id }: { post_id: string },
  { getPosts }: any,
) => {
  const post = await getPosts(post_id);
  return post.json();
};

const posts = async (_: any, __: any, { getPosts }: any) => {
  const posts = await getPosts();
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimestamp: (parent: any) => {
      const timestamp = new Date(parent.createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    }
  }
};
