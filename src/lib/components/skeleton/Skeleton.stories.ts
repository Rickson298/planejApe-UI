import type { Meta, StoryObj } from '@storybook/svelte';

import Skeleton from './Skeleton.svelte';

const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,
	tags: ['autodocs'],
	argTypes: {
		background: {
			type: 'string'
		},
		height: {
			type: 'string'
		},
		isLoading: {
			type: 'boolean'
		},
		width: {
			type: 'string'
		}
	}
} satisfies Meta<Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		width: '400px',
		height: '70px',
		isLoading: true
	}
};
