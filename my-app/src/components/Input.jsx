import React from "react";

function Input({ placeholder, onChange }) {
  return (
    <React.Fragment>
      <input placeholder={placeholder} onChange={onChange} />
    </React.Fragment>
  );
}

export default Input;
