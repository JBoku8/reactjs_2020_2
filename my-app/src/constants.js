export const BASE_API_URL = "https://reqres.in/api";

export const USER_TOKEN_KEY = "USER_TOKEN";

/**
 *
 * LOGIN INPUTS
 */

export const LoginInputs = {
  email: {
    labelClassName: "sr-only",
    labelText: "Email address",
    type: "email",
    id: "inputEmail",
    className: "form-control",
    placeholder: "Email address",
    required: true,
    autoFocus: true,
    name: "email",
  },
  password: {
    labelClassName: "sr-only",
    labelText: "Password",
    type: "password",
    id: "password",
    className: "form-control",
    placeholder: "Password",
    required: true,
    name: "password",
  },
  button: {
    className: "btn btn-lg btn-primary btn-block",
    type: "submit",
    text: "Sign in",
  },
};

export const RegisterInputs = {
  email: {
    labelClassName: "sr-only",
    labelText: "Email address",
    type: "email",
    id: "inputEmail",
    className: "form-control",
    placeholder: "Email address",
    required: true,
    autoFocus: true,
    name: "email",
  },
  password: {
    labelClassName: "sr-only",
    labelText: "Password",
    type: "password",
    id: "password",
    className: "form-control",
    placeholder: "Password",
    required: true,
    name: "password",
  },
  button: {
    className: "btn btn-lg btn-info btn-block",
    type: "submit",
    text: "Sign Up",
  },
};
