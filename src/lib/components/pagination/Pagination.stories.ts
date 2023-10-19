import type { Meta, StoryObj } from '@storybook/svelte';

import Pagination from './Pagination.svelte';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	argTypes: {
		currentPage: {
			defaultValue: 1,
			type: 'number',
			description: 'The current value of pagination'
		},
		maxPage: {
			defaultValue: 5,
			type: 'number',
			description: 'The number of total pages'
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
