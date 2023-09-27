import { render } from '@testing-library/svelte';
import Typography from './Typography.example.svelte';

describe('Typography', () => {
	const { getByText } = render(Typography);

	test('Should render typography', () => {
		const typography = getByText('Typography');

		expect(typography).toBeInTheDocument();
	});

	test('Should apply fontWeight prop', () => {
		const { getByText } = render(Typography, { props: { fontWeight: '400' } });
		const typography = getByText('Typography');

		expect(typography).toHaveStyle('font-weight: 400');
	});

	test('Should apply textAlign prop', () => {
		const { getByText } = render(Typography, { props: { textAlign: 'center' } });
		const typography = getByText('Typography');

		expect(typography).toHaveStyle('text-align: center');
	});

	test('Should apply color prop', () => {
		const { getByText } = render(Typography, { props: { color: 'blue-700' } });
		const typography = getByText('Typography');

		expect(typography).toHaveStyle('color: var(--blue-700)');
	});
	test('Should apply fontSize prop', () => {
		const { getByText } = render(Typography, { props: { fontSize: '2rem' } });
		const typography = getByText('Typography');

		expect(typography).toHaveStyle('font-size: 2rem');
	});
});
