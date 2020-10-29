import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => {
        // console.log(authContext);
        if (authContext.authed) {
          return children;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
