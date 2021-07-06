import React from 'react'
import Bars from './Bars';

function BaseStats({ isShowing, pokemon }) {
    


    return (
        <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }}>
            <Bars isShowing={isShowing} pokemon={pokemon} />
        </div>
    )
}


export default BaseStats