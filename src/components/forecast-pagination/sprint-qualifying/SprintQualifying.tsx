import React from "react"

import "./style.scss"

import Pilots from "../../cards/pilots/Pilots"

const SprintQualifying = () => {
    return (
        <>
            <div className='sprint-qualify-header'>Спринт-квалификация</div>
            <div>
                <Pilots />
            </div>
        </>
    )
}

export default SprintQualifying