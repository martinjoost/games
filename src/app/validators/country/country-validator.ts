//TESTING

import { AbstractControl } from '@angular/forms';
export class CountryValidator {
  static MatchCountry(AC: AbstractControl) {
    console.log(AC.value.country);
    const selection: any = AC.value.country;
    if (typeof selection === 'string') {
      return { incorrect: true };
    }
    return null;
  }
}
