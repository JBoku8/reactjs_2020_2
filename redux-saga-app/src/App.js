import { useDispatch } from "react-redux";

import { getData } from "./redux/actions";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => dispatch(getData())}
        />
      </header>
    </div>
  );
}

export default App;
