import { render } from '@testing-library/svelte';
import Breadcrumb from './Breadcrumb.svelte';
import { BREADCRUMB_ITEMS_MOCK } from './items.mocks';

describe('Breadcrumb', () => {
	test('Should render Breadcrumb', () => {
		const { getAllByRole } = render(Breadcrumb, { items: BREADCRUMB_ITEMS_MOCK });
		const link = getAllByRole('link');

		expect(link.length).toBe(3);
	});
	test('Should navigate to link', () => {
		const { getByRole } = render(Breadcrumb, { items: BREADCRUMB_ITEMS_MOCK });
		const link = getByRole('link', { name: 'Ultima etapa' });

		expect(link).toHaveAttribute('href', '/last-step');
	});
	test('Should render a link with icon', () => {
		const { getByRole } = render(Breadcrumb, { items: BREADCRUMB_ITEMS_MOCK });
		const link = getByRole('link', { name: 'Início' });

		expect(link.closest('.breadcrumb__container')).toContainHTML('svg');
	});
});
