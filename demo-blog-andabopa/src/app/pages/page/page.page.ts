import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  constructor(
    private titleService: Title
    ) {
      this.titleService.setTitle('Page'); // Establecer el título de la página
     }

  ngOnInit() {
  }

}
