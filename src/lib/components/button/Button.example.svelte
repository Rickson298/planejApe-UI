<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Button from './Button.svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		secondary?: boolean;
		storybookLabel?: string;
	};

	export let storybookLabel = 'Storybook';
</script>

<Button {...$$restProps} on:click>{storybookLabel}</Button>
