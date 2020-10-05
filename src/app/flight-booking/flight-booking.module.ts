import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {SharedModule} from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-status-toggle/flight-status-toggle.component';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import {RouterModule} from '@angular/router';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightStatusToggleComponent,
    FlightReactiveComponent,
    FlightEditComponent,
    PassengerSearchComponent,
    PassengerCardComponent,
    BasketComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FlightSearchComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
