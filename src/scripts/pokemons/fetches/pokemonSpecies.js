//ultimoFetch
const fetchPokemonSpecies = async (pokemon) => {
    let pokemonSpecies = await fetch(pokemon.species.url)
    pokemonSpecies = await pokemonSpecies.json()

    pokemon.pokemonSpecies = pokemonSpecies

    return pokemon;
  }

  export default fetchPokemonSpecies