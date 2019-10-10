import {Routes} from "@angular/router";
import {FlightSearchComponent} from "./flight-booking/flight-search/flight-search.component";
import {HomeComponent} from "./home/home.component";
import {FlightEditComponent} from "./flight-booking/flight-edit/flight-edit.component";
import {FlightReactiveComponent} from "./flight-booking/flight-reactive/flight-reactive.component";
import {PassengerSearchComponent} from "./flight-booking/passenger-search/passenger-search.component";
import {BasketComponent} from "./flight-booking/basket/basket.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'flight-edit/:loadId',
    component: FlightEditComponent
  },
  {
    path: 'flight-edit',
    component: FlightEditComponent
  },
  {
    path: 'flight-reactive',
    component: FlightReactiveComponent
  }
  ,
  {
    path: 'basket',
    component: BasketComponent
  }
];
