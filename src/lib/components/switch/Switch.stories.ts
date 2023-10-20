import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from './Switch.svelte';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		isChecked: {
			type: 'boolean',
			description: 'A boolean that indicate if Switch is checked or not'
		},
		disabled: {
			type: 'boolean',
			description: 'A boolean that indicate if Switch is disabled'
		},
		label: {
			type: 'string',
			description: 'The label of switch'
		}
	}
} satisfies Meta<Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isChecked: false,
		label: 'Switch'
	}
};
export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Disabled'
	}
};
export const Checked: Story = {
	args: {
		isChecked: true,
		label: 'Active'
	}
};
