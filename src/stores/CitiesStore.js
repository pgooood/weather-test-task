import { defineStore } from 'pinia'

export const useCitiesStore = defineStore({
	id: 'cities',
	state: () => {
		return {
			cities: JSON.parse(localStorage.getItem('citiesData')) || {}
		}
	},
	actions: {
		add(name) {
			if (!this.cities[name])
				this.cities[name] = {
					productId,
					quantity: 0,
				};
			this.items[name].quantity += 1
		},
		remove(name) {
			if (this.cities[name])
				delete this.cities[name]
		},
	}
})
