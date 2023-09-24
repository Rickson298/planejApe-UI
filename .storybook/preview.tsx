import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';
import '../src/styles/global.css';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import React from 'react';

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
			theme: themes.dark,
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Stories />
					<Controls />
				</>
			)
		}
	}
};

export default preview;
