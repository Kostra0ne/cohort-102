import React, { Component } from 'react';

const imagesUrl = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
];

class Dice extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    if (this.state.isClicked) return;
    this.setState({ isClicked: true });
    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 1000);
  };

  render() {
    const randomIndex = Math.floor(Math.random() * imagesUrl.length);
    const randomImage = imagesUrl[randomIndex];
    const defaultImage = '/img/dice-empty.png';
    const imgStyle = { width: '100px' };

    return (
      <img
        onClick={this.handleClick}
        style={imgStyle}
        src={this.state.isClicked ? defaultImage : randomImage}
        alt="dice"
      />
    );

    // if (this.state.isClicked) {
    //   return (
    //     <img
    //       style={imgStyle}
    //       onClick={this.handleClick}
    //       src="/img/dice-empty.png"
    //       alt="empty dice"
    //     />
    //   );
    // } else {
    //   return (
    //     <img
    //       style={imgStyle}
    //       onClick={this.handleClick}
    //       src={randomImage}
    //       alt="dice"
    //     />
    //   );
    // }
  }
}

export default Dice;
