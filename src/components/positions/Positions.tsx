import React from "react"

import PilotsPosition from "./pilots-position/PilotsPosition"
import TeamsPosition from "./teams-position/TeamsPosition"
import ForecastPosition from "./forecast-position/ForecastPosition"

import "./style.scss"

const Positions = () => {
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-4">
                    <PilotsPosition />
                </div>
                <div className="col-4">
                    <TeamsPosition />
                </div>
                <div className="col-4">
                    <ForecastPosition />
                </div>
            </div>
        </div>
    )
}

export default Positions