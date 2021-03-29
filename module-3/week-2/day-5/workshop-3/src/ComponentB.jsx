import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  return (
    <div>
      <ComponentC propsFromCOmpB="Props From Comp B" />
    </div>
  );
};

export default ComponentB;
