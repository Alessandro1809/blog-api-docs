// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Blog API',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/alessandrodiaz/blog-api' }],
			customCss: ['./src/assets/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Introduction',
					link: '/',
				},
				{
					label: 'How It Works',
					slug: 'how-it-works',
				},
				{
					label: 'API Surface',
					slug: 'api-surface',
				},
				{
					label: 'Trust & Quality',
					slug: 'trust-quality',
				},
				{
					label: 'Run It Locally',
					slug: 'run-it-locally',
				},
			],
		}),
	],
});
