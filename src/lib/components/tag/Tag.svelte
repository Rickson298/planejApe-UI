<script>
	import X from 'phosphor-svelte/lib/X';

	export let title = '';
	export let description = '';
</script>

<div class="tag__container">
	<div class="texts">
		<span class="title">{title}:</span>
		<span>{description}</span>
	</div>
	<button on:click class="x-button">
		<X color="#fff" size={16} />
	</button>
</div>

<style lang="scss">
	.tag__container {
		background: var(--blue-300);
		width: fit-content;
		padding: 3px 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 25px;
		gap: 1rem;
		transition: all ease 0.2s;
		cursor: pointer;
		border: 2px solid transparent;
		overflow: hidden;
		box-shadow: 0px 0px 5px var(--blue-600);

		&:hover {
			.x-button {
				transform: translateX(0px);
			}
		}

		.x-button {
			display: flex;
			justify-content: center;
			align-items: center;
			background: none;
			border: none;
			cursor: pointer;
			transform: translateX(25px);
			transition: all cubic-bezier(0.75, -0.82, 0.165, 1.5) 0.3s;
			border-radius: 50%;
		}

		.texts {
			gap: 0.25rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		span {
			&.title {
				font-weight: 500;
			}

			font-size: 0.75rem;
			line-height: 0.75rem;
			color: var(--white);
		}
	}
</style>
