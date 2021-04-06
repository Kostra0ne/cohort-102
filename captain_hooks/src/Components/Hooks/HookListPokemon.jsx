import React, { useState, useEffect } from "react";
import pokemonAPI from "api/pokemonAPI";

import "styles/CardListPokemon.scss";

const HookListPokemon = ({ pokemonHandler }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    pokemonAPI
      .getAll()
      .then((data) => {
        //Emulating crappy internet in order to show Loading...

        setTimeout(() => {
          console.log(isMounted, "isMounted");
          if (isMounted) {
            setLoading(false);
            setPokemons(data);
          }
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("I am unmounted");
      isMounted = false;
    };
  }, []);

  const pokemonList = pokemons.map((pokemon, index) => (
    <div
      className="CardListPokemon"
      onClick={() => pokemonHandler(pokemon.id)}
      key={pokemon.name}
    >
      <div className="CardListPokemon__image-container">
        <img className="CardListPokemon__image" src={pokemon.picture} alt="" />
      </div>
      <h3 className="CardListPokemon__name">{pokemon.name}</h3>
    </div>
  ));

  if (isLoading) return <div>Loading...</div>;

  return <div className="ScrollMenu">{pokemonList}</div>;
};

export default HookListPokemon;
