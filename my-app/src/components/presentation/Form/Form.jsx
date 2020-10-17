import { func } from "prop-types";
import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

function Form({ className, children, onSubmit }) {
  return (
    <React.Fragment>
      <h1 className={`text-center ${styles["text-red"]}`}>FORM</h1>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
