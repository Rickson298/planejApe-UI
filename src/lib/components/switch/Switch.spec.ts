import { fireEvent, render } from '@testing-library/svelte';
import Switch from './Switch.svelte';
import { vi } from 'vitest';

describe('Switch', () => {
	test('Should render switch', () => {
		const { getByRole } = render(Switch);

		const checkbox = getByRole('checkbox');

		expect(checkbox).toBeInTheDocument();
	});
	test('Should check switch', () => {
		const { getByRole } = render(Switch);

		const checkbox = getByRole('checkbox');

		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});
	test('Should render switch with label', () => {
		const { getByText } = render(Switch, { label: 'Switch!' });

		const label = getByText('Switch!');

		expect(label).toBeInTheDocument();
	});
	test('Should render a unchecked switch by default', () => {
		const { getByRole } = render(Switch);

		const checkbox = getByRole('checkbox');

		expect(checkbox).not.toBeChecked();
	});
	test('Should render a checked switch', () => {
		const { getByRole } = render(Switch, { isChecked: true });

		const checkbox = getByRole('checkbox');

		expect(checkbox).toBeChecked();
	});
	test('Should dispatch on:check event', async () => {
		const { getByRole, component } = render(Switch);

		const checkEvent = vi.fn();

		component.$on('check', checkEvent);

		const checkbox = getByRole('checkbox');

		await fireEvent.click(checkbox);

		expect(checkEvent).toBeCalledTimes(1);
	});
});
