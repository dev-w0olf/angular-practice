import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    FlightSearchComponent,
    SharedModule,
    FormsModule
  ]
})
export class FlightBookingModule { }
