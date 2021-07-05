import React from 'react'
import Pokemon from '../Pokemon/'
import Pokeloader from './Pokeloader.js'
import listScrollTracker from '../../scripts/pokemons/listScrollTracker/listScrollTracker'
import { useState, useEffect } from 'react';

function PokemonList({ pokemons, pokeClick, opacity, fetchNewPage }) {
    //pokemon bottom list loader
    const [isLoading, setIsLoading] = useState('false')

    //verificando o scroll da lista
    const handleScroll = async (event) => {
        if (listScrollTracker(event)) {
            setIsLoading('true')
            const fetched = await fetchNewPage()
            setIsLoading('false')
        }
    }

    return (
        <div className="pokemonList" onScroll={handleScroll} >
            {pokemons.map((pokemon) => (
                <Pokemon pokemon={pokemon} pokeClick={pokeClick} key={pokemon.id} pokeOpacity={opacity} />
            ))}
            <Pokeloader isLoading={isLoading} />
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: [],
}

export default PokemonList

