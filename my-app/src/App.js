import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import Theme from "./Theme";

const Title = ({ text }) => <h1>{text}</h1>;

const Hello = ({ name, age }) => {
  // const
  const calcYear = () => new Date().getFullYear() - age;

  return (
    <>
      <h1>Hello, {name}</h1>
      <h3>You're {age} years old</h3>
      <h3>Birth Year - {calcYear()}</h3>
    </>
  );
};

function App(props) {
  const [counter, setCounter] = useState(props.counter);
  const [inputValue, setInputValue] = useState("");
  const [showNames, setShowNames] = useState(false);

  const names = ["John", "James", "Anna", "William"];

  // console.log(counter, setCounter);

  const name = "James";
  const age = 34;

  useEffect(() => {
    console.log("RENDERING");
    if (counter === 7) {
      setShowNames(true);
    } else {
      setShowNames(false);
    }
    // setCounter(counter + 1);
  }, [counter, setShowNames]);

  // const timerId = setTimeout(() => {
  //   setCounter(counter + 1);
  // }, 1000);

  // if (counter === 6) {
  //   console.log("timerId", timerId);
  //   clearTimeout(timerId);
  // }
  // console.log("rendering", counter);

  const handleClick = (event) => {
    setCounter(counter + 1);
  };

  const handleClickMinus = (value) => {
    return (event) => {
      // console.log(event.target);
      setCounter(counter - value);
    };
  };

  if (counter === 40) {
    return null;
  }

  return (
    <div className="App">
      <Theme theme={inputValue}>
        {showNames &&
          names.map((n, index) => {
            return <Title key={`${n}-${index}`} text={n} />;
          })}

        <hr />
        <Title text={`Inital Value - ${props.counter}`} />
        <Title text={counter} />
        {/* <Hello name={name} age={age} />
      <hr />
      <Hello name="Anna" age={13 * 2} /> */}

        {/* <button onClick={handleClick}>Plus</button> */}
        {/* <button
        onClick={(event) => {
          setCounter(0);
        }}
      >
        Zero
      </button> */}
        {/* <button onClick={handleClickMinus(2)}>Minus 2</button> */}

        <Button text="Plus" onClick={handleClick} />
        <Button
          text="Zero"
          onClick={() => {
            setCounter(0);
          }}
        />
        <Button text="Minus 2" onClick={handleClickMinus(2)} />

        <hr />
        <Title text={inputValue} />
        <Input
          placeholder="Start Typing..."
          value={inputValue}
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
      </Theme>
    </div>
  );
}

export default App;
