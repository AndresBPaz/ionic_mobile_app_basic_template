import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../models/Post'; // Importa el modelo Post

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = ''; 

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + '/wp/v2/posts';
  } 

  getSliders(): Observable<any> {
    //TODO: Implementar logica para obtener los sliders del blog
    throw new Error('Method not implemented.');
  }

  getPosts(page: number, perPage: number): Observable<Post[]> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('per_page', perPage.toString());

    return this.http.get<Post[]>(this.url, { params }).pipe(
      map((response: Post[]) => response)
    );
  }

  getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${postId}`).pipe(
      map((post: Post) => post)
    );
  }
}
