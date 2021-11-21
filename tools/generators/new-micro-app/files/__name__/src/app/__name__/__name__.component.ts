import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable as WindowedObservable } from 'windowed-observable';

/**
 * This class is meant to be loaded from a remote route.
 * Windowed Observable is used to communicate with the remote route
 * Route Data is used to pass data in as input properties
 * @example
 * {
 *   name: 'client',
 *   title: 'Client Login Page',
 *   forgotPasswordRoute: 'forgot-password'
 * }
 */
@Component({
  selector: 'bf-<%= name %>-entry',
  template: `
    <div>{{testProp}}</div>
  `,
  styleUrls: ['./<%= name %>.component.scss'],
})
export class <%= nameComponent %> {
  testProp = 'Hello from <%= name %>'
}
