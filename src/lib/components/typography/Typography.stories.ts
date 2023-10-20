import type { Meta, StoryObj } from '@storybook/svelte';

import Typography from './Typography.example.svelte';
import { FONT_SIZES, FONT_WEIGHT } from '../../theme/tokens/font';

const meta = {
	title: 'Components/Typography',
	component: Typography,
	argTypes: {
		storybookLabel: {
			type: 'string',
			defaultValue: 'Typography',
			name: 'slot',
			description: 'The children of Typography'
		},
		color: {
			options: [
				'blue-50',
				'blue-100',
				'blue-200',
				'blue-300',
				'blue-400',
				'blue-500',
				'blue-600',
				'blue-700',
				'blue-800',
				'gray-100',
				'gray-200',
				'gray-300',
				'gray-400',
				'gray-500',
				'white'
			],
			control: 'select',
			description: 'The color of texts'
		},
		fontSize: {
			options: FONT_SIZES,
			control: 'select',
			description: 'The font size'
		},
		fontWeight: {
			options: FONT_WEIGHT,
			control: 'select',
			description: 'The font weight'
		}
	}
} satisfies Meta<Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		storybookLabel: 'Typography'
	}
};
