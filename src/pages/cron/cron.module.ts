import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronPage } from './cron';

@NgModule({
  declarations: [
    CronPage,
  ],
  imports: [
    IonicPageModule.forChild(CronPage),
  ],
})
export class CronPageModule {}
