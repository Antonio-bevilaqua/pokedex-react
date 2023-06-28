import useFetcher from "../useFetcher";

function usePokemonSpeciesFetcher() {
  const { get } = useFetcher();

  const getSpecies = async (pokemon) => {
    const pokemonSpecies = await get(pokemon.species.url);

    return pokemonSpecies;
  };

  return { getSpecies };
}

export default usePokemonSpeciesFetcher;
