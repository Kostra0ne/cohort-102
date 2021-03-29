import React, { Component } from "react";
import { MyContext } from "./MyContext";
import { withMyContextValue } from "./MyContext";

// const ComponentC = (props) => {
//   console.log(props, "props in CompC");
//   return (
//     <div>
//       <h1>Hello i'm COmponent C!</h1>
//       <MyContext.Consumer>
//         {(myContextValue) => {
//           console.log(myContextValue);
//           return (
//             <div>
//               <h1>Context value in Comp C {myContextValue.counter}</h1>
//               <button onClick={myContextValue.toto}>Increment !</button>
//             </div>
//           );
//         }}
//       </MyContext.Consumer>
//     </div>
//   );
// };

// export default withMyContextValue(ComponentC);

const ComponentC = (props) => {
  console.log(props, "props in component C");
  return (
    <div>
      <h1>Value from context provider: {props.context.counter}</h1>
      <button onClick={props.context.handleIncrement}>Increment</button>
    </div>
  );
};

export default withMyContextValue(ComponentC);

// //Reading from within a class
// import React, { Component } from "react";
// import MyContext from "./MyContext";

// class ComponentC extends Component {
// //   static contextType = MyContext;

//   render() {
//     console.log(this);
//     return (
//       <div>
//         <h1>Hello from component c</h1>
//         <h2>{this.context.name}</h2>
//       </div>
//     );
//   }
// }

// export default ComponentC;
