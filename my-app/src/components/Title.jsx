import React from "react";
import PropTypes from "prop-types";

function Title({ text, children }) {
  const onTitleClick = (event) => {
    // alert(`${text} clicked.`);
  };

  return (
    <h1 onClick={onTitleClick}>
      {text} {children}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  text: "Hello React",
};

export default Title;
