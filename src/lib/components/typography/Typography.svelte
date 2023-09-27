<script lang="ts">
	import type { Colors, FontSizes, FontWeight, TextAlign } from '$lib';

	export let fontSize: FontSizes = '1rem';
	export let textAlign: TextAlign = 'start';
	export let color: Colors = 'white';
	export let fontWeight: FontWeight = '500';
</script>

<span
	style:font-size={fontSize}
	style:text-align={textAlign}
	style:font-weight={fontWeight}
	style:color={`var(--${color})`}
>
	<slot />
</span>

<style>
	span {
		transition: all ease 0.2s;
	}
</style>
