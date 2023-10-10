<script lang="ts">
	import { Flex, Typography } from '$lib';
	import { createEventDispatcher } from 'svelte';

	export let value = 10;

	export let itemsPerPage = 10;

	export let optionsQuantity = 3;

	export let label = 'Itens por página:';

	$: items = Array.from({ length: optionsQuantity }, (_, index) => {
		const currentMultiplier = index + 1;

		return currentMultiplier * itemsPerPage;
	});

	const dispatch = createEventDispatcher<{ click: number }>();

	function handleItemsPerPage(currentItemsPerPage: number) {
		value = currentItemsPerPage;

		dispatch('click', value);
	}
</script>

<Flex gap="1.5rem">
	<Typography>{label}</Typography>

	<div class="buttons__container">
		{#each items as item}
			<button
				on:click={() => {
					handleItemsPerPage(item);
				}}
				class:selected={value === item}
				value={item}
			>
				{item}
			</button>
		{/each}
	</div>
</Flex>

<style lang="scss">
	.buttons__container {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	button {
		color: var(--white);
		display: flex;
		align-items: center;
		background: none;
		border: none;
		font-weight: 600;
		position: relative;
		cursor: pointer;
		transition: all ease 0.2s;

		&.selected {
			color: var(--blue-200);

			&::after {
				scale: 1;
			}
		}

		&::after {
			content: '';
			position: absolute;
			height: 3px;
			width: 100%;
			background: var(--blue-200);
			bottom: 0;
			left: 0;
			border-radius: 8px;
			scale: 0;

			transition: all cubic-bezier(0.075, 0.82, 0.165, 1.25) 0.3s;
		}
	}
</style>
