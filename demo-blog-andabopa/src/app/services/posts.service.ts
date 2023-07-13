import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //url 
  url: string = ''; 

  constructor(
    private http: HttpClient,
  ) {
      this.url = environment.apiUrl + '/wp/v2/posts';
   } 

   //metodo para devolver una lista con las entradas del blog, tiene como parametros de entrada per_page y page
   getPosts(page: number, perPage: number): Observable<any> {

    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('per_page', perPage.toString());

    return this.http.get(this.url, { params }).pipe(
      map((response: any) => response)
    );
  }

}
