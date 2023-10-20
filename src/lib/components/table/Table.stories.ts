import type { Meta, StoryObj } from '@storybook/svelte';

import Table from './Table.example.svelte';

const meta = {
	title: 'Components/Table',
	component: Table,
	argTypes: {}
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
