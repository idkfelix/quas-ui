import { error } from "@sveltejs/kit";
import { extractDocsAssets } from "$lib/doc-content.server";
import { highlightCode } from "$lib/highlighter.server";
import type { PageServerLoad } from "./$types";

const rawDocSources = import.meta.glob("/content/**/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const raw = rawDocSources[`/content/${slug}.md`];
	if (!raw) error(404, "Not Found");

	const { previewNames, exampleSources } = extractDocsAssets(raw);
	const exampleSourcesRaw = structuredClone(exampleSources);
	for (const name in exampleSources) {
		const clean = exampleSources[name].replaceAll("$lib/registry/", "$lib/components/");
		exampleSources[name] = await highlightCode(clean);
	}

	return {
		previewNames,
		exampleSources,
		exampleSourcesRaw,
	};
};
