import type { Meta, StoryObj } from '@storybook/svelte';

import Flex from './Flex.example.svelte';

const meta = {
	title: 'Wrappers/Flex',
	component: Flex,
	tags: ['autodocs'],
	argTypes: {
		gap: {
			defaultValue: '1rem',
			type: 'string'
		},
		direction: {
			defaultValue: 'row',
			options: ['row', 'column'],
			control: 'select'
		},
		justifyContent: {
			defaultValue: 'center',
			options: [
				'center',
				'start',
				'end',
				'space-between',
				'space-around',
				'baseline',
				'stretch',
				'space-evenly'
			],
			control: 'select'
		},
		alignItems: {
			defaultValue: 'center',
			options: ['center', 'start', 'end', 'baseline', 'stretch'],
			control: 'select'
		}
	}
} satisfies Meta<Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
