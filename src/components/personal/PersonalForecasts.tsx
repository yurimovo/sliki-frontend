import React, { useState } from "react";

import "./style.scss"

import PersonalForecast from "./personal-forecast/PersonalForecast";

import { UserForecast } from "../../types/forecasts";

const PersonalForecasts = () => {
	const [forecastList, setForecastList] = useState<Array<UserForecast>>([
		{id: 1, gpName: 'Monaco', points: 12},
		{id: 2, gpName: 'Spain', points: 25},
		{id: 3, gpName: 'Canada', points: 10},
		{id: 4, gpName: 'Austria', points: 19},
	])

	const handleForecastClick = () => {
		console.log('Clicked')
	}

	return (
		<div className='container personal-forecasts-container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-12' style={{textAlign: 'center', color: '#fdc91d', fontSize: '24px'}}>Мои прогнозы</div>
			</div>
			<div className="row" style={{color: '#fdc91d'}}>
				<div className="col-2" style={{textAlign: 'center'}}>№ п/п</div>
				<div className="col-5" style={{textAlign: 'center'}}>Наименование ГП</div>
				<div className="col-5" style={{textAlign: 'center'}}>Количество очков</div>
			</div>
			<div className="row d-flex justify-content-center">
				{
					forecastList.map((forecast: UserForecast) => {
						return (
							<div className="col-12" style={{textAlign: 'center'}} onClick={handleForecastClick}><PersonalForecast forecast={forecast} /></div>
						)
					})
				}
			</div>
		</div>
	)
}

export default PersonalForecasts