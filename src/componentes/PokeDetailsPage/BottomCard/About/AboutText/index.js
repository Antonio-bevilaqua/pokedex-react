import React from 'react'
import { useState, useEffect } from 'react';

function AboutText({ pokemon }) {
    const [textAbout, setTextAbout] = useState("")

    useEffect(() => {
        const setText = () => {
            let textEntries = (typeof pokemon.pokemonSpecies.flavor_text_entries !== 'undefined') ? pokemon.pokemonSpecies.flavor_text_entries[7].flavor_text : ""
            textEntries = textEntries.replaceAll("\n", " ").replaceAll("\f", " ")
            setTextAbout(textEntries)
        }
        setText()
    }, [pokemon.pokemonSpecies.flavor_text_entries])

    return (
        <div className="about-text">
           {textAbout}
        </div>
    )
}


export default AboutText