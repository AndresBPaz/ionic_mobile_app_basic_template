import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Page } from '../models/Page'; // Importa el modelo Page

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  apiUrl: string = ''; 

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + '/wp/v2/pages';
  } 

  getPages(page: number, perPage: number): Observable<Page[]> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('per_page', perPage.toString());

    return this.http.get<Page[]>(this.apiUrl, { params }).pipe(
      map((response: Page[]) => response)
    );
  }

  getPageById(pageId: string): Observable<Page> {
    const url = `${this.apiUrl}/${pageId}`;

    return this.http.get<Page>(url).pipe(
      map((page: Page) => page)
    );
  }
}
