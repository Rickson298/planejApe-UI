import { render } from '@testing-library/svelte';
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
});
