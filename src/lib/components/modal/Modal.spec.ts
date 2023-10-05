import { fireEvent, render, waitFor } from '@testing-library/svelte';
import Modal from './Modal.example.svelte';

describe('Modal', () => {
	test('Should render Modal', () => {
		const { getByText } = render(Modal, { isOpen: true });
		const modal = getByText('Eu sou um modal :)');
		expect(modal).toBeInTheDocument();
	});
	test('Should open Modal', async () => {
		const { getByText } = render(Modal);

		const openButton = getByText('Abrir modal');

		await fireEvent.click(openButton);
		const modal = getByText('Eu sou um modal :)');

		expect(modal).toBeInTheDocument();
	});
	test('Should close Modal', async () => {
		const { getByText } = render(Modal);

		const openButton = getByText('Abrir modal');

		await fireEvent.click(openButton);

		const closeButton = getByText('Fechar');

		await fireEvent.click(closeButton);
		const modal = getByText('Eu sou um modal :)');

		waitFor(() => {
			expect(modal).not.toBeInTheDocument();
		});
	});
});
