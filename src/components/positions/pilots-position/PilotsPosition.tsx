import React from "react";

import "./style.scss"

const PilotsPosition = () => {
    return ( 
        <div className="positions__pilots">
            <div className="positions__pilots__header">
                Чемпионат пилотов
            </div>
            <div className="positions__pilots__table">
                <ul>
                    <li>Pilot 1</li>
                    <li>Pilot 2</li>
                    <li>Pilot 3</li>
                </ul>
            </div>
        </div>
    )
}

export default PilotsPosition