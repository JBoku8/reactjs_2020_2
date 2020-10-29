import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound(props) {
  const location = useLocation();
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="text-center text-danger">
        Requested page {location.pathname} not found.
      </h2>
      <br />
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;
