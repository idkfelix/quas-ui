import { api } from "$lib/components/api-reference/index.js";
import type { ButtonProps } from "$lib/registry/ui/button/button.svelte";
import type { WithChildren } from "bits-ui";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

const Root = api.defineComponentRef<
	WithChildren<Omit<ButtonProps, keyof HTMLButtonAttributes | keyof HTMLAnchorAttributes>>
>({
	props: {
		ref: api.defineProp("HTMLElement", {
			tooltip: "HTMLButtonElement | HTMLAnchorElement",
			description: "A reference to the button element.",
			defaultValue: "null",
			bindable: true,
		}),
		children: api.defineProp("Snippet", {
			description: "The content of the button.",
		}),
		variant: api.defineUnionProp("string", {
			tooltip: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
			description: "The visual style of the button.",
			defaultValue: '"default"',
		}),
		size: api.defineUnionProp("string", {
			tooltip: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
			description: "The size of the button.",
			defaultValue: '"default"',
		}),
		loading: api.defineProp("boolean", {
			description: "The loading state of the button.",
			defaultValue: false,
			bindable: true,
		}),
		onClickPromise: api.defineProp("function", {
			tooltip: "(e: MouseEvent) => Promise<void>",
			description: "A function to await on the button click event.",
		}),
	},
	dataAttrs: {
		"data-slot": api.defineDataAttr({
			value: '"button"',
			description: "Slot used to target and apply styles.",
		}),
		"data-button-root": api.defineDataAttr({
			description: "Present on the root button component.",
		}),
		"data-loading": api.defineDataAttr({
			value: "enum",
			description: "The loading state of the button.",
			tooltip: '"true" | "false"',
		}),
	},
});

const Spinner = api.defineComponentRef<object>({
	dataAttrs: {
		"data-slot": api.defineDataAttr({
			value: '"button-spinner"',
			description: "Slot used to target and apply styles.",
		}),
	},
});

export const Reference = api.defineParentRef("Button", {
	Root,
	Spinner,
});
