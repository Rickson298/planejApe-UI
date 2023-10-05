import { render } from '@testing-library/svelte';
import Flex from './Flex.example.svelte';

describe('Flex', () => {
	test('Should render Flex component', () => {
		const { getByText } = render(Flex);

		const flexChild = getByText('Item 1');

		expect(flexChild).toBeInTheDocument();
	});
	test('Should apply gap prop', () => {
		const { getByText } = render(Flex, { gap: '5rem' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle('gap: 5rem');
	});
	test('Should apply direction prop', () => {
		const { getByText } = render(Flex, { direction: 'column' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle('flex-direction: column');
	});
	test('Should apply justify-content prop', () => {
		const { getByText } = render(Flex, { justifyContent: 'start' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle('justify-content: start');
	});
	test('Should apply align-items prop', () => {
		const { getByText } = render(Flex, { alignItems: 'start' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle('align-items: start');
	});
	test('Should apply wrap prop', () => {
		const { getByText } = render(Flex, { wrap: 'wrap' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle('flex-wrap: wrap');
	});
	test('Should apply width and height prop', () => {
		const { getByText } = render(Flex, { width: '50px', height: '50px' });

		const flexChild = getByText('Item 1');
		const flex = flexChild.parentElement;

		expect(flex).toHaveStyle({
			width: '50px',
			height: '50px'
		});
	});
});
