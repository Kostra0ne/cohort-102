import React, { Component } from 'react';

const colors = ['purple', 'green', 'red', 'yellow', 'dodgerblue'];

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const color = colors[this.state.likes % colors.length];

    const btnStyle = {
      backgroundColor: color,
      padding: '10px 20px',
      color: 'white',
    };

    // let message;

    // if (this.state.likes === 1) {
    //   message = 'Like';
    // } else {
    //   message = 'Likes';
    // }

    return (
      <button onClick={this.handleLike} style={btnStyle}>
        {this.state.likes} {this.state.likes === 1 ? 'Like' : 'Likes'}
      </button>
    );
  }
}

export default LikeButton;
