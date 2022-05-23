<script setup>
import CityAppend from "@/components/CityAppend.vue";
import CityListItem from "@/components/CityListItem.vue";
</script>

<template>
	<main class="container">
		<section class="row justify-content-md-center city-append-section">
			<div class="col col-lg-8 text-white">
				<city-append />
			</div>
		</section>
		<section class="row city-list">
			<div class="col-sm-4 mb-4">
				<city-list-item city="Novi Sad" country="Serbia" t="22" />
			</div>
			<div class="col-sm-4 mb-4">
				<city-list-item city="Belgrade" country="Serbia" t="18" />
			</div>
			<div class="col-sm-4 mb-4">
				<city-list-item city="Nice" country="France" t="12" />
			</div>
			<div class="col-sm-4 mb-4">
				<city-list-item city="Barcelona" country="Spain" t="12" />
			</div>
			<div class="col-sm-4 mb-4">
				<city-list-item city="Budapest" country="Hungary" t="15" />
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
