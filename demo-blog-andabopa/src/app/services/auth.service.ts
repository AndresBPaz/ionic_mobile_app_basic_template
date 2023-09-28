import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Preferences } from '@capacitor/preferences';
import { JwtHelperService } from '@auth0/angular-jwt';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private jwtHelper: JwtHelperService
  ) { }

  login(username: string, password: string): Observable<void> {
    const url = `${environment.apiUrl}/jwt-auth/v1/token`;

    return this.http.post<any>(url, {
      username: username,
      password: password
    }).pipe(
      tap((response) => {
        const token = response.token;

        // Almacenar el token en Preferences de Capacitor
        Preferences.set({
          key: 'token',
          value: token
        });

        // Verificar si el token es válido
        if (!this.jwtHelper.isTokenExpired(token)) {
          // El token es válido, realizar acciones adicionales si es necesario
          // console.log("token valido");
        } else {
          // El token no es válido, manejar el error
          // console.log("token no valido");
        }
      }),
      catchError((error) => {
        // Manejar errores de la solicitud HTTP
        console.error('Error al iniciar sesión', error);
        throw error;
      })
    );
  }

  async logout(): Promise<void> {
    // Eliminar el token almacenado en Preferences de Capacitor
    await Preferences.remove({ key: 'token' });

    // Realizar la solicitud de logout si es necesario
    // return this.http.post(`${environment.apiUrl}/logout`, {}).toPromise();
  }
}