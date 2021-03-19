import React from "react";
import "./App.css";
import Counter from "./Components/Counter";

class App extends React.Component {
  state = {
    toggleCounter: true,
    name: "",
  };

  handleToggleCounter = () => {
    this.setState({ toggleCounter: !this.state.toggleCounter });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <button onClick={this.handleToggleCounter}>Display Counter</button>
        {this.state.toggleCounter && <Counter name={this.state.name} />}
      </div>
    );
  }
}

export default App;
