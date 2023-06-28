import React from 'react'
import UpperDetails from './UpperDetails'
import BottomDetails from './BottomDetails'

function Details({ pokemon, bottomOpacity }) {
    return (
        <div className="details-attributes" style={{ opacity: bottomOpacity }}>
            <UpperDetails pokemon={pokemon} />
            <div className="details-bottom">
                <h4>Reprodução</h4>
            </div>
            <BottomDetails pokemon={pokemon} />
        </div>
    )
}


export default Details