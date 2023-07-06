import React from "react";

import "./style.scss"

import { UserForecast } from "../../../types/forecasts";

type IPersonalForecast = {
	forecast: UserForecast
}

const PersonalForecast: React.FC<IPersonalForecast> = ({ forecast }) => {
	return (
		<div className="container personal-forecast__row">
			<div className="row">
				<div className="col-2">{forecast.id}</div>
				<div className="col-5">{forecast.gpName}</div>
				<div className="col-5">{forecast.points}</div>
			</div>
		</div>
	)
}

export default PersonalForecast