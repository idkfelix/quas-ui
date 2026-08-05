import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const highlightCodeCache = new Map<string, string>();
const highlighterPromise = createHighlighterCore({
	themes: [import('@shikijs/themes/ayu-dark'), import('@shikijs/themes/ayu-light')],
	langs: [
		import('@shikijs/langs/typescript'),
		import('@shikijs/langs/svelte'),
		import('@shikijs/langs/bash'),
	],
	engine: createJavaScriptRegexEngine(),
});

export const highlightCode = async (code: string, lang: string = 'svelte') => {
	const cachedCode = highlightCodeCache.get(code);
	if (cachedCode) return cachedCode;

	const highlighter = await highlighterPromise;
	const html = highlighter.codeToHtml(code, {
		lang,
		themes: {
			light: 'ayu-light',
			dark: 'ayu-dark',
		},
		transformers: [
			{
				pre(node) {
					node.properties['class'] =
						'shiki no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none';
				},
			},
		],
	});

	highlightCodeCache.set(code, html);
	return html;
};
