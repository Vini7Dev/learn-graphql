import DataLoader from 'dataloader'

export const makeUserDataLoader = (getUsers: any) => {
  return new DataLoader(async (ids: string[]) => {
    const urlQuery = ids.join('&id=');
    const users = await getUsers('?id=' + urlQuery);
    return ids.map((id) => users.find((user: any) => user.id === id));
  })
}
