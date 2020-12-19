import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import configContext from "./context/configContext";
import config from "./.env.config.json";

import {
  // getPostCountAsync,
  getPostsListAsync,
} from "./redux/actions/postActions";
import "./App.css";
import Posts from "./components/Posts";

function App({ env }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPostCountAsync());
    dispatch(getPostsListAsync());
  }, [dispatch]);
  return (
    <configContext.Provider value={config[env]}>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
        </Switch>
      </div>
    </configContext.Provider>
  );
}

export default App;
