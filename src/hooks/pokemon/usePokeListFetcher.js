import pageDelimiter from "../../scripts/pokemons/pageDelimiter";
import useFetcher from "../useFetcher";
import useSinglePokemonFetcher from "./useSinglePokemonFetcher";

function usePokeListFetcher() {
  const { get } = useFetcher();
  const { getPokemon } = useSinglePokemonFetcher();

  const getPokeList = async (url = "") => {
    let pokeNumber = pageDelimiter();
    if (url === "") url = "pokemon?offset=0&limit=" + pokeNumber;

    var pokeList = await get(url);

    await Promise.all(
      pokeList.results.map(async (pokemon, index) => {
        pokeList.results[index] = await getPokemon(pokemon.url, true);
      })
    );

    console.log(pokeList);
    return pokeList;
  };

  const getPage = async (next) => {
    var additionalPokeList = await getPokeList(next);

    if (
      additionalPokeList.hasOwnProperty("results") &&
      additionalPokeList.results !== null &&
      additionalPokeList.results.length > 0
    ) {
      return additionalPokeList;
    }

    return null;
  };

  return { getPokeList, getPage };
}

export default usePokeListFetcher;
