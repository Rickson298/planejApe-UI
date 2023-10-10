import { fireEvent, render } from '@testing-library/svelte';
import { vi } from 'vitest';
import Tag from './Tag.svelte';

describe('Tag', () => {
	test('Should render Tag', () => {
		const { getByText } = render(Tag, { description: 'Desc', title: 'Title' });

		const tagTitle = getByText('Title:');

		expect(tagTitle).toBeInTheDocument();
	});
	test('Should dispatch on:click event', () => {
		const clickFn = vi.fn();

		const { getByRole, component } = render(Tag, { description: 'Desc', title: 'Title' });

		const xButton = getByRole('button');

		component.$on('click', clickFn);

		fireEvent.click(xButton);

		expect(clickFn).toBeCalled();
	});
});
