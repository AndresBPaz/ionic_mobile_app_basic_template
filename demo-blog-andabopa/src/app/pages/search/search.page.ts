import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchInput: any = "";

  constructor(
    private route: ActivatedRoute,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title
    ) { 
      this.titleService.setTitle('Busqueda'); // Establecer el título de la página
    }

  ngOnInit() {
  }

  onInput(){
    
  }

}
