import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		helperText: {
			type: 'string'
		},
		placeholder: {
			type: 'string'
		},
		disabled: {
			type: 'boolean'
		}
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Eu sou um input :)'
	}
};
export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Desabilitado'
	}
};
export const HelperText: Story = {
	args: {
		helperText: 'Campo obrigatório',
		placeholder: 'Nome'
	}
};
