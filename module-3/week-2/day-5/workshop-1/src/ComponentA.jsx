import React from "react";
import ComponentB from "./ComponentB";
import { MyContext } from "./MyContext";
const ComponentA = (props) => {
  return (
    <div>
      <MyContext.Consumer>
        {(contextValue) => {
          return <div>Context value in Comp A {contextValue.counter}</div>;
        }}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
