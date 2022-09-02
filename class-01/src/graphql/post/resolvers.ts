const post = async (
  _: any,
  { post_id }: { post_id: string },
  { dataSources: { postsApi } }: any,
) => {
  const postData = await postsApi.getPosts(post_id);

  if (Math.random() <= 0.3) return { statusCode: 400, message: 'Timeout error', timeout: 123 }

  if (!postData.id) return { statusCode: 404, message: 'Post not found!', postId: post_id };

  return postData;
};

const posts = async (_: any, { input }: any, { dataSources: { postsApi } }: any) => {
  const apiFiltersInput = `?${new URLSearchParams(input)}`
  return postsApi.getPosts(apiFiltersInput);
};

const user = async ({ userId }: { userId: string }, _: any, { dataSources }: any) => {
  return dataSources.usersApi.batchLoadById(userId)
}

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
    user,
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
