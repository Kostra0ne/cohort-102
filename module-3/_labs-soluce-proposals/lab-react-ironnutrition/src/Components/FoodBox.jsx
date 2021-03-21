import React from 'react';

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  handleQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleClick = () => {
    this.props.handleSelectedFood({
      ...this.props.food,
      quantity: Number(this.state.quantity),
    });
  };

  render() {
    const { food } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={this.handleQuantity}
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
