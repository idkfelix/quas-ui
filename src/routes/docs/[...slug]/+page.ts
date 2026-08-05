import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { slug } }) => {
	const { default: content, metadata: meta } = await import(
		/* @vite-ignore */
		`/src/lib/content/docs/${slug}.md`
	);
	return { content, meta, slug };
};
