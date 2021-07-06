import React from 'react'

function Evolution({isShowing}) {
    return (
        <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }}>
            <div className="details-description">
            </div>
            <div className="details-value">
            </div>
            <div className="details-bottom">
                <h5>Evolution</h5>
                <div className="details-description">
                </div>
                <div className="details-value">
                </div>
            </div>
        </div>
    )
}


export default Evolution