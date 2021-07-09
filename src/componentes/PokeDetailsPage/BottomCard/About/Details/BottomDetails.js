import React from 'react'
import Gender from './Gender'
import { useState, useEffect } from 'react'

function BottomDetails({ pokemon }) {
    const [percentageFemale, setPercentageFemale] = useState(0)
    const [percentageMale, setPercentageMale] = useState(100)

    const detailNames = ["Grupo de Ovos", "Ciclo de Ovo"]
    const detailValues = []
    if (pokemon.hasOwnProperty('pokemonSpecies') && pokemon.pokemonSpecies.hasOwnProperty('genera')) {
        detailValues.push(pokemon.pokemonSpecies.egg_groups[0].name.charAt(0).toUpperCase() + pokemon.pokemonSpecies.egg_groups[0].name.slice(1))
        detailValues.push(pokemon.types[0].type.name)
    }

    useEffect(() => {
        const setPercentage = () => {
            const percentageFemale = pokemon.pokemonSpecies.gender_rate * 100 / 8
            const percentageMale = 100 - percentageFemale
            setPercentageFemale(percentageFemale)
            setPercentageMale(percentageMale)
        }

        setPercentage()
    }, [pokemon.pokemonSpecies.gender_rate])

    return (
        <>
            <div className="details-row">
                <div className="details-description">
                    Gênero
                </div>
                <Gender percentageFemale={percentageFemale} percentageMale={percentageMale} />
            </div>
            {detailNames.map((detail, index) => (
                <div className="details-row" key={`bottom${index}`}>
                    <div className="details-description">
                        {detail}
                    </div>
                    <div className="details-value">
                        {typeof detailValues[index] !== 'undefined' ? detailValues[index] : ''}
                    </div>
                </div>
            ))}
        </>
    )
}


export default BottomDetails
