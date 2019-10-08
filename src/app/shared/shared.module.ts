import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CityPipe} from './pipes/city.pipe';
import {StatusColorPipe} from './pipes/statusColor.pipe';
import {StatusfilterPipe} from './pipes/statusfilter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe],
  exports: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe,
    FormsModule
    ]
})
export class SharedModule {
}
