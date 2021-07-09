import React from 'react'
import { useState, useEffect } from 'react';

function StatusBar({ isShowing, name, from, to, max }) {
    const [attribute, setAttribute] = useState(0)
    const [intervalValue, setIntervalValue] = useState(0)
    const [finalValue, setFinalValue] = useState(0)
    const [initialized, setInitialized] = useState(false)
    const [finalized, setFinalized] = useState(false)
    const [attributeName, setAttributeName] = useState("")
    const [maxValue, setMaxValue] = useState(0)

    useEffect(() => {
        const startCounter = () => {
            if (initialized && !finalized) {
                let newAttr = attribute + intervalValue
                if (newAttr >= finalValue) {
                    newAttr = finalValue
                    setFinalized(true)
                }
                setAttribute(newAttr)
            }
        }

        const setValue = () => {
            if (isShowing && !initialized) {
                setFinalValue(to)
                setIntervalValue((to - from) / 500)
                setAttributeName(name)
                setAttribute(from)
                setInitialized(true)
                setMaxValue(max)
            }
        }
        setValue()
        startCounter()
    }, [name, from, to, max, isShowing, finalValue, intervalValue, attribute, initialized, finalized])

    return (
        <div className="details-bars">
            <div className="details-row">
                <div className="details-description">
                    {attributeName}
                </div>
                <div className="details-value">
                    <div className="d-flex">
                        {Math.ceil(attribute)}
                        <div className="barraStatus">
                            <div className="barraCheia" style={{
                                maxWidth: ((attribute * 100) / max) + '%',
                                backgroundColor: (attribute <= (maxValue / 1.7)) ? (attribute <= (maxValue / 2.01))  ? '#F42F2F' : '#f5b11d' : '#1E9E27'
                            }} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StatusBar