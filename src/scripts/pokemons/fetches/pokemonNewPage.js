import fetchPokemonList from './pokemonList.js'

const pokemonNewPage = async (next) => {
    let additionalPokeList = await fetchPokemonList(next)

    if (additionalPokeList.hasOwnProperty('results') && additionalPokeList.results !== null && additionalPokeList.results.length > 0) {
        return additionalPokeList
    }

    return null
}

export default pokemonNewPage