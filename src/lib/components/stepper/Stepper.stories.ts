import type { Meta, StoryObj } from '@storybook/svelte';

import Stepper from './Stepper.svelte';
import { MOCK_STEPS } from './steps.mocks';

const meta = {
	title: 'Components/Stepper',
	component: Stepper,
	argTypes: {
		currentStep: {
			type: 'string',
			description: 'The current step of Stepper, must be a number'
		},
		steps: {
			description:
				'An array containing objects with `label`, `description` and `isChecked` properties'
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
