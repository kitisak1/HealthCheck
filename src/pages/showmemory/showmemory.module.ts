import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowmemoryPage } from './showmemory';

@NgModule({
  declarations: [
    ShowmemoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowmemoryPage),
  ],
})
export class ShowmemoryPageModule {}
