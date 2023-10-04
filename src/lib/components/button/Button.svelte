<script lang="ts">
	import { THEME_COLORS } from '$lib/theme/tokens';
	import type { HTMLAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		background?: string;
		secondary?: boolean;
	};

	export let secondary = false;
	export let background = THEME_COLORS['blue-400'];
</script>

<button
	style:background={secondary ? 'transparent' : background}
	style:border-color={background}
	data-is-secondary={secondary}
	type="button"
	on:click
	{...$$restProps}
>
	<slot name="icon" />
	<slot />
</button>

<style lang="scss">
	button {
		padding: 0.85rem 2rem;
		border-radius: 0.5rem;
		color: var(--white);
		transition: all ease 0.2s;
		cursor: pointer;
		display: flex;
		gap: 0.5rem;
		height: fit-content;
		border: none;
		justify-content: center;
		border: 2px solid transparent;

		&:active {
			scale: 0.98;
		}

		&:hover {
			filter: brightness(0.9);
		}
	}
</style>
