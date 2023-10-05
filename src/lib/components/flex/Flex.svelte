<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { JustifyContent, FlexDirection, AlignItems, FlexWrap } from '$lib/shared/types/flex';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLAttributes<HTMLDivElement> & {
		justifyContent?: JustifyContent;
		direction?: FlexDirection;
		alignItems?: AlignItems;
		wrap?: FlexWrap;
		gap?: string;
		width?: string;
		padding?: string;
		height?: string;
	};

	export let justifyContent: JustifyContent = 'center';
	export let direction: FlexDirection = 'row';
	export let alignItems: AlignItems = 'center';
	export let wrap: FlexWrap = 'nowrap';
	export let gap = '0';
	export let width = 'fit-content';
	export let padding = '0';
	export let height = 'fit-content';
</script>

<div
	style="display:flex"
	style:justify-content={justifyContent}
	style:flex-direction={direction}
	style:align-items={alignItems}
	style:flex-wrap={wrap}
	style:width
	style:gap
	style:padding
	style:height
	{...$$restProps}
>
	<slot />
</div>
