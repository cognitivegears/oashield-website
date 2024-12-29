// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://oashield.com',
	integrations: [
		starlight({
			title: 'OAShield',
			social: {
				github: 'https://github.com/cognitivegears/oashield',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'guides/install' },
						{ label: 'Quick Start', slug: 'guides/start' },
					],
				},
				{
					label: 'Additional Information',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Open API', slug: 'reference/openapi' },
						{ label: 'ModSecurity', slug: 'reference/modsecurity' },
						{ label: 'Positive Security Models', slug: 'reference/positive' },
					],
				},
			],
		}),
	],
});
