import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    foodName: '',
    foodImg: '',
    calories: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { foodName, foodImg, calories } = this.state;

    this.props.handleAddFood({
      name: foodName,
      image: foodImg,
      calories,
    });

    this.setState({
      foodName: '',
      foodImg: '',
      calories: 0,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="subtitle">Food form</h2>

        <input
          className="input mb-2"
          onChange={this.handleChange}
          name="foodName"
          type="text"
          value={this.state.foodName}
          placeholder="tomato"
        />

        <input
          className="input mb-2"
          onChange={this.handleChange}
          type="number"
          name="calories"
          value={this.state.calories}
        />

        <input
          className="input mb-2"
          onChange={this.handleChange}
          name="foodImg"
          type="text"
          value={this.state.foodImg}
          placeholder="https://i.imgur.com/5ktcSzF.jpg"
        />

        <button className="button is-primary" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default FoodForm;
