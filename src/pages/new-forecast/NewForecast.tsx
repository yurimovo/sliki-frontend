import React from "react";

import Basket from "../../components/cards/basket-card/Basket";
import Pilots from "../../components/cards/pilots/Pilots";

import "./style.scss"

const NewForecast = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Basket />
                </div>
                <div className="col-6">
                    <Pilots />
                </div>
            </div>
        </div>
    )
}

export default NewForecast