<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import TrashSimple from 'phosphor-svelte/lib/TrashSimple';

	import { Flex } from '$lib';

	import type { SelectOption } from './types';

	export let options: SelectOption[] = [];

	export let placeholder = '';

	export let value = '';

	let isOpen = false;

	let selectElement: HTMLButtonElement | null = null;

	const eventDispatcher = createEventDispatcher<{ open: boolean; select: string }>();

	$: currentLabel = options.find((option) => option.value === value)?.label;

	$: {
		if (isOpen) {
			window.addEventListener('click', handleCloseWhenLoseFocus);
		} else {
			window.removeEventListener('click', handleCloseWhenLoseFocus);
		}

		eventDispatcher('open', isOpen);
		eventDispatcher('select', value);
	}

	function handleClearOption(event: MouseEvent) {
		event.stopPropagation();
		value = '';
	}

	function choseOption(option: SelectOption) {
		value = option.value;
	}

	function handleOpenOptions() {
		isOpen = !isOpen;
	}

	function handleCloseWhenLoseFocus(event: MouseEvent) {
		const target = event.target as HTMLElement;

		if (!selectElement?.contains(target)) {
			isOpen = false;
		}
	}
</script>

<button
	data-has-selected-option={!!currentLabel}
	class="select"
	class:is-open={isOpen}
	bind:this={selectElement}
	on:click={handleOpenOptions}
	{value}
>
	{#if currentLabel}
		{#key currentLabel}
			<span
				in:fade={{ duration: 150, delay: 150 }}
				out:fade={{ duration: 150 }}
				class="selected-label"
			>
				{currentLabel}
			</span>
		{/key}
	{/if}
	<span class="select-label">
		{placeholder}
	</span>

	<Flex gap="1rem">
		{#if value}
			<button
				transition:scale={{ duration: 200 }}
				on:click={handleClearOption}
				class="clear-select__container"
				title="Limpar seleção"
			>
				<TrashSimple size={20} />
			</button>
		{/if}

		<div class="caret-right">
			<CaretRight size={20} />
		</div>
	</Flex>

	{#if isOpen}
		<div transition:fly={{ y: 15, duration: 200 }} class="options__container">
			{#each options as option}
				<button
					class="option"
					value={option.value}
					on:click={() => {
						choseOption(option);
					}}
				>
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</button>

<style lang="scss">
	.select {
		border-radius: 0.5rem;
		border: 2px solid var(--blue-300);
		padding: 0.75rem 0.875rem;
		position: relative;
		color: var(--blue-300);
		cursor: pointer;
		width: 100%;
		background: none;
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: end;
		height: 51px;

		&[data-has-selected-option='true'] {
			justify-content: space-between;

			.selected-label {
				color: var(--white);
			}

			.select-label {
				left: 1rem;
				top: 0;
				color: var(--white);
				background: var(--blue-300);
				padding: 1px 6px;
				border-radius: 16px;
				font-size: 0.75rem;
			}
		}

		.clear-select__container {
			color: var(--gray-400);
			display: flex;
			align-items: center;
			opacity: 0.6;
			transition: all ease 0.2s;
			background: none;
			border: none;
			cursor: pointer;

			&:hover {
				opacity: 1;
				transform: scale(1.1);
			}
		}

		&.is-open {
			.caret-right {
				transform: rotate(90deg);
			}
		}

		.caret-right {
			display: flex;
			align-items: center;
			color: var(--blue-300);
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1.5) 0.2s;
		}

		.select-label {
			color: var(--blue-300);
			position: absolute;
			left: 1rem;
			top: 50%;
			transform: translateY(-50%);
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1.3) 0.2s;
		}

		.options__container {
			width: 100%;
			background: var(--blue-400);
			position: absolute;
			left: 0;
			top: 64px;
			border-radius: 0.5rem;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			max-height: 250px;
			overflow-y: auto;

			&::-webkit-scrollbar {
				width: 8px;
				background: var(--blue-400);
				border-radius: 3px;
			}
			&::-webkit-scrollbar-thumb {
				background: var(--blue-300);
				width: 8px;
				border-radius: 0.85rem;
			}

			.option {
				padding: 1rem;
				color: var(--white);
				transition: all ease 0.2s;
				background: transparent;
				border: none;
				text-align: left;
				cursor: pointer;

				&:hover {
					background: var(--blue-500);
				}
			}
		}
	}
</style>
