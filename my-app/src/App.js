import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import { routes } from "./routes";

// import Blog from "./pages/Blog";
const Blog = React.lazy(() => {
  return import("./pages/Blog");
});

function Nav(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/redux-counter">Redux Counter</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const Spinner = ({ name }) => {
  return <div>{name} is Loading...</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {routes.map((route) => {
            return (
              <Route path={route.path} exact={route.exact} key={route.path}>
                {<route.component />}
              </Route>
            );
          })}

          {/* <Suspense fallback={<Spinner name="Blog" />}>
            <Route path="/blog" component={Blog} />
          </Suspense> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
