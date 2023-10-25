import House from 'phosphor-svelte/lib/House';
import type { BreadcrumbItem } from './types';

export const BREADCRUMB_ITEMS_MOCK: BreadcrumbItem[] = [
	{ label: 'Início', icon: House, href: '/' },
	{ label: 'Produtos do apartamento', href: '/' },
	{ label: 'Ultima etapa', href: '/last-step' }
];
