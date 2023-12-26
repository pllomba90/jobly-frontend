import React, {useContext} from "react";
import { NavLink } from "reactstrap";
import "./Navbar.css";
import UserContext from "../helpers/UserContext";

const Navigation = ({logout}) => {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

 function loggedIn() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </NavLink>
          </li>
        </ul>
    );
  }

  function loggedOut() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
    );
  }
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <NavLink className="navbar-brand" to="/">
        Jobly
      </NavLink>
      {currentUser ? loggedIn() : loggedOut()}
    </nav>
);
}

export default Navigation;
