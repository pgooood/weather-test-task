import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore({
	id: 'weather',
	state: () => ({
		weather: {},
		apiKey: '89d8f1f0049807e5ad227e5cde63d091',
	}),
	actions: {
		fetchCurrent(city) {
			let response = axios.get('http://api.weatherstack.com/current', {
				params: {
					access_key: this.apiKey,
					query: city
				}
			})
		}
	}
})
