import React from 'react'
import pokeballBackground from '../../../imagens/pokeballBackground.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Pokemon({ pokemon, index, actualOpacity, firstIndex, secondIndex, pokeId, scrollList }) {
    //recebendo a lista de pokemons da API
    useEffect(() => {
        scrollList(0)
    }, [])


    return (
        <Link to={`/pokemon/${pokeId}`} >
            <div id={`pokemon-${index}`} className="pokemon-container" style={{ opacity: (firstIndex === index || secondIndex === index) ? actualOpacity : 1 }}
                background={pokemon.pokemonSpecies.color.name} >
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

