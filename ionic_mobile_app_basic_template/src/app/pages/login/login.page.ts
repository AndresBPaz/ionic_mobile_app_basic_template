//pagina de login para el usuario
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, Platform, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { Settings } from './../../settings';
import { SegmentChangeEventDetail } from '@ionic/core';

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
  segment: any = 'login';
  errorsRegister: any;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public api: ApiService, 
    private storage: Storage,
    public settings: Settings, 
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
    throw new Error('Method not implemented.');
  }

  forgotton() {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.username && this.password) {
      this.api.login(this.username, this.password)
      .then(() => {
        // Inicio de sesión exitoso, redirigir a la página principal o realizar otra acción deseada
        
      })
      .catch(error => {
        // Manejar el error de inicio de sesión
        console.error('Error de inicio de sesión:', error);
      });
    }
    throw new Error('Method not implemented.');
  }

  onRegister(){
    throw new Error('Method not implemented.');

  }

  close( isClose: boolean){
    throw new Error('Method not implemented.');
  }

  segmentChanged(event: Event) {
    this.segment = (event.target as HTMLIonSegmentElement).value;
  }  
}
