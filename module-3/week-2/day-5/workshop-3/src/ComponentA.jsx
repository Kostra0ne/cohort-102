import React from "react";
import ComponentB from "./ComponentB";
import { withMyContextValue } from "./MyContext";

const ComponentA = (props) => {
  console.log(props);
  return (
    <div>
      <div>In component A:{props.contextValue.name}</div>
      <ComponentB />
    </div>
  );
};

export default withMyContextValue(ComponentA);
