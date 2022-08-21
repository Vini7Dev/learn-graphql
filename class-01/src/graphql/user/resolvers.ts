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

export const userResolvers = {
  Query: {
    user,
    users,
  },
  UserResult: {
    __resolveType: (obj: any) => {
      if (typeof obj.statusCode !== 'undefined') return 'UserNotFoundError';
      if (typeof obj.id !== 'undefined') return 'User';
      return null;
    }
  }
};
