import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HealthCheck } from './app.component';
import { UrlPage } from '../pages/url/url';
import { CommandPage } from '../pages/command/command';
import { HomeModule } from '../pages/home/home.module';
import { CronsModule } from '../pages/crons/crons.module';
import { CronPage } from '../pages/cron/cron';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { MonitorPage } from '../pages/monitor/monitor';
import { DetailmonitorPage } from '../pages/detailmonitor/detailmonitor';
import { DiskmemoryPageModule } from '../pages/diskmemory/diskmemory.module';
import {ShowmemoryPageModule} from '../pages/showmemory/showmemory.module';
import {ShowdetailPageModule} from '../pages/showdetail/showdetail.module';
import {ShowdiskPageModule} from '../pages/showdisk/showdisk.module';


@NgModule({
  declarations: [
    HealthCheck,
    UrlPage,
    CommandPage,
    CronPage,
    MonitorPage,
    DetailmonitorPage
  ],
  imports: [

    BrowserModule,
    HttpModule,
    HomeModule,
    CronsModule,
    DiskmemoryPageModule,
    ShowmemoryPageModule,
    ShowdetailPageModule,
    ShowdiskPageModule,
    IonicModule.forRoot(HealthCheck),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  HealthCheck,
  UrlPage,
  CommandPage,
  CronPage,
  MonitorPage,
  DetailmonitorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
