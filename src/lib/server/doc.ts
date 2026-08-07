const TAG_NAME_RE = /<Example\s[^>]*\bname=["']([^"']+)["']/g;

export function extractExamples(markdown: string): string[] {
	const exampleNames = new Set<string>();

	TAG_NAME_RE.lastIndex = 0;
	for (let m: RegExpExecArray | null; (m = TAG_NAME_RE.exec(markdown)) !== null;) {
		const [, name] = m;
		exampleNames.add(name);
	}

	return [...exampleNames];
}
