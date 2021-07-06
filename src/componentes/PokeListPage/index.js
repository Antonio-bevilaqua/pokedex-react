import Carregamento from "../Carregamento"
import PokemonList from "./PokemonList"
import Header from "../Header"
import fetchPokemonList from '../../scripts/pokemons/fetches/pokemonList.js'
import pokemonNewPage from '../../scripts/pokemons/fetches/pokemonNewPage'
import { useState, useEffect } from 'react';


function PokeListPage({ pokemons, setPokemons, listScroll, setListscroll, next, setNext }) {
    //pokemon list, pages
    
    const [opacity, setOpacity] = useState(0)

    //default page loader
    const [loader, setLoader] = useState('true')
    const [loaderDisplay, setLoaderDisplay] = useState("flex")

    //recebendo a lista de pokemons da API
    useEffect(() => {
        const getPokemons = async () => {
            if (pokemons.length == 0) {
                const pokemonList = await fetchPokemonList()
                setPokemons(pokemonList.results) //seta os pokemons iniciais
                setNext(pokemonList.next) //define a url do próximo fetch complementar de pokemons

                //retirando o loader inicial do APP
                setLoader('false');
                setTimeout(function () { setOpacity(1); }, 100)
                setTimeout(function () { setLoaderDisplay("none"); }, 1000)
            } else {
                document.getElementById('pokemonList').scroll({
                    top: listScroll
                });
                setLoader('false');
                setTimeout(function () { setOpacity(1); }, 100)
                setTimeout(function () { setLoaderDisplay("none"); }, 1000)
            }
        }

        getPokemons() //executa o efeito ao iniciar a page
    }, [])

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

    //pokeClick
    const pokeClick = (id) => {
        console.log(id)
    }

    return (
        <div id="list-container" className="list-container">
            <Carregamento loader={loader} display={loaderDisplay} />
            <Header />
            <PokemonList pokemons={pokemons} pokeClick={pokeClick} opacity={opacity} fetchNewPage={fetchNewPage} setListscroll={setListscroll} />
        </div>
    );

}

export default PokeListPage;
