import React from "react";
import { NavLink } from "react-router-dom";
const NavMain = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/toto/list">Toto list</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
