import React from 'react'
import CardTitle from './CardTitle/'
import CardSubTitle from './CardSubTitle/'
import Controls from './Controls/'
import './index.css'

function UpperCard({ pokemon }) {
    let sprite = pokemon.hasOwnProperty('sprites') ? pokemon.sprites.other['official-artwork'].front_default : ''

    return (
        <div className="upper-card">
            <Controls />
            <CardTitle pokemon={pokemon} />
            <CardSubTitle pokemon={pokemon} />
            <div className="upper-image-container"> 
                <img className="pokemon-image" src={sprite} alt="pokemon-image" />

            </div>
        </div>
    )
}


export default UpperCard