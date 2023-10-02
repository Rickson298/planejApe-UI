<script lang="ts">
	import Check from 'phosphor-svelte/lib/Check';
	import type { Step } from './types';

	type $$Props = {
		steps: Step[];
		currentStep: number;
	};

	export let currentStep = 0;
	export let steps: $$Props['steps'] = [];
</script>

<div class="steps__container">
	{#each steps as step, index}
		{@const isCurrent = index + 1 === currentStep}
		{@const isSvelteComponente = typeof step.label === 'function'}
		<div
			title={step.description}
			class="step__item"
			class:is-checked={step.isChecked}
			class:is-current={isCurrent}
		>
			<div class="step-circle">
				<div class="step-order__container check" class:is_view={step.isChecked}>
					<Check size={26} />
				</div>

				<div class="step-order__container" class:is_view={!step.isChecked}>
					{#if isSvelteComponente}
						<svelte:component this={step.label} size={26} color={isCurrent ? 'white' : '#496985'} />
					{:else}
						{step.label}
					{/if}
				</div>
			</div>
			<span class="step-description">{step.description}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.steps__container {
		display: flex;
		align-items: center;
		gap: 1rem;

		.step-order__container {
			display: flex;
			align-items: center;
			position: absolute;
			opacity: 0;
			scale: 0;
			transition: all ease 0.2s;

			&.is_view {
				scale: 1;
				opacity: 1;
			}
		}

		transition: all ease 0.2s;
		.step__item {
			align-items: center;
			display: flex;
			gap: 1rem;
			color: var(--blue-300);

			&.is-current {
				color: white;

				.step-circle {
					background: var(--blue-300);
				}
			}

			&.is-checked {
				color: var(--white);

				.step-description {
					color: var(--success-primary);
				}

				.step-circle {
					background: var(--success-primary);
				}
			}
		}

		.step-circle {
			background: var(--blue-400);
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 44px;
			min-width: 44px;
			border-radius: 50%;
			transition: all ease 0.2s;
		}

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: start;
		}
	}
</style>
