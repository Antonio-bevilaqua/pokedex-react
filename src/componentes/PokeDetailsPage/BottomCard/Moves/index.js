import React from 'react'

function Moves({isShowing}) {
    return (
        <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }}>
            <div className="details-description">
            </div>
            <div className="details-value">
            </div>
            <div className="details-bottom">
                <h5>Moves</h5>
                <div className="details-description">
                </div>
                <div className="details-value">
                </div>
            </div>
        </div>
    )
}


export default Moves