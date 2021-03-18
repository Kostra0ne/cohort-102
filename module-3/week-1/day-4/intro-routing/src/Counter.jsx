import React, { Component } from "react";
class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
