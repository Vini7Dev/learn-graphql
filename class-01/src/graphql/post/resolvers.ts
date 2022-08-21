const post = async (
  _: any,
  { post_id }: { post_id: string },
  { getPosts }: any,
) => {
  const post = await getPosts(post_id);
  return post.json();
};

const posts = async (_: any, { input }: any, { getPosts }: any) => {
  const apiFiltersInput = `?${new URLSearchParams(input)}`
  const posts = await getPosts(apiFiltersInput);
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
