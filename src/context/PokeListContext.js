import React, { useState, createContext, useEffect } from 'react'
import fetchPokemonList from '../scripts/pokemons/fetches/pokemonList.js'
import pokemonNewPage from '../scripts/pokemons/fetches/pokemonNewPage'

export const PokemonListContext = createContext();

export const PokemonListProvider = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [next, setNext] = useState('')
    const [listScroll, setListScroll] = useState(0)

    //recebendo a lista de pokemons da API
    useEffect(() => {
        const getPokemons = async () => {
            if (pokemons.length === 0) {
                const pokemonList = await fetchPokemonList()
                setPokemons(pokemonList.results) //seta os pokemons iniciais
                setNext(pokemonList.next) //define a url do próximo fetch complementar de pokemons
            } else {
                document.getElementById('pokemonList').scroll({
                    top: listScroll
                });
            }
        }

        getPokemons() //executa o efeito ao iniciar a page
    }, [listScroll, pokemons.length, setNext, setPokemons])

    //recebe os dados da nova página de pokemons
    const fetchNewPage = async () => {
        let additionalPokeList = await pokemonNewPage(next)

        if (additionalPokeList !== null) {
            setPokemons([...pokemons, ...additionalPokeList.results])
            setNext(additionalPokeList.next)
            return true
        }
        return false
    }

    return (
        <PokemonListContext.Provider value={{
                pokemons, setPokemons, 
                next, setNext, 
                listScroll, setListScroll,
                fetchNewPage
            }}>
            {props.children}
        </PokemonListContext.Provider>
    )
}