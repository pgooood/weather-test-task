<script setup>
import CityAppend from '@/components/CityAppend.vue'
import CityListItem from '@/components/CityListItem.vue'
import { useCitiesStore } from '@/stores/CitiesStore'

const citiesStore = useCitiesStore()
</script>

<template>
	<main class="container">
		<section class="row justify-content-md-center city-append-section">
			<div class="col col-lg-8 text-white">
				<city-append />
			</div>
		</section>
		{{ citiesStore.cities }}
		<section class="row city-list">
			<div v-for="location in citiesStore.locations" :key="location.id" class="col-sm-4 mb-4">
				<city-list-item :city="location.address.city" :country="location.address.countryName" t="22" />
			</div>
		</section>
	</main>
</template>

<style lang="scss">

.city-append-section{
	margin-bottom: 2rem;
}

@include media-breakpoint-up(lg) {
	.city-append-section{
		margin-bottom: 6rem;
	}
	.city-list{
		justify-content: center !important;
		& > div{
			width: 20%;
		}
	}
}
</style>
