import { error } from "@sveltejs/kit";
import { highlightCode } from "$lib/server/highlighter.js";
import type { PageServerLoad } from "./$types.js";

const TAG_NAME_RE = /<Example\s[^>]*\bname=["']([^"']+)["']/g;

const extractNames = (markdown: string): string[] => {
	const exampleNames = new Set<string>();
	TAG_NAME_RE.lastIndex = 0;

	for (let m: RegExpExecArray | null; (m = TAG_NAME_RE.exec(markdown)) !== null;) {
		const [, name] = m;
		exampleNames.add(name);
	}

	return [...exampleNames];
};

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
	const docSource = docStrings[`./${slug}.md`];
	if (!docSource) error(404, "Page Not Found");

	const exampleNames = extractNames(docSource);
	const exampleSources: Record<
		string,
		{
			styled: string;
			raw: string;
		}
	> = {};

	exampleNames.forEach(async (name) => {
		let source = exampleStrings[`./${name}.svelte`];
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
