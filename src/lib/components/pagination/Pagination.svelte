<script lang="ts">
	import CaretLeft from 'phosphor-svelte/lib/CaretLeft';
	import CaretRight from 'phosphor-svelte/lib/CaretRight';
	import Typography from '../typography/Typography.svelte';

	export let currentPage = 1;
	export let maxPage = 1;
	$: isLastPage = currentPage >= maxPage;
	$: isFirstPage = currentPage <= 1;

	function increasePage() {
		currentPage++;
	}
	function decreasePage() {
		currentPage--;
	}
</script>

<div class="pagination__container">
	<button disabled={isFirstPage} on:click={decreasePage}>
		<CaretLeft color="white" />
	</button>
	<Typography>
		{currentPage} de {maxPage}
	</Typography>

	<button disabled={isLastPage} on:click={increasePage}>
		<CaretRight color="white" />
	</button>
</div>

<style lang="scss">
	.pagination__container {
		display: flex;
		align-items: center;
		gap: 1rem;

		button {
			background: var(--blue-600);
			border: 1px solid var(--blue-400);
			display: flex;
			align-items: center;
			padding: 0.75rem 1rem;
			border-radius: 1rem;
			cursor: pointer;
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1.4) 0.2s;

			&:disabled {
				cursor: default;
				opacity: 0.5;
			}

			&:not(:disabled):hover {
				scale: 0.9;
			}
		}
	}
</style>
