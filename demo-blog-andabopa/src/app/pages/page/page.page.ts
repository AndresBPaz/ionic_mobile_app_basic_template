import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { PagesService } from 'src/app/services/pages.service'; 
import { LoadingController } from '@ionic/angular'; 
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  pageId: string = '';
  page: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title,
    public pagesService: PagesService,
    private loadingController: LoadingController,
    public sanitizer: DomSanitizer 
  ) {
    this.titleService.setTitle('Page'); // Establecer el título de la página
    this.pageId = this.route.snapshot.paramMap.get('id') ?? '';
    // Verificar si postId es null y navegar hacia la página anterior si es así
    if (this.pageId === '') {
      this.router.navigate(['/home']); // Cambiar '/home' por la ruta de la página anterior
    } 
    this.loadPageDetails();
  }

  openExternalLink(url: string) {
    Browser.open({ url });
  }

  onLinkClick(event: any) {
    if (event.target.tagName === 'A') {
      const url = event.target.getAttribute('href');
      if (url) {
        this.openExternalLink(url);
        event.preventDefault();
      }
    }
  }

  async loadPageDetails() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará mientras carga
    });
    await loading.present();

    try {

     await this.pagesService.getPageById(this.pageId)
        .subscribe(
          (page: any) => {
            this.page = page;
            console.log(page);
            loading.dismiss();
          },
          (error: any) => {
            console.error('Error al obtener la pagina', error);
            loading.dismiss();
          }
        );

    }catch (error) {
      console.error('Error al obtener la pagina', error);
      loading.dismiss();
    }
  }

  ngOnInit() {
  }

}
