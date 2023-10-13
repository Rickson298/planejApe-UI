import type { Meta, StoryObj } from '@storybook/svelte';

import BreadCrumb from './Breadcrumb.svelte';

import { BREADCRUMB_ITEMS_MOCK } from './items.mocks';

const meta = {
	title: 'Components/BreadCrumb',
	component: BreadCrumb,
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'An array that contains object with  `label`, `href` and optional `icon` prop,'
		}
	}
} satisfies Meta<BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: BREADCRUMB_ITEMS_MOCK
	}
};
