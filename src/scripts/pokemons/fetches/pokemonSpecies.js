//ultimoFetch
const fetchPokemonSpecies = async (pokemon) => {
    let pokemonSpecies = await fetch(pokemon.species.url)
    pokemonSpecies = await pokemonSpecies.json()

    pokemon.color = pokemonSpecies.color.name

    return pokemon;
  }

  export default fetchPokemonSpecies