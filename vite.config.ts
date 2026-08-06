import adapter from '@sveltejs/adapter-auto';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsx } from 'mdsx';
import { defineConfig } from 'vite';
import { mdsxConfig } from './mdsx.config';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			preprocess: [mdsx(mdsxConfig)],
			alias: { '$content/*': '.velite/*' },
			extensions: ['.svelte', '.md'],
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				warningFilter: (warning) => warning.code !== 'script_context_deprecated',
				experimental: {
					async: true,
				},
			},
		}),
	],
	assetsInclude: ['**/*.md'],
});
