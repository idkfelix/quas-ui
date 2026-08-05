export interface NavLink {
	title: string;
	href: string;
}

export const navLinks: NavLink[] = [];

const metadataMap = import.meta.glob('/src/lib/content/docs/components/*.md', {
	eager: true,
	import: 'metadata',
}) as Record<string, { title: string; description: string }>;

for (const path in metadataMap) {
	const meta = metadataMap[path];
	navLinks.push({
		title: meta.title,
		href: `/docs/components/${path.split('/').pop()?.replace('.md', '')}`,
	});
}
