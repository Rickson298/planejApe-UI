import type { Meta, StoryObj } from '@storybook/svelte';

import Select from './Select.svelte';

import { SELECT_MOCK_OPTIONS } from './options.mock';

const meta = {
	title: 'Components/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		options: {
			defaultValue: SELECT_MOCK_OPTIONS
		},
		placeholder: {
			defaultValue: 'Placeholder',
			type: 'string'
		}
	}
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		options: SELECT_MOCK_OPTIONS,
		placeholder: 'Placeholder'
	}
};
