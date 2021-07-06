import React from 'react'
import { useState, useEffect } from 'react';

function Bars({ isShowing, pokemon }) {
    const [hp, setHp] = useState(0)
    const [atk, setAttack] = useState(0)
    const [def, setDefense] = useState(0)
    const [spAtk, setSpAttack] = useState(0)
    const [spDef, setSpDefense] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [total, setTotal] = useState(0)
    const [totalpct, setTotalPct] = useState(0)

    //busca o pokemon na lista, caso não exista, faz a requisição na API
    useEffect(() => {
        const setStats = async () => {
            if (pokemon.hasOwnProperty('stats')) {
                setTimeout(function () {
                    if (isShowing) {
                        let total = 0
                        pokemon.stats.map((stat, index) => {
                            switch (index) {
                                case 0:
                                    setHp(stat.base_stat)
                                    total += stat.base_stat
                                    break
                                case 1:
                                    setAttack(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                                case 2:
                                    setDefense(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                                case 3:
                                    setSpAttack(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                                case 4:
                                    setSpDefense(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                                case 5:
                                    setSpeed(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                                case 6:
                                    setTotal(stat.base_stat)
                                    total += stat.base_stat
                                    break;
                            }
                        })
                        setTotal(total)
                        setTotalPct((total / 600) * 100)
                    } else {
                        setHp(0)
                        setAttack(0)
                        setDefense(0)
                        setSpAttack(0)
                        setSpDefense(0)
                        setSpeed(0)
                        setTotal(0)
                        setTotalPct(0)
                    }
                }, 400)
            }

        }

        setStats()
    })

    return (
        <div className="details-bars">
            <div className="details-row">
                <div className="details-description">
                    HP
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {hp}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? hp + '%' : '0%', backgroundColor: (hp < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Ataque
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {atk}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? atk + '%' : '0%', backgroundColor: (atk < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Defesa
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {def}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? def + '%' : '0%', backgroundColor: (def < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Atq Esp.
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {spAtk}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? spAtk + '%' : '0%', backgroundColor: (spAtk < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Def. Esp.
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {spDef}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? spDef + '%' : '0%', backgroundColor: (spDef < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Velocidade
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {speed}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? speed + '%' : '0%', backgroundColor: (speed < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-row">
                <div className="details-description">
                    Total
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {total}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{ maxWidth: (isShowing) ? totalpct + '%' : '0%', backgroundColor: (totalpct < 50) ? '#F42F2F' : '#1E9E27' }} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Bars