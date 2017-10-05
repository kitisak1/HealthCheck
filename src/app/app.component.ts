import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { CommandPage } from '../pages/command/command';
import { HomePage } from '../pages/home/home';
import { UrlPage } from '../pages/url/url';
//import { CronPage } from '../pages/cron/cron';
import { MonitorPage } from '../pages/monitor/monitor';
import { DetailmonitorPage } from '../pages/detailmonitor/detailmonitor';
import { DiskmemoryPage } from '../pages/diskmemory/diskmemory';

@Component({
  templateUrl: 'app.html'
})
export class HealthCheck {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any,icon:any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'ios-home-outline',title: 'Home', component: HomePage },
      { icon:'contact',title: 'Url', component: UrlPage },
      //{ icon:'alarm',title: 'Cron', component: CronPage },
      { icon:'disc',title: 'Diskmemory', component: DiskmemoryPage },
      { icon:'ios-easel',title: 'Status Monitor', component: MonitorPage },
      { icon:'ios-desktop',title: 'Detail Monitor', component: DetailmonitorPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
