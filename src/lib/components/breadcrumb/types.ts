import type { ComponentType } from 'svelte';

export type BreadcrumbItem = {
	label: string;
	href: string;
	icon?: ComponentType;
};
