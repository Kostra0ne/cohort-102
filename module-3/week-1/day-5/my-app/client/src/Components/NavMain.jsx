import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/guitars">Guitars</NavLink>
      <NavLink to="/guitars/new">Create your guitars</NavLink>
    </nav>
  );
};

export default NavMain;
