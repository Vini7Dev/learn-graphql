const post = async (
  _: any,
  { post_id }: { post_id: string },
  { getPosts }: any,
) => {
  const response = await getPosts(post_id);
  const postData = await response.json();

  if (Math.random() <= 0.3) return { statusCode: 400, message: 'Timeout error', timeout: 123 }

  if (!postData.id) return { statusCode: 404, message: 'Post not found!', postId: post_id };

  return postData;
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
    },
  },
  PostResult: {
    __resolveType: (obj: any) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    }
  },
  PostError: {
    __resolveTypes: (obj: any) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      return null;
    }
  }
};
