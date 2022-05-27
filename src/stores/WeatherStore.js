import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore({
	id: 'weather',
	state: () => ({
		currentWeather: {},
		apiKey: '89d8f1f0049807e5ad227e5cde63d091',
	}),

	actions: {

		async fetchCurrent(city) {
			try {
				if (this.currentWeather[city]) {
					return new Promise(resolve => resolve(this.currentWeather[city]))
				}
				//const data = (await axios.get('/fake-current.json', {
				const data = (await axios.get('http://api.weatherstack.com/current', {
						params: {
							access_key: this.apiKey,
							query: city
						}
					})).data
				data.current.uv_index_explain = data.current.uv_index <= 2 ? 'Low'
							:  data.current.uv_index <= 5 ? 'Moderate'
							:  data.current.uv_index <= 7 ? 'Hight'
							:  data.current.uv_index <= 10 ? 'Very Hight'
							:  'Extreme'
				this.currentWeather[city] = data
				return this.currentWeather[city]
			} catch (error) {
				console.error(error)
			}
		},

		/**
		 * Emulating the forecast API because of free API version
		 */
		async fetchForecast(city) {
			try {
				const data = await this.fetchCurrent(city)
				data.forecast = {}
				// getting fake forecast
				const fakeForecast = (await axios.get('/fake-forecast.json')).data
				let date = new Date;
				// cloning fake forecast for 3 days
				for(let i = 0; i < 3; i++){
					fakeForecast.date = date.toISOString().split('T')[0]
					fakeForecast.date_epoch = Math.round(date.getTime() / 1000)
					data.forecast[fakeForecast.date] = Object.assign({}, fakeForecast)
					date.setDate(date.getDate() + 1)
				}
				console.debug(data.forecast)
				return data
			} catch (error) {
				console.error(error)
			}
		},

		weatherIcon(code,time){
			code = parseInt(code)
			time = parseInt(time)
			const isDay = time >= 100 && time < 2000;
			// accordingly https://weatherstack.com/site_resources/weatherstack-weather-condition-codes.zip
			switch(true){
				case code <= 113:
					return ['fas', isDay ? 'sun' : 'moon']
				case code <= 143:
					return ['fas', isDay ? 'cloud-sun' : 'cloud-moon']
				case code <= 176:
					return ['fas', 'cloud-showers-heavy']
				case code <= 185:
					return ['fas', 'snowflake']
				case code <= 200:
					return ['fas', 'cloud-showers-heavy']
				case code <= 284:
					return ['fas', 'snowflake']
				case code <= 314:
					return ['fas', 'cloud-showers-heavy']
				case code <= 350:
					return ['fas', 'snowflake']
				case code <= 365:
					return ['fas', 'cloud-showers-heavy']
				case code <= 377:
					return ['fas', 'snowflake']
				case code <= 389:
					return ['fas', 'cloud-showers-heavy']
				case code <= 395:
					return ['fas', 'snowflake']
			}
		}
		
	}
})
