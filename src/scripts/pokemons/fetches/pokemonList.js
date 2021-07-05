import fetchSinglePokemon from './singlePokemon';
import pageDelimiter from '../pageDelimiter';

//primeiroFetch
const fetchPokemonList = async (url = '') => {
    let pokeNumber = pageDelimiter()
    if (url === '') url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit='+pokeNumber

    let pokeList = await fetch(url);
    pokeList = await pokeList.json()
    
    await Promise.all(pokeList.results.map(async (pokemon, index) => {
        pokeList.results[index] = await fetchSinglePokemon(pokemon.url)
    }));


    return pokeList;
}

export default fetchPokemonList;