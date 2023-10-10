import type { Meta, StoryObj } from '@storybook/svelte';

import Tag from './Tag.svelte';

const meta = {
	title: 'Components/Tag',
	component: Tag,
	tags: ['autodocs'],
	argTypes: {
		description: {
			defaultValue: 'description',
			type: 'string'
		},
		title: {
			defaultValue: 'Title',
			type: 'string'
		}
	}
} satisfies Meta<Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description: 'Subtitle',
		title: 'Tag'
	}
};
