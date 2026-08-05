import adapter from '@sveltejs/adapter-auto';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			preprocess: [
				mdsvex({
					extensions: ['.md', '.svx'],
				}),
			],
			extensions: ['.svelte', '.md', '.svx'],
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				warningFilter: (warning) => warning.code !== 'script_context_deprecated',
				experimental: {
					async: true,
				},
			},
			vitePlugin: {
				inspector: true,
			},
		}),
	],
});
