import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {FlightService} from '../../flight-booking/services/flight.service';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityValidatorDirective,
    multi: true
  }]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) {
  }

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService
      .find(c.value, '').pipe(
        map(flights => (flights.length) > 0 ? null : { asyncCity: true }),
        delay(4000) // <-- simulate a longer delay to show the pending async validation state
  );
  }

}
