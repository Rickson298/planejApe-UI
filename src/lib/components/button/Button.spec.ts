import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/svelte';
import Button from './Button.example.svelte';

describe('Button', () => {
	const { getByRole } = render(Button);
	const button = getByRole('button');
	test('Should render button', async () => {
		expect(button).toBeInTheDocument();
	});
	test('Should use rest props', async () => {
		button.style.background = 'red';
		button.classList.add('vitest-test');

		expect(button).toHaveStyle('background: red');
		expect(button).toHaveClass('vitest-test');
	});

	test('Should render the secondary variant', async () => {
		const { getByRole } = render(Button, {
			props: {
				secondary: true
			}
		});

		const button = getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-is-secondary', 'true');
	});
	test('Should dispatch on:click event', async () => {
		const { getByRole, component } = render(Button, {
			props: {
				secondary: true
			}
		});

		const button = getByRole('button');

		const onClick = vi.fn();

		component.$on('click', onClick);

		fireEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	test('Should use the background prop', async () => {
		const { getByRole } = render(Button, {
			props: {
				background: 'red'
			}
		});

		const button = getByRole('button');

		expect(button).toHaveStyle('background: red');
	});
	test('Should use the background prop with secondary prop', async () => {
		const { getByRole } = render(Button, {
			props: {
				background: 'red',
				secondary: true
			}
		});

		const button = getByRole('button');

		expect(button).toHaveStyle({ background: 'transparent', 'border-color': 'red' });
	});
});
