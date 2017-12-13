import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyVisitPage } from '../my-visit/my-visit';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
   
  }
  goToOtherPage() { 
    this.navCtrl.push(MyVisitPage);
  
    }

    
}

