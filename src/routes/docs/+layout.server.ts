export const prerender = true;

import type { LayoutServerLoad } from './$types';
import { navLinks } from '$lib/utils/nav.server';

export const load: LayoutServerLoad = () => ({
  navLinks
})