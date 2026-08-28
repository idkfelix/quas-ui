import type { InputProps } from "$lib/registry/ui/input/index.js";
import { api } from "./api/index.ts";

export const root = api.defineAPISchema<Pick<InputProps, "ref" | "value">>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "The underlying DOM element being rendered.",
		}),
		value: api.defineSimpleProp({
			type: "any",
			bindable: true,
			description: "The current value of the input.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-slot",
			value: '"input"',
			description: "Present on the root element.",
		}),
	],
});

export const input = [root];
