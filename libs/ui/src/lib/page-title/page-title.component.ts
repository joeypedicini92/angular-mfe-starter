import { Component, Input } from '@angular/core';

@Component({
  selector: 'starter-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input() text: string;
}
