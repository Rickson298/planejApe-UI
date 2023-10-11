import { fireEvent, render } from '@testing-library/svelte';
import Pagination from './Pagination.svelte';

describe('Pagination', () => {
	test('Should render pagination', () => {
		const { getAllByRole } = render(Pagination, { currentPage: 1, maxPage: 5 });

		const buttons = getAllByRole('button');

		expect(buttons.length).toBe(2);
	});
	test('Should render correct value', () => {
		const { getByText } = render(Pagination, { currentPage: 4, maxPage: 5 });

		const textPagination = getByText('4 de 5');

		expect(textPagination).toBeInTheDocument();
	});
	test('Should render with max value', () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 5, maxPage: 5 });

		const textPagination = getByText('5 de 5');

		expect(textPagination).toBeInTheDocument();

		const rightButton = getAllByRole('button')[1];

		expect(rightButton).toBeDisabled();
	});
	test('Should render with min value', () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 1, maxPage: 5 });

		const textPagination = getByText('1 de 5');

		expect(textPagination).toBeInTheDocument();

		const leftButton = getAllByRole('button')[0];

		expect(leftButton).toBeDisabled();
	});

	test('Should increase page', async () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 3, maxPage: 5 });

		const rightButton = getAllByRole('button')[1];

		const textBeforeClick = getByText('3 de 5');
		expect(textBeforeClick).toBeInTheDocument();

		await fireEvent.click(rightButton);

		const textPagination = getByText('4 de 5');

		expect(textPagination).toBeInTheDocument();
	});
	test('Should decrease page', async () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 3, maxPage: 5 });

		const textBeforeClick = getByText('3 de 5');
		expect(textBeforeClick).toBeInTheDocument();

		const leftButton = getAllByRole('button')[0];

		await fireEvent.click(leftButton);

		const textPagination = getByText('2 de 5');
		expect(textPagination).toBeInTheDocument();
	});
	test('Should disable when increase to last page', async () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 4, maxPage: 5 });

		const rightButton = getAllByRole('button')[1];

		const textBeforeClick = getByText('4 de 5');
		expect(textBeforeClick).toBeInTheDocument();

		await fireEvent.click(rightButton);

		const textPagination = getByText('5 de 5');

		expect(textPagination).toBeInTheDocument();
		expect(rightButton).toBeDisabled();
	});
	test('Should disable when decrease to initial page', async () => {
		const { getByText, getAllByRole } = render(Pagination, { currentPage: 2, maxPage: 5 });

		const leftButton = getAllByRole('button')[0];

		const textBeforeClick = getByText('2 de 5');
		expect(textBeforeClick).toBeInTheDocument();

		await fireEvent.click(leftButton);

		const textPagination = getByText('1 de 5');

		expect(textPagination).toBeInTheDocument();
		expect(leftButton).toBeDisabled();
	});
});
