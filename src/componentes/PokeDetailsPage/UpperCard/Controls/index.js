import React from 'react'
import { Link } from 'react-router-dom'

function Controls() {
    return (
        <div className="controls-container">
            <Link to="/">
                <i className="fa fa-arrow-left"></i>
            </Link>
        </div>
    )
}


export default Controls