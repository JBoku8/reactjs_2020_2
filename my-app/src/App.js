import React, { useState } from "react";
import Hello from "./Hello";
import { ResetButton, Button, SubmitButton, Input } from "./Buttons";

import "./App.css";

function App() {
  const [value, setValue] = useState("Default");

  const Person = {
    age: 12,
  };

  // console.log(navigator.userAgent);
  return (
    <div className="App">
      {/* {value} */}
      {/* <h1 onClick={() => setValue(Math.random())}>Click</h1> */}
      <Hello />
      <Button text="Click The Button!..." className="text-green" />
      <SubmitButton />
      <ResetButton />
      <Input />
    </div>
  );
}

export default App;
