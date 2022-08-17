import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000';

export const context = () => ({
  fetch,
  getUsers: (path: string) => fetch(`${BASE_URL}/users/${path ? path : ''}`),
  getPosts: (path: string) => fetch(`${BASE_URL}/posts/${path ? path : ''}`),
});
