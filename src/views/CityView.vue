<template>
	<main class="container">
		<section class="city-block row mb-4">
			<div class="col-lg-8 col-xl-7">
				<div class="card card-body">
					<div class="row">
						<div class="col">
							<h1 class="h4 mb-4">{{ $route.params.name }}</h1>
							<p class="small mb-2">Vojvodina, Serbia</p>
							<p class="small mb-2">45.2396° N, 19.8227° E</p>
						</div>
						<div class="col city-block__weather">
							<font-awesome-icon :icon="['fas', 'sun']" class="my-2"/>
							<div><b>22°C</b></div>
						</div>
						<div class="col city-block__weather-details small">
							<dl class="inline mb-0">
								<dt>Feels like</dt>
								<dd>20°C</dd>
								<dt>Humidity</dt>
								<dd>41%</dd>
								<dt>Pressure</dt>
								<dd>1005 mbar</dd>
								<dt>Wind</dt>
								<dd>3.1 m/s SE</dd>
								<dt>UV index</dt>
								<dd>Low</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="weather-block card mb-4">
			<div class="card-body">
				<h3 class="h5">Thursday, Apr 07.</h3>
				<ul class="list-unstyled d-flex mb-0 overflow-auto">
					<li v-for='hour in 23' :key='hour' class="flex-fill p-2">
						<p class="small">{{ hour }}h</p>
						<font-awesome-icon :icon="['fas', 'sun']" class="my-2"/>
						<p><b>13°</b></p>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<h3 class="h5">Thursday, Apr 07.</h3>
				<ul class="list-unstyled d-flex mb-0 overflow-auto">
					<li v-for='hour in 23' :key='hour' class="flex-fill p-2">
						<p class="small">{{ hour }}h</p>
						<font-awesome-icon :icon="['fas', 'sun']" class="my-2"/>
						<p><b>13°</b></p>
					</li>
				</ul>
			</div>
			<div class="card-body">
				<h3 class="h5">Thursday, Apr 07.</h3>
				<ul class="list-unstyled d-flex mb-0 overflow-auto">
					<li v-for='hour in 23' :key='hour' class="flex-fill p-2">
						<p class="small">{{ hour }}h</p>
						<font-awesome-icon :icon="['fas', 'sun']" class="my-2"/>
						<p><b>13°</b></p>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

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

<script setup>
// defineProps({
// 	name: String,
// });
</script>