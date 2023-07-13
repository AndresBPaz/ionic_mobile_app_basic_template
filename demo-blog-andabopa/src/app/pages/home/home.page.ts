import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title
    ) { 
      this.titleService.setTitle('Home'); // Establecer el título de la página
    }

  ngOnInit() {
  }

}
