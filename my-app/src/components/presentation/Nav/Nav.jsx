import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../../context";
import AuthContext from "../../../context/AuthContext";

function Nav(props) {
  const { locale, toggleLocale } = useContext(Context.LocaleContext);
  const authContext = useContext(AuthContext);

  // console.log(locale);

  return (
    <div className="text-center">
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>

          {!authContext.authed && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
          )}

          {!authContext.authed && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
          )}

          {authContext.authed && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/profile"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "en"}
          onClick={toggleLocale}
        >
          EN
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "ge"}
          onClick={toggleLocale}
        >
          GE
        </button>
      </div>
    </div>
  );
}

export default Nav;
