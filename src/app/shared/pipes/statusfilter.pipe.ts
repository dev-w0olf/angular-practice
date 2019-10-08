import { Pipe, PipeTransform } from '@angular/core';
import {Flight} from '../../entities/flight';

@Pipe({
  name: 'statusfilter'
})
export class StatusfilterPipe implements PipeTransform {

  transform(flights: Array<Flight>, delayed: boolean): Array<Flight> {
    return flights.filter(flight => flight.delayed === delayed);
  }

}
