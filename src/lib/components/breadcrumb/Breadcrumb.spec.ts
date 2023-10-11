import { render } from '@testing-library/svelte';
import Breadcrumb from './Breadcrumb.svelte';
import { breadCrumbItemsMock } from './items.mocks';

describe('Breadcrumb', () => {
	test('Should render Breadcrumb', () => {
		const { getAllByRole } = render(Breadcrumb, { items: breadCrumbItemsMock });
		const link = getAllByRole('link');

		expect(link.length).toBe(3);
	});
	test('Should navigate to link', () => {
		const { getByRole } = render(Breadcrumb, { items: breadCrumbItemsMock });
		const link = getByRole('link', { name: 'Ultima etapa' });

		expect(link).toHaveAttribute('href', '/');
	});
	test('Should render a link with icon', () => {
		const { getByRole } = render(Breadcrumb, { items: breadCrumbItemsMock });
		const link = getByRole('link', { name: 'Início' });

		expect(link.closest('.breadcrumb__container')).toContainHTML('svg');
	});
});
