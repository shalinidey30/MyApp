import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-days',
  templateUrl: 'days.html',
})
export class DaysPage {
 

  public Days: any = [
    { title: '1', description: 'Sunday' },
    { title: '2', description: 'Monday' },
    { title: '3', description: 'Tuesday' },
    { title: '4', description: 'Wednesday' },
    { title: '5', description: 'Thrusday' },
    { title: '6', description: 'Friday' },
    { title: '7', description: 'Saturday' }

  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuctrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaysPage');
  }
  OnClick() {
    this.menuctrl.open();
  }

}
