import { fireEvent, render } from '@testing-library/svelte';
import { vi } from 'vitest';

import Input from './Input.svelte';

describe('Input', () => {
	test('Should render input', () => {
		const { getByRole } = render(Input);

		const fieldset = getByRole('group');
		const input = fieldset.querySelector('input');

		expect(input).toBeInTheDocument();
	});

	test('Should render placeholder', () => {
		const { getByText } = render(Input, {
			props: { placeholder: 'Placeholder' }
		});

		const placeholder = getByText('Placeholder');

		expect(placeholder).toBeInTheDocument();
	});

	test('Should disable input', () => {
		const { getByRole } = render(Input, {
			props: { disabled: true }
		});

		const fieldset = getByRole('group');

		const input = fieldset.querySelector('input');

		expect(input).toHaveAttribute('disabled');
	});

	test('Should not show helper text', () => {
		const { getByRole } = render(Input, {
			props: { disabled: true }
		});

		const fieldset = getByRole('group');

		const helperText = fieldset.querySelector('.helper-text');

		expect(helperText).not.toBeInTheDocument();
	});

	test('Should show helper text', () => {
		const { getByText } = render(Input, {
			props: { helperText: 'Campo obrigatório' }
		});

		const helperText = getByText('Campo obrigatório');

		expect(helperText).toBeInTheDocument();
	});

	test('Should up placeholder when focus input', async () => {
		const { getByPlaceholderText } = render(Input, {
			props: { placeholder: 'Placeholder' }
		});

		const input = getByPlaceholderText('Placeholder') as HTMLInputElement;

		input.focus();

		expect(input).toHaveFocus();
	});

	test('Should call on:input event', () => {
		const { component, getByPlaceholderText } = render(Input, {
			props: { placeholder: 'Placeholder' }
		});

		const input = getByPlaceholderText('Placeholder') as HTMLInputElement;

		const onInput = vi.fn();

		component.$on('input', onInput);

		fireEvent.input(input);

		expect(onInput).toHaveBeenCalled();
	});
	test('Should pass a value prop to input', () => {
		const { getByDisplayValue } = render(Input, {
			props: { value: '123' }
		});

		const input = getByDisplayValue('123') as HTMLInputElement;

		expect(input).toHaveValue();
	});
});
