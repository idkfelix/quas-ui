import type { ButtonProps } from "$lib/registry/ui/button/index.js";
import { api } from "./api/index.ts";
import type { WithChildren } from "bits-ui";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export const root = api.defineAPISchema<
	WithChildren<Omit<ButtonProps, keyof HTMLButtonAttributes | keyof HTMLAnchorAttributes>>
>({
	title: "Root",
	props: {
		ref: api.defineUnionProp({
			type: "HTMLElement",
			bindable: true,
			options: ["HTMLButtonElement", "HTMLAnchorElement"],
			description: "A reference to the button element.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: api.defineEnumProp({
			options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
			description: "The size of the button.",
			default: '"default"',
		}),
		loading: api.defineSimpleProp({
			type: "boolean",
			description: "The loading state of the button.",
			default: false,
			bindable: true,
		}),
		onClickPromise: api.defineFunctionProp({
			definition: "(e: MouseEvent) => Promise<void>",
			description: "A function to await on the button click event.",
		}),
		children: api.defineSimpleProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-button-root",
			description: "Present on the root button element.",
		}),
		api.defineSimpleDataAttr({
			name: "data-slot",
			value: '"button"',
			description: "Slot used to target and apply styles.",
		}),
		api.defineEnumDataAttr({
			name: "data-loading",
			options: ["true", "false"],
			description: "The loading state of the button.",
		}),
	],
});

export const button = [root];
