<script lang="ts">
	import type { Colors, FontSizes, FontWeight, TextAlign } from '$lib';
	import Typography from './Typography.svelte';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		fontSize?: FontSizes;
		textAlign?: TextAlign;
		color?: Colors;
		fontWeight?: FontWeight;
		storybookLabel?: string;
	};

	export let storybookLabel = 'Typography';
</script>

<Typography {...$$restProps}>{storybookLabel}</Typography>
