import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { InputType } from './input.types';

@Component({
  selector: 'starter-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: InputComponent },
  ],
})
export class InputComponent {
  @Input()
  get type(): InputType {
    return this._type;
  }
  set type(value: InputType) {
    this._type = value;
  }
  private _type: InputType = 'text';

  @Input()
  get value(): string {
    return this._formControl.value;
  }
  set value(value: string) {
    this._formControl.setValue(value);
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }
  private _placeholder = '';

  @Input()
  get internalControl(): FormControl {
    return this._formControl;
  }
  set internalControl(value: FormControl) {
    if (value) {
      this._formControl = value;
    }
  }
  private _formControl = new FormControl(null);

  private getValidators(): Record<string, boolean> {
    if (this._formControl.validator) {
      return this._formControl.validator({} as AbstractControl) || {};
    } else {
      return {};
    }
  }

  @Input()
  get required(): boolean {
    return this.getValidators().required || false;
  }

  set required(value: boolean) {
    if (coerceBooleanProperty(value)) {
      this._formControl.addValidators(Validators.required);
    } else {
      this._formControl.removeValidators(Validators.required);
    }
  }

  @Input()
  get disabled(): boolean {
    return this._formControl.disabled;
  }
  set disabled(value: boolean) {
    if (coerceBooleanProperty(value)) {
      this._formControl.disable();
    } else {
      this._formControl.enable();
    }
  }

  get errors(): Record<string, any> {
    return this._formControl?.errors;
  }

  handleInput(inputText: string) {
    this.value = inputText;
  }
}
