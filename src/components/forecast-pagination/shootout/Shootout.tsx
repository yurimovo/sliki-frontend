import React from "react"

import "./style.scss"

import Pilots from "../../cards/pilots/Pilots"

const Shootout = () => {
    return (
        <>
            <div className='sprint-qualify-header'>Шутаут</div>
            <div>
                <Pilots />
            </div>
        </>
    )
}

export default Shootout