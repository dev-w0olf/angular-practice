import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateRoundTrip(c: AbstractControl): ValidationErrors | null {
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

