import { Component, ViewChild } from '@angular/core';
import { NavController, Select, MenuController } from 'ionic-angular';
import { MonthsPage } from '../months/months';
import { DaysPage } from '../days/days';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Calender: any = "";
  public IsLoggedIn: boolean = false;
  
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

  public Days: any = [
    { title: '165', description: 'Sunday' },
    { title: '2', description: 'Monday' },
    { title: '3', description: 'Tuesday' },
    { title: '4', description: 'Wednesday' },
    { title: '5', description: 'Thrusday' },
    { title: '6', description: 'Friday' },
    { title: '7', description: 'Saturday' }

  ];

  constructor(public navCtrl: NavController,
    public menuctrl: MenuController) {

  }

  OnClick() {
    this.menuctrl.open();
  }

  GoTo() {
    if (this.Calender == 'month') {
      this.navCtrl.push(MonthsPage);
    }
    else {
      this.navCtrl.push(DaysPage);
    }
  }
}
