//pagina de login para el usuario
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errors: any;
  username: string = '';
  password: string = '';
  form: any;
  path: any = 'account';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
    ) { 
      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    }
    

  ngOnInit() {        
    this.path = this.navParams.data.path;
  }

  forgotton() {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.username && this.password) {
      /*this.authService.login(this.username, this.password).subscribe(
        () => {
          // Login exitoso, redireccionar a la página principal
        },
        (error) => {
          // Manejar el error de autenticación
          console.error(error);
        }
      );*/
    }
    throw new Error('Method not implemented.');
  }

}
