import { docs } from "$content/index.js";
import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string) => {
	return docs.some((doc) => doc.path === (param === "" ? "index" : param));
}) satisfies ParamMatcher;
