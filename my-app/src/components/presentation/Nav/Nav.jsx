import React, { useContext } from "react";

import Context from "../../../context";

function Nav(props) {
  const { locale, toggleLocale } = useContext(Context.LocaleContext);

  // console.log(locale);

  return (
    <div className="text-center">
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
