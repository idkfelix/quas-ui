import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { default: content, metadata: meta } = await import(
		/* @vite-ignore */
		`/src/lib/content/docs/${params.slug}.md`
	);
	return { content, meta };
};
