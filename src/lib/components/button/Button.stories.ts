import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.example.svelte';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		storybookLabel: {
			description: 'The child of button, slot prop',
			name: 'slot'
		},
		'on:click': {
			description: 'Click event'
		},
		secondary: {
			type: 'boolean',
			description: 'The variant of button'
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		secondary: false,
		storybookLabel: 'Button'
	}
};

export const Secondary: Story = {
	args: {
		secondary: true,
		storybookLabel: 'Button'
	}
};
