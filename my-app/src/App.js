import React, { useContext, useEffect, useState } from "react";

import Main from "./components/container/Main/Main";

import LocaleContext from "./context/LocaleContext";
import AuthContext from "./context/AuthContext";

import "./App.css";

function App() {
  const defaultLocaleValue = useContext(LocaleContext);
  const defaultAuthValue = useContext(AuthContext);

  const [locale, setLocale] = useState(defaultLocaleValue);
  const [authed, setAuth] = useState(defaultAuthValue);

  const initialContext = {
    locale,
    toggleLocale() {
      if (locale === "en") setLocale("ge");
      else setLocale("en");
    },
  };

  const initialAuthContext = {
    authed,
    login() {
      setAuth(true);
    },
    logout() {
      // setTimeout(() => {`
      setAuth(false);
      // }, 2000);
    },
  };

  // oldObject === newObject

  return (
    <div className="conatiner">
      <LocaleContext.Provider value={initialContext}>
        <AuthContext.Provider value={initialAuthContext}>
          <Main />
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
