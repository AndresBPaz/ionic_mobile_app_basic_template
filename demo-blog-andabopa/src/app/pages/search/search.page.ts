import { Component,  OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements  OnInit, OnDestroy {
  searchInput: any = "";
  posts: any[] = [];
  filter: any = {};
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title,
    private loadingController: LoadingController,
    public searchService: SearchService
    ) { 
      this.titleService.setTitle('Busqueda'); // Establecer el título de la página
      
    }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  async getPost(){
    this.filter.page = 1;
    this.filter.perPage = 5;
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará mientras carga
    });
    await loading.present();

    this.searchService.getPostOnSearch(this.filter.q, this.filter.page, this.filter.perPage).subscribe(
      (posts) => {
        this.posts = posts;
        console.log(this.posts);
        loading.dismiss()
      },
      (error) => {
        console.error('Error al obtener las entradas del blog', error);
        loading.dismiss();
      }
    )
  }

  onInput(){
    delete this.filter.sku;
    this.filter.q = this.searchInput;
 
    if (this.searchInput.length) {
      this.getPost();
    } else {
      this.posts = [];
    }
  }
}
