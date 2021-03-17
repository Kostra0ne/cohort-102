import React from "react";
import "./App.css";
import GuitarList from "./Components/GuitarList";
import FormGuitar from "./Components/FormGuitar";
import guitarsJSON from "./guitars.json";

class App extends React.Component {
  state = {
    guitars: guitarsJSON,
  };

  addGuitar = (aValueFromChild) => {
    console.log(aValueFromChild, "again from parent");

    this.setState({ guitars: [aValueFromChild, ...this.state.guitars] });
  };

  render() {
    return (
      <div className="App">
        <GuitarList guitars={this.state.guitars} />
        <FormGuitar addGuitar={this.addGuitar} />
      </div>
    );
  }
}

export default App;
