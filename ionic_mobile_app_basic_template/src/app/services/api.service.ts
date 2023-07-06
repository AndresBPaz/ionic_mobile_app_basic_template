import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(
    private http: HttpClient, 
    private storage: Storage,

    ) {}

  login(username: string, password: string) {
    const url = `${environment.apiUrl}/jwt-auth/v1/token`;
    return this.http.post(url, { username, password });
  }

  logout(): Promise<any> {
    // Eliminar el token del almacenamiento local
    return this.storage.remove('token');
  }

    // Otros métodos para interactuar con la API de WordPress (obtener publicaciones, crear publicaciones, etc.)

}
