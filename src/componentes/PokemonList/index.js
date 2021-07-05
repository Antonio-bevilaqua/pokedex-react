import React from 'react'
import Pokemon from '../Pokemon/'
import Pokeloader from './Pokeloader.js'
import scrollTracker from '../../scripts/scrollTracker'
import findLastTwoPokemonCardProperties from '../../scripts/pokemons/card/findLastTwoPokemonCardProperties'
import { useState } from 'react';

function PokemonList({ pokemons, pokeClick, opacity, fetchNewPage }) {
    //pokemon bottom list loader
    const [isLoading, setIsLoading] = useState('false')
    const [scrollPos, setScrollPos] = useState(0)
    const [firstIndex, setFirstIndex] = useState(-1)
    const [secondIndex, setSecondIndex] = useState(-1)
    const [actualOpacity, setActualOpacity] = useState(1)

    //verificando o scroll da lista
    const handleScroll = async (event) => {
        const target = event.target;
        const actualScrollPosition = scrollTracker(event)
        setScrollPos(actualScrollPosition)
        if (actualScrollPosition >= target.scrollHeight - 100) {
            setIsLoading('true')
            await fetchNewPage()
            setIsLoading('false')
        }

        scrollList(actualScrollPosition)
    }

    const scrollList = (actualScrollPosition) => {
        const { i1, i2, actualOpacity } = findLastTwoPokemonCardProperties(actualScrollPosition)

        setFirstIndex(i1)
        setSecondIndex(i2)
        setActualOpacity(actualOpacity)
    }

    
    

    return (
        <div id="pokemonList" className="pokemonList" onScroll={handleScroll} >
            {pokemons.map((pokemon, index) => (
                <Pokemon pokemon={pokemon}
                    scrollList={scrollList}
                    pokeClick={pokeClick}
                    key={index}
                    index={index}
                    pokeId={pokemon.id}
                    firstIndex={firstIndex}
                    secondIndex={secondIndex}
                    pokeOpacity={opacity}
                    actualOpacity={actualOpacity}
                    scrollPos={scrollPos} />
            ))}
            <Pokeloader isLoading={isLoading} />
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: [],
}

export default PokemonList

