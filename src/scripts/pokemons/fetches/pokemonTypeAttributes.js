import fetchTypeAttribute from './fetchTypeAttributes'
//segundoFetch
const fetchPokemonTypeAttribute = async (pokemon) => {
    let editedPokemon = pokemon
    await Promise.all(editedPokemon.types.map(async (type) => {
        let typeAttributes = await fetchTypeAttribute(type.type.url)

        editedPokemon.typeAttributes = typeAttributes; 
    }));
    return editedPokemon;
}

export default fetchPokemonTypeAttribute;