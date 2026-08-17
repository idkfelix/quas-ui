import adapter from "@sveltejs/adapter-vercel";
import rehypeSlug from "rehype-slug";
import { rehypeCustomHighlight } from "@mdsx/rehype-custom-highlighter";
import { mdsx } from "mdsx";
import { highlight } from "./src/lib/highlighter.ts";

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsx({
			extensions: [".md"],
			rehypePlugins: [rehypeSlug, [rehypeCustomHighlight, { highlight }]],
			blueprints: {
				default: {
					path: "src/lib/components/blueprint/default.svelte",
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
