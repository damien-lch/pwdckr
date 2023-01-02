const { Pwdckr } = require("../dist/index.js");

test("Create Pwdckr", () => {
  const pwdckr = new Pwdckr();
  expect(pwdckr).not.toBe(null);
});

describe("Default Settings", () => {
  const pwdckr = new Pwdckr();
  test("Pass too small", () => {
    pwdckr.updateValue("a");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass too long", () => {
    pwdckr.updateValue("aaaaaaaaaaaaaaaaa");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass no uppercase", () => {
    pwdckr.updateValue("aaaaaaaaaaaaaaaa");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass no lowercase", () => {
    pwdckr.updateValue("AAAAAAAAAAAAAAAA");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass no number", () => {
    pwdckr.updateValue("AAAAAAAAAAAAAAAA");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass no special character", () => {
    pwdckr.updateValue("AAAAAAAAAAAAAAAA");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Good password", () => {
    pwdckr.updateValue("Abcdef!123");
    expect(pwdckr.isValid).toBe(true);
  });
});

describe("Custom Settings (only length validator)", () => {
  const pwdckr = new Pwdckr({
    minLength: 5,
    maxLength: 10,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  test("Pass too small", () => {
    pwdckr.updateValue("a");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass too long", () => {
    pwdckr.updateValue("aaaaaaaaaaaaaaaaa");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass without uppercase", () => {
    pwdckr.updateValue("aaaaaaaaaa");
    expect(pwdckr.isValid).toBe(true);
  });

  test("Pass without lowercase", () => {
    pwdckr.updateValue("AAAAAAAAAA");
    expect(pwdckr.isValid).toBe(true);
  });

  test("Pass no number", () => {
    pwdckr.updateValue("AAAAAAAAAA");
    expect(pwdckr.isValid).toBe(true);
  });

  test("Pass no special character", () => {
    pwdckr.updateValue("AAAAAAAAAA");
    expect(pwdckr.isValid).toBe(true);
  });

  test("Good password", () => {
    pwdckr.updateValue("Abcdef!123");
    expect(pwdckr.isValid).toBe(true);
  });
});

describe("Custom Settings (only uppercase validator)", () => {
  const pwdckr = new Pwdckr({
    hasUpperCase: true,
  });

  test("Pass without uppercase", () => {
    pwdckr.updateValue("aaaaaaaaaa");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass with uppercase", () => {
    pwdckr.updateValue("Aaaaaaaaaa");
    expect(pwdckr.isValid).toBe(true);
  });
});

describe("Custom Settings (only special char validator)", () => {
  const pwdckr = new Pwdckr({
    hasSpecialChar: true,
  });

  test("Pass without special char", () => {
    pwdckr.updateValue("aaaaaaaaaa");
    expect(pwdckr.isValid).toBe(false);
  });

  test("Pass with special char", () => {
    pwdckr.updateValue("Aaaaaaaaa!");
    expect(pwdckr.isValid).toBe(true);
  });
});
