import type { Meta, StoryObj } from '@storybook/svelte';

import Skeleton from './Skeleton.svelte';
import SkeletonWithChild from './Skeleton.example.svelte';

const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,

	argTypes: {
		background: {
			type: 'string',
			description: 'Background of skeleton'
		},
		height: {
			type: 'string',
			description: 'Height of skeleton'
		},
		width: {
			type: 'string',
			description: 'Width of skeleton'
		},
		isLoading: {
			type: 'boolean',
			description: 'A boolean value that will show skeleton or not'
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

export const WithChild: Story = {
	render: () => {
		return { Component: SkeletonWithChild as unknown as typeof Skeleton };
	}
};
