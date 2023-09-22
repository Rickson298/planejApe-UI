import type { Meta, StoryObj } from '@storybook/svelte';
import Tokens from './Tokens.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Example/Tokens',
	component: Tokens,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
} satisfies Meta<Tokens>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {}
};
