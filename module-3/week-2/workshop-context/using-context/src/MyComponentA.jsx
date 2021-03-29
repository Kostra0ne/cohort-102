import React from "react";
import MyCompnentB from "./MyComponentB";
import { withMyContext } from "./MyContext";

const MyComponentA = (props) => {
  return (
    <div>
      <h1>This is display in parent: {props.myContextValue.counter}</h1>
      <MyCompnentB />
    </div>
  );
};

export default withMyContext(MyComponentA);
