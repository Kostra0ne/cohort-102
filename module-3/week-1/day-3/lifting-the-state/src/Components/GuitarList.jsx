import React, { Component } from "react";
import guitarsJSON from "../guitars.json";

class GuitarList extends Component {
  // state = {
  //   guitars: this.props.guitars, // NEVER DO THIS
  // };

  state = {
    darkTheme: false,
  };

  toggleDarkTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.darkTheme ? "black" : "ghostwhite",
          color: this.state.darkTheme ? "white" : "black",
        }}
      >
        {this.props.guitars.map((guitar, index) => {
          return (
            <div key={index}>
              <p>{guitar.brand}</p>
              <p>{guitar.name}</p>
              {guitar.inStock && <p>This product is in stock</p>}
            </div>
          );
        })}
        <button onClick={this.toggleDarkTheme}>TOggle darktheme</button>
      </div>
    );
  }
}

export default GuitarList;
