//pagina de login para el usuario
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams, LoadingController, NavController, Platform, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
//import { Settings } from './../../data/settings';

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
  formRegister: any;
  path: any = 'login';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    public navParams: NavParams,
    public api: ApiService, 
    private storage: Storage,
    //private nativeStorage: NativeStorage,
    ) { 
      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.formRegister = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', Validators.email],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        role: ['',Validators.required]
      });
    }
    

  ngOnInit() {        
    //this.path = this.navParams.data.path;
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
