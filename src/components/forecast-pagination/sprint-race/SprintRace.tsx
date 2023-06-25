import React from "react"

import "./style.scss"

import Pilots from "../../cards/pilots/Pilots"

const SprintRace = () => {
    return (
        <>
            <div className='sprint-race-header'>Спринт</div>
            <div>
                <Pilots />
            </div>
        </>
    )
}

export default SprintRace