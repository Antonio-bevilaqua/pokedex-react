import React from 'react'
import Carregamento from "../Carregamento"
import UpperCard from './UpperCard'
import BottomCard from './BottomCard'
import backgroundDetailsWhite from '../../imagens/backgroundDetailsWhite.png'
import fetchSinglePokemon from '../../scripts/pokemons/fetches/singlePokemon'
import fetchPokemonTypeAttribute from '../../scripts/pokemons/fetches/pokemonTypeAttributes'
import {PokemonListContext} from '../../context/PokeListContext.js'
import { useState, useEffect, useContext } from 'react';

function PokeDetailsPage({ match }) {
    const {pokemons} = useContext(PokemonListContext)
    const [pokemon, setPokemon] = useState({
        'id': 0,
        'pokemonSpecies': {
            'color': {
                'name': 'white'
            }
        }
    })

    //default page loader
    const [translateY, setTranslateY] = useState('0')
    const [bottomOpacity, setBottomOpacity] = useState(0.5)
    const [pageLoaded, setPageLoaded] = useState(false)

    const selectBottom = () => {
        setTranslateY('-15vh')
    }

    const selectTop = () => {
        setTranslateY('0')
    }

    const index = match.params.id - 1

    //busca o pokemon na lista, caso não exista, faz a requisição na API
    useEffect(() => {
        const getPokemon = async () => {
            if (pokemons.length > 0) {
                const actualPokemon = await fetchPokemonTypeAttribute(pokemons[index])
                setPokemon(actualPokemon)
            } else {
                const pokemonWithoutAttributes = await fetchSinglePokemon("https://pokeapi.co/api/v2/pokemon/" + match.params.id)
                const actualPokemon = await fetchPokemonTypeAttribute(pokemonWithoutAttributes)
                setPokemon(actualPokemon)
            }
            setPageLoaded(true)
        }

        getPokemon()
    }, [index, match.params.id, pokemons])

    return (
        <div className="pokedetails-page" background={pokemon.pokemonSpecies.color.name}>
            <Carregamento pageLoaded={pageLoaded} />
            <img src={backgroundDetailsWhite} alt="backgroundWhite" className="backgroundDetails" />
            <UpperCard pokemon={pokemon} translateY={translateY} />
            <BottomCard translateY={translateY} pokemon={pokemon} selectBottom={selectBottom} selectTop={selectTop} bottomOpacity={bottomOpacity} setBottomOpacity={setBottomOpacity}  />
        </div>
    )
}


export default PokeDetailsPage