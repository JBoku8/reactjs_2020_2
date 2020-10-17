import React from "react";
import PropTypes from "prop-types";

function Button({ className, type, text, onClick }) {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
