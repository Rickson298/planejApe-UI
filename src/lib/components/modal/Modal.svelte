<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		isOpen: boolean;
		width?: string;
		height?: string;
	};

	export let isOpen = false;
	export let width = '';
	export let height = '';

	const dispatch = createEventDispatcher();

	function handleModal() {
		isOpen = !isOpen;
		dispatch('close', isOpen);
	}

	function closeInEsc(event: KeyboardEvent) {
		event.preventDefault();

		if (event.key === 'Escape') {
			handleModal();
		}
	}

	$: if (!isOpen) {
		window.removeEventListener('keydown', closeInEsc);
	} else {
		window.addEventListener('keydown', closeInEsc);
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div transition:fade={{ duration: 100 }} class="overlay" on:click|self={handleModal}>
		<div
			style:width
			style:height
			class="modal"
			transition:scale={{ duration: 300, start: 0.75, opacity: 0 }}
		>
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;

		.modal {
			border-radius: 0.5rem;
			background: var(--blue-500);
			border: 2px solid var(--blue-400);
			box-shadow: 4px 4px 17px 0px rgba(59, 59, 59, 0.12);
			padding: 1.5rem;
			max-height: 90%;
			transition: all ease 0.2s;

			@media (max-width: 678px) {
				width: 90% !important;
				padding: 1rem;
			}
		}
	}
</style>
