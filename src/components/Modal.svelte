<script>
	import { fade, fly } from 'svelte/transition';

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
</script>

{#if !hideModal}
	<div out:fade class="modal" tabindex="-1" aria-hidden="true" on:click={closeModal}>
		<img in:fly={{ y: 500, duration: 500 }} alt="Shilo big mode" {src} class="modal-img" />
	</div>
{/if}
