import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const highlightCodeCache = new Map<string, string>();
const highlighterPromise = createHighlighterCore({
	themes: [import("@shikijs/themes/github-dark"), import("@shikijs/themes/github-light")],
	langs: [import("@shikijs/langs/svelte")],
	engine: createJavaScriptRegexEngine(),
});

export const highlight = async ({ value, lang = "svelte" }: { value: string; lang: string }) => {
	const cachedCode = highlightCodeCache.get(value);
	if (cachedCode) return cachedCode;

	const highlighter = await highlighterPromise;
	const html = highlighter.codeToHtml(value, {
		lang,
		themes: {
			light: "github-light",
			dark: "github-dark",
		},
		transformers: [
			{
				pre(node) {
					node.properties["class"] =
						"shiki no-scrollbar overflow-x-auto px-4 py-3.5 outline-none mt-4 mb-12 rounded-lg border group-data-[slot=code]:my-0 group-data-[slot=code]:rounded-none group-data-[slot=code]:border-none";
				},
			},
		],
	});

	highlightCodeCache.set(value, html);
	return html;
};
