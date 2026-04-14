import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://lars-ellingsen.dev",
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'rose-pine-dawn',
				dark: 'rose-pine-moon',
			},
			wrap: true,
			defaultColor: false,
		},
	},
	image: {
		experimentalLayout: "constrained",
	},
	experimental: {
		responsiveImages: true,
	},
});
