import type { ChipProps } from "$lib/registry/ui/chip/index.js";
import { api, children } from "./api/index.ts";
import type { WithChildren } from "bits-ui";
import type { SvelteHTMLElements } from "svelte/elements";

export const root = api.defineAPISchema<
	WithChildren<
		Omit<
			ChipProps,
			keyof SvelteHTMLElements["span"] | keyof Omit<SvelteHTMLElements["button"], "type">
		>
	>
>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "The underlying DOM element being rendered.",
		}),
		type: api.defineEnumProp({
			options: ["action", "toggle", "removable"],
			description: "The type of chip component to display.",
			default: '"action"',
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary"],
			description: "The visual style of the chip.",
			default: '"default"',
		}),
		active: api.defineSimpleProp({
			type: "boolean",
			bindable: true,
			description: "Whether the chip is currently toggled on.",
			default: false,
		}),
		onRemove: api.defineFunctionProp({
			definition: "() => void",
			description: "A handler function for removing the chip.",
		}),
		children,
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-slot",
			value: '"chip"',
			description: "Present on the root element.",
		}),
	],
});

export const chip = [root];
