import { render } from '@testing-library/svelte';
import Table from './Table.example.svelte';

describe('Table', () => {
	test('Should render', () => {
		const { getByRole } = render(Table);
		const table = getByRole('table');
		expect(table).toBeInTheDocument();
	});
	test('Should append an missing th on mount', () => {
		const { getByRole } = render(Table);
		const table = getByRole('table');

		const firstRow = table.querySelector('tbody tr');

		const newTd = document.createElement('td');

		firstRow?.append(newTd);

		const thElements = table.querySelectorAll('thead th');

		expect(thElements.length).toBe(6);
	});
});
