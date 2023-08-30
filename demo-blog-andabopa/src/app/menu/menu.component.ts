import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  isLoggedIn = false;
  public appPages = [
    { title: 'Blog', url: '/home', icon: 'newspaper', enabled: true },
    { title: 'Buscar', url: '/search', icon: 'search', enabled: true },
    { title: 'Desarrollo', url: '/page/216', icon: 'code-working', enabled: true },
    { title: 'Cuenta', url: '/cuenta', icon: 'person', enabled: true },
    { title: 'Nuestra organización', url: '/page/13', icon: 'business', enabled: true },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public settings: Settings, 
    private storage: Storage
  ) {}

  ngOnInit(): void {
      this.storage.get('token').then((data) =>  {
        if (data != null){
          this.isLoggedIn = true;
          this.appPages[3].enabled = true;
        }else{
          this.isLoggedIn = false;
          this.appPages[3].enabled = false;
        }
      });
  }

}
