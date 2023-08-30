import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Settings } from 'src/app/settings';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(
    private titleService: Title,
    private storage: Storage,
    private settings: Settings,
    public router: Router
    ) {
    this.titleService.setTitle('Cuenta'); // Establecer el título de la página
   }

  ngOnInit() {
    //si no existe el token se redirige a la pagina de login
    this.storage.get('token').then((data) =>  {
      if (data == null){
        //retireccion a la pagona de login
        this.router.navigate(['/login']);
      }
    })
  }

  editarPerfil(){

  }

  cerrarSesion(){
    this.storage.remove('token');
    this.storage.remove('user_email');
    this.storage.remove('user_nicename');
    this.storage.remove('user_display_name');

    this.settings.user = {};

    this.router.navigate(['/login']);

  }

}
