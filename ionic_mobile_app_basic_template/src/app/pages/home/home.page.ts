import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Settings } from './../../settings'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalCtrl: ModalController, 
    //params on navcontroller
    public navCtrl: NavController,
    public settings: Settings
  ) {}

  login(){
    this.navCtrl.navigateForward("/login");
  }

}
