<script>
	import { onMount } from 'svelte';

	/**
	 * @type {string[]}
	 */
	export let urls = [];

	const offset = 5;
	let index = 0;
	/**
	 * @type {HTMLImageElement}
	 */
	let imgEl;
	/**
	 * @type {IntersectionObserver}
	 */
	let observer;
	$: limitedUrls = urls.slice(offset * 0, offset * (index + 1));

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting) {
					observer.unobserve(first.target);
					index += 1;
				}
			},
			{ threshold: 0.5 }
		);
		observer.observe(imgEl);
	});

	$: {
		if (imgEl) {
			imgEl.onload = (e) => {
				observer.observe(e.target);
			};
		}
	}

	function smallUrl(url) {
		return url.replace('WhatsApp', 'small_WhatsApp');
	}
</script>

<div class="gallery">
	{#each limitedUrls as url}
		<div class="container">
			<img bind:this={imgEl} class="img" src={smallUrl(url)} on:click alt="SHILO" />
		</div>
	{/each}
</div>
