import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Settings } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Blog', url: '/folder/inbox', icon: 'newspaper' },
    { title: 'Buscar', url: '/search', icon: 'search' },
    { title: 'Desarrollo', url: '/folder/favorites', icon: 'code-working' },
    { title: 'Cuenta', url: '/folder/archived', icon: 'person' },
    { title: 'Nuestra organización', url: '/folder/spam', icon: 'business' },
  ];

  //@ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(private platform: Platform, public settings: Settings) {
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
}
