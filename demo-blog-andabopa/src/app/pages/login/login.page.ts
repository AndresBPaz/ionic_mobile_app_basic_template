import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/settings';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage: any ; 
  form: any;
  formRegister: any;
  path: any = 'login'; 
  segment: any = 'login';
  errorsRegister: any;
  errors: any;
  isenableSubmit: boolean = true;

  status: any = {};
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public api: ApiService, 
    private storage: Storage,
    public settings: Settings, 
    public modalCtrl: ModalController, 
    //params on navcontroller
    public navCtrl: NavController,
    public translate: TranslateService,
    public translateService: TranslateService
    ) { 
      this.titleService.setTitle('Login'); // Establecer el título de la página
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
      //navCtrl data path
      this.path = this.navCtrl;
    }
  
    forgotton() {
      throw new Error('Method not implemented.');
    }
  
    login() {
      if(this.form.valid) {
        this.isenableSubmit = false;
        this.authService.login(this.form.value.username, this.form.value.password).subscribe(
          (response) => {
            // Manejar la respuesta de éxito de la autenticación
            console.log(response);
            this.isenableSubmit = false;
            this.status = response;

            this.storage.set("token",this.status.token);
            this.storage.set("user_email",this.status.user_email);
            this.storage.set("user_nicename",this.status.user_nicename);
            this.storage.set("user_display_name",this.status.user_display_name);

            this.settings.user.token = this.status.token;
            this.settings.user.user_email = this.status.user_email;
            this.settings.user.user_nicename = this.status.user_nicename;
            this.settings.user.user_display_name = this.status.user_display_name;

            this.close(true);
          },
          (error) => {
            // Manejar el error de autenticación
            this.errorMessage = '<strong>ERROR<\/strong>:'+error.error.message;
            console.error(error);
            this.isenableSubmit = true;
          }
        );
      }
    }
  
    onRegister(){
      throw new Error('Method not implemented.');
  
    }
  
    close( isClose: boolean){
      this.modalCtrl.dismiss({
        'loggedIn': status,
      });
    }
  
    segmentChanged(event: Event) {
      this.segment = (event.target as HTMLIonSegmentElement).value;
    }  

}
