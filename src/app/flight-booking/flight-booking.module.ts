import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {SharedModule} from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightStatusToggleComponent } from './flight-status-toggle/flight-status-toggle.component';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightStatusToggleComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    FlightSearchComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
