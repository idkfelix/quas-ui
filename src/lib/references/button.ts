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
		children: api.defineSimpleProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
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

export const spinner = api.defineAPISchema<object>({
	title: "Spinner",
	props: {
		name: api.defineSimpleProp({
			type: "string",
			description: "The svg name attribute.",
		}),
		color: api.defineSimpleProp({
			type: "string",
			description: "The color of the spinner.",
		}),
		stroke: api.defineSimpleProp({
			type: "string",
			description: "The stroke of the spinner.",
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-button-spinner",
			description: "Present on the button spinner element.",
		}),
	],
});

export const button = [root, spinner];
