import React, { useEffect, useState } from "react";
import Input from "../../presentation/Input/Input";
import Form from "../../presentation/Form/Form";
import Button from "../../presentation/Input/Button";

import { login, setToken, getToken, removeToken } from "../../../service/auth";
import { LoginInputs } from "../../../constants";

import styles from "./LoginForm.module.css";

function LoginForm(props) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;

    const loginData = {
      email: target.inputEmail.value,
      password: target.password.value,
    };
    const { token } = await login(loginData);

    if (token) {
      setToken(token);
      setIsAuth(true);
    }

    // loginRequest
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(responseData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onLogOut = (event) => {
    removeToken();
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <div className="container text-center">
        <h1 className={styles["text-red"]}>Already logged in.</h1>
        <Button
          type="button"
          text="Log Out"
          className="btn btn-info"
          onClick={onLogOut}
        />
      </div>
    );
  }

  return (
    <Form className="form-signin" onSubmit={onSubmit}>
      <h1 className={`h3 mb-3 font-weight-normal ${styles["text-red"]}`}>
        Please sign in
      </h1>

      <Input {...LoginInputs.email} />
      <Input {...LoginInputs.password} />

      {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> */}
      <Button {...LoginInputs.button} />
    </Form>
  );
}

export default LoginForm;
