import React from 'react'

function CardSubTitle({ pokemon }) {
    const details = pokemon.hasOwnProperty('types') ? pokemon.types : []

    return (
        <div className="details-sub-title">
            <div className="details-sub-title-container">
                { details.map((detail, index) => (
                    <span className="details-type" key={index}>
                        {detail.type.name}
                    </span>
                ))}
            </div>
        </div>
    )
}


export default CardSubTitle