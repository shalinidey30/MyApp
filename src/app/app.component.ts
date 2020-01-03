import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MonthsPage } from '../pages/months/months';
import { DaysPage } from '../pages/days/days';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = MonthsPage;
  public IsLoggedIn: boolean = false;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuctrl: MenuController) {
    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();
      //this.nav.setRoot(HomePage);
    });
  }

  OnHome() {
    this.nav.push(HomePage);
    this.menuctrl.close();
  }

  OnDays() {
    this.nav.push(DaysPage);
    this.menuctrl.close();
  }

  OnMonth() {
    this.nav.push(MonthsPage);
    this.menuctrl.close();
  }
}

