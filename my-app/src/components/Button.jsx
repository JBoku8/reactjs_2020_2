import React from "react";
import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: "Hello React",
};

export default Button;
