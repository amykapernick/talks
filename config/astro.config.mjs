import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://talks.amyskapers.dev',
	vite: {
		css: {
			postcss: `./config`
		},
		resolve: {
			alias: [
				{
					find: '@mixins',
					replacement: `./src/styles/mixins/index.css`
				}
			]
		}
	},
	integrations: [
		image(),
		sitemap()
	],
});
