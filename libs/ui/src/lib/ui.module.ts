import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { FormTitleTextComponent } from './form-title-text/form-title-text.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  declarations: [
    InputComponent,
    PageTitleComponent,
    FormTitleTextComponent,
    PrimaryButtonComponent,
  ],
  exports: [
    InputComponent,
    PageTitleComponent,
    FormTitleTextComponent,
    PrimaryButtonComponent,
  ],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher,
    },
  ],
})
export class UiModule {}
