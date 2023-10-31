<script lang="ts">
	let skeletonElement: HTMLDivElement | null = null;

	export let isLoading = false;
	export let width = '';
	export let height = '';
	export let background = '';

	$: {
		const firstChild = skeletonElement?.firstChild as HTMLElement;

		const firstChildCSS = firstChild && window.getComputedStyle(firstChild);

		const firstChildBorderRadius = firstChildCSS?.getPropertyValue('border-radius') || '';

		if (skeletonElement) {
			skeletonElement.style.borderRadius = firstChildBorderRadius;
		}
	}
</script>

{#if isLoading}
	<div
		data-testId="skeleton"
		bind:this={skeletonElement}
		style:background
		style:width={width || 'fit-content'}
		style:height
		class="skeleton"
		{...$$restProps}
	>
		<slot />
	</div>
{:else if $$slots.default}
	<slot />
{/if}

<style lang="scss">
	.skeleton {
		background: var(--blue-400);
		height: fit-content;
		max-width: 100%;
		position: relative;
		overflow: hidden;

		&::before {
			position: absolute;
			content: '';
			width: 100%;
			height: 100%;
			background: inherit;
			z-index: 2;
		}

		&::after {
			position: absolute;
			content: '';
			background: inherit;
			filter: brightness(0.9) blur(30px);
			height: 150%;
			width: 40%;
			animation: wave 1.5s infinite;
			top: -25%;
			z-index: 3;
		}

		@keyframes wave {
			0% {
				transform: translateX(-150%);
			}
			100% {
				transform: translateX(270%);
			}
		}
	}
</style>
