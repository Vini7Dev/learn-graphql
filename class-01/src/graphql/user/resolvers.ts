const user = async (
  _parent: any,
  { user_id }: { user_id: string },
  { getUsers }: any,
) => {
  const response = await getUsers(user_id);
  const userData = await response.json()

  if (!userData.id) return { statusCode: 404, message: 'User not found!' };

  return userData;
};

const users = async (_: any, { input }: any, { getUsers }: any) => {
  const apiFiltersInput = `?${new URLSearchParams(input)}`
  const users = await getUsers(apiFiltersInput);
  return users.json();
};

const posts = ({ id }: any, _: any, { postDataLoader }: any) => {
  return postDataLoader.load(id)
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
