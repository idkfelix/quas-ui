import type { CopyButtonProps } from "$lib/registry/ui/copy-button/index.js";
import { api } from "./api/index.ts";
import type { WithChildren } from "bits-ui";
import type { HTMLButtonAttributes } from "svelte/elements";

export const root = api.defineAPISchema<
	WithChildren<Omit<CopyButtonProps, keyof HTMLButtonAttributes>>
>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "A reference to the button element.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary", "ghost"],
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: api.defineEnumProp({
			options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
			description: "The size of the button.",
			default: '"icon"',
		}),
		text: api.defineSimpleProp({
			type: "string",
			description: "The text to be copied when the button is clicked.",
			required: true,
		}),
		children: api.defineSimpleProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-slot",
			value: '"button"',
			description: "Slot used to target and apply styles.",
		}),
	],
});

export const copyButton = [root];
