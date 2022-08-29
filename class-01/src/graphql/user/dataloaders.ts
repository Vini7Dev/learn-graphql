import DataLoader from 'dataloader'

export const makeUserDataLoader = (getUsers: any) => {
  return new DataLoader(async (ids: string[]) => {
    const urlQuery = 'id=' + ids.join('&id=');
  
    const response = await getUsers(null, urlQuery)
    const users = await response.json() as any[]
  
    return ids.map(id => users.find(user => user.id === id));
  })
}
