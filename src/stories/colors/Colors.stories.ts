import type { Meta, StoryObj } from '@storybook/svelte';
import Tokens from './Colors.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Tokens/Colors',
	component: Tokens,
	tags: ['autodocs']
} satisfies Meta<Tokens>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Example: Story = {
	args: {}
};
