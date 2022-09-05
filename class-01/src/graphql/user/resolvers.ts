const user = async (_, { id }: { id: string }, { dataSources }: any) => {
  const user = await dataSources.usersApi.getUser(id);
  return user;
};

const users = async (_: any, { input }: any, { dataSources }: any) => {
  const users = await dataSources.usersApi.getUsers(input);
  return users;
};

const posts = ({ id }: any, _: any, { dataSources }: any) => {
  return dataSources.postsApi.batchLoadByUserId(id);
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: {
    posts,
  },
  UserResult: {
    __resolveType: (obj: any) => {
      if (typeof obj.statusCode !== 'undefined') return 'UserNotFoundError';
      if (typeof obj.id !== 'undefined') return 'User';
      return null;
    }
  }
};
