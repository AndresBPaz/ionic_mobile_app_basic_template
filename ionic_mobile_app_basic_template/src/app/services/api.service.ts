import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dominatecodeco.com/wp-json';

  constructor(private http: HttpClient, private storage: Storage) {}

  login(username: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/jwt-auth/v1/token`;

    return this.http
      .post(url, { username, password })
      .toPromise()
      .then((response: any) => {
        // Almacenar el token en el almacenamiento local para futuras solicitudes
        return this.storage.set('token', response.token);
      });
  }

  logout(): Promise<any> {
    // Eliminar el token del almacenamiento local
    return this.storage.remove('token');
  }

    // Otros métodos para interactuar con la API de WordPress (obtener publicaciones, crear publicaciones, etc.)

}
