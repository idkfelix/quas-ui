import { type Doc } from "$content/index.js";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";
import type { Component } from "svelte";

const docModules = import.meta.glob("./**/*.md", {
	base: "/content",
});

const exampleModules = import.meta.glob("./**/*.svelte", {
	base: "/src/lib/examples",
	import: "default",
});

export const load: PageLoad = async ({
	data: { exampleNames, exampleSources },
	params: { slug },
}) => {
	const docResolver = docModules[`./${slug || "index"}.md`];
	if (!docResolver) error(404, "Content Not Found");

	const doc = (await docResolver()) as { default: Component; metadata: Doc };
	const exampleComponents: Record<string, Component> = {};

	await Promise.all(
		exampleNames.map(async (name) => {
			const exampleResolver = exampleModules[`./${name}.svelte`];
			if (exampleResolver) {
				const example = (await exampleResolver()) as Component;
				exampleComponents[name] = example;
			}
		})
	);

	return {
		metadata: doc.metadata,
		component: doc.default,
		exampleSources,
		exampleComponents,
	};
};
