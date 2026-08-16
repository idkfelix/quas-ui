import type { ButtonPropsWithoutHTML } from "$lib/registry/ui/button/index.js";
import * as u from "../utils.ts";

export const root = u.defineAPISchema<ButtonPropsWithoutHTML>({
	title: "Root",
	props: {
		ref: u.defineUnionProp({
			type: "HTMLElement",
			bindable: true,
			options: ["HTMLButtonElement", "HTMLAnchorElement"],
			description: "A reference to the button element.",
		}),
		children: u.defineSimpleProp({
			type: "Snippet",
			description: "The content of the button.",
		}),
		variant: u.defineEnumProp({
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: u.defineEnumProp({
			options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
			description: "The size of the button.",
			default: '"default"',
		}),
		loading: u.defineSimpleProp({
			type: "boolean",
			description: "The loading state of the button.",
			default: false,
			bindable: true,
		}),
		onClickPromise: u.defineFunctionProp({
			definition: "(e: MouseEvent) => Promise<void>",
			description: "A function to await on the button click event.",
		}),
	},
	dataAttrs: [
		u.defineSimpleDataAttr({
			name: "data-button-root",
			description: "Present on the root button element.",
		}),
		u.defineSimpleDataAttr({
			name: "data-slot",
			value: '"button"',
			description: "Slot used to target and apply styles.",
		}),
		u.defineEnumDataAttr({
			name: "data-loading",
			options: ["true", "false"],
			description: "The loading state of the button.",
		}),
	],
});

export const spinner = u.defineAPISchema<object>({
	title: "Spinner",
	dataAttrs: [
		u.defineSimpleDataAttr({
			name: "data-button-spinner",
			description: "Present on the button spinner element.",
		}),
	],
});

export const button = [root, spinner];
