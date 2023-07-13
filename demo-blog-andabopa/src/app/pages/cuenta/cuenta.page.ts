import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(
    private titleService: Title
    ) {
    this.titleService.setTitle('Cuenta'); // Establecer el título de la página
   }

  ngOnInit() {
  }

}
