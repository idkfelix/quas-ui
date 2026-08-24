import { api } from "./api/index.ts";
import type { SeparatorRootPropsWithoutHTML } from "bits-ui";

export const root = api.defineAPISchema<Omit<SeparatorRootPropsWithoutHTML, "child" | "style">>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLDivElement",
			bindable: true,
			description: "The underlying DOM element being rendered.",
		}),
		orientation: api.defineEnumProp({
			options: ["horizontal", "vertical"],
			description: "The orientation of the separator.",
			default: '"horizontal"',
		}),
		decorative: api.defineSimpleProp({
			type: "boolean",
			description: "Whether the separator should be read by screen readers.",
			default: false,
		}),
		children: api.defineSimpleProp({
			type: "Snippet[]",
			description: "The children content to render.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-separator-root",
			description: "Present on the root element.",
		}),
		api.defineEnumDataAttr({
			name: "data-orientation",
			options: ["horizontal", "vertical"],
			description: "The orientation of the separator.",
		}),
	],
});

export const separator = [root];
