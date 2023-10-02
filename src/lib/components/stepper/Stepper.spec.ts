import { render } from '@testing-library/svelte';

import Stepper from './Stepper.svelte';

import { MOCK_STEPS } from './steps.mocks';

describe('Stepper', () => {
	test('Should render stepper', () => {
		const { getByText } = render(Stepper, {
			props: { steps: MOCK_STEPS, currentStep: 3 }
		});

		const stepOne = getByText('Inf. do produto');
		const stepTwo = getByText('Loja');
		const stepThree = getByText('Revisão');

		expect(stepOne).toBeInTheDocument();
		expect(stepTwo).toBeInTheDocument();
		expect(stepThree).toBeInTheDocument();
	});

	test('Should have a current step', () => {
		const { getByTitle } = render(Stepper, {
			props: { steps: MOCK_STEPS, currentStep: 3 }
		});

		const currentStep = getByTitle('Revisão');

		expect(currentStep).toHaveClass('is-current');
		expect(currentStep).toBeVisible();
	});

	test('Should render checked steps', () => {
		const { getByTitle } = render(Stepper, {
			props: { steps: MOCK_STEPS, currentStep: 3 }
		});

		const firstStepChecked = getByTitle('Inf. do produto');
		const secondStepChecked = getByTitle('Loja');

		expect(firstStepChecked).toBeVisible();
		expect(firstStepChecked).toHaveClass('is-checked');

		expect(secondStepChecked).toBeVisible();
		expect(secondStepChecked).toHaveClass('is-checked');
	});
});
