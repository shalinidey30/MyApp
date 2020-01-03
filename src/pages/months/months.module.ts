import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthsPage } from './months';
import { NavController, Select } from 'ionic-angular';

@NgModule({
  declarations: [
    MonthsPage
  ],
  imports: [
    IonicPageModule.forChild(MonthsPage),
  ],
})
export class MonthsPageModule {

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

  constructor(public navCtrl: NavController) {
   
  }
}
