import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ params }) => {
  const {default: content, metadata: meta} = await import(`$lib/content/${params.slug}.md`);
  return { content, meta };
})