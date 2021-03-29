import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  return (
    <div>
      <ComponentC somePropValue="Prop from component B" />
    </div>
  );
};

export default ComponentB;
