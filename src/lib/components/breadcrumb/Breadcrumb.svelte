<script lang="ts">
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import type { BreadcrumbItem } from './types';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = {
		items: BreadcrumbItem[];
	};

	export let items: BreadcrumbItem[] = [];
</script>

<div class="breadcrumb__container">
	{#each items as item, index}
		{@const isLastItem = index < items.length - 1}
		<a class="breadcrumb__item" href="/">
			<svelte:component this={item.icon} size={18} />
			<span class="label">
				{item.label}
			</span>
		</a>
		{#if isLastItem}
			<CaretRight size={12} />
		{/if}
	{/each}
</div>

<style lang="scss">
	.breadcrumb__container {
		color: var(--white);
		display: flex;
		align-items: center;
		width: fit-content;
		gap: 1rem;
		color: var(--blue-200);

		.label {
			font-size: 0.85rem;
		}

		.breadcrumb__item {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-weight: 500;
			background: none;
			border: none;
			color: var(--blue-200);
			text-decoration: none;

			&:not(:last-of-type):hover {
				cursor: pointer;
				text-decoration: underline;
			}

			&:last-of-type {
				color: var(--white);
			}
		}

		@media (max-width: 478px) {
			gap: 0.5rem;
			flex-wrap: wrap;

			.label {
				font-size: 0.75rem;
			}
		}
	}
</style>
