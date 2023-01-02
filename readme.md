# 🔑 **PWDCKR**

**Pwdckr** is a simple librairy to check password validation.

![demo.gif](https://github.com/neiwad/pwdckr/blob/main/public/demo.gif?raw=true)

## How to use?

```bash
pnpm install @neiwad/pwdckr
```

Create a Pwdckr instance with default validators

```ts
import { Pwdckr } from '@neiwad/pwdckr'
const pwdckr = new Pwdckr()
```

Create a Pwdckr instance with custom validators

```ts
import { Pwdckr } from '@neiwad/pwdckr'
const pwdckr = new Pwdckr({
    minLength: 10, 
    hasUpperCase: true,
    hasSpecialChar: true,
    hasLowerCase: false, //Don't check pwd for lowercase(s)
    hasNumber: false, //Don't check pwd for number(s)
})
```

## Params

| Param Name     | Type    | Default |
| -------------- | ------- | ------- |
| minLength      | int     | 8       |
| maxLength      | int     | 16      |
| hasNumber      | boolean | true    |
| hasSpecialChar | boolean | true    |
| hasUpperCase   | boolean | true    |
| hasLowerCase   | boolean | true    |

*hasSpecialChar note: currently pwdckr doesnt allow custom regex for special characteres checking. The current special char regex is: [!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*

## Methods

Update the value of the password

```ts
pwdckr.updateValue(value)
```

## Variables

Global status of pwdckr

```ts
pwdckr.isValid //return the global status of pwdckr (true | false)
```

Global status of validators

```ts
pwdckr.validators //return the status of validators
```

Example of validators status

```json
minLength: {
    "value": 8, //Defined only for minLength and maxLength
    "isValid": true,
    "isActive": true
},
maxLength: {
    "value": 8, //Defined only for minLength and maxLength
    "isValid": true,
    "isActive": true
},
hasNumber: {
    "isValid": true,
    "isActive": true
},
hasSpecialChar: {
    "isValid": true,
    "isActive": true
},
hasUpperCase: {
    "isValid": true,
    "isActive": true
},
hasLowerCase: {
    "isValid": true,
    "isActive": true
}
```
