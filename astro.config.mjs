// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://oashield.dev',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
