<script setup>
import { onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCitiesStore } from '@/stores/CitiesStore'

const citiesStore = useCitiesStore()
const unsub = citiesStore.$subscribe(() => {
	localStorage.setItem('citiesData', JSON.stringify(citiesStore.locations));
});
onUnmounted(() => unsub());

</script>

<template>
	<div class="d-flex flex-column min-vh-100 page-body">
		<header class="mb-5">
			<nav class="navbar navbar-dark">
				<div class="container">
					<RouterLink to="/" class="navbar-brand">
						<font-awesome-icon
							:icon="['fas', 'sun']"
							class="me-2"
						/>
						<b>WeatherStation</b>
					</RouterLink>
				</div>
			</nav>
		</header>
		<div class="mb-5">
			<RouterView />
		</div>
		<footer class="mt-auto text-white text-center bg-dark small py-3">
			Frontend Task | Mad Duck Code
		</footer>
	</div>
</template>
