import React, { useContext, useState } from "react";

import LoginForm from "./components/container/Login/LoginForm";
import Registration from "./components/container/Registration/Registration";

import Nav from "./components/presentation/Nav/Nav.jsx";

import LocaleContext from "./context/LocaleContext";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const defaultLocaleValue = useContext(LocaleContext);

  const [locale, setLocale] = useState(defaultLocaleValue);

  const initialContext = {
    locale,
    toggleLocale() {
      if (locale === "en") setLocale("ge");
      else setLocale("en");
    },
  };

  // oldObject === newObject

  return (
    <div className="conatiner">
      <LocaleContext.Provider value={initialContext}>
        <Nav />
        <hr />
        {showLogin && (
          <LoginForm showRegistration={() => setShowLogin(false)} />
        )}
        {!showLogin && (
          <Registration
            showLoginForm={() => {
              setShowLogin(true);
            }}
          />
        )}
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
