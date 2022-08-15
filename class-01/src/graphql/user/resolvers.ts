const user = () => ({ id: 'g5fd43', username: 'JohnDoe' });

const users = () => [{ id: 'g5fd43', username: 'JohnDoe' }];

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
