import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronsPage } from './crons';

@NgModule({
  declarations: [
  CronsPage,
  ],
  imports: [
    IonicPageModule.forChild(CronsPage),
  ],
  exports: [
    CronsPage
  ]
})
export class CronsModule{}
