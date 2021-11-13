import { FormGroup } from '@angular/forms';

export const markAllAsTouched = (formGroup: FormGroup) => {
  return Object.values(formGroup.controls).forEach((c) =>
    c.markAsTouched(),
  );
};
