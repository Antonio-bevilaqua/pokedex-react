import React from 'react'
import Details from './Details'
import AboutText from './AboutText'

function About({ isShowing, pokemon, bottomOpacity }) {
    return (
        <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }} >
            <AboutText pokemon={pokemon} />
            <Details pokemon={pokemon} bottomOpacity={bottomOpacity} />
        </div>
    )
}


export default About