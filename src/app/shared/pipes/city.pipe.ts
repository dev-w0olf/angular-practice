import {Pipe, PipeTransform} from '@angular/core';
import {AirportService} from '../../flight-booking/services/airport.service';
import {Observable} from 'rxjs';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  constructor(private airportservice: AirportService) {
  }

  transform(value: string, fmt: string): Observable<string> {

  return  fmt === 'long' ? this.airportservice.getLongAsync(value)
      : this.airportservice.getShortAsync(value);

  }

}
