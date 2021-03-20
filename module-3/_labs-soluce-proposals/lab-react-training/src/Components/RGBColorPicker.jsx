import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 255,
    bValue: 255,
  };

  myCallback = (color, value) => {
    const parsedValue = value > 255 ? 255 : value < 0 ? 0 : value;

    /** Solution n°1 */

    if (color === 'r') {
      this.setState({ rValue: parsedValue });
    } else if (color === 'g') {
      this.setState({ gValue: parsedValue });
    } else {
      this.setState({ bValue: parsedValue });
    }

    /** Solution n°2 */

    // this.setState({
    //   [color + 'Value']: parsedValue,
    // });
  };

  render() {
    return (
      <div>
        <SingleColorPicker
          color="r"
          callback={this.myCallback}
          value={this.state.rValue}
        />
        <SingleColorPicker
          color="g"
          callback={this.myCallback}
          value={this.state.gValue}
        />
        <SingleColorPicker
          color="b"
          callback={this.myCallback}
          value={this.state.bValue}
        />

        <div
          style={{
            backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            width: 50,
            height: 50,
            border: '1px solid black',
          }}
        ></div>
      </div>
    );
  }
}

export default RGBColorPicker;
