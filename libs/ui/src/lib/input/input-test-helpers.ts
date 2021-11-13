import { ComponentFixture } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { InputComponent } from './input.component';

export const getInputElement = (
  fixture: ComponentFixture<InputComponent>,
): HTMLInputElement => {
  return fixture.nativeElement.querySelector('input');
};

export const getValidators = (component: InputComponent) =>
  component.internalControl.validator({} as AbstractControl);
