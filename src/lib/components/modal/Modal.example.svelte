<script>
	import { THEME_COLORS } from '$lib/theme/tokens';
	import Button from '../button/Button.svelte';
	import Typography from '../typography/Typography.svelte';
	import Modal from './Modal.svelte';

	export let isOpen = false;

	function handleModal() {
		isOpen = !isOpen;
	}
</script>

<Button on:click={handleModal}>Abrir modal</Button>

<Modal bind:isOpen width="550px">
	<div class="modal__content" class:isOpen>
		<Typography>Eu sou um modal :)</Typography>
		<Button on:click={handleModal} background={THEME_COLORS['blue-700']}>Fechar</Button>
	</div>
</Modal>

<style>
	.modal__content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
