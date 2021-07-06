import React from 'react'
import './index.css'
import Carregamento from "../Carregamento"
import UpperCard from './UpperCard'
import BottomCard from './BottomCard'
import backgroundDetailsWhite from '../../imagens/backgroundDetailsWhite.png'
import fetchSinglePokemon from '../../scripts/pokemons/fetches/singlePokemon'
import { useState, useEffect } from 'react';

function PokeDetailsPage({ match, pokemons }) {
    const [pokemon, setPokemon] = useState({
        'id': 0,
        'pokemonSpecies': {
            'color': {
                'name': 'white'
            }
        }
    })

    //default page loader
    const [loader, setLoader] = useState('true')
    const [loaderDisplay, setLoaderDisplay] = useState("flex")

    const index = match.params.id - 1

    //busca o pokemon na lista, caso não exista, faz a requisição na API
    useEffect(() => {
        const getPokemon = async () => {
            if (pokemons.length > 0) {
                setPokemon(pokemons[index])
            } else {
                const actualPokemon = await fetchSinglePokemon("https://pokeapi.co/api/v2/pokemon/" + match.params.id)
                setPokemon(actualPokemon)
            }

            //retirando o loader inicial do APP
            setLoader('false');
            setTimeout(function () { setLoaderDisplay("none"); }, 1000)
        }

        getPokemon()
    }, [])

    return (
        <div className="pokedetails-page" background={pokemon.pokemonSpecies.color.name}>
            <Carregamento loader={loader} display={loaderDisplay} />
            <img src={backgroundDetailsWhite} alt="backgroundWhite" className="backgroundDetails" />
            <UpperCard pokemon={pokemon} />
            <BottomCard pokemon={pokemon} />
        </div>
    )
}


export default PokeDetailsPage