import { defineSimpleProp } from "./utils.ts";

export const children = defineSimpleProp({
	type: "Snippet[]",
	description: "The children content to render.",
});
