<script lang="ts">
	type T = $$Generic;

	export let data: T[];

	let tableElement: HTMLTableElement | null = null;

	$: if (tableElement) {
		const thead = tableElement.querySelector('thead');
		const thCount = thead?.querySelectorAll('th').length || 0;

		const firstRow = tableElement.querySelector('tbody tr');
		const rowItemsCount = firstRow?.querySelectorAll('td').length || 0;

		if (thCount < rowItemsCount) {
			const missingHeaderSpacings = rowItemsCount - thCount;

			for (let headersToAppend = 0; headersToAppend < missingHeaderSpacings; headersToAppend++) {
				const th = document.createElement('th');
				thead?.append(th);
			}
		}
	}
</script>

<table bind:this={tableElement}>
	<slot name="header" />

	<tbody>
		{#each data as item, index}
			<slot item={{ ...item, index }} />
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		color: var(--white);
		border-collapse: separate;
		border-spacing: 0 1rem;

		tbody {
			border-spacing: 10rem 1rem;
			margin-top: 10rem;
		}

		:global(thead) {
			width: 100%;
			background: var(--blue-800);
			margin-bottom: 10rem;
		}

		:global(tr) {
			background: var(--blue-600);
		}

		:global(td),
		:global(th) {
			padding: 1rem 2rem;
			text-align: start;
			border-block: 1px solid var(--blue-400);
			height: 76px;

			&:first-of-type {
				border-top-left-radius: 0.5rem;
				border-bottom-left-radius: 0.5rem;
				border-left: 1px solid var(--blue-400);
			}
			&:last-of-type {
				border-right: 1px solid var(--blue-400);
				border-top-right-radius: 0.5rem;
				border-bottom-right-radius: 0.5rem;
			}
		}
	}
</style>
