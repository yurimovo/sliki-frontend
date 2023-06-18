import React from "react"

import "./style.scss"

const TeamsPosition = () => {
    return ( 
        <div className="positions__teams">
            <div className="positions__teams__header">
                Чемпионат команд
            </div>
            <div className="positions__teams__table">
                <ul>
                    <li>Team 1</li>
                    <li>Team 2</li>
                    <li>Team 3</li>
                </ul>
            </div>
        </div>
    )
}

export default TeamsPosition