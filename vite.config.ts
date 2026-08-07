import adapter from "@sveltejs/adapter-vercel";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { mdsx } from "mdsx";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
				warningFilter: (warning) => warning.code !== "script_context_deprecated",
				experimental: {
					async: true,
				},
			},
			preprocess: [
				mdsx({
					extensions: [".md"],
					blueprints: {
						default: {
							path: "src/lib/components/mdsx/blueprint.svelte",
						},
					},
				}),
			],
			adapter: adapter(),
			alias: { "$content/*": ".velite/*" },
			extensions: [".svelte", ".md"],
			prerender: {
				handleUnseenRoutes: 'ignore',
			}
		}),
	],
	assetsInclude: ["**/*.md"],
});
