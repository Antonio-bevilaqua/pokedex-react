import React from "react";
import Carregamento from "../Carregamento";
import UpperCard from "./UpperCard";
import BottomCard from "./BottomCard";
import backgroundDetailsWhite from "../../imagens/backgroundDetailsWhite.png";
import { PokemonListContext } from "../../context/PokeListContext.js";
import { useState, useEffect, useContext } from "react";
import usePokemonAttributeTypeFetcher from "../../hooks/pokemon/usePokemonAttributeTypeFetcher";
import useSinglePokemonFetcher from "../../hooks/pokemon/useSinglePokemonFetcher";

function PokeDetailsPage({ match }) {
  const index = match.params.id - 1;
  const { pokemons, setPokemons } = useContext(PokemonListContext);
  const { getPokemon } = useSinglePokemonFetcher();
  const { getTypes } = usePokemonAttributeTypeFetcher();
  const [pokemon, setPokemon] = useState({
    id: 0,
    pokemonSpecies: {
      color: {
        name: "white",
      },
    },
  });

  //default page loader
  const [translateY, setTranslateY] = useState("0");
  const [bottomOpacity, setBottomOpacity] = useState(0.5);
  const [pageLoaded, setPageLoaded] = useState(false);

  const selectBottom = () => {
    setTranslateY("-15vh");
  };

  const selectTop = () => {
    setTranslateY("0");
  };

  const getPokemonTypeFromList = async () => {
    const pokeTypes = await getTypes(pokemons[index]);

    var newPokeList = [...pokemons];
    newPokeList[index].typeAttributes = pokeTypes[0];
    var actualPokemon = { ...newPokeList[index] };
    setPokemon(actualPokemon);
    setPokemons(newPokeList);
    setPageLoaded(true);
  };

  const getPokemonType = async () => {
    if (pokemons.length > 0) return await getPokemonTypeFromList();

    var pokemon = await getPokemon("pokemon/" + match.params.id, true);
    const pokeTypes = await getTypes(pokemon);
    pokemon.typeAttributes = pokeTypes[0];
    setPokemon(pokemon);
    setPageLoaded(true);
  };

  const preparePokemon = async () => {
    if (typeof pokemons[index] !== "undefined" && pokemons[index].typeAttributes !== "undefined") {
      setPokemon({ ...pokemons[index] });
      setPageLoaded(true);
      return;
    }

    await getPokemonType();
  };

  useEffect(() => {
    preparePokemon();
  }, []);

  if (!pokemon) return <></>
  return (
    <div
      className="pokedetails-page"
      background={pokemon.pokemonSpecies.color.name}
    >
      <Carregamento pageLoaded={pageLoaded} />
      <img
        src={backgroundDetailsWhite}
        alt="backgroundWhite"
        className="backgroundDetails"
      />
      <UpperCard pokemon={pokemon} translateY={translateY} />
      <BottomCard
        translateY={translateY}
        pokemon={pokemon}
        selectBottom={selectBottom}
        selectTop={selectTop}
        bottomOpacity={bottomOpacity}
        setBottomOpacity={setBottomOpacity}
      />
    </div>
  );
}

export default PokeDetailsPage;
