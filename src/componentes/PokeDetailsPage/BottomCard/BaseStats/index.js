import React from 'react'
import Bars from './Bars';
import DefenseAttributes from './DefenseAttributes';

function BaseStats({ isShowing, pokemon }) {



    return (
        <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }}>
            <Bars isShowing={isShowing} pokemon={pokemon} />
            <div className="details-bottom">
                <h4>Defesas</h4>
            </div>
            <DefenseAttributes isShowing={isShowing} pokemon={pokemon} />
        </div>
    )
}


export default BaseStats