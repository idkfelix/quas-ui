import type { ButtonProps } from "$lib/registry/ui/button/button.svelte";
import {
	enumOf,
	unionOf,
	defineComponentAPISchema,
	defineComplexProp,
	defineSimpleProp,
	defineSimpleDataAttr,
	defineEnumDataAttr,
} from "../utils.ts";
import type { WithChildren } from "bits-ui";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export const root = defineComponentAPISchema<
	WithChildren<Omit<ButtonProps, keyof HTMLButtonAttributes | keyof HTMLAnchorAttributes>>
>({
	title: "Root",
	props: {
		ref: defineComplexProp({
			type: "HTMLElement",
			bindable: true,
			definition: unionOf("HTMLButtonElement", "HTMLAnchorElement"),
			description: "A reference to the button element.",
		}),
		children: defineSimpleProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
		variant: defineComplexProp({
			type: "enum",
			definition: enumOf("default", "destructive", "outline", "secondary", "ghost", "link"),
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: defineComplexProp({
			type: "enum",
			definition: enumOf("default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"),
			description: "The size of the button.",
			default: '"default"',
		}),
		loading: defineSimpleProp({
			type: "boolean",
			description: "The loading state of the button.",
			default: false,
			bindable: true,
		}),
		onClickPromise: defineComplexProp({
			type: "function",
			definition: "(e: MouseEvent) => Promise<void>",
			description: "A function to await on the button click event.",
		}),
	},
	dataAttrs: [
		defineSimpleDataAttr({
			name: "data-button-root",
			description: "Present on the root button component.",
		}),
		defineSimpleDataAttr({
			name: "data-slot",
			value: '"button"',
			description: "Slot used to target and apply styles.",
		}),
		defineEnumDataAttr({
			name: "data-loading",
			value: enumOf("true", "false"),
			description: "The loading state of the button.",
		}),
	],
});

export const spinner = defineComponentAPISchema<object>({
	title: "Spinner",
	dataAttrs: [
		defineSimpleDataAttr({
			name: "data-slot",
			value: '"button-spinner"',
			description: "Slot used to target and apply styles.",
		}),
	],
});

export const button = [root, spinner];
