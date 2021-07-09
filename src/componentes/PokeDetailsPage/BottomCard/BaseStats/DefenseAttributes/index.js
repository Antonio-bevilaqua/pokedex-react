import React from 'react'
import { useState, useEffect } from 'react';
import StatusBar from '../../../../StatusBar';

function DefenseAttributes({ isShowing, pokemon }) {
    const [halfDefenses, setHalfDefenses] = useState([])
    const [totalDefenses, setTotalDefenses] = useState([])
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        const setDefenses = () => {
            if (isShowing && !initialized && typeof pokemon.typeAttributes !== 'undefined') {
                const halfDamages = []
                const totalDamages = []
                pokemon.typeAttributes.damage_relations.half_damage_from.map((dmg) => {
                    halfDamages.push(dmg.name)
                    return dmg
                })
                pokemon.typeAttributes.damage_relations.no_damage_from.map((dmg) => {
                    totalDamages.push(dmg.name)
                    return dmg
                })

                setHalfDefenses(halfDamages)
                setTotalDefenses(totalDamages)
                setInitialized(true)
            }
        }
        setDefenses()
    }, [pokemon.typeAttributes, isShowing, initialized])

    return (
        <div className="details-bars">
            {halfDefenses.map((attr, index) => (
                <StatusBar name={attr} from={0} to={50} max={100} isShowing={isShowing} key={`half-${index}`} />
            ))}

            {totalDefenses.map((attr, index) => (
                <StatusBar name={attr} from={0} to={100} max={100} isShowing={isShowing} key={`full-${index}`} />
            ))}
        </div>
    )
}


export default DefenseAttributes