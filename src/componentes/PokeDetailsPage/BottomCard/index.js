import React from 'react'
import About from './About'
import BaseStats from './BaseStats'
import Evolution from './Evolution'
import Moves from './Moves'
import { useState } from 'react';

function BottomCard({pokemon}) {
    const [bottomMenu, setBottomMenu] = useState("about")
    const [aboutSelected, setAboutSelected] = useState("selected")
    const [baseSelected, setBaseSelected] = useState("")
    const [evolutionSelected, setEvolutionSelected] = useState("")
    const [movesSelected, setMovesSelected] = useState("")

    const bottomMenuSelectorAbout = () => {
        setBottomMenu("about")
        resetSelected()
        setAboutSelected("selected")
    }
    const bottomMenuSelectorBase = () => {
        setBottomMenu("base-stats")
        resetSelected()
        setBaseSelected("selected")
    }
    const bottomMenuSelectorEvolution = () => {
        setBottomMenu("evolution")
        resetSelected()
        setEvolutionSelected("selected")
    }
    const bottomMenuSelectorMoves = () => {
        setBottomMenu("moves")
        resetSelected()
        setMovesSelected("selected")
    }

    const resetSelected = () => {
        setAboutSelected("")
        setBaseSelected("")
        setEvolutionSelected("")
        setMovesSelected("")
    }

    return (
        <div className="bottom-card">
            <div className="bottom-menu">
                <li className={`bottom-menu-item ${aboutSelected}`} onClick={bottomMenuSelectorAbout} >Sobre</li>
                <li className={`bottom-menu-item ${baseSelected}`} onClick={bottomMenuSelectorBase} >Atributos Base</li>
                <li className={`bottom-menu-item ${evolutionSelected}`} onClick={bottomMenuSelectorEvolution} >Evolução</li>
                <li className={`bottom-menu-item ${movesSelected}`} onClick={bottomMenuSelectorMoves} >Movimentos</li>
            </div>
            <About isShowing={(bottomMenu == "about")} pokemon={pokemon} />
            <BaseStats isShowing={(bottomMenu == "base-stats")} pokemon={pokemon} />
            <Evolution isShowing={(bottomMenu == "evolution")} pokemon={pokemon} />
            <Moves isShowing={(bottomMenu == "moves")} pokemon={pokemon} />
        </div>
    )
}


export default BottomCard