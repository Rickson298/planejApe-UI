<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		secondary?: boolean;
	};

	export let secondary = false;
</script>

<button data-is-secondary={secondary} type="button" on:click {...$$restProps}>
	<slot name="icon" />
	<slot />
</button>

<style lang="scss">
	button {
		padding: 0.85rem 2rem;
		border: 1px solid var(--blue-300, #3e698b);
		border-radius: 0.5rem;
		color: var(--white);
		background: var(--blue-400);
		transition: all ease 0.2s;
		cursor: pointer;
		display: flex;
		gap: 0.5rem;
		height: fit-content;

		&:hover {
			filter: brightness(0.9);
		}

		&[data-is-secondary='true'] {
			background: transparent;
		}
	}
</style>
