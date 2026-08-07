export type DocsAssets = {
	previewNames: string[];
	exampleSources: Record<string, string>;
};

const TAG_NAME_RE = /<(ComponentPreview|CodeBlock)\s[^>]*\bname=["']([^"']+)["']/g;

const exampleSourceModules = import.meta.glob("/src/lib/examples/*.svelte", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>;

export function extractDocsAssets(markdown: string): DocsAssets {
	const previewNames = new Set<string>();
	const sourceNames = new Set<string>();

	TAG_NAME_RE.lastIndex = 0;
	for (let m: RegExpExecArray | null; (m = TAG_NAME_RE.exec(markdown)) !== null;) {
		const [, tag, name] = m;
		sourceNames.add(name);
		if (tag === "ComponentPreview") previewNames.add(name);
	}

	const exampleSources: Record<string, string> = {};
	for (const name of sourceNames) {
		const source = exampleSourceModules[`/src/lib/examples/${name}.svelte`];
		if (source) exampleSources[name] = source;
	}

	return { previewNames: [...previewNames], exampleSources };
}
