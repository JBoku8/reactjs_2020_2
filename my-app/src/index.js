import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const counter = 1;

// const update = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App counter={counter} />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>,
  document.getElementById("root")
);

// setInterval(() => {
//   counter += 1;
//   update();
// }, 1000);
