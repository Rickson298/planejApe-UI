import type { Meta, StoryObj } from '@storybook/svelte';

import Tag from './Tag.svelte';

const meta = {
	title: 'Components/Tag',
	component: Tag,
	argTypes: {
		description: {
			defaultValue: 'description',
			type: 'string',
			description: 'The description of tag'
		},
		title: {
			defaultValue: 'Title',
			type: 'string',
			description: 'The title of tag'
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
