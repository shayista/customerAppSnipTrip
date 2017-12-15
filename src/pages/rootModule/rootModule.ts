import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-rootModule',
  templateUrl: 'rootModule.html'
})
export class rootModulePage {

  
  constructor(public viewCtrl: ViewController) {}
  
    close() {
      this.viewCtrl.dismiss();
    }
}

