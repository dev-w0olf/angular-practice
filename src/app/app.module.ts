import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FlightBookingModule} from './flight-booking/flight-booking.module';

@NgModule({
   imports: [
      SharedModule,
      FlightBookingModule,
      BrowserModule,
      HttpClientModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
