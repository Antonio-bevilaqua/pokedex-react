import React from 'react'

function Gender({ percentageMale, percentageFemale }) {

    return (percentageFemale !== -1) ? (
        <div className="details-value">
            <i class="fas fa-mars" style={{ color: "blue" }} ></i> {percentageMale}%
            <i class="fas fa-mars" style={{ color: "pink", marginLeft: "1rem" }}></i> {percentageFemale}%
        </div>
    ) : (
        <div className="details-value">
            <i class="fas fa-venus-mars" style={{ color: "purple" }}></i> Sem gênero
        </div>
    )
}


export default Gender