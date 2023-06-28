import React from 'react'
import pokeballBackground from '../../../imagens/pokeballBackground.png'
import { Link } from 'react-router-dom'


function Pokemon({ pokemon, index, pokeId }) {


    return (
        <Link to={`/pokemon/${pokeId}`} >
            <div id={`pokemon-${index}`} className="pokemon-container" background={pokemon.pokemonSpecies.color.name} >
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
        </Link>
    )
}

Pokemon.defaultProps = {
    background: 'white',
    pokemon: {
        types: []
    }
}


export default Pokemon

