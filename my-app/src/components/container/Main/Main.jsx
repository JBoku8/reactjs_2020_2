import React, { useContext, useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Registration from "../Registration/Registration";
import NotFound from "../../presentation/NotFound/NotFound";
import LoginForm from "../Login/LoginForm";
import Profile from "../Profile/Profile";
import Nav from "../../presentation/Nav/Nav";
import Home from "../Home/Home";
import PrivateRoute from "../../presentation/PrivateRoute/PrivateRoute";

import AuthContext from "../../../context/AuthContext";
import { getToken } from "../../../service/auth";

function Main(props) {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (getToken()) {
      authContext.login();
    } else {
      authContext.logout();
    }
  }, [authContext.authed]);

  return (
    <React.Fragment>
      <Nav />
      <hr />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          <LoginForm />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Main;
