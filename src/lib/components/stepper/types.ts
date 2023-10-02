import type { ComponentType } from 'svelte';

export type Step = { label: ComponentType; description: string; isChecked?: boolean };
