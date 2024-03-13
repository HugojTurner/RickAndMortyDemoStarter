<script>
	export let planet;
</script>

<div class="card mx-auto text-center p-0" style="width: 15rem;">
	{#if planet.imageLink != ''}
		<img src={planet.imageLink} class="card-img-top image-detail-planet" alt={planet.name} />
	{:else}
		<img
			src="https://placehold.co/300x300"
			class="card-img-top image-detail-planet"
			alt={planet.name}
		/>
	{/if}
	<div class="card-body">
		<h5 class="card-title">{planet.name}</h5>
	</div>
</div>
