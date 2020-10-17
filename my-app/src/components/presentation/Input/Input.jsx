import React from "react";
import PropTypes from "prop-types";

function Input({
  labelClassName,
  labelText,
  type,
  id,
  className,
  placeholder,
  required,
  autoFocus,
  name,
}) {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        name={name}
      />
    </>
  );
}

Input.propTypes = {
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default Input;
