import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
   imports: [
      SharedModule,
      FlightBookingModule,
      BrowserModule,
      HttpClientModule,
     RouterModule.forRoot(routes)
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
