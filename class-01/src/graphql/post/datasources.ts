import { RESTDataSource } from 'apollo-datasource-rest'

export class PostsApi extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = process.env.BASE_URL + '/posts'; 
  }

  public async getPosts(urlParams: any = {}) {
    return this.get('', urlParams)
  }

  public async getPost(postId: string) {
    return this.get(`/${postId}`)
  }
}
