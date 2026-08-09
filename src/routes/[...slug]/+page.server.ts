import { error } from "@sveltejs/kit";
import { highlightCode } from "$lib/server/highlighter.js";
import type { PageServerLoad } from "./$types.js";

export const prerender = true;

const docStrings = import.meta.glob("./**/*.md", {
	base: "/content",
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

const exampleStrings = import.meta.glob("./**/*.svelte", {
	base: "/src/lib/examples",
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

export const load: PageServerLoad = async ({ params: { slug } }) => {
	// Get raw string of requested markdown
	const docSource = docStrings[`./${slug || "index"}.md`];
	if (!docSource) error(404, "Content Not Found");

	const exampleNames = new Set<string>();
	const exampleSources: Record<
		string,
		{
			styled: string;
			raw: string;
		}
	> = {};

	// Extract names of examples
	const regex = /<Example\s[^>]*\bname=(["'])(?<name>[^"']+)\1/g;
	for (let m: RegExpExecArray | null; (m = regex.exec(docSource)) !== null;) {
		if (m.groups?.name) exampleNames.add(m.groups.name);
	}

	// Get raw and highlighted strings of examples
	exampleNames.forEach(async (name) => {
		const eSource = exampleStrings[`./${name}.svelte`];
		if (eSource) {
			const eClean = eSource.replaceAll("$lib/registry", "$lib/components");
			exampleSources[name] = {
				styled: await highlightCode(eClean),
				raw: eClean,
			};
		}
	});

	return { exampleNames: [...exampleNames], exampleSources };
};
