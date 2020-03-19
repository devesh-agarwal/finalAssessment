import { AbstractControl } from '@angular/forms';

export function checkPassword(control: AbstractControl) {
  if (control.get('password').value === control.get('comfirmPassword').value) {
    return null;
  } else { return true; }
}
