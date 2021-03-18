import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";

const NavMain = (props) => {
  console.log(props);

  let searchBar;

  if (props.location.pathname !== "/contact") {
    searchBar = <input type="text" placeholder="Search" />;
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </li>

        {/* {searchBar} */}
      </ul>
    </nav>
  );
};

export default withRouter(NavMain);
