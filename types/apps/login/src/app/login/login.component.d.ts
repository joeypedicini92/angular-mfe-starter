import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable as WindowedObservable } from 'windowed-observable';
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
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private route;
    /**
     * Observable to listen to when login button pressed
     */
    onLoginObservable$: WindowedObservable<any>;
    /**
     * Observable to listen to when an error occurs during login
     */
    loginErrorObservable$: WindowedObservable<any>;
    /**
     * Page Title
     */
    title: string;
    /**
     * Page Identifier
     */
    name: string;
    /**
     * Route to navigate to when "forgot password" button clicked
     */
    forgotPasswordRoute: string;
    cleanedForgotPasswordRoute: string;
    loginForm: FormGroup;
    loading: boolean;
    /**
     *
     * Called when "sign in" button clicked. Will publish a windowed observable
     */
    onLogin: (data: LoginData) => void;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute);
    ngOnInit(): void;
    submitForm(): void;
    getControl(name: string): FormControl;
    private createForm;
}
