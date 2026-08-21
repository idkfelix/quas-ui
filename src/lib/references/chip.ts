import type { ChipProps } from "$lib/registry/ui/chip/index.js";
import { api } from "./api/index.ts";
import type { WithChildren } from "bits-ui";
import type { SvelteHTMLElements } from "svelte/elements";

export const root = api.defineAPISchema<
	WithChildren<Omit<ChipProps, keyof SvelteHTMLElements["span"]>>
>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "A reference to the chip element.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary", "ghost"],
			description: "The visual style of the chip.",
			default: '"default"',
		}),
		type: api.defineEnumProp({
			options: ["static", "toggle", "removable"],
			description: "The type of chip component to display.",
			default: '"static"',
		}),
		active: api.defineSimpleProp({
			type: "boolean",
			bindable: true,
			description: "Whether the chip is currently toggled on.",
			default: false,
		}),
		disabled: api.defineSimpleProp({
			type: "boolean",
			default: false,
			description: "Whether the chip is currently disabled.",
		}),
		onRemove: api.defineFunctionProp({
			definition: "() => void",
			description: "A handler function for removing the chip.",
		}),
		children: api.defineSimpleProp({
			type: "Snippet[]",
			description: "The content of the chip.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-slot",
			value: '"chip"',
			description: "Slot used to target and apply styles.",
		}),
	],
});

export const chip = [root];
