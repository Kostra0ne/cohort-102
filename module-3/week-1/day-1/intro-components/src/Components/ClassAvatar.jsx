// import React, { Component } from 'react'
import React from "react";

class ClassAvatar extends React.Component {
  //   class ClassAvatar extends Component {

  // state = {}

  render() {
    // mandatory

    console.log(this.props);
    return (
      <div>
        <h1>Avatar</h1>
        <p>
          {this.props.firstName.toUpperCase()}{" "}
          {this.props.lastName.toUpperCase()}
        </p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default ClassAvatar;
