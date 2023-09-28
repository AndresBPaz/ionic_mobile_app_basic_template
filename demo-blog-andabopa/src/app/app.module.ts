import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
 
import { IonicStorageModule } from '@ionic/storage-angular';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MenuComponent } from './menu/menu.component';
import { SearchService } from './services/search.service';
import { PostsService } from './services/posts.service'; 

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),  
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'es'
    })
  ],
  providers: [
    FormBuilder,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SearchService,
    PostsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
