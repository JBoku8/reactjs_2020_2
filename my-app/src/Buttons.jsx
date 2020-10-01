import React from "react";

export const Button = (props) => {
  //   const { text = "Default" } = props;
  return (
    <button type="button" className={props.className}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Default",
  className: "",
};

export const SubmitButton = (props) => (
  <button type="submit">SubmitButton</button>
);
export const ResetButton = (props) => {
  return <button type="reset">ResetButton</button>;
};

export const Input = (props) => {
  return <input type="button" defaultValue="Default" />;
};
