import React from "react";
import "./Theme.css";

const ThemeStyles = {
  "theme--light": {
    background: "lightblue",
    color: "#333",
  },
  "theme--dark": {
    background: "darkcyan",
    color: "#efefef",
  },
};

function Theme({ theme = "theme--light", children }) {
  return (
    <div className={`conatiner theme`} style={ThemeStyles[theme]}>
      {children}
    </div>
  );
}

export default Theme;
