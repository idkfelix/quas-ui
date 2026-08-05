export const prerender = true;

import { navLinks } from '$lib/utils/nav.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => ({
	navLinks,
});
