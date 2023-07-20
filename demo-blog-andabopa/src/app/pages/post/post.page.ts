import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/services/posts.service'; 
import { LoadingController } from '@ionic/angular'; 
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postId: string = '';
  post: any; // Aquí almacenaremos los detalles de la entrada del blog 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title,
    public postService: PostsService,
    private loadingController: LoadingController,
    public sanitizer: DomSanitizer 

  ) { 
    this.titleService.setTitle('Post'); // Establecer el título de la página
    //obtiene el id de los parametros de url
    this.postId = this.route.snapshot.paramMap.get('id') ?? '';
    // Verificar si postId es null y navegar hacia la página anterior si es así
    if (this.postId === '') {
      this.router.navigate(['/home']); // Cambiar '/home' por la ruta de la página anterior
    } 
    
    this.loadPostDetails();
  }

  ngOnInit() {
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

  async loadPostDetails() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará mientras carga
    });
    await loading.present();

    try {
    
     await this.postService.getPostById(this.postId) 
      .subscribe(
        (post: any) => {
          this.post = post;
          console.log(post);
          loading.dismiss();
        },
        (error: any) => {
          console.error('Error al obtener el post', error);
          loading.dismiss();
        }
      );

    } catch (error) {
      console.error('Error al obtener el post', error);
      loading.dismiss();
    }
  }


}
