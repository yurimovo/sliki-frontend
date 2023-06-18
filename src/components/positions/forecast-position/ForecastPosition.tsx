import React from "react"

import "./style.scss"

const ForecastPosition = () => {
    return ( 
        <div className="positions__forecasters">
            <div className="positions__forecasters__header">
                Кубок прогнозов
            </div>
            <div className="positions__forecasters__table">
                <ul>
                    <li>Forecaster 1</li>
                    <li>Forecaster 2</li>
                    <li>Forecaster 3</li>
                </ul>
            </div>
        </div>
    )
}

export default ForecastPosition