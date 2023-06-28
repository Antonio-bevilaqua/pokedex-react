import React, { useState, createContext, useEffect } from "react";
import usePokeListFetcher from "../hooks/pokemon/usePokeListFetcher";

export const PokemonListContext = createContext();

export const PokemonListProvider = (props) => {
  const { getPokeList, getPage } = usePokeListFetcher();
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState("");
  const [listScroll, setListScroll] = useState(0);

  //recebe a lista inicial
  const getPokemons = async () => {
    if (pokemons.length === 0) {
      const pokemonList = await getPokeList();
      setPokemons(pokemonList.results); //seta os pokemons iniciais
      setNext(pokemonList.next); //define a url do próximo fetch complementar de pokemons
    } else {
      document.getElementById("pokemonList").scroll({
        top: listScroll,
      });
    }
  };

  //recebendo a lista de pokemons da API
  useEffect(() => {
    getPokemons(); //executa o efeito ao iniciar a page
  }, []);

  //recebe os dados da nova página de pokemons
  const fetchNewPage = async () => {
    let additionalPokeList = await getPage(next);

    if (additionalPokeList !== null) {
      setPokemons([...pokemons, ...additionalPokeList.results]);
      setNext(additionalPokeList.next);
      return true;
    }
    return false; 
  };

  return (
    <PokemonListContext.Provider
      value={{
        pokemons,
        setPokemons,
        next,
        setNext,
        listScroll,
        setListScroll,
        fetchNewPage,
      }}
    >
      {props.children}
    </PokemonListContext.Provider>
  );
};
