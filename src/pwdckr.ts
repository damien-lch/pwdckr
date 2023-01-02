export type Validator = {
  isActive: boolean;
  value?: number;
  isValid: boolean;
};
export type Validators = {
  minLength: Validator;
  maxLength: Validator;
  hasNumber: Validator;
  hasSpecialChar: Validator;
  hasUpperCase: Validator;
  hasLowerCase: Validator;
};
export class Pwdckr {
  protected _value: string = "";
  protected _isValid: boolean = false;
  protected _validators: Validators;
  constructor(validators = DEFAULT_VALIDATORS) {
    this._validators = {
      ...this._validators,
      ...processValidators(validators),
    };
  }
  updateValue(value: string) {
    this._value = value;
    this._isValid = this.checkPassword();
  }
  get isValid(): boolean {
    return this._isValid;
  }
  get value(): string {
    return this._value;
  }
  get validators(): Validators {
    return this._validators;
  }
  checkPassword() {
    //Min length
    if (this._validators.minLength.isActive) {
      this._validators.minLength.isValid =
        this._value.length >= this._validators.minLength.value;
    }

    //Max length
    if (this._validators.maxLength.isActive) {
      this._validators.maxLength.isValid =
        this._value.length <= this._validators.maxLength.value;
    }

    //Has number
    if (this._validators.hasNumber.isActive) {
      this._validators.hasNumber.isValid = /\d/.test(this._value);
    }

    //Has special char
    if (this._validators.hasSpecialChar.isActive) {
      this._validators.hasSpecialChar.isValid =
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this._value);
    }

    //Has upper case
    if (this._validators.hasUpperCase.isActive) {
      this._validators.hasUpperCase.isValid = /[A-Z]/.test(this._value);
    }

    //Has lower case
    if (this._validators.hasLowerCase.isActive) {
      this._validators.hasLowerCase.isValid = /[a-z]/.test(this._value);
    }

    //Check if all validators are valid
    for (const key in this._validators) {
      if (this._validators[key].isActive && !this._validators[key].isValid) {
        return false;
      }
    }
    return true;
  }
}

const processValidators = (validators): Validators => {
  return {
    minLength: {
      isActive: !!validators?.minLength,
      value: validators?.minLength || 8,
      isValid: false,
    },
    maxLength: {
      isActive: !!validators?.maxLength,
      value: validators?.maxLength || 16,
      isValid: false,
    },
    hasNumber: {
      isActive: !!validators?.hasNumber,
      isValid: false,
    },
    hasSpecialChar: {
      isActive: !!validators?.hasSpecialChar,
      isValid: false,
    },
    hasUpperCase: {
      isActive: !!validators?.hasUpperCase,
      isValid: false,
    },
    hasLowerCase: {
      isActive: !!validators?.hasLowerCase,
      isValid: false,
    },
  };
};

const DEFAULT_VALIDATORS = {
  minLength: 8,
  maxLength: 16,
  hasNumber: true,
  hasSpecialChar: true,
  hasUpperCase: true,
  hasLowerCase: true,
};
