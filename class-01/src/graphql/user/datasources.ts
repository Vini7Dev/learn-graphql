import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BASE_URL + '/users';
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
  }

  public async getUsers(urlParams: any = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  public async getUser(id: string) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  public batchLoadById(id: string) {
    return this.dataLoader.load(id);
  }
}
