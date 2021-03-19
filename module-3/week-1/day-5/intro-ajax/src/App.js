import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    pokemons: null,
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        // console.log(response);
        // With axios, your response data will always be at
        // response.data

        this.setState({ pokemons: response.data.results });

        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.pokemons === null) {
      return <div>Loading....</div>;
    }

    return (
      <div className="App">
        <h1>Hello AJAX !</h1>
        {this.state.pokemons.map((pokemon) => {
          return <h4 key={pokemon.name}>{pokemon.name}</h4>;
        })}
      </div>
    );
  }
}

export default App;
