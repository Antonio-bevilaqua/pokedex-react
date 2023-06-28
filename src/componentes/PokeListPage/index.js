import Carregamento from "../Carregamento"
import PokemonList from "./PokemonList"
import Header from "../Header"
import {PokemonListContext} from '../../context/PokeListContext.js'
import { useContext, useState, useEffect } from 'react';

function PokeListPage() {
    const {pokemons} = useContext(PokemonListContext)
    const [pageLoaded, setPageLoaded] = useState(false)

    useEffect(() => {
        if (pokemons.length > 0) {
            setPageLoaded(true)
        }
    }, [pokemons])


    return (
        <div id="list-container" className="list-container">
            <Carregamento pageLoaded={pageLoaded} />
            <Header />
            <PokemonList />
        </div>
    );

}

export default PokeListPage;
