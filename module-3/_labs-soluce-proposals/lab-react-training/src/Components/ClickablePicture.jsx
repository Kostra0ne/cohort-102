import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    //this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isClicked: false,
  };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    // const { img, imgClicked } = this.props;
    // const { isClicked } = this.state;

    return (
      <div onClick={this.handleClick}>
        <img
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          alt="mc 100s"
        />
        {/* With destructuring */}
        {/* <img src={isClicked ? imgClicked : img} alt="mc 100s" /> */}

        {/* {this.state.isClicked && (
          <img src={this.props.imgClicked} alt="mc 100s" />
        )}
        {!this.state.isClicked && <img src={this.props.img} alt="mc 100s" />} */}
      </div>
    );
  }
}

export default ClickablePicture;
