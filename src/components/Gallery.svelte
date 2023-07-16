<script>
	/**
	 * @type {string[]}
	 */
	export let urls = [];
</script>

<div class="gallery">
	{#each urls as url}
		<div class="container">
			<img class="img" loading="lazy" src={url} on:click alt="SHILO" />
		</div>
	{/each}
</div>
