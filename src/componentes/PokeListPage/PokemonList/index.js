import React from 'react'
import Pokemon from '../Pokemon'
import Pokeloader from './Pokeloader.js'
import scrollTracker from '../../../scripts/scrollTracker'
import findLastTwoPokemonCardProperties from '../../../scripts/pokemons/card/findLastTwoPokemonCardProperties'
import { PokemonListContext } from '../../../context/PokeListContext.js'
import { useState, useEffect, useContext, useRef, createRef } from 'react';

function PokemonList() {
    //pokemon bottom list loader
    const [isLoading, setIsLoading] = useState('false')
    const [firstIndex, setFirstIndex] = useState(-1)
    const [secondIndex, setSecondIndex] = useState(-1)
    const [actualOpacity, setActualOpacity] = useState(1)
    const [initialScroll, setInitialScroll] = useState(true)
    const { pokemons, setListScroll, fetchNewPage, opacity } = useContext(PokemonListContext)
    const listRef = useRef([])

    //recebendo a lista de pokemons da API
    useEffect(() => {
        if (initialScroll && pokemons.length > 0) {
            scrollList(0)
            setInitialScroll(false)
            listRef.current = listRef.current.slice(0, pokemons.length);
        }
    }, [pokemons, initialScroll])

    //verificando o scroll da lista
    const handleScroll = async (event) => {
        const target = event.target;
        const actualScrollPosition = scrollTracker(event)
        if (actualScrollPosition >= target.scrollHeight - 250) {
            const lastIndex = listRef.current.length
            setIsLoading('true')
            await fetchNewPage()
            setIsLoading('false')
            const nextIndex = lastIndex + 1
            listRef.current[nextIndex].scrollIntoView()
        }
        setListScroll(event.target.scrollTop)
        scrollList(actualScrollPosition)
    }

    const scrollList = (actualScrollPosition) => {
        const { i1, i2, actualOpacity } = findLastTwoPokemonCardProperties(actualScrollPosition)

        setFirstIndex(i1)
        setSecondIndex(i2)
        setActualOpacity(actualOpacity)
    }

    console.log(listRef)

    return (
        <div id="pokemonList" className="pokemonList" onScroll={handleScroll} >
            {pokemons.map((pokemon, index) => (
                <Pokemon pokemon={pokemon}
                    listRef={listRef}
                    key={index}
                    index={index}
                    pokeId={pokemon.id}
                    firstIndex={firstIndex}
                    secondIndex={secondIndex}
                    pokeOpacity={opacity}
                    actualOpacity={actualOpacity} />
            ))}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: [],
}

export default PokemonList

