import type { Meta, StoryObj } from '@storybook/svelte';

import Modal from './Modal.example.svelte';

const meta = {
	title: 'Components/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		isOpen: {
			type: 'boolean'
		}
	}
} satisfies Meta<Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
