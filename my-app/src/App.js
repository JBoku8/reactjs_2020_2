import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";

import enhenceComponent from "./hoc/enhenceComponent";
import Input from "./components/Input";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";

function Question({ answer }) {
  return (
    <div>
      Question?....
      <hr />
      The answer is {answer}
    </div>
  );
}

function Answer(props) {
  return <span>67</span>;
}

const AccountInfo = ({ children }) => {
  return (
    <div>
      <b>{children.firstName}</b> {children.lastName}
    </div>
  );
};

const AccountsList = ({ children, show }) => {
  if (!show) return <h4>List Hidden</h4>;
  return <div>{children()}</div>;
};

const UserInfo = ({ render, show }) => {
  if (show) {
    return render();
  }
  return <h4>Hidden</h4>;
};

const names = ["John", "Anna", "Samuel", "Rob"];

function App() {
  const [showNames, setShowNames] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const onButtonClick = (event) => {
    // console.log("Button Clicked");
    setShowNames(!showNames);
  };

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  const HeaderWithLoading = enhenceComponent(Header);
  const TitleWithLoading = enhenceComponent(Title);

  return (
    <div className="App">
      {/* <HeaderWithLoading title={<Title text="Fecthed Data." />}>
        <Navigation />
      </HeaderWithLoading>
      <br />
      <TitleWithLoading text="Hello Students">
        <span>React Group 2</span>
      </TitleWithLoading>
      <hr />
      <Title text="Hello Students">
        <span>React Group 2</span>
      </Title>
      <br />
      <Header title={<Title text="Without Loading." />}>
        <Navigation />
      </Header> */}

      <UserInfo
        render={() => {
          return <AccountInfo>{user}</AccountInfo>;
        }}
        show={showNames}
      />
      <AccountsList show={showNames}>
        {() => {
          return names.map((n, index) => {
            return <Title text={n} key={`${index}-${n}`} />;
          });
        }}
      </AccountsList>

      {/* {showNames &&
        names.map((n, index) => {
          return <Title text={n} key={`${index}-${n}`} />;
        })} */}

      <Button
        text={`${showNames ? "Hide" : "Show"} names`}
        onClick={onButtonClick}
      />

      <br />
      <br />
      <br />
      {/* <p>
        Typed: <b>{inputVal}</b>
      </p>
      <Input
        placeholder="type text"
        onChange={(event) => {
          setInputVal(event.target.value);
        }}
      /> */}
      <Counter />
      <hr />
      <ClassCounter />

      {/* <Question answer={<Answer />} /> */}
    </div>
  );
}

export default App;
