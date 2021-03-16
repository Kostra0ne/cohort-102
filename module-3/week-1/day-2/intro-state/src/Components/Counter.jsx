import React, { Component } from "react";

// In order to have a state in a component
// it needs to be a class component
// This is true until React 16.8

class Counter extends Component {
  // If you dont use arrow functions for your methods you needs this

  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  //   handleIncrement() {
  //     // this.state.counter++;
  //     //0      1
  //     this.setState({ counter: this.state.counter + 1 });
  //     console.log("I am increment");
  //   }

  //   handleDecrement() {
  //     this.setState({ counter: this.state.counter - 1 });
  //     console.log("I am decrementing...");
  //   }

  /**
   *  If you use arrow functions for your methods you
   *  can write your state and methods this way
   *
   */

  state = {
    counter: 1,
    // isAdmin: true,
    // name: "Foo",
  };

  handleIncrement = () => {
    // this.state.counter++;
    //0      1
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state);
      //If youwant to log your state after it has changed
      // you can use the callback
      console.log(this.state.counter, "in callback");
    });
    console.log(this.state.counter, "State not in call back");
    // console.log("I am increment");
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
    console.log("I am decrementing...");
  };

  render() {
    // console.log(this.state.counter);
    // console.log("Wohoooooooo");
    // // this.setState({}); // Do not do this setState will call render and so on... infinit loop !
    // let message;

    // if (this.state.counter > 10) {
    //   message = <div>{this.props.positiveMessage}</div>;
    // } else {
    //   message = <div>{this.props.negativeMessage}</div>;
    // }

    return (
      <div>
        <h1>
          {this.props.person} has {this.state.counter} likes
        </h1>

        {/* Guard operator */}
        {this.state.counter > 10 && <div>{this.props.positiveMessage}</div>}
        {this.state.counter <= 10 && <div>{this.props.negativeMessage}</div>}
        {/* <h3>{this.state.counter > 10 ? <div>Yay</div> : <div>Naaay</div>} </h3> */}

        {/* <h3>{message}</h3> */}

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {/* <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Decrement
        </button> */}
      </div>
    );
  }
}

export default Counter;
