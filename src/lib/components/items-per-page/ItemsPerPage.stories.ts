import type { Meta, StoryObj } from '@storybook/svelte';

import ItemsPerPage from './ItemsPerPage.svelte';

const meta = {
	title: 'Components/ItemsPerPage',
	component: ItemsPerPage,
	tags: ['autodocs'],
	argTypes: {
		itemsPerPage: {
			type: 'number'
		},
		label: {
			type: 'string'
		},
		optionsQuantity: {
			type: 'boolean'
		},
		value: {
			type: 'number'
		}
	}
} satisfies Meta<ItemsPerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
