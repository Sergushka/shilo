<script>
	import Gallery from '../components/Gallery.svelte';
	import Modal from '../components/Modal.svelte';

	export let data;
	/**
	 * @type {boolean}
	 */
	let hideModal = true;
	let src = '';

	function showModal(e) {
		hideModal = false;
		src = e.target.src;
	}
</script>

<Gallery urls={data.urls} on:click={showModal} />
<Modal bind:hideModal {src} />
