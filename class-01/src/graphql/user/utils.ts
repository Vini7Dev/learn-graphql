export const getUsers = async (fetch: any) => (path?: string, query?: string) => {
  return fetch(`${process.env.BASE_URL}/users/${path ? path : ''}${query ? `?${query}` : '' }`)
};
