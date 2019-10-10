import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateCity(c: AbstractControl): ValidationErrors | null {
  const validCities: string[] = ['Graz', 'Wien', 'Hamburg', 'Dortmund', 'Mallorca', 'Berlin', 'Zürich', 'München', 'Frankfurt'];
  if (c.value && validCities.indexOf(c.value) === -1) {
    return {
      city: {
        actualValue: c.value,
        validCities: validCities
      }
    };
  }
  return null;
}

export function validateCityParameterized (validCities: string[]): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }
    return null;
  };
}
