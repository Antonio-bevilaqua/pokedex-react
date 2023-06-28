import React from 'react'

function UpperDetails({pokemon}) {
    const detailNames = ["Espécie", "Altura", "Peso", "Habilidades"];
    const detailValues = [];
    if (pokemon.hasOwnProperty('pokemonSpecies') && pokemon.pokemonSpecies.hasOwnProperty('genera')) {
        detailValues.push(pokemon.pokemonSpecies.genera[7].genus.split(' ')[0])
        detailValues.push((pokemon.height * 10 / 100).toFixed(2))
        detailValues.push((pokemon.weight * 0.1).toFixed(1))
        const habilidades = [];
        pokemon.abilities.map((ability) => {
            habilidades.push(ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1))
            return habilidades
        })
        detailValues.push(habilidades.join(', '))
    }

    return (
        <>
        {detailNames.map((detail, index) => (
            <div className="details-row" key={`upper${index}`}>
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


export default UpperDetails
