import House from 'phosphor-svelte/lib/House';
import type { BreadcrumbItem } from './types';

export const breadCrumbItemsMock: BreadcrumbItem[] = [
	{ label: 'Início', icon: House, href: '/' },
	{ label: 'Produtos do apartamento', href: '/' },
	{ label: 'Ultima etapa', href: '/' }
];
