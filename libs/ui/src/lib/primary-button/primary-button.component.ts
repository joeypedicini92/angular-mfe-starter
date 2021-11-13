import { Component, Input } from '@angular/core';

@Component({
  selector: 'starter-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  /**
   * The text to display in the button
   */
  @Input()
  get display(): string {
    return this._display;
  }
  set display(value: string) {
    this._display = value;
  }
  private _display = 'submit';
  /**
   * Used to determine if the loading spinner should display and the button be disabled
   */
  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = value;
    if (value) {
      this._disabled = value;
    }
  }
  private _loading = false;

  /**
   * Is the button disabled
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  private _disabled = false;
}
