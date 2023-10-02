import Bag from 'phosphor-svelte/lib/Bag';
import NavigationArrow from 'phosphor-svelte/lib/NavigationArrow';
import CheckSquareOffset from 'phosphor-svelte/lib/CheckSquareOffset';
import type { Step } from './types';

// Be careful when editing this const, Stepper.spec.ts is using it

export const MOCK_STEPS: Step[] = [
	{ label: Bag, description: 'Inf. do produto', isChecked: true },
	{ label: NavigationArrow, description: 'Loja', isChecked: true },
	{ label: CheckSquareOffset, description: 'Revisão', isChecked: false }
];
