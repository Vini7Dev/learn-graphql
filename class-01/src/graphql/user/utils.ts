export const getUsers = (fetch: any) => async (path?: string, query?: string) => {
  return fetch(`${process.env.BASE_URL}/users/${path ? path : ''}${query ? `?${query}` : '' }`)
};
