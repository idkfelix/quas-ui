import { HighlightOptions, rehypeCustomHighlight } from "@mdsx/rehype-custom-highlighter";
import { defineConfig } from "mdsx";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const jsEngine = createJavaScriptRegexEngine();
let highlighter: Awaited<ReturnType<typeof createHighlighterCore>> | null = null;

const highlighterPromise = createHighlighterCore({
	themes: [import("@shikijs/themes/ayu-light"), import("@shikijs/themes/ayu-dark")],
	langs: [
		import("@shikijs/langs/javascript"),
		import("@shikijs/langs/typescript"),
		import("@shikijs/langs/svelte"),
		import("@shikijs/langs/css"),
		import("@shikijs/langs/html"),
		import("@shikijs/langs/json"),
		import("@shikijs/langs/markdown"),
	],
	engine: jsEngine,
});

const highlightOptions: HighlightOptions = {
	highlight: async ({ value, lang }) => {
		if (!value) return undefined;
		if (!lang) return value;
		if (!highlighter) {
			highlighter = await highlighterPromise;
		}
		return highlighter.codeToHtml(value, {
			lang,
			themes: {
				light: "ayu-light",
				dark: "ayu-dark",
			},
			transformers: [
				{
					pre(node) {
						node.properties["class"] =
							"shiki no-scrollbar overflow-x-auto px-4 py-3.5 outline-none";
					},
				},
			],
		});
	},
};

export const mdsxConfig = defineConfig({
	extensions: [".md"],
	rehypePlugins: [[rehypeCustomHighlight, highlightOptions]],
});
