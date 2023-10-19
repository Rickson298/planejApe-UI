import type { Meta, StoryObj } from '@storybook/svelte';

import ItemsPerPage from './ItemsPerPage.svelte';

const meta = {
	title: 'Components/ItemsPerPage',
	component: ItemsPerPage,
	argTypes: {
		itemsPerPage: {
			type: 'number',
			description: 'Quantity of items in each option of items per page',
			defaultValue: 10
		},
		label: {
			type: 'string',
			description: 'Description of items per page, the label.'
		},
		optionsQuantity: {
			type: 'boolean',
			description: 'Quantity of options',
			defaultValue: 3
		},
		value: {
			type: 'number',
			description: 'Current value of ItemsPerPage component',
			defaultValue: '10'
		}
	}
} satisfies Meta<ItemsPerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		itemsPerPage: 10,
		optionsQuantity: 3,
		value: 20
	}
};
