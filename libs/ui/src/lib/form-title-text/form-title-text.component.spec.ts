import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTitleTextComponent } from './form-title-text.component';

describe('FormTitleTextComponent', () => {
  let component: FormTitleTextComponent;
  let fixture: ComponentFixture<FormTitleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTitleTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
