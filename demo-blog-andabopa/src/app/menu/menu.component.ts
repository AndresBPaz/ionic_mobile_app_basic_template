import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  public appPages = [
    { title: 'Blog', url: '/home', icon: 'newspaper' },
    { title: 'Buscar', url: '/search', icon: 'search' },
    { title: 'Desarrollo', url: '/page/desarrollo', icon: 'code-working' },
    { title: 'Cuenta', url: '/cuenta', icon: 'person' },
    { title: 'Nuestra organización', url: '/page/about', icon: 'business' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public settings: Settings, 
  ) {}

  ngOnInit(): void {
      
  }

}
