// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://oashield.com',
	redirects: {
		'/about': '/why',
	},
	integrations: [
		starlight({
			title: 'OAShield',
			description:
				'Generate positive-security WAF rules for ModSecurity and Coraza directly from your OpenAPI specification.',
			social: {
				github: 'https://github.com/cognitivegears/oashield',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Why OAShield?', slug: 'why' },
						{ label: 'Installation', slug: 'guides/install' },
						{ label: 'Quick Start', slug: 'guides/start' },
						{ label: 'Configuration', slug: 'guides/configuration' },
					],
				},
				{
					label: 'Learn',
					items: [
						{ label: 'How It Works', slug: 'how' },
						{ label: 'Use Cases', slug: 'use-cases' },
						{ label: 'Other Solutions', slug: 'alternatives' },
					],
				},
				{
					label: 'Background',
					items: [
						{ label: 'OpenAPI', slug: 'reference/openapi' },
						{ label: 'ModSecurity & Coraza', slug: 'reference/modsecurity' },
						{ label: 'Positive Security Models', slug: 'reference/positive' },
					],
				},
			],
		}),
	],
});
