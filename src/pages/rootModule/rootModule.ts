import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-rootModule',
  templateUrl: 'rootModule.html'
})
export class rootModulePage {

  constructor(public navCtrl: NavController) {
   
  }
  goToOtherPage() { 
    this.navCtrl.push(HomePage);
  
    }
}

