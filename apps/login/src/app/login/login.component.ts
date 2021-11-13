import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable as WindowedObservable } from 'windowed-observable';
import { markAllAsTouched } from '../utils/form.utils';

export interface UserData {
  email: string;
  password: string;
}
export interface LoginData {
  user: UserData;
  name: string;
}

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
  selector: 'starter-login-entry',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <div class="container">
      <starter-page-title [text]="title"></starter-page-title>
      <starter-form-title-text text="Title Here"></starter-form-title-text>
      <form
        role="form"
        name="loginForm"
        class="flex-form"
        novalidate
        [formGroup]="loginForm"
        (submit)="submitForm()"
      >
        <starter-input
          name="email"
          [internalControl]="getControl('email')"
          [type]="'email'"
          [placeholder]="'Email'"
        ></starter-input>

        <starter-input
          name="password"
          [internalControl]="getControl('password')"
          [type]="'password'"
          [placeholder]="'Password'"
        ></starter-input>

        <starter-primary-button
          [disabled]="loginForm.invalid"
          [loading]="loading"
          [display]="'sign in'"
        ></starter-primary-button>

        <a
          class="pull-right"
          [routerLink]="cleanedForgotPasswordRoute"
          >Forgot Your Password?</a
        >
      </form>
    </div>
  `,
  styleUrls: [
    './login.component.scss',
    '../app.component.scss',
    '../../../../../libs/ui/src/styles.scss',
  ],
})
export class LoginComponent implements OnInit {
  /**
   * Observable to listen to when login button pressed
   */
  onLoginObservable$ = new WindowedObservable('onLogin');
  /**
   * Observable to listen to when an error occurs during login
   */
  loginErrorObservable$ = new WindowedObservable('onLoginError');
  /**
   * Page Title
   */
  title = 'Title Goes Here';
  /**
   * Page Identifier
   */
  name = '';
  /**
   * Route to navigate to when "forgot password" button clicked
   */
  forgotPasswordRoute = 'forgot-password';
  cleanedForgotPasswordRoute: string;

  loginForm: FormGroup;
  loading = false;

  /**
   *
   * Called when "sign in" button clicked. Will publish a windowed observable
   */
  onLogin = (data: LoginData) => {
    this.onLoginObservable$.publish({
      user: data,
      name: this.name,
    });
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.createForm();
  }

  ngOnInit() {
    const d = this.route.snapshot.data;
    this.name = d['name'] || this.name;
    this.title = d['title'] || this.title;
    this.forgotPasswordRoute =
      d['forgotPasswordRoute'] || this.forgotPasswordRoute;
    this.loginErrorObservable$.subscribe(() => {
      this.loading = false;
    });
    this.cleanedForgotPasswordRoute =
      window.location.pathname.replace(
        'login',
        this.forgotPasswordRoute,
      );
  }

  submitForm() {
    markAllAsTouched(this.loginForm);
    if (this.loginForm.valid) {
      this.loading = true;
      this.onLogin(this.loginForm.value);
    }
  }

  getControl(name: string) {
    return this.loginForm.controls[name] as FormControl;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, {
        validators: Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      }),
      password: new FormControl(null, {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ]),
      }),
    });
  }
}
