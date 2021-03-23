import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "../styles/NavMain.css";

const NavMain = (props) => {
  const handleLogout = () => {
    // console.log("clickty click");

    axios
      .delete("http://localhost:4000/api/auth/logout", {
        withCredentials: true,
      })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="NavMain">
      <div className="NavMain__logo-container">
        <Link to="/">Auth</Link>
      </div>

      <div className="NavMain__links">
        {!props.isLoggedIn && (
          <NavLink className="NavMain__link" to="/signin">
            Signin
          </NavLink>
        )}
        {!props.isLoggedIn && (
          <NavLink className="NavMain__link" to="/signup">
            Signup
          </NavLink>
        )}
        {props.isLoggedIn && (
          <NavLink className="NavMain__link" to="/profile">
            Profile
          </NavLink>
        )}
        {props.isLoggedIn && <button onClick={handleLogout}>Logout !</button>}
      </div>
    </nav>
  );
};

export default NavMain;
