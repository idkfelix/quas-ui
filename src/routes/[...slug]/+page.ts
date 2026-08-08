import { type docs } from "$content/index.js";
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
	// Get module of requested markdown
	const docResolver = docModules[`./${slug || "index"}.md`];
	if (!docResolver) error(404, "Content Not Found");

	const doc = (await docResolver()) as { default: Component; metadata: docs };
	const exampleComponents: Record<string, Component> = {};

	// Get modules for extracted example names
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
		// Used by main page
		metadata: doc.metadata,
		component: doc.default,
		// Used by example preview
		exampleSources,
		exampleComponents,
	};
};
