<script setup>
	defineProps({
		city: String,
		country: String,
		t: String,
	});
</script>

<template>
	<div class="card">
		<div class="card-body text-center p-4">
			<h5 class="card-title text-truncate mb-3"><strong>{{ city }}</strong></h5>
			<h6 class="card-subtitle text-truncate small text-muted mb-4">{{ country }}</h6>
			<p class="card-text fs-2 mb-4">
				<strong>{{ t }}°C</strong>
			</p>
			<a href="#" class="btn btn-sm p-2 btn-primary d-block">View City</a>
		</div>
	</div>
</template>