import React, { Component } from "react";
import pokemonAPI from "api/pokemonAPI";
import "styles/CardListPokemon.scss";

class ClassListPokemon extends Component {
  state = {
    pokemons: [],
    isLoading: false,
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: true });
    pokemonAPI
      .getAll()
      .then((data) => {
        console.log(data);

        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          console.log(this._isMounted);
          if (this._isMounted) {
            this.setState({ pokemons: data, isLoading: false });
          }
        }, 1000);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("I am not here anymore !");
    // clearTimeout(this.timeoutid);
  }

  render() {
    const pokemonList = this.state.pokemons.map((pokemon, index) => (
      <div
        className="CardListPokemon"
        onClick={() => this.props.pokemonHandler(pokemon.id)}
        key={pokemon.name}
      >
        <div className="CardListPokemon__image-container">
          <img
            className="CardListPokemon__image"
            src={pokemon.picture}
            alt=""
          />
        </div>
        <h3 className="CardListPokemon__name">{pokemon.name}</h3>
      </div>
    ));

    if (this.state.isLoading) return <div>Loading...</div>;
    return <div className="ScrollMenu">{pokemonList}</div>;
  }
}

export default ClassListPokemon;
