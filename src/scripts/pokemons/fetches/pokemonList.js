import fetchSinglePokemon from './singlePokemon';

//primeiroFetch
const fetchPokemonList = async (url = '') => {
    if (url == '') url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

    let pokeList = await fetch(url);

    pokeList = await pokeList.json()

    await Promise.all(pokeList.results.map(async (pokemon, index) => {
        pokeList.results[index] = await fetchSinglePokemon(pokemon.url)
    }));


    return pokeList;
}

export default fetchPokemonList;