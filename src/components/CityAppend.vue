<template>
	<h5 class="mb-3">Add Cities</h5>
	<p class="text-lg mb-5 font-weight-light">
		Add 5 cities whose temperature you want to track.
	</p>
	<div class="input-group rounded mb-3 bg-white p-1">
		<button class="btn btn-primary rounded-circle m-2 btn-sm" type="button">
			<font-awesome-icon :icon="['fas', 'plus']" />
		</button>
		<input
			type="text"
			class="form-control border-0"
			placeholder="Add a city…"
		/>
		<button class="btn btn-primary rounded py-2 px-4" type="button">
			Add
		</button>
	</div>
</template>
