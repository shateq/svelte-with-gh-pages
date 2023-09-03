import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			relative: false,
			base: process.env.NODE_ENV === 'production' ? '/svelte-with-gh-pages' : '' //change svelte-with-gh-pages to repo name
			//Crippling need to prepend RELATIVE PATHS #see https://kit.svelte.dev/docs/modules#$app-paths
		}
	}
};
export default config;
