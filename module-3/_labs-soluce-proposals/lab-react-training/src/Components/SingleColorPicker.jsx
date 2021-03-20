import React, { Component } from 'react';

class SingleColorPicker extends Component {
  state = {
    value: 0,
    // color: 'r',
  };

  handleChange = (event) => {
    //   const value =  event.target.value
    // this.setState({
    //   value: event.target.value,
    // });
    this.props.callback(this.props.color, Number(event.target.value));
  };

  render() {
    const { color } = this.props;

    const rgbaValue = `rgb(${color === 'r' ? this.props.value : 0}, ${
      color === 'g' ? this.props.value : 0
    }, ${color === 'b' ? this.props.value : 0})`;

    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            backgroundColor: rgbaValue,
            // backgroundColor:
            //   this.props.color === 'r'
            //     ? 'red'
            //     : this.props.color === 'g'
            //     ? 'green'
            //     : 'dodgerblue',
            width: 100,
            height: 100,
            border: '2px solid black',
          }}
        ></div>
        <div>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

export default SingleColorPicker;
