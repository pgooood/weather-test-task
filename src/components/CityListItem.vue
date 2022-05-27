<template>
	<div class="card">
		<div class="card-body text-center p-4">
			<h5 class="card-title text-truncate mb-3">
				<strong>{{ city }}</strong>
			</h5>
			<h6 class="card-subtitle text-truncate small text-muted mb-4">
				{{ country }}
			</h6>
			<p class="card-text fs-2 mb-4">
				<strong>{{ temp }}°C</strong>
			</p>
			<RouterLink :to="{ name: 'cityDetail', params: { name: locationTitle }}" class="btn btn-sm p-2 btn-primary d-block">View City</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/WeatherStore'
import { ref } from 'vue'

const props = defineProps({
	city: String,
	country: String,
})
const temp = ref('...')
const locationTitle = `${props.city}, ${props.country}`
const weatherStore = useWeatherStore();

weatherStore.fetchCurrent(locationTitle)
	.then(data => temp.value = data.current.temperature)

</script>