import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

// const div = (
//   <div id="my-div-id">
//     <h1 className="title">h1 Title reactJs</h1>
//   </div>
// );

// React.createElement
// Step 2
// const div = React.createElement(
//   "div",
//   { id: "my-div-id" },
//   React.createElement("h1", { className: "title" }, "h1 title reactjs")
// );

// Plain Js
// Step 3 Finish
// const DomDiv = document.createElement("div");
// DomDiv.setAttribute("id", "my-div-id");
// const h1First = document.createElement("h1");
// const h1Second = document.createElement("h1");

// h1First.innerText = "h1First Title";
// h1First.classList.add("title");
// DomDiv.appendChild(h1First);
// DomDiv.appendChild(h1Second);

// h1Second.innerText = "h1Second Title";
// document.body.appendChild(DomDiv);

// document.addEventListener("click", () => {
//   h1Second.innerHTML = `<b>Document ${Math.random()}</>`;
// });

// ReactDOM.render(div, document.getElementById("app"));
