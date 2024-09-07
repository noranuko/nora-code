import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
	site: 'https://nora-code.com/',
	integrations: [tailwind(), sitemap(), compress()],

	// devToolbarを無効化
	devToolbar: {
		enabled: false,
	},
});
