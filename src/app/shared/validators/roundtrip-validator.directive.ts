import {Directive} from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form[roundTrip]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RoundtripValidatorDirective,
    multi: true
  }]
})
export class RoundtripValidatorDirective implements Validator {

  constructor() {
  }

  validate(c: AbstractControl): ValidationErrors | null {
    const group: FormGroup = c as FormGroup; // Typumwandlung

    const fromCtrl = group.controls['from'];
    const toCtrl = group.controls['to'];

    if (!fromCtrl || !toCtrl) {
      return null;
    }

    if (fromCtrl.value === toCtrl.value) {
      return {
        roundTrip: true
      };
    }
    return null;
  }

}
