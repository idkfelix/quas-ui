export const prerender = true;

import { componentLinks, blockLinks } from '$lib/utils/nav.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => ({
	componentLinks,
	blockLinks,
});
