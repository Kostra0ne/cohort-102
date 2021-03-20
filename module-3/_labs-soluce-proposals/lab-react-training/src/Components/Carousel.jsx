import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  decrement = (event) => {
    // console.log('I am here');

    console.log(
      this.state.currentIndex === 0
        ? this.props.imgs.length - 1
        : this.state.currentIndex - 1
    );

    this.setState({
      currentIndex:
        this.state.currentIndex === 0
          ? this.props.imgs.length - 1
          : this.state.currentIndex - 1,
    });
  };

  increment = (event) => {
    this.setState({
      currentIndex:
        this.state.currentIndex === this.props.imgs.length - 1
          ? 0
          : this.state.currentIndex + 1,
    });
  };

  render() {
    const { imgs } = this.props;

    return (
      <div>
        <button
          // disabled={this.state.currentIndex === 0}
          onClick={this.decrement}
        >
          Previous
        </button>
        <img src={imgs[this.state.currentIndex]} alt="" />
        <button
          // disabled={this.state.currentIndex >= imgs.length - 1}
          onClick={this.increment}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
