import { Injectable, OnInit } from "@angular/core";

//pagina de parametros de la aplicacion

@Injectable({
    providedIn: 'root',
  })
export class Settings implements OnInit{
    theme: any = {};
    mode: any = 'ios';

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}