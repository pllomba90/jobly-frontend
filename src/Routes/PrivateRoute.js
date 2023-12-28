import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../helpers/UserContext"


function PrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "currentUser=", currentUser,
  );
  return (
      currentUser ? <Outlet/> : <Navigate to="/login" />
  );
}

export default PrivateRoute;