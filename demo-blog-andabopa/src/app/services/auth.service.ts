import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private nativeStorage: NativeStorage,
    private jwtHelper: JwtHelperService
    ) { }

    login(username: string, password: string): Observable<any> {
      const url = `${environment.apiUrl}/jwt-auth/v1/token`;
    
     //console.log('username'+username);

      return this.http.post(url, { 
          username: username,
          password: password
        }).pipe(
          tap((response: any) => {
            const token = response.token;
            // Almacenar el token en el almacenamiento local para futuras solicitudes
            this.storage.set('token', token);
            // Verificar si el token es válido
            if (!this.jwtHelper.isTokenExpired(token)) {
              // El token es válido, realizar acciones adicionales si es necesario
              //console.log("token valido");
            } else {
              // El token no es válido, manejar el error
              //console.log("token no valido");
            }
          })
      );
    }
    
  logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/logout`, {});
  }
}
