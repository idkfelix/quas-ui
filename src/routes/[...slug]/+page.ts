import { type Doc } from "$content/index.js";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Component } from "svelte";

export const prerender = true;

const docModules = import.meta.glob("/content/**/*.md");
const exampleModules = import.meta.glob("/src/lib/examples/**/*.svelte");

export const load: PageLoad = async ({ data, params: { slug } }) => {
	const docResolver = docModules[`/content/${slug}.md`];
	if (!docResolver) error(404, "Not Found");

	const doc = (await docResolver()) as { default: Component; metadata: Doc };
	const exampleComponents: Record<string, Component> = {};

	await Promise.all(
		data.exampleNames.map(async (name) => {
			const exampleResolver = exampleModules[`/src/lib/examples/${name}.svelte`];
			if (exampleResolver) {
				const example = (await exampleResolver()) as { default: Component };
				exampleComponents[name] = example.default;
			}
		})
	);

	return {
		...data,
		exampleComponents,
		component: doc.default,
		metadata: doc.metadata,
	};
};
