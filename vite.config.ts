import adapter from "@sveltejs/adapter-vercel";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import { sveltekit } from "@sveltejs/kit/vite";
import { mdsx } from "mdsx";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			configFile: false,
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
					rehypePlugins: [rehypeSlug],
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
		}),
	],
	assetsInclude: ["**/*.md"],
});
