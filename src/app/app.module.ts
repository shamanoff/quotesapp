import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavoritesPage} from "../pages/favorites/favorites";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {LibraryPage} from "../pages/library/library";
import {FavoritesPageModule} from "../pages/favorites/favorites.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {LibraryPageModule} from "../pages/library/library.module";
import {QuotePageModule} from "../pages/quote/quote.module";
import {QuotePage} from "../pages/quote/quote";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotesPageModule} from "../pages/quotes/quotes.module";

@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    FavoritesPageModule,
    SettingsPageModule,
    LibraryPageModule,
    QuotePageModule,
    TabsPageModule,
    QuotesPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    LibraryPage,
    QuotePage,
    TabsPage,
    QuotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
