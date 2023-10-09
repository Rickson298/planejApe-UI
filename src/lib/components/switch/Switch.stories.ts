import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from './Switch.svelte';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	tags: ['autodocs'],
	argTypes: {
		isChecked: {
			type: 'boolean'
		},
		disabled: {
			type: 'boolean'
		},
		label: {
			type: 'string'
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
