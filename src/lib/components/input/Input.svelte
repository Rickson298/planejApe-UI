<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLInputAttributes & {
		helperText?: string;
	};

	export let helperText = '';
</script>

<fieldset>
	<label>
		<input
			on:input
			data-alert={!!helperText}
			aria-disabled={$$props.disabled}
			placeholder={$$props.placeholder}
			{...$$restProps}
		/>
		{#if $$props.placeholder}
			<span class="placeholder-custom">{$$props.placeholder}</span>
		{/if}
	</label>
	{#if helperText}
		<small class="helper-text" transition:slide>{helperText}</small>
	{/if}
</fieldset>

<style lang="scss">
	label {
		position: relative;
		width: 100%;
	}

	.helper-text {
		padding-left: 1rem;
		font-weight: 600;
		color: var(--blue-200);
	}

	fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		gap: 0.5rem;
	}

	.placeholder-custom {
		white-space: nowrap;
		left: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: calc(100% - 2rem);
		width: fit-content;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: var(--blue-300);
		transition: all ease 0.2s;
		pointer-events: none;
		background: inherit;
	}

	input {
		padding: 0.75rem 0.875rem;
		border-radius: 0.5rem;
		border: 2px solid var(--blue-300);
		background: transparent;
		transition: all ease 0.2s;
		outline: 1px solid transparent;
		width: 100%;
		color: var(--white);

		&[data-alert='true'] {
			background: var(--blue-400);
			border-color: var(--blue-200);

			+ .placeholder-custom {
				color: var(--blue-200);
			}
		}

		&:disabled {
			border: 2px solid var(--blue-400);
			background: var(--blue-500);
			color: var(--blue-400);
			cursor: not-allowed;

			+ .placeholder-custom {
				opacity: 0.7;
			}
		}

		&::placeholder {
			visibility: hidden;
		}

		&:not(:placeholder-shown),
		&:focus {
			+ .placeholder-custom {
				left: 1rem;
				top: 0px;
				color: var(--white);
				background: var(--blue-300);
				padding: 1px 6px;
				border-radius: 16px;
				font-size: 0.75rem;
			}
		}

		&:focus {
			outline-color: var(--blue-200);
		}
	}
</style>
