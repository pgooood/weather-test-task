import { defineStore } from 'pinia'
import axios from 'axios'

export const useCitiesStore = defineStore({
	id: 'cities',
	state: () => {
		return {
			hereapiKey: 'VKnm8C5_l5Bj3_fpSIRycaG1nOgBd7jgRjNunEmb0S4',
			locations: JSON.parse(localStorage.getItem('citiesData')) || [],
			cityLookup: [],
		}
	},
	actions: {
		add(location) {
			if (location && !this.locations.find(l => l.id === location.id)) {
				this.locations.push(location)
				if (this.locations.length > 5)
					this.locations.shift()
			}

		},
		async fetchLookup(query) {
			try {
				if (!query.length) {
					return new Promise((resolve) => {
						this.cityLookup = []
						resolve()
					})
				}
				const response = await axios.get('https://autocomplete.search.hereapi.com/v1/autocomplete', {
					params: {
						q: query,
						apiKey: this.hereapiKey,
						limit: 10
					}
				})
				this.cityLookup = response.data && response.data.items
					? response.data.items.filter(item => item.localityType === 'city')
					: []
				return response
			} catch (error) {
				console.error(error)
			}
		}
	}
})
