<script>
	/**
	 * @type {string}
	 */
	let classList;

	/**
	 * @type {boolean}
	 */
	export let hideModal = true;

	$: if (hideModal) {
		classList =
			'hidden fixed top-0 left-0 w-screen h-screen bg-black/70 justify-center items-center';
	} else {
		classList = 'flex fixed top-0 left-0 w-screen h-screen bg-black/70 justify-center items-center';
	}
	/**
	 * @type {string}
	 */
	export let src;

	function closeModal(e) {
		if (e?.target?.localName != 'img') {
			hideModal = true;
		}
	}
</script>

<div class={classList} tabindex="-1" aria-hidden="true" on:click={closeModal}>
	<img alt="Shilo big mode" {src} class="modal-img" />
</div>
