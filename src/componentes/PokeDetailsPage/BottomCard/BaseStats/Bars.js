import React from 'react'
import StatusBar from '../../../StatusBar';
import { useState, useEffect } from 'react';

function Bars({ isShowing, pokemon }) {
    const [attributes, setAttributes] = useState([])
    const [attributeNames, setAttributeNames] = useState([])
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {

        const setStats = () => {
            if (isShowing && !initialized) {
                let total = 0
                const internalV = []
                pokemon.stats.map((stat) => {
                    internalV.push(stat.base_stat)
                    total += stat.base_stat
                    return stat
                })
                internalV.push(total)
                setAttributeNames(["HP", "Ataque", "Defesa", "Atq. Esp.", "Def. Esp.", "Velocidade", "Total"])
                setAttributes(internalV)
                setInitialized(true)
            }
        }
        setStats()
    }, [pokemon.stats, isShowing, attributes, initialized])

    return (
        <div className="details-bars">
            {attributeNames.map((attr, index) => (
                <StatusBar name={attr} from={0} to={attributes[index]} max={(index === 6) ? 600 : 100} isShowing={isShowing} key={`attr-${index}`} />
            ))}
        </div>
    )
}


export default Bars