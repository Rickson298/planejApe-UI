import type { Meta, StoryObj } from '@storybook/svelte';
import FontSizes from './FontSizes.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Tokens/FontSizes',
	component: FontSizes,
	tags: ['autodocs']
} satisfies Meta<FontSizes>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Example: Story = {
	args: {}
};
