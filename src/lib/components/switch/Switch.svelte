<script lang="ts">
	import Check from 'phosphor-svelte/lib/Check';
	import { createEventDispatcher } from 'svelte';
	import { blur } from 'svelte/transition';

	export let isChecked = false;
	export let label = '';

	const dispatch = createEventDispatcher<{ check: boolean }>();

	$: dispatch('check', isChecked);
</script>

<label>
	<input type="checkbox" bind:checked={isChecked} {...$$restProps} />
	<div class="toggle">
		<div class="ball">
			{#if isChecked}
				<div class="icon__container" transition:blur={{ duration: 200 }}>
					<Check size={10} />
				</div>
			{/if}
		</div>
	</div>

	{label}
</label>

<style lang="scss">
	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--white);
		user-select: none;
		cursor: pointer;
	}

	input[type='checkbox'] {
		display: none;

		&:checked {
			+ .toggle {
				border-color: var(--success-primary);

				.ball {
					background: var(--success-secondary);
					transform: translateX(calc(100% + 2px));
				}
			}
		}
		&:disabled {
			+ .toggle {
				background: var(--blue-400);
				border-color: var(--blue-300);
				cursor: not-allowed;

				.ball {
					background: var(--blue-300);
				}
			}
		}
	}

	.toggle {
		transition: all ease 0.2s;
		width: 40px;
		height: 24px;
		border-radius: 50px;
		background: transparent;
		border: 1px solid var(--blue-300);
		display: flex;
		align-items: center;
		padding-left: 4px;
		overflow: hidden;

		.ball {
			transition: all cubic-bezier(0.4, 0.82, 0.1, 1.75) 0.2s;
			border-radius: 50%;
			aspect-ratio: 1;
			height: calc(100% - 8px);
			background: var(--blue-300);
			display: flex;
			justify-content: center;
			align-items: center;

			.icon__container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
