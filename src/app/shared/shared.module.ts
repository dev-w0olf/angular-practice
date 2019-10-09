import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CityPipe} from './pipes/city.pipe';
import {StatusColorPipe} from './pipes/statusColor.pipe';
import {StatusfilterPipe} from './pipes/statusfilter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CityValidatorDirective } from './validators/city-validator.directive';
import { AsyncCityValidatorDirective } from './validators/async-city-validator.directive';
import { RoundtripValidatorDirective } from './validators/roundtrip-validator.directive';

@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe,
    CityValidatorDirective,
    AsyncCityValidatorDirective,
    RoundtripValidatorDirective],
  exports: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe,
    FormsModule,
    CityValidatorDirective,
    AsyncCityValidatorDirective,
    RoundtripValidatorDirective
  ]
})
export class SharedModule {
}
