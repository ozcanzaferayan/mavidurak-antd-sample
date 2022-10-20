import { useQuery } from "@tanstack/react-query";
import React from "react";
import { POKEMON_ENDPOINT } from "../../config/config";

const PokemonListScreen = () => {
  const url = POKEMON_ENDPOINT;
  const { isLoading, error, data } = useQuery(["pokemonData"], () =>
    fetch(url).then((res) => res.json())
  );
  console.log(data);
  return (
    <ul>
      {data?.documents.map((pokemon: any) => (
        <li key={pokemon.fields.name.stringValue}>
          {pokemon.fields.name.stringValue}
        </li>
      ))}
    </ul>
  );
};

export default PokemonListScreen;
