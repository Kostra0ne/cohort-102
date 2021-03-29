// import React from "react";
import React, { Component } from "react";
import { withMyContext, MyContext } from "./MyContext";

const MyComponentC = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello i'm the grand grand child !</h1>
      <h2>{props.myContextValue.counter}</h2>
      {/* <MyContext.Consumer>
        {(context) => <div>{context.name}</div>}
      </MyContext.Consumer> */}
      <p>{props.myContextValue.name}</p>
      <button onClick={props.myContextValue.incrementCounter}>
        Increment value
      </button>
    </div>
  );
};

export default withMyContext(MyComponentC);

// import MyContext from "./MyContext";

// class MyComponentC extends Component {
//   //   static contextType = MyContext;

//   render() {
//     console.log(this.props, "in class");
//     return (
//       <div>
//         <h1> </h1>
//         <button onClick={this.props.myContextValue.mycoolfn}>Click</button>
//       </div>
//     );
//   }
// }

// export default withMyContext(MyComponentC);
