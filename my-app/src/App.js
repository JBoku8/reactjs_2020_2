import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

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
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NotFound(props) {
  return (
    <div>
      <h2>Page Not Found</h2>
      <hr />
      <Link to="/">Home</Link>
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
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/counter" component={Counter} />

          <Suspense fallback={<Spinner name="Blog" />}>
            <Route path="/blog" component={Blog} />
          </Suspense>

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
