import { GlobalProvider } from './../../providers/global/global';

import { BirthdaysPage } from './../birthdays/birthdays';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {
  @ViewChild(Nav) nav; Nav;
  rootPage:any = BirthdaysPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public gbl:GlobalProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

}
