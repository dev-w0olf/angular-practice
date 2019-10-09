import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {

  @Input() city: string[];

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && this.city.indexOf(c.value) === -1) {
      return {
        city: {
          actualCity: c.value,
          validCities: this.city
        }
      };
    }
    return null;
  }
}

