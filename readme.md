# 🔑 **PWDCKR**

**Pwdckr** is a simple librairy to check password validation.

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
    hasUpperCase: true
    hasSpecialChar: true
    hasLowerCase: false //Don't check pwd for lowercase(s)
    hasNumber: false //Don't check pwd for number(s)
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
