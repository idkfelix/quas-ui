import { docs, type Doc } from "$content/index.js";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Component } from "svelte";

export const prerender = true;

type DocResolver = () => Promise<{ default: Component; metadata: Doc }>;

export const load: PageLoad = async ({ params: { slug } }) => {
	const modules = import.meta.glob(`/content/**/*.md`);
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.replace("/content/", "").replace(".md", "") === slug) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}

	const doc = await match?.resolver?.();
	const metadata = docs.find((d) => d.path === slug);

	if (!doc || !metadata) {
		error(404, "Could not find the document.");
	}

	return {
		component: doc.default,
		metadata: metadata,
	};
};
