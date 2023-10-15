import { render } from '@testing-library/svelte';
import Skeleton from './Skeleton.svelte';
import SkeletonWithChild from './Skeleton.example.svelte';

describe('Skeleton', () => {
	test('Should render skeleton', () => {
		const { getByTestId } = render(Skeleton, { isLoading: true, width: '50px', height: '50px' });

		const skeleton = getByTestId('skeleton');
		expect(skeleton).toBeInTheDocument();
	});
	test('Should not render skeleton if isLoading be false', () => {
		const { queryByTestId } = render(Skeleton, { isLoading: false, width: '50px', height: '50px' });

		const skeleton = queryByTestId('skeleton');
		expect(skeleton).not.toBeInTheDocument();
	});
	test('Should apply custom width and height in skeleton', () => {
		const width = '50px';
		const height = '50px';

		const { getByTestId } = render(Skeleton, { isLoading: true, width, height });

		const skeleton = getByTestId('skeleton');

		expect(skeleton).toHaveStyle({ width, height });
	});
	test('Should inherit child styles', () => {
		const { getByTestId } = render(SkeletonWithChild);
		const skeleton = getByTestId('skeleton');

		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveStyle('width: fit-content');
	});
});
