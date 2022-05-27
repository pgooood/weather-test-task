<template>
	<main class="container">
		<section class="city-block row mb-4">
			<div class="col-lg-8 col-xl-7">
				<div class="card card-body">
					<div class="row">
						<div class="col">
							<h1 class="h4 mb-4">{{ location.name }}</h1>
							<p class="small mb-2">{{ location.region }}, {{ location.country }}</p>
							<p class="small mb-2">{{ location.lat }}° N, {{ location.lon }}° E</p>
						</div>
						<div class="col city-block__weather">
							<font-awesome-icon v-if="currentIcon.length" :icon="currentIcon" class="my-2"/>
							<div><b>{{ current.temperature }}°C</b></div>
						</div>
						<div class="col city-block__weather-details small">
							<dl class="inline mb-0">
								<dt>Feels like</dt>
								<dd>{{ current.feelslike }}°C</dd>
								<dt>Humidity</dt>
								<dd>{{ current.humidity }}%</dd>
								<dt>Pressure</dt>
								<dd>{{ current.pressure }} mbar</dd>
								<dt>Wind</dt>
								<dd>{{ current.wind_speed }} m/s {{ current.wind_dir }}</dd>
								<dt>UV index</dt>
								<dd>{{ current.uv_index_explain }}</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="weather-block card mb-4">
			<div v-for="forecast in forecastList" :key="forecast.date" class="card-body">
				<h3 class="h5">{{ moment(forecast.date).format('dddd, MMM DD.') }}</h3>
				<ul class="list-unstyled d-flex mb-0 overflow-auto">
					<li v-for="hour in forecast.hourly" :key="hour.time" class="flex-fill p-2">
						<p class="small">{{ hour.time.slice(0,-2) || 0 }}h</p>
						<font-awesome-icon :icon="weatherStore.weatherIcon(hour.weather_code,hour.time)" class="my-2"/>
						<p><b>{{ hour.temperature }}°</b></p>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script setup>
import { useWeatherStore } from '@/stores/WeatherStore'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

const currentIcon = ref([])
const location = ref({})
const current = ref({})
const forecastList = ref({})
const weatherStore = useWeatherStore();
const route = useRoute()


weatherStore.fetchForecast(route.params.name)
	.then(data => {
		location.value = data.location
		current.value = data.current
		forecastList.value = data.forecast
		currentIcon.value = weatherStore.weatherIcon(
				data.current.weather_code,
				moment(data.location.localtime_epoch).format('H00')
			)
	})
</script>

<style lang="scss">
	.weather-block{
		.card-body{
			padding: 1.5rem 2.3rem;
		}
	}
	.city-block{
		.card-body{
			padding: 1.5rem 2.3rem;
		}
	}
	.city-block__weather{
		font-size: 2.5rem;
		text-align: center;
		.fa-sun{
			font-size: 4rem;
		}
	}
	.city-block__weather-details{
		line-height: 1.8rem;
	}
</style>
