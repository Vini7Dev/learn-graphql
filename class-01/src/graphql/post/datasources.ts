import { RESTDataSource } from 'apollo-datasource-rest'
import { makePostDataLoader } from './dataloaders';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = process.env.BASE_URL + '/posts';
    this.dataLoader = makePostDataLoader(this.getPosts.bind(this));
  }

  public async getPosts(urlParams: any = {}) {
    return this.get('', urlParams, {
      cacheOptions: {
        ttl: 60 // cache per seconds
      }
    })
  }

  public async getPost(postId: string) {
    return this.get(`/${postId}`, undefined, {
      cacheOptions: {
        ttl: 60 // cache per seconds
      }
    })
  }

  public batchLoadByUserId(id: string) {
    this.dataLoader.load(id)
  }
}
