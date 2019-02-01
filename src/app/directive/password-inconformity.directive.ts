import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordInconformityValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordVerify = control.get('passwordVerify');
  return password && passwordVerify && password.value === passwordVerify.value ? null : {'passwordInconformity': true };
}
