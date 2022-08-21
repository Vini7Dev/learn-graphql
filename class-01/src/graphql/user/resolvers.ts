const user = async (
  _parent: any,
  { user_id }: { user_id: string },
  { getUsers }: any,
) => {
  console.log('===========> id', user_id)

  const user = await getUsers(user_id);
  return user.json();
};

const users = async (_: any, __: any, { getUsers }: any) => {
  const users = await getUsers();
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
