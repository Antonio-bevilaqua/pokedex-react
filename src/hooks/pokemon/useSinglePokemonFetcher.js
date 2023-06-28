import useFetcher from "../useFetcher";
import usePokemonSpeciesFetcher from "./usePokemonSpeciesFetcher";

function useSinglePokemonFetcher() {
  const { get } = useFetcher();
  const { getSpecies } = usePokemonSpeciesFetcher();

  const getPokemon = async (url, withSpecies = false) => {
    var pokemon = await get(url);

    if (withSpecies) {
        pokemon.pokemonSpecies = await getSpecies(pokemon);
    }

    return pokemon;
  };

  return { getPokemon };
}

export default useSinglePokemonFetcher;
