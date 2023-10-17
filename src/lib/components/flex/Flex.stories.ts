import type { Meta, StoryObj } from '@storybook/svelte';

import Flex from './Flex.example.svelte';

const meta = {
	title: 'Wrappers/Flex',
	component: Flex,
	argTypes: {
		gap: {
			description: 'The `gap` property',
			defaultValue: '1rem',
			type: 'string'
		},
		direction: {
			defaultValue: 'row',
			options: ['row', 'column'],
			control: 'select',
			description: 'The `flex-direction` property'
		},
		justifyContent: {
			description: 'The `justify-content` property',
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
			description: 'The `align-items` property',
			defaultValue: 'center',
			options: ['center', 'start', 'end', 'baseline', 'stretch'],
			control: 'select'
		},
		width: {
			description: 'Width of flex'
		},
		height: {
			description: 'height of flex'
		},
		padding: {
			description: 'Padding of flex'
		}
	}
} satisfies Meta<Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
