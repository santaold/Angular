import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlPost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.urlPost);
  }

  getPostById(id): Observable<Post>{
    return this.httpClient.get<Post>(this.urlPost + '/' + id);
}
}
