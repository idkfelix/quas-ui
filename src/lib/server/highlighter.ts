import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const highlightCodeCache = new Map<string, string>();
const highlighterPromise = createHighlighterCore({
	themes: [import("@shikijs/themes/plastic"), import("@shikijs/themes/github-light")],
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
			dark: "plastic",
		},
		transformers: [
			{
				pre(node) {
					delete node.properties["tabindex"];
					this.addClassToHast(node, [
						"shiki no-scrollbar overflow-x-auto px-4 py-3.5 outline-none rounded-lg border mt-4 mb-12 text-sm sm:text-base",
						"group-data-[slot=code]:rounded-none group-data-[slot=code]:border-none group-data-[slot=code]:my-0",
					]);
				},
			},
		],
	});

	highlightCodeCache.set(value, html);
	return html;
};
