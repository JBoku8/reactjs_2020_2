import React from "react";

const Input = ({ placeholder, value, onChange, name }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
