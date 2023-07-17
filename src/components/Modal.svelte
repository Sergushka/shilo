<script>
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	/**
	 * @type {boolean}
	 */
	export let hideModal = true;

	/**
	 * @type {string}
	 */
	export let src;

	function closeModal(e) {
		hideModal = true;
	}

	function zoom(node, { delay, duration }) {
		return {
			delay,
			duration,
			css: (t) => {
				const eased = linear(t);

				return `
				transform: scale(${eased});
				opacity: ${t};
				`;
			}
		};
	}
</script>

{#if !hideModal}
	<div class="modal" tabindex="-1" aria-hidden="true" on:click={closeModal}>
		<img transition:zoom={{ delay: 200, duration: 400 }} alt="Shilo big mode" {src} class="modal-img" />
	</div>
{/if}
