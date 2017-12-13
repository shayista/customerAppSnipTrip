import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-my-visit',
  templateUrl: 'my-visit.html',
})
export class MyVisitPage {
  details: string = "Agenda";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  goBack() {
    this.navCtrl.pop();
   
  }

}
