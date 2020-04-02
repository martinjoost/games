import { AbstractControl } from '@angular/forms';
export class EmailValidator {
  static MatchEmail(AC: AbstractControl) {
    let email = AC.get('email').value; // to get value in input tag
    let confirmemail = AC.get('cemail').value; // to get value in input tag
    if (email != confirmemail) {
      AC.get('cemail').setErrors({ MatchEmail: true });
    } else {
      return null;
    }
  }
}
