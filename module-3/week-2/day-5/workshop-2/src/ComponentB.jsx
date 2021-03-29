import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div>
      <ComponentC propsFromCompB="Here are some other props my child" />
    </div>
  );
};

export default ComponentB;
