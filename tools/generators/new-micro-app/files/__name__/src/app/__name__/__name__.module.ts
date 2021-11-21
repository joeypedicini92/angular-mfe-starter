import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@bf-microapps/ui';

import { <%= nameComponent %> } from './<%= name %>.component';
const routes: Routes = [{ path: '', component: <%= nameComponent %> }];

@NgModule({
  declarations: [<%= nameComponent %>],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    UiModule,
  ],
  providers: [],
  exports: [<%= nameComponent %>],
})
export class <%= nameModule %> {}
