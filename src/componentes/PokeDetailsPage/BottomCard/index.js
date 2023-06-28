import React from 'react'
import About from './About'
import BaseStats from './BaseStats'
import Evolution from './Evolution'
import Moves from './Moves'
import { useState } from 'react';

function BottomCard({ pokemon, selectBottom, selectTop, bottomOpacity, setBottomOpacity, translateY }) {
    const [bottomMenu, setBottomMenu] = useState("about")
    const [aboutSelected, setAboutSelected] = useState("selected")
    const [baseSelected, setBaseSelected] = useState("")
    const [evolutionSelected, setEvolutionSelected] = useState("")
    const [movesSelected, setMovesSelected] = useState("")
    const [translateX, setTranslateX] = useState(0)

    const bottomMenuSelectorAbout = () => {
        setBottomMenu("about")
        resetSelected()
        setAboutSelected("selected")
        setTranslateX(0)
    }
    const bottomMenuSelectorBase = () => {
        setBottomMenu("base-stats")
        resetSelected()
        setBaseSelected("selected")
        setTranslateX(-25)
    }
    const bottomMenuSelectorEvolution = () => {
        setBottomMenu("evolution")
        resetSelected()
        setEvolutionSelected("selected")
        setTranslateX(-50)
    }
    const bottomMenuSelectorMoves = () => {
        setBottomMenu("moves")
        resetSelected()
        setMovesSelected("selected")
        setTranslateX(-75)
    }

    const resetSelected = () => {
        setAboutSelected("")
        setBaseSelected("")
        setEvolutionSelected("")
        setMovesSelected("")
        setTranslateX(-100)
    }

    const showBottom = () => {
        selectBottom()
        setBottomOpacity(1)
    }

    const hideBottom = () => {
        selectTop()
        setBottomOpacity(.5)
    }

    const toggleBottom = () => {
        if (bottomOpacity === 1) {
            selectTop()
            setBottomOpacity(.5)
        } else {
            selectBottom()
            setBottomOpacity(1)
        }
    }

    let sprite = pokemon.hasOwnProperty('sprites') ? pokemon.sprites.other['official-artwork'].front_default : ''

    return (
        <div className="bottom-card" style={{ transform: `translate(0px, ${translateY})` }} >
            <div className="upper-image-container">
                <img className="pokemon-image" src={sprite} alt="pokemon" />
            </div>
            <div className="bottomSelector" onMouseEnter={showBottom} onMouseLeave={hideBottom} onFocus={toggleBottom} >
                <div className="bottom-menu">
                    <li className={`bottom-menu-item ${aboutSelected}`} onClick={bottomMenuSelectorAbout} >Sobre</li>
                    <li className={`bottom-menu-item ${baseSelected}`} onClick={bottomMenuSelectorBase} >Atributos Base</li>
                    <li className={`bottom-menu-item ${evolutionSelected}`} onClick={bottomMenuSelectorEvolution} >Evolução</li>
                    <li className={`bottom-menu-item ${movesSelected}`} onClick={bottomMenuSelectorMoves} >Movimentos</li>
                </div>
                <div className="bottom-scroll-list" style={{ transform: `translate(${translateX}%, 0px)` }} >
                    <About isShowing={(bottomMenu === "about")} pokemon={pokemon} bottomOpacity={bottomOpacity} />
                    <BaseStats isShowing={(bottomMenu === "base-stats")} pokemon={pokemon} bottomOpacity={bottomOpacity} />
                    <Evolution isShowing={(bottomMenu === "evolution")} pokemon={pokemon} bottomOpacity={bottomOpacity} />
                    <Moves isShowing={(bottomMenu === "moves")} pokemon={pokemon} bottomOpacity={bottomOpacity} />
                </div>
            </div>
        </div>
    )
}


export default BottomCard