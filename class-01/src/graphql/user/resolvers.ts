const user = async (
  _parent: any,
  { user_id }: { user_id: string },
  { fetch }: any,
) => {
  const user = await fetch(`http://localhost:3000/users/${user_id}`);
  return user.json();
};

const users = async (_: any, __: any, { fetch }: any) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
