import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post'; // Importa el modelo Post
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = ''; 

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + '/wp/v2/search';
   }

   getPostOnSearch(search: string, page: number, perPage: number): Observable<Post[]> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('per_page', perPage.toString());
    params = params.set('search', search); // Agrega el parámetro de búsqueda

    return this.http.get<Post[]>(this.url, { params }).pipe(
      map((response: Post[]) => response)
    );
  }
}
