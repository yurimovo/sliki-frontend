import { observable, action, computed } from 'mobx';

import { PilotInList } from "../types/pilots"

class ForecastStore {
	qualPilots: Array<PilotInList> = []

	refreshQualPilots(pilotsList: Array<PilotInList>) {
			pilotsList.map((pilot) => {
				this.qualPilots.push(pilot)
			})
	}
}

const forecastStore = new ForecastStore
export default forecastStore