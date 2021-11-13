import { FormControl } from '@angular/forms';
import { InputType } from './input.types';
export declare class InputComponent {
    get type(): InputType;
    set type(value: InputType);
    private _type;
    get value(): string;
    set value(value: string);
    get placeholder(): string;
    set placeholder(value: string);
    private _placeholder;
    get internalControl(): FormControl;
    set internalControl(value: FormControl);
    private _formControl;
    private getValidators;
    get required(): boolean;
    set required(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    get errors(): Record<string, any>;
    handleInput(inputText: string): void;
}
