import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {SharedModule} from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-status-toggle/flight-status-toggle.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightStatusToggleComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
