export const getPosts = (fetch: any) => async (path?: string, query?: string) => {
  return fetch(`${process.env.BASE_URL}/posts/${path ? path : ''}${query ? `?${query}` : '' }`)
};
