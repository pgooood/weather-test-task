<template>
	<h5 class="mb-3">Add Cities</h5>
	<p class="text-lg mb-5 font-weight-light">
		Add 5 cities whose temperature you want to track.
	</p>
	<div class="input-group rounded bg-white p-1">
		<button class="btn btn-primary rounded-circle m-2 btn-sm" type="button" :disabled="!lookup.location" @click="onAddCity">
			<font-awesome-icon :icon="['fas', 'plus']"/>
		</button>
		<input
			v-model="query"
			type="text"
			class="form-control border-0"
			placeholder="Add a city…"
			@input="onCityInput($event)"
		/>
		<button class="btn btn-primary rounded py-2 px-4" type="button" :disabled="!lookup.location" @click="onAddCity">
			<span v-if="lookup.progress">
				<font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin"/>
			</span>
			<span v-else>Add</span>
		</button>
	</div>
	<div v-if="citiesStore.cityLookup.length" class="list-group position-absolute city-lookup">
		<button
			v-for="location in citiesStore.cityLookup"
			:key="location.id"
			type="button"
			class="list-group-item list-group-item-action"
			@click="onLocationClick(location)"
		>
			{{ location.title }}
		</button>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useCitiesStore } from '@/stores/CitiesStore'
import debounce from 'lodash.debounce'

const lookup = reactive({
	progress: false,
	location: null
});
const query = ref('');
const citiesStore = useCitiesStore()
const onCityInput = debounce(() => {
	lookup.location = null
	lookup.progress = true
	citiesStore.fetchLookup(query.value)
		.finally(() => lookup.progress = false)
}, 700)
function onLocationClick(selectedLocation){
	query.value = selectedLocation.address.city
	lookup.location = selectedLocation;
	citiesStore.cityLookup = []
}
function onAddCity(){
	citiesStore.add(lookup.location)
	query.value = ''
	lookup.location = null
}
</script>

<style scoped>
.city-lookup{
	z-index: 1000;
}
</style>