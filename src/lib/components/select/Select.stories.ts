import type { Meta, StoryObj } from '@storybook/svelte';

import Select from './Select.svelte';

import { SELECT_MOCK_OPTIONS } from './options.mock';

const meta = {
	title: 'Components/Select',
	component: Select,
	argTypes: {
		options: {
			defaultValue: SELECT_MOCK_OPTIONS,
			description:
				'An array of select options, each object should have a `label` and `value` property'
		},
		placeholder: {
			defaultValue: 'Placeholder',
			type: 'string',
			description: 'The placeholder of select'
		},
		value: {
			type: 'string',
			description: 'The value of select'
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
