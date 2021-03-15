import React from "react";
import "../styles/Box.css";

const Box = (props) => {
  return <div className="Box">{props.children}</div>;
};

export default Box;
