import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://talks.amyskapers.dev',
	devToolbar: {
		enabled: false,
	},
	server: {
		port: 1234
	},
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
	markdown: {
		syntaxHighlight: false,
		gfm: true,
	},
	integrations: [
		mdx({
			extendMarkdownConfig: true
		}),
		sitemap(),
	],
});
