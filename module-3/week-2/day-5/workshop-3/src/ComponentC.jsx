import React from "react";
import MyContext from "./MyContext";
import { withMyContextValue } from "./MyContext";

const ComponentC = (props) => {
  console.log(props, "props in CompC");
  return (
    <div>
      <h1>Hello je suis composant C</h1>

      <div>
        <div>In component C: {props.contextValue.name}</div>
        <input
          type="text"
          value={props.contextValue.name}
          onChange={props.contextValue.handleChange}
        />
      </div>
    </div>
  );
};

export default withMyContextValue(ComponentC);

// import React, { Component } from "react";
// import MyContext from "./MyContext";

// class ComponentC extends Component {
//   static contextType = MyContext;

//   render() {
//     console.log(this);
//     return (
//       <div>
//         <h1>Hello je suis composant C</h1>
//         <p>{this.context}</p>
//       </div>
//     );
//   }
// }

// export default ComponentC;
