import type { Meta, StoryObj } from '@storybook/svelte';

import Pagination from './Pagination.svelte';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	argTypes: {
		currentPage: {
			defaultValue: 1,
			type: 'number'
		},
		maxPage: {
			defaultValue: 5,
			type: 'number'
		}
	}
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		currentPage: 1,
		maxPage: 5
	}
};
