import React from "react";

import Teams from "../../components/cards/teams/Teams";
import Pilots from "../../components/cards/pilots/Pilots";

import "./style.scss"

const NewForecast = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Teams />
                </div>
                <div className="col-6">
                    <Pilots />
                </div>
            </div>
        </div>
    )
}

export default NewForecast