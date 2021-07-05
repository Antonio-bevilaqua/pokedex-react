import React from 'react'
import pokeballBackground from '../../imagens/pokeballBackground.png';

function Pokemon({ pokemon, pokeClick, pokeOpacity }) {
    return (
        <div className="pokemon-container" style={{ opacity: pokeOpacity }} background={pokemon.color} onClick={() => pokeClick(pokemon.id)}>
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
                        <img src={pokeballBackground} className="pokeballBackground"></img>
                        <img src={pokemon.sprites.other['official-artwork'].front_default}></img>
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

