import React, { useContext } from "react";
import PropTypes from "prop-types";

import Input from "../../presentation/Input/Input";
import Form from "../../presentation/Form/Form";
import Button from "../../presentation/Input/Button";

import LocaleContext from "../../../context/LocaleContext";

import { RegisterInputs, LoginInputs } from "../../../constants";

function Registration({ showLoginForm }) {
  const locale = useContext(LocaleContext);
  console.log(locale);

  return (
    <Form className="form-signin">
      <h1 className={`h3 mb-3 font-weight-normal`}>Please sign up</h1>

      {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
      <Button {...RegisterInputs.button} />
      <hr />
      <Button {...LoginInputs.button} onClick={showLoginForm} />
    </Form>
  );
}

Registration.propTypes = {
  showLoginForm: PropTypes.func,
};

export default Registration;
