import { ViewEventPage } from './../pages/view-event/view-event';
import { AddEventsPage } from './../pages/add-events/add-events';
import { AutoHideDirective } from './../directives/auto-hide/auto-hide';
import { BirthdaysPage } from './../pages/birthdays/birthdays';
import { MenusPage } from './../pages/menus/menus';
import { GlobalProvider } from './../providers/global/global';
import { GooglePlus } from '@ionic-native/google-plus';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts } from '@ionic-native/contacts';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenusPage,
    BirthdaysPage,
    AutoHideDirective,
    AddEventsPage,
    ViewEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenusPage,
    BirthdaysPage,
    AddEventsPage,
    ViewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
