import DataLoader from 'dataloader';

export const makePostDataLoader = (getPosts: any) => {
  return new DataLoader(async (ids: string[]) => {
    const urlQuery = ids.join('&userId=');
    
    const posts = await getPosts('?userId=' + urlQuery);

    return ids.map((id) => {
      return posts.filter((post: any) => post.userId === id);
    });
  });
};
