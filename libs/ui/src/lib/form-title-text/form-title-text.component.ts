import { Component, Input } from '@angular/core';

@Component({
  selector: 'starter-form-title-text',
  template: `<p>{{ text }}</p>`,
  styleUrls: ['./form-title-text.component.scss'],
})
export class FormTitleTextComponent {
  @Input() text: string;
}
