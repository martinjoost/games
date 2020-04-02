import { AbstractControl } from '@angular/forms';
export class NotAdultValidator {
  static NotAdult(AC: AbstractControl) {
    let bornDate = AC.get('birthdate').value;
    let bornDateTemp: any = new Date(bornDate);
    let currentDate: any = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    currentDate.setDate(day);
    currentDate.setMonth(month);
    currentDate.setFullYear(year);
    const age = Math.floor((currentDate - bornDateTemp) / (1000 * 60 * 60 * 24) / 365);
    if (age < 18) {
      AC.get('birthdate').setErrors({ NotAdult: true });
    }
    if (age > 100) {
      AC.get('birthdate').setErrors({ InvalidAge: true });
    } else {
      return null;
    }
  }
}
