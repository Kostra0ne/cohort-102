import React from "react";
import guitarsJSON from "../guitars.json";
import { Link } from "react-router-dom";

const GuitarList = (props) => {
  return (
    <div>
      {guitarsJSON.map((guitar) => {
        return (
          <div key={guitar.uuid}>
            <Link to={`/guitars/${guitar.uuid}`}>{guitar.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default GuitarList;
