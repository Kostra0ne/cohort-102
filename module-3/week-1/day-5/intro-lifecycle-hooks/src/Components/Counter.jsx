import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      shoes: [],
    };

    console.log("In the constructor");
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ shoes: ["Air Max"] });
    // }, 3000);
    console.log("Component has mounted !");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      if (this.state.counter === 10) {
        setTimeout(() => {
          this.setState({ shoes: ["Requin", ...this.state.shoes] });
        }, 3000);
      }
    }
  }

  componentWillUnmount() {
    console.log("K.OOOOOOOOOOOOOO");
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("I have rendered");
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <p>{this.props.name}</p>
        <button onClick={this.handleIncrement}>Increment</button>

        {this.state.shoes.map((shoe) => (
          <p key={shoe}>{shoe}</p>
        ))}
      </div>
    );
  }
}

export default Counter;
