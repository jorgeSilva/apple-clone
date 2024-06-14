import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadingpageComponent } from './components/ladingpage/ladingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppleComponent } from './svg/apple-sm/apple.component';
import { SearchComponent } from './svg/search-sm/search.component';
import { StoreComponent } from './svg/store-sm/store.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MenuComponent } from './svg/menu/menu.component';
import { AppleLgComponent } from './svg/apple-lg/apple-lg.component';
import { SearchLgComponent } from './svg/search-lg/search-lg.component';
import { StoreLgComponent } from './svg/store-lg/store-lg.component';

@NgModule({
  declarations: [
    AppComponent,
    LadingpageComponent,
    NavbarComponent,
    AppleComponent,
    SearchComponent,
    StoreComponent,
    PagenotfoundComponent,
    MenuComponent,
    AppleLgComponent,
    SearchLgComponent,
    StoreLgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
