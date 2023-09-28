import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Settings } from './settings';
import { Storage } from '@ionic/storage-angular';
//import { register } from 'swiper/element/bundle';

//register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //@ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform, 
    public settings: Settings,
    private storage: Storage
    ) {
    this.initializeApp();
  }

  ngAfterViewInit() {
    // Asigna el valor del IonRouterOutlet después de que la vista se haya inicializado
    //if (this.routerOutlet) {
      // Hacer lo que necesites con el IonRouterOutlet aquí
    //}
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Realiza cualquier inicialización necesaria aquí
    });
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
}
