import adapter from "@sveltejs/adapter-auto";
import rehypeSlug from "rehype-slug";
import { mdsx } from "mdsx";

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsx({
			extensions: [".md"],
			rehypePlugins: [rehypeSlug],
			blueprints: {
				default: {
					path: "src/lib/components/mdsx/blueprint.svelte",
				},
			},
		}),
	],
	kit: {
		adapter: adapter(),
		alias: {
			"$content/*": ".velite/*",
		},
	},
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
		warningFilter: (warning) => warning.code !== "script_context_deprecated",
		experimental: {
			async: true,
		},
	},
};
