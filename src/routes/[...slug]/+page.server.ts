import { error } from "@sveltejs/kit";
import { extractExamples } from "$lib/server/doc.js";
import { highlightCode } from "$lib/server/highlighter.js";
import type { PageServerLoad } from "./$types";

const docSourceModules = import.meta.glob("/content/**/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

const exampleSourceModules = import.meta.glob("/src/lib/examples/*.svelte", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const docSource = docSourceModules[`/content/${slug}.md`];
	if (!docSource) error(404, "Page Not Found");

	const exampleNames = extractExamples(docSource);
	const exampleSources: Record<
		string,
		{
			styled: string;
			raw: string;
		}
	> = {};

	exampleNames.forEach(async (name) => {
		let source = exampleSourceModules[`/src/lib/examples/${name}.svelte`];
		if (source) {
			source = source.replaceAll("$lib/registry", "$lib/components");
			exampleSources[name] = {
				styled: await highlightCode(source),
				raw: source,
			};
		} else console.log(`Missing: ${name}`);
	});

	return { exampleNames, exampleSources };
};
