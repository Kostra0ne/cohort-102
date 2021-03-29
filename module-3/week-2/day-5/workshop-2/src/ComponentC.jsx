// import React from "react";
// import { MyContext } from "./MyContext";

// const ComponentC = () => {
//   return (
//     <div>
//       <h5>Hello i'm component C</h5>
//       <MyContext.Consumer>
//         {(contextValue) => {
//           return (
//             <div>
//               <h3>{contextValue.name}</h3>
//               <input onChange={contextValue.handleChange} />
//             </div>
//           );
//         }}
//       </MyContext.Consumer>
//     </div>
//   );
// };

// export default ComponentC;

import React from "react";
import { withMySexyContextValue } from "./MyContext";

const ComponentC = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Hello i'm comp c</h2>
    </div>
  );
};

export default withMySexyContextValue(ComponentC);

// import React, { Component } from "react";
// import MyContext from "./MyContext";

// class ComponentC extends Component {
//   static contextType = MyContext;

//   render() {
//     console.log(this);
//     return <div>{this.context.name}</div>;
//   }
// }

// export default ComponentC;
