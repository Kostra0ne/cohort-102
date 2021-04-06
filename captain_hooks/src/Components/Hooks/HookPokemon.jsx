import React, { useState, useEffect } from "react";
import CardPokemon from "Components/CardPokemon";
import pokemonAPI from "api/pokemonAPI";

const HookPokemon = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonAPI
      .getOne(props.selectedPokemon)
      .then((data) => {
        setLoading(false);
        setPokemon(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [props.selectedPokemon]);

  if (isLoading) return null;
  return <CardPokemon pokemon={pokemon} />;
};

export default HookPokemon;
