import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "styles/NavMain.scss";
import { CounterContext } from "Store/CounterContext";
import Button from "Components/Button";

const NavMain = (props) => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <nav className="NavMain">
      <Button type="success" onClick={() => setCounter(counter + 1)}>
        Change counter {counter}!
      </Button>
      <ul className="NavMain__list">
        <li className="NavMain__item">
          <NavLink exact to="/" className="NavMain__link">
            Home
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink to="/intro" className="NavMain__link">
            Intro
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink to="/class-async" className="NavMain__link">
            Class Async
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink to="/hook-async" className="NavMain__link">
            Hook Async
          </NavLink>
        </li>
        <li className="NavMain__nav-item">
          <NavLink to="/dependencies" className="NavMain__link">
            Dependencies
          </NavLink>
        </li>
        <li className="NavMain__item">
          <NavLink to="/form" className="NavMain__link">
            Form Example
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
