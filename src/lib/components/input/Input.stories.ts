import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		helperText: {
			description: 'A text to gives more help to user, like required field message',
			type: 'string'
		},
		placeholder: {
			description:
				'the placeholder of input, when input has focus or value, the placeholder up"s to top',
			type: 'string'
		},
		disabled: {
			description: 'disabled prop of native input',
			type: 'boolean'
		},
		value: {
			description: 'The value of input',
			type: 'string'
		},
		'on:input': {
			type: 'function',
			description:
				'The event thats fire each time that user type, if you come from react, its similar to onChange of react event'
		}
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'I am an input :)'
	}
};
export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled'
	}
};
export const HelperText: Story = {
	args: {
		helperText: 'Required field',
		placeholder: 'Name'
	}
};
