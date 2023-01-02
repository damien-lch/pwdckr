type Validator = {
    isActive: boolean;
    value?: number;
    isValid: boolean;
};
type Validators = {
    minLength: Validator;
    maxLength: Validator;
    hasNumber: Validator;
    hasSpecialChar: Validator;
    hasUpperCase: Validator;
    hasLowerCase: Validator;
};
export declare class Pwdckr {
    protected _value: string;
    protected _isValid: boolean;
    protected _validators: Validators;
    constructor(validators: any);
    updateValue(value: string): void;
    get isValid(): boolean;
    get value(): string;
    get validators(): Validators;
    checkPassword(): boolean;
}
export {};
