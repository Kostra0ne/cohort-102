import React from "react";
import axios from "axios";

class OneGuitar extends React.Component {
  //   console.log(props.location);
  //   console.log(props.match);
  //   console.log(props.history);
  // console.log(prop)

  state = {
    guitar: null,
  };

  componentDidMount() {
    const id = this.props.match.params.toto;

    axios
      .get(`http://localhost:4000/guitars/${id}`)
      .then((response) => {
        this.setState({ guitar: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.guitar === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>One Guitar !</h1>
        <h2>
          {this.state.guitar.name} {this.state.guitar.price}€
        </h2>
        <img src={this.state.guitar.image} alt="" />
      </div>
    );
  }
}

export default OneGuitar;
