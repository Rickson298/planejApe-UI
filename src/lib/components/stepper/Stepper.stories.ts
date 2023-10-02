import type { Meta, StoryObj } from '@storybook/svelte';

import Stepper from './Stepper.svelte';
import { MOCK_STEPS } from './steps.mocks';

const meta = {
	title: 'Components/Stepper',
	component: Stepper,
	tags: ['autodocs'],
	argTypes: {
		currentStep: {
			type: 'string'
		}
	}
} satisfies Meta<Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		currentStep: 0,
		steps: MOCK_STEPS
	}
};
