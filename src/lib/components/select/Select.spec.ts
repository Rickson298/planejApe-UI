import { fireEvent, render } from '@testing-library/svelte';
import { vi } from 'vitest';

import Select from './Select.svelte';

import { SELECT_MOCK_OPTIONS } from './options.mock';

describe('Select', () => {
	test('Should render select', () => {
		const placeholder = 'Escolha uma opção';

		const { getByText } = render(Select, { placeholder });

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select');

		expect(selectPlaceholder).toBeInTheDocument();

		expect(selectContainer).toBeInTheDocument();
	});
	test('Should render select with closed options', async () => {
		const placeholder = 'Escolha uma opção';

		const { queryByText } = render(Select, { placeholder });

		const firstOption = queryByText('Opção 1');

		expect(firstOption).not.toBeInTheDocument();
	});
	test('Should open select', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText } = render(Select, { placeholder, options: SELECT_MOCK_OPTIONS });

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.click(selectContainer);

		const firstOption = await findByText('Opção 1');

		expect(firstOption).toBeInTheDocument();
	});
	test('Should close select when double click in select container', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, queryByText } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS
		});

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.dblClick(selectContainer);

		expect(selectContainer).not.toHaveClass('is-open');

		const firstOption = queryByText('Opção 1');
		expect(firstOption).not.toBeInTheDocument();
	});
	test('Should render with selected option', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS,
			value: 'option_1'
		});

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		const selectedOption = await findByText('Opção 1', { selector: '.selected-label' });

		expect(selectedOption).toBeInTheDocument();
		expect(selectContainer).toHaveAttribute('data-has-selected-option', 'true');
		expect(selectContainer).toHaveValue('option_1');
	});
	test('Should select an option', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS
		});

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.click(selectContainer);

		const firstOption = await findByText('Opção 1');

		await fireEvent.click(firstOption);

		const selectedOption = await findByText('Opção 1', { selector: '.selected-label' });

		expect(selectedOption).toBeInTheDocument();
		expect(selectContainer).toHaveAttribute('data-has-selected-option', 'true');
		expect(selectContainer).toHaveValue('option_1');
	});

	test('Should select an option and clear after', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText, getByTitle } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS
		});

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.click(selectContainer);

		const firstOption = await findByText('Opção 1');

		await fireEvent.click(firstOption);

		const selectedOption = await findByText('Opção 1', { selector: '.selected-label' });

		expect(selectedOption).toBeInTheDocument();
		expect(selectContainer).toHaveValue('option_1');

		const resetButton = getByTitle('Limpar seleção');

		await fireEvent.click(resetButton);

		expect(selectContainer).toHaveValue('');
		expect(selectContainer).toHaveValue('');
		expect(selectContainer).toHaveAttribute('data-has-selected-option', 'false');
	});

	test('Should reset select by controlled value', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText, rerender } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS,
			value: 'option_1'
		});

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		const selectedOption = await findByText('Opção 1', { selector: '.selected-label' });
		expect(selectedOption).toBeInTheDocument();
		expect(selectContainer).toHaveAttribute('data-has-selected-option', 'true');
		expect(selectContainer).toHaveValue('option_1');

		rerender({
			placeholder,
			options: SELECT_MOCK_OPTIONS,
			value: ''
		});

		const newPlaceholder = getByText(placeholder);

		const selectAfterRender = newPlaceholder.closest('.select') as HTMLButtonElement;
		expect(selectAfterRender).toHaveValue('');
	});

	test('Should dispatch on:open event', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText, component } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS
		});

		let isOpen = false;

		const mockedOnOpen = vi.fn((event) => {
			isOpen = event.detail;
		});

		component.$on('open', mockedOnOpen);

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.click(selectContainer);

		const firstOption = await findByText('Opção 1');

		expect(mockedOnOpen).toBeCalled();
		expect(isOpen).toBe(true);
		expect(firstOption).toBeInTheDocument();
	});
	test('Should dispatch on:select event', async () => {
		const placeholder = 'Escolha uma opção';

		const { getByText, findByText, component } = render(Select, {
			placeholder,
			options: SELECT_MOCK_OPTIONS
		});

		let selectedValue = '';

		const mockedOnSelect = vi.fn((event) => {
			selectedValue = event.detail;
		});

		component.$on('select', mockedOnSelect);

		const selectPlaceholder = getByText(placeholder);

		const selectContainer = selectPlaceholder.closest('.select') as HTMLButtonElement;

		await fireEvent.click(selectContainer);

		const firstOption = await findByText('Opção 1');

		await fireEvent.click(firstOption);

		const selectedOption = await findByText('Opção 1', { selector: '.selected-label' });

		expect(selectedValue).toBe('option_1');
		expect(selectedOption).toBeInTheDocument();
		expect(selectContainer).toHaveAttribute('data-has-selected-option', 'true');
		expect(selectContainer).toHaveValue('option_1');
	});
});
