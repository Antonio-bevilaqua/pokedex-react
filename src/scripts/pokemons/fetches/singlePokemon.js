import fetchPokemonSpecies from './pokemonSpecies';

//segundoFetch
const fetchSinglePokemon = async (url) => {
    let pokemon = await fetch(url)
    pokemon = await pokemon.json()


    return await fetchPokemonSpecies(pokemon);
}

export default fetchSinglePokemon;