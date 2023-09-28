import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Settings } from 'src/app/settings';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/services/posts.service'; 
import { LoadingController } from '@ionic/angular';   
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
 

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true // Habilita los botones de navegación
  };
  
  posts: any[] = [];
  slides: any[] = []; 
  
 // private unsubscribe$: Subject<void> = new Subject<void>();
  
  constructor(
    private router: Router,
    public settings: Settings,
    public translate: TranslateService,
    public translateService: TranslateService,
    private titleService: Title,
    public postService: PostsService,
    private loadingController: LoadingController,
  ) { 
    this.titleService.setTitle('Home'); // Establecer el título de la página 
  }

  ngOnDestroy(): void {
    //this.unsubscribe$.next();
    //this.unsubscribe$.complete();
  }

  ngOnInit() {
    this.loadPosts();
  }
  loadSliders() {
    //carga los sliders de la pagina home
    /*this.postService.getSliders().subscribe(
      (sliders) => {
        this.slides = sliders;
      },
      (error) => {
        console.error('Error al obtener los sliders del blog', error);
      }
    )*/
    this.slides = [
      {
        url: '/page/13',
        image: 'https://source.unsplash.com/1080x720/?tech',
        alt: 'Slider 1'
      },
      {
        url: '/cuenta',
        image: 'https://source.unsplash.com/1080x720/?hardware',
        alt: 'Slider 2'
      },
      {
        url: '/page/216',
        image: 'https://source.unsplash.com/1080x720/?artificial-intelligence',
        alt: 'Slider 3'
      }
    ];
  }

  onLinkClick(url: string) {
    //open page to var url
    this.router.navigate([url]);
  }

  async loadPosts() {
    const page = 1; // Página inicial
    const perPage = 5; // Cantidad de entradas por página

    const loading = await this.loadingController.create({
      message: 'Cargando...', // Mensaje que se mostrará mientras carga
    });
    await loading.present();

    this.loadSliders();

    this.postService.getPosts(page, perPage).subscribe(
        (posts) => {
          // Aquí puedes hacer lo que necesites con los datos de las entradas
          // Por ejemplo, asignar los datos a la variable 'posts'
          this.posts = posts;
          //console.log(this.posts);
          loading.dismiss(); // Ocultar el ion-loading cuando se hayan cargado los datos
        },
        (error) => {
          console.error('Error al obtener las entradas del blog', error);
          loading.dismiss(); // Ocultar el ion-loading en caso de error
        }
      );
  }

}
