import React from "react";
import Pokemon from "../Pokemon";
import Pokeloader from "./Pokeloader.js";
import { PokemonListContext } from "../../../context/PokeListContext.js";
import { useState, useEffect, useContext, useRef, createRef } from "react";

function PokemonList() {
  //pokemon bottom list loader
  const { pokemons, fetchNewPage } = useContext(PokemonListContext);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const shouldLoadPokemon = async () => {
    setLoading(true);
    await fetchNewPage();
    setLoading(false);
  };

  const handleScroll = (event) => {
    const maxScroll =
      listRef.current.scrollHeight - listRef.current.clientHeight;
    if (maxScroll - event.target.scrollTop < 100) shouldLoadPokemon();
  };

  return (
    <div
      ref={listRef}
      id="pokemonList"
      className="pokemonList"
      onScroll={handleScroll}
    >
      {pokemons.map((pokemon, index) => (
        <Pokemon
          pokemon={pokemon}
          key={`list_pokemon-${index}`}
          index={index}
          pokeId={pokemon.id}
        />
      ))}
      <Pokeloader isLoading={loading} />
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;
