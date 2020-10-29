import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { removeToken } from "../../../service/auth";

function Profile(props) {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center">Profile Page</h2>
      <button
        className="btn btn-default btn-info"
        onClick={() => {
          removeToken();
          logout();
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
