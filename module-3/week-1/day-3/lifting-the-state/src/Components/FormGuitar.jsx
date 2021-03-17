// Shortcut to generate a class component:

// rcc | rce
import React, { Component } from "react";

class FormGuitar extends Component {
  state = {
    brand: "",
    name: "",
    inStock: false,
  };

  handleChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    // const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    console.log(typeof this.props.myProp);
    // console.log(this.props.myProp("Hey my dude"));
    this.props.addGuitar({
      name: this.state.name,
      inStock: this.state.inStock,
      brand: this.state.brand,
    });
    // this.setState({
    //   name: "",
    //   brand: "",
    //   inStock: false,
    // });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            // onChange={this.handleBrandChange}
            onChange={this.handleChange}
            value={this.state.brand}
            id="brand"
            ref={this.inputRef}
            type="text"
            name="brand"
          />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            // onChange={this.handleNameChange}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="inStock">Is it in stock ?</label>
          <input
            checked={this.state.inStock}
            id="inStock"
            name="inStock"
            type="checkbox"
            onChange={this.handleChange}
            // onChange={this.handleStockChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormGuitar;
