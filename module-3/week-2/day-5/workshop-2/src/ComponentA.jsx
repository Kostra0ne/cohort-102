import React from "react";
import ComponentB from "./ComponentB";
import { MyContext } from "./MyContext";
const ComponentA = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(context) => {
          return <div>Value in CompA: {context.name}</div>;
        }}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
