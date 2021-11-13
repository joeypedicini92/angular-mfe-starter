import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputComponent } from './input.component';
import { getInputElement } from './input-test-helpers';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display required indicator when required', () => {
    component.required = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('*');
  });

  it('should not display required indicator when not required', () => {
    component.required = false;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).not.toContain('*');
  });

  it('should not be editable when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const nameInput: HTMLInputElement = getInputElement(fixture);
    expect(nameInput.disabled).toBe(true);
  });

  it('should be editable when not disabled', () => {
    component.disabled = false;
    fixture.detectChanges();
    const nameInput: HTMLInputElement = getInputElement(fixture);
    expect(nameInput.disabled).toBe(false);
  });

  it('should update internalControl when updating disabled ', () => {
    expect(component.internalControl.disabled).toBe(false);
    component.disabled = true;
    fixture.detectChanges();
    expect(component.internalControl.disabled).toBe(true);
  });

  it('should update internalControl when updating required', () => {
    expect(
      component.internalControl.hasValidator(Validators.required),
    ).toBe(false);
    component.required = true;
    fixture.detectChanges();
    expect(
      component.internalControl.hasValidator(Validators.required),
    ).toBe(true);
  });

  it('should be invalid when required and empty value', () => {
    expect(component.internalControl.invalid).toBe(false);
    component.required = true;
    fixture.detectChanges();
    expect(component.internalControl.invalid).toBe(true);
    const inputElement = getInputElement(fixture);
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.internalControl.invalid).toBe(false);
  });

  // it('should be error state when invalid and dirty', () => {
  //   expect(component.internalControl.).toBe(false);
  //   component.required = true;
  //   fixture.detectChanges();
  //   expect(component.internalControl.invalid).toBe(true);
  //   const inputElement = getInputElement(fixture);
  //   inputElement.value = 'test';
  //   inputElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   expect(component.internalControl.invalid).toBe(false);
  // });
});
