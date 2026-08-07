import { type Doc } from "$content/index.js";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Component } from "svelte";

export const prerender = true;

const modules = import.meta.glob("/content/**/*.md");
const exampleModules = import.meta.glob("/src/lib/examples/*.svelte");

export const load: PageLoad = async ({ data, params: { slug } }) => {
	const filePath = `/content/${slug}.md`;
	if (!modules[filePath]) error(404, "Not Found");

	const doc = (await modules[filePath]()) as { default: Component; metadata: Doc };

	const exampleComponents: Record<string, Component> = {};
	if (data.previewNames?.length) {
		await Promise.all(
			data.previewNames.map(async (name) => {
				const importFn = exampleModules[`/src/lib/examples/${name}.svelte`];
				if (importFn) {
					const mod = (await importFn()) as { default: Component };
					exampleComponents[name] = mod.default;
				}
			})
		);
	}

	return {
		...data,
		component: doc.default,
		metadata: doc.metadata,
		exampleComponents,
	};
};
