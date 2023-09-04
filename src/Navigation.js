import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./Navigation.css";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  //STEP SIX: SHOW LINKS TO LOGIN (SHOW USERNAME)
  //HAVE HOMEPAGE SHOW LOGGED OUT
  function loggedInNav() {
    return (
      <ul>
        <li>
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
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
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;
