import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "../../presentation/Input/Input";
import Form from "../../presentation/Form/Form";
import Button from "../../presentation/Input/Button";

import LocaleContext from "../../../context/LocaleContext";
import AuthContext from "../../../context/AuthContext";

import {
  login,
  setToken,
  getToken,
  removeToken,
  loginAxios,
} from "../../../service/auth";
import { LoginInputs, RegisterInputs } from "../../../constants";
import translations from "../../../locale";

import styles from "./LoginForm.module.css";

function LoginForm({ showRegistration }) {
  const { locale } = useContext(LocaleContext);
  const authContext = useContext(AuthContext);
  const [translate, setTranslate] = useState(translations[locale]);
  const histroy = useHistory();

  useEffect(() => {
    setTranslate(translations[locale]);
  }, [locale]);

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
      authContext.login();
      histroy.push("/profile");
    }

    // const response = await loginAxios(loginData);
    // console.log(response);
  };

  const onLogOut = (event) => {
    removeToken();
    authContext.logout();
  };

  if (authContext.authed) {
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
      <Button {...LoginInputs.button} text={translate.login.LoginBtnText} />
      <hr />

      <Link className={RegisterInputs.button.className} to="/register">
        {translate.login.RegisterBtnText}
      </Link>
    </Form>
  );
}

LoginForm.propTypes = {
  showRegistration: PropTypes.func,
};

export default LoginForm;
