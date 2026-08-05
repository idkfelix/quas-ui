export interface NavLink {
	title: string;
	href: string;
}

export const componentLinks: NavLink[] = [];
const componentMap = import.meta.glob('/src/lib/content/docs/components/*.md', {
	eager: true,
	import: 'metadata',
}) as Record<string, { title: string; description: string }>;

for (const path in componentMap) {
	const meta = componentMap[path];
	componentLinks.push({
		title: meta.title,
		href: `/docs/components/${path.split('/').pop()?.replace('.md', '')}`,
	});
}

export const blockLinks: NavLink[] = [];
const blockMap = import.meta.glob('/src/lib/content/docs/blocks/*.md', {
	eager: true,
	import: 'metadata',
}) as Record<string, { title: string; description: string }>;

for (const path in blockMap) {
	const meta = blockMap[path];
	blockLinks.push({
		title: meta.title,
		href: `/docs/blocks/${path.split('/').pop()?.replace('.md', '')}`,
	});
}