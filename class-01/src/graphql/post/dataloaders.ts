import DataLoader from 'dataloader';

export const makePostDataLoader = (getPosts: any) => {
  return new DataLoader(async (ids: string[]) => {
    const urlQuery = ids.join('&userId=');
    
    const response = await getPosts('?userId=' + urlQuery);
    const posts = await response.json() as any[];

    return ids.map((id) => {
      return posts.filter((post) => post.userId === id);
    });
  });
};
