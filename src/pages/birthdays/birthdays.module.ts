import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthdaysPage } from './birthdays';

@NgModule({
  declarations: [
    BirthdaysPage,
  ],
  imports: [
    IonicPageModule.forChild(BirthdaysPage),
  ],
})
export class BirthdaysPageModule {}
