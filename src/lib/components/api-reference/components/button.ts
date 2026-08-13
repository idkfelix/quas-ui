import type { ButtonProps } from "$lib/registry/ui/button/button.svelte";
import * as api from "../api-reference.js";
import type { WithChildren } from "bits-ui";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export const ButtonRootRef = api.defineComponent<
	WithChildren<Omit<ButtonProps, keyof HTMLButtonAttributes | keyof HTMLAnchorAttributes>>
>({
	name: "Button.Root",
	description: "The root button component.",
	props: {
		ref: api.defineProp({
			type: "HTMLElement",
			tooltip: "HTMLButtonElement | HTMLAnchorElement",
			description: "A reference to the button element.",
			defaultValue: "null",
			bindable: true,
		}),
		children: api.defineProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
		variant: api.defineUnionProp({
			type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
			description: "The visual style of the button.",
			defaultValue: '"default"',
		}),
		size: api.defineUnionProp({
			type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
			description: "The size of the button.",
			defaultValue: '"default"',
		}),
		loading: api.defineBooleanProp({
			description: "The loading state of the button.",
			defaultValue: false,
			bindable: true,
		}),
		onClickPromise: api.defineFunctionProp({
			type: "(e: MouseEvent) => Promise<void>",
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
