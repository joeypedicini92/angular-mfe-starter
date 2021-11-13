export declare class PrimaryButtonComponent {
    /**
     * The text to display in the button
     */
    get display(): string;
    set display(value: string);
    private _display;
    /**
     * Used to determine if the loading spinner should display and the button be disabled
     */
    get loading(): boolean;
    set loading(value: boolean);
    private _loading;
    /**
     * Is the button disabled
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
}
