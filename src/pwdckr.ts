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
export class Pwdckr {
  protected _value: string = "";
  protected _isValid: boolean = false;
  protected _validators: Validators;
  constructor(validators) {
    this._validators = {
      ...this._validators,
      ...processValidators(validators),
    };
  }
  updateValue(value: string) {
    this._value = value;
    this._isValid = this.checkPassword();
  }
  get isValid() {
    return this._isValid;
  }
  get value() {
    return this._value;
  }
  get validators() {
    return this._validators;
  }
  checkPassword() {
    //Min length
    if (
      this._validators.minLength.isActive &&
      this._value.length < this._validators.minLength.value
    ) {
      this._validators.minLength.isValid = false;
      return false;
    }
    //Max length
    if (
      this._validators.maxLength.isActive &&
      this._value.length > this._validators.maxLength.value
    ) {
      this._validators.maxLength.isValid = false;
      return false;
    }
    //Has number
    if (this._validators.hasNumber.isActive && !/\d/.test(this._value)) {
      this._validators.hasNumber.isValid = false;
      return false;
    }
    //Has special char
    if (
      this._validators.hasSpecialChar.isActive &&
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this._value)
    ) {
      this._validators.hasSpecialChar.isValid = false;
      return false;
    }
    //Has upper case
    if (this._validators.hasUpperCase.isActive && !/[A-Z]/.test(this._value)) {
      this._validators.hasUpperCase.isValid = false;
      return false;
    }
    //Has lower case
    if (this._validators.hasLowerCase.isActive && !/[a-z]/.test(this._value)) {
      this._validators.hasLowerCase.isValid = false;
      return false;
    }
    return true;
  }
}

const processValidators = (validators): Validators => {
  if (!validators) validators = DEFAULT_VALIDATORS;
  return {
    minLength: {
      isActive: validators?.minLength ? true : false,
      value: validators?.minLength ? validators?.minLength : 8,
      isValid: false,
    },
    maxLength: {
      isActive: validators?.maxLength ? true : false,
      value: validators?.maxLength ? validators?.maxLength : 16,
      isValid: false,
    },
    hasNumber: {
      isActive: validators?.hasNumber ? true : false,
      isValid: false,
    },
    hasSpecialChar: {
      isActive: validators?.hasSpecialChar ? true : false,
      isValid: false,
    },
    hasUpperCase: {
      isActive: validators?.hasUpperCase ? true : false,
      isValid: false,
    },
    hasLowerCase: {
      isActive: validators?.hasLowerCase ? true : false,
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
