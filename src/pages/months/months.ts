import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-months',
  templateUrl: 'months.html',
})
export class MonthsPage {

  public Months: any = [
    { title: '1', description: 'January' },
    { title: '2', description: 'February' },
    { title: '3', description: 'March' },
    { title: '4', description: 'April' },
    { title: '5', description: 'May' },
    { title: '6', description: 'June' },
    { title: '7', description: 'July' },
    { title: '8', description: 'August' },
    { title: '9', description: 'September' },
    { title: '10', description: 'October' },
    { title: '11', description: 'November' },
    { title: '12', description: 'December' }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuctrl:MenuController) {
  }

  OnClick() {
    this.menuctrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthsPage');
  }

}
