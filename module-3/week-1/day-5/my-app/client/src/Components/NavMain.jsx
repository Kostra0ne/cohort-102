import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/guitars">Guitars</NavLink>
    </nav>
  );
};

export default NavMain;
