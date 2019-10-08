import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CityPipe} from './pipes/city.pipe';
import {StatusColorPipe} from './pipes/statusColor.pipe';
import {StatusfilterPipe} from './pipes/statusfilter.pipe';

@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CityPipe,
    StatusColorPipe,
    StatusfilterPipe]
})
export class SharedModule {
}
