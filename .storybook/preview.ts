import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		themes: themes.dark,
		docs: {
			theme: themes.dark
		}
	}
};

export default preview;
