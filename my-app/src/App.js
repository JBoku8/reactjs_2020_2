import { NavLink, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/counter">Counter</NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
