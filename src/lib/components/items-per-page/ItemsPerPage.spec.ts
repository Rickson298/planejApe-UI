import { fireEvent, render } from '@testing-library/svelte';
import { vi } from 'vitest';

import ItemsPerPage from './ItemsPerPage.svelte';

const commonProps = {
	itemsPerPage: 10,
	label: 'Itens por página:',
	optionsQuantity: 5,
	value: 10
};

describe('ItemsPerPage', () => {
	test('Should render ItemsPerPage', () => {
		const { getByText } = render(ItemsPerPage, commonProps);

		const element = getByText('Itens por página:');

		expect(element.parentElement).toBeInTheDocument();
	});
	test('Should dispatch a on:click event', async () => {
		const { component, getByText } = render(ItemsPerPage, commonProps);

		const mockedClick = vi.fn();

		const secondButton = getByText('20');

		component.$on('click', mockedClick);

		await fireEvent.click(secondButton);

		expect(mockedClick).toBeCalledTimes(1);
	});
	test('Should change selected options', async () => {
		const { component, getByText } = render(ItemsPerPage, commonProps);

		const mockedClick = vi.fn();

		const firstButton = getByText('10');
		const secondButton = getByText('20');

		component.$on('click', mockedClick);

		await fireEvent.click(secondButton);

		expect(firstButton).not.toHaveClass('selected');
		expect(secondButton).toHaveClass('selected');
	});
	test('Should render a correct multiplier of items per page', () => {
		const optionsQuantity = 3;

		const { getAllByRole } = render(ItemsPerPage, { ...commonProps, optionsQuantity });

		const itemsButton = getAllByRole('button');

		expect(itemsButton.length).toEqual(optionsQuantity);
	});
	test('Should render with custom label', () => {
		const customLabel = 'Custom label';

		const { getByText } = render(ItemsPerPage, { ...commonProps, label: customLabel });

		const label = getByText(customLabel);

		expect(label).toBeInTheDocument();
	});
	test('Should render a selected option', () => {
		const { getByText } = render(ItemsPerPage, { ...commonProps, value: 20 });

		const selectedButton = getByText('20');

		expect(selectedButton).toHaveClass('selected');
	});
	test('Should render all options with custom items per page', () => {
		const itemsPerPage = 5;
		const optionsQuantity = 5;
		const value = 15;

		const { getAllByRole } = render(ItemsPerPage, {
			...commonProps,
			itemsPerPage,
			optionsQuantity,
			value
		});

		const allButtons = getAllByRole('button') as HTMLButtonElement[];

		allButtons.forEach((item, index) => {
			const orderButton = index + 1;

			const currentItemsPerPage = orderButton * itemsPerPage;

			const parsedValue = Number(item.value);

			expect(parsedValue).toBe(currentItemsPerPage);

			if (parsedValue === value) {
				expect(item).toHaveClass('selected');
			}
		});
	});
});
