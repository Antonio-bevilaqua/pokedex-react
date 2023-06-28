import React from 'react'

function CardTitle({pokemon}) {
    let pokeId = pokemon.id.toString()
    let missingNumbers = 3 - pokeId.length

    for (let i=0; i< missingNumbers; i++) {
        pokeId = '0' + pokeId
    }

    return (
        <div className="details-title">
            <div className="details-title-container">
                <div className="details-name">{pokemon.name}</div>
                <div className="details-id">#{pokeId}</div>
            </div>
        </div>
    )
}


export default CardTitle