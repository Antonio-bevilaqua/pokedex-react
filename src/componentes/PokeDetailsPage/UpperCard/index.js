import React from 'react'
import CardTitle from './CardTitle/'
import CardSubTitle from './CardSubTitle/'
import Controls from './Controls/'

function UpperCard({ pokemon, translateY }) {

    return (
        <div className="upper-card" style={{ transform: `translate(0px, ${translateY})` }}>
            <Controls />
            <CardTitle pokemon={pokemon} />
            <CardSubTitle pokemon={pokemon} />
        </div>
    )
}


export default UpperCard