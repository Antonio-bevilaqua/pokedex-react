import React from 'react'
import pokeballBackground from '../../imagens/pokeballBackground.png';
import { useEffect } from 'react';



function Pokemon({ pokemon, pokeClick, index, actualOpacity, firstIndex, secondIndex, pokeId, scrollList }) {
    let idPokemon = "pokemon-" + index
    //recebendo a lista de pokemons da API
    useEffect(() => {
        scrollList(0)
    }, [])

    
    return (
        <div id={idPokemon} className="pokemon-container" style={{ opacity: (firstIndex === index || secondIndex === index) ? actualOpacity : 1 }}
            background={pokemon.color} onClick={() => pokeClick(pokeId)}>
            <div className="details">
                <div className="poke-name">
                    <h4>{pokemon.name}</h4>
                </div>
                <div className="pokemon-species">
                    <div className="pokemon-types">
                        {pokemon.hasOwnProperty('types') ? pokemon.types.map((type) => (
                            <li key={type.type.name}>{type.type.name}</li>
                        )) : null}
                    </div>
                    <div className="image">
                        <img src={pokeballBackground} className="pokeballBackground" alt="Pokebola"></img>
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon Sprite"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

Pokemon.defaultProps = {
    background: 'white',
    pokemon: {
        types: []
    }
}


export default Pokemon

