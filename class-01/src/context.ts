import fetch from 'node-fetch';

import { makeUserDataLoader } from './graphql/user/dataloaders';
import { getUsers } from './graphql/user/utils';

const BASE_URL = process.env.BASE_URL;

export const context = () => ({
  fetch,
  userDataLoader: makeUserDataLoader(getUsers(fetch)),
  getUsers: getUsers(fetch),
  getPosts: (path: string) => fetch(`${BASE_URL}/posts/${path ? path : ''}`),
});
